// Search engine with fuzzy matching, synonym expansion, and relevance scoring

import type { SearchEntry } from "../data/searchRegistry";
import { SEARCH_REGISTRY, SYNONYMS } from "../data/searchRegistry";

export type SearchResult = SearchEntry & {
    score: number;
    matchedTerms: string[];
};

// Levenshtein distance for fuzzy matching
function levenshteinDistance(str1: string, str2: string): number {
    const m = str1.length;
    const n = str2.length;

    if (m === 0) return n;
    if (n === 0) return m;

    const dp: number[][] = Array(m + 1)
        .fill(null)
        .map(() => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
            dp[i][j] = Math.min(
                dp[i - 1][j] + 1, // deletion
                dp[i][j - 1] + 1, // insertion
                dp[i - 1][j - 1] + cost, // substitution
            );
        }
    }

    return dp[m][n];
}

// Calculate similarity score (0 to 1)
function similarity(str1: string, str2: string): number {
    const maxLen = Math.max(str1.length, str2.length);
    if (maxLen === 0) return 1;
    const distance = levenshteinDistance(str1, str2);
    return 1 - distance / maxLen;
}

// Expand query with synonyms
function expandWithSynonyms(query: string): string[] {
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    const expanded = new Set<string>(terms);

    for (const term of terms) {
        // Check if term matches any synonym key
        for (const [key, synonymList] of Object.entries(SYNONYMS)) {
            if (term === key || synonymList.includes(term)) {
                expanded.add(key);
                synonymList.forEach((syn) => expanded.add(syn));
            }
        }
    }

    return Array.from(expanded);
}

// Score a search item against query terms
function scoreItem(
    item: SearchEntry,
    queryTerms: string[],
    expandedTerms: string[],
): { score: number; matchedTerms: string[] } {
    let score = 0;
    const matchedTerms: string[] = [];

    const titleLower = item.title.toLowerCase();
    const descLower = item.description.toLowerCase();
    const keywordsLower = item.keywords.map((k) => k.toLowerCase());

    // Higher weight for exact phrase matches
    const queryPhrase = queryTerms.join(" ");
    if (titleLower.includes(queryPhrase)) score += 200;
    if (descLower.includes(queryPhrase)) score += 100;

    for (const term of queryTerms) {
        // Boost score for term starts
        if (titleLower.startsWith(term)) score += 50;

        // Title matches
        if (titleLower.includes(term)) {
            score += 100;
            matchedTerms.push(term);
        }

        // Keyword matches
        if (keywordsLower.some((k) => k.includes(term) || term.includes(k))) {
            score += 80;
            matchedTerms.push(term);
        }

        // Description matches
        if (descLower.includes(term)) {
            score += 50;
            matchedTerms.push(term);
        }

        // Fuzzy matches (typo tolerance) - skip for very short terms
        if (term.length > 3) {
            const titleWords = titleLower.split(/\s+/);
            for (const word of titleWords) {
                const sim = similarity(term, word);
                if (sim >= 0.8) {
                    // Strict fuzzy match
                    score += 60 * sim;
                    matchedTerms.push(term);
                    break;
                }
            }
        }
    }

    // Bonus for synonym matches (expanded terms not in original query)
    const synonymsOnly = expandedTerms.filter((t) => !queryTerms.includes(t));
    for (const syn of synonymsOnly) {
        if (
            titleLower.includes(syn) ||
            descLower.includes(syn) ||
            keywordsLower.some((k) => k.includes(syn))
        ) {
            score += 30;
            matchedTerms.push(syn);
        }
    }

    // Apply priority weight (institutional priority)
    score = score * (1 + item.priority / 10);

    return { score, matchedTerms: [...new Set(matchedTerms)] };
}

// Main search function
export function search(
    query: string,
    options: {
        maxResults?: number;
        minScore?: number;
        categories?: string[];
    } = {},
): SearchResult[] {
    const { maxResults = 15, minScore = 20, categories } = options;

    // Handle empty or very short queries
    if (!query || query.trim().length < 2) {
        return [];
    }

    const queryLower = query.toLowerCase().trim();
    const queryTerms = queryLower.split(/\s+/).filter((t) => t.length >= 2);
    const expandedTerms = expandWithSynonyms(queryLower);

    // Score all items
    const results: SearchResult[] = [];

    for (const item of SEARCH_REGISTRY) {
        // Filter by category if specified
        if (
            categories &&
            categories.length > 0 &&
            !categories.includes(item.category)
        ) {
            continue;
        }

        const { score, matchedTerms } = scoreItem(
            item,
            queryTerms,
            expandedTerms,
        );

        if (score >= minScore) {
            results.push({
                ...item,
                score,
                matchedTerms,
            });
        }
    }

    // Sort by score (descending) and limit results
    results.sort((a, b) => b.score - a.score);

    return results.slice(0, maxResults);
}

// Get search suggestions based on partial query
export function getSuggestions(query: string): string[] {
    if (!query || query.length < 2) {
        return [
            "B.Ed program",
            "D.El.Ed program",
            "admission process",
            "fee structure",
            "eligibility criteria",
            "syllabus download",
            "campus facilities",
            "contact details",
        ];
    }

    const results = search(query, { maxResults: 5, minScore: 15 });
    return results.map((r) => r.title);
}

// Highlight matched terms in text
export function highlightMatches(text: string, matchedTerms: string[]): string {
    if (!matchedTerms.length) return text;

    let result = text;
    for (const term of matchedTerms) {
        const regex = new RegExp(`(${term})`, "gi");
        result = result.replace(regex, "**$1**");
    }
    return result;
}

// Group results by category
export function groupByCategory(
    results: SearchResult[],
): Record<string, SearchResult[]> {
    return results.reduce(
        (acc, result) => {
            if (!acc[result.category]) {
                acc[result.category] = [];
            }
            acc[result.category].push(result);
            return acc;
        },
        {} as Record<string, SearchResult[]>,
    );
}

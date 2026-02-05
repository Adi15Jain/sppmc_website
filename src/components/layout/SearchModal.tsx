import { Search, X, ArrowRight, Clock, TrendingUp } from "lucide-react";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
    search,
    type SearchResult,
    getSuggestions,
} from "../../utils/searchEngine";
import {
    CATEGORY_LABELS,
    CATEGORY_COLORS,
    type SearchCategory,
} from "../../data/searchData";

type Props = {
    open: boolean;
    onClose: () => void;
};

const RECENT_SEARCHES_KEY = "sppmc_recent_searches";
const MAX_RECENT_SEARCHES = 5;

export default function SearchModal({ open, onClose }: Props) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<SearchResult[]>([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [recentSearches, setRecentSearches] = useState<string[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const resultsRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    // Load recent searches from localStorage
    useEffect(() => {
        try {
            const stored = localStorage.getItem(RECENT_SEARCHES_KEY);
            if (stored) {
                setRecentSearches(JSON.parse(stored));
            }
        } catch {
            // Ignore localStorage errors
        }
    }, []);

    // Save recent search
    const saveRecentSearch = useCallback((searchQuery: string) => {
        const trimmed = searchQuery.trim();
        if (!trimmed) return;

        setRecentSearches((prev) => {
            const filtered = prev.filter(
                (s) => s.toLowerCase() !== trimmed.toLowerCase(),
            );
            const updated = [trimmed, ...filtered].slice(
                0,
                MAX_RECENT_SEARCHES,
            );
            try {
                localStorage.setItem(
                    RECENT_SEARCHES_KEY,
                    JSON.stringify(updated),
                );
            } catch {
                // Ignore localStorage errors
            }
            return updated;
        });
    }, []);

    // Focus input when modal opens
    useEffect(() => {
        if (open && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
        if (!open) {
            setQuery("");
            setResults([]);
            setSelectedIndex(0);
        }
    }, [open]);

    // Handle escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && open) {
                onClose();
            }
        };
        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, [open, onClose]);

    // Perform search when query changes
    useEffect(() => {
        if (query.trim().length >= 2) {
            const searchResults = search(query);
            setResults(searchResults);
            setSelectedIndex(0);
        } else {
            setResults([]);
            setSelectedIndex(0);
        }
    }, [query]);

    // Scroll selected item into view
    useEffect(() => {
        if (resultsRef.current && results.length > 0) {
            const selectedItem = resultsRef.current.querySelector(
                `[data-index="${selectedIndex}"]`,
            );
            if (selectedItem) {
                selectedItem.scrollIntoView({ block: "nearest" });
            }
        }
    }, [selectedIndex, results.length]);

    // Navigate to result
    const handleNavigate = useCallback(
        (result: SearchResult) => {
            saveRecentSearch(query);
            const path = result.section
                ? `${result.path}#${result.section}`
                : result.path;
            navigate(path);
            onClose();
        },
        [navigate, onClose, query, saveRecentSearch],
    );

    // Handle quick link / suggestion click
    const handleQuickSearch = useCallback(
        (searchTerm: string) => {
            setQuery(searchTerm);
            const searchResults = search(searchTerm);
            if (searchResults.length > 0) {
                saveRecentSearch(searchTerm);
                const result = searchResults[0];
                const path = result.section
                    ? `${result.path}#${result.section}`
                    : result.path;
                navigate(path);
                onClose();
            }
        },
        [navigate, onClose, saveRecentSearch],
    );

    // Keyboard navigation
    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent) => {
            if (results.length === 0) return;

            switch (e.key) {
                case "ArrowDown":
                    e.preventDefault();
                    setSelectedIndex((prev) =>
                        prev < results.length - 1 ? prev + 1 : 0,
                    );
                    break;
                case "ArrowUp":
                    e.preventDefault();
                    setSelectedIndex((prev) =>
                        prev > 0 ? prev - 1 : results.length - 1,
                    );
                    break;
                case "Enter":
                    e.preventDefault();
                    if (results[selectedIndex]) {
                        handleNavigate(results[selectedIndex]);
                    }
                    break;
            }
        },
        [results, selectedIndex, handleNavigate],
    );

    // Get suggestions when no query
    const suggestions = useMemo(() => getSuggestions(""), []);

    // Highlight matching text
    const highlightText = useCallback(
        (text: string, matchedTerms: string[]) => {
            if (!matchedTerms.length || !query) return text;

            const queryTerms = query.toLowerCase().split(/\s+/).filter(Boolean);
            const allTerms = [...new Set([...queryTerms, ...matchedTerms])];

            let result = text;
            for (const term of allTerms) {
                if (term.length < 2) continue;
                const regex = new RegExp(`(${term})`, "gi");
                result = result.replace(
                    regex,
                    '<mark class="bg-accent/30 text-white rounded px-0.5">$1</mark>',
                );
            }
            return result;
        },
        [query],
    );

    return (
        <div
            className={`
                fixed inset-0 z-50
                transition-all duration-400 ease-out
                ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-[var(--color-primary)]/95 backdrop-blur-xl"
                onClick={onClose}
            />

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col">
                {/* Close button */}
                <div className="flex justify-end p-6">
                    <button
                        onClick={onClose}
                        className="
                            group flex items-center gap-2 px-3 py-2 rounded-lg
                            text-white/80 hover:text-white
                            hover:bg-white/10
                            transition-all duration-300
                        "
                        aria-label="Close Search"
                    >
                        <span className="text-xl font-medium">Close</span>
                        <X size={20} />
                    </button>
                </div>

                {/* Search section */}
                <div
                    className={`
                        flex-1 flex flex-col items-center px-6 pt-4 pb-8 overflow-hidden
                        transition-all duration-500 delay-100
                        ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                    `}
                >
                    <div className="w-full max-w-2xl flex flex-col h-full">
                        {/* Search input */}
                        <div className="relative flex-shrink-0">
                            <Search
                                className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50"
                                size={24}
                            />
                            <input
                                ref={inputRef}
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Search for programs, admissions, facilities..."
                                className="
                                    w-full py-5 pl-16 pr-6
                                    bg-white/10 backdrop-blur-sm
                                    border-2 border-white/20 rounded-2xl
                                    text-xl text-white placeholder-white/50
                                    focus:outline-none focus:border-[var(--color-accent)] focus:bg-white/15
                                    transition-all duration-300
                                "
                            />
                        </div>

                        <p className="mt-3 text-sm text-white/50 text-center flex-shrink-0">
                            Press{" "}
                            <kbd className="px-2 py-0.5 bg-white/10 rounded text-white/70">
                                ↑↓
                            </kbd>{" "}
                            to navigate,{" "}
                            <kbd className="px-2 py-0.5 bg-white/10 rounded text-white/70">
                                Enter
                            </kbd>{" "}
                            to select,{" "}
                            <kbd className="px-2 py-0.5 bg-white/10 rounded text-white/70">
                                Esc
                            </kbd>{" "}
                            to close
                        </p>

                        {/* Results area */}
                        <div
                            ref={resultsRef}
                            className="mt-6 flex-1 overflow-y-auto custom-scrollbar"
                        >
                            {/* Search Results */}
                            {query.length >= 2 && results.length > 0 && (
                                <div className="space-y-2">
                                    <p className="text-xs text-white/50 uppercase tracking-wider mb-3">
                                        {results.length} result
                                        {results.length !== 1 ? "s" : ""} found
                                    </p>
                                    {results.map((result, idx) => (
                                        <button
                                            key={result.id}
                                            data-index={idx}
                                            onClick={() =>
                                                handleNavigate(result)
                                            }
                                            className={`
                                                w-full text-left p-4 rounded-xl
                                                transition-all duration-200
                                                ${
                                                    idx === selectedIndex
                                                        ? "bg-white/20 border-[var(--color-accent)]"
                                                        : "bg-white/5 hover:bg-white/10"
                                                }
                                                border border-white/10
                                                group
                                            `}
                                        >
                                            <div className="flex items-start gap-4">
                                                {/* Icon */}
                                                <span className="text-2xl flex-shrink-0">
                                                    {result.icon}
                                                </span>

                                                {/* Content */}
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <h3
                                                            className="font-semibold text-white truncate"
                                                            dangerouslySetInnerHTML={{
                                                                __html: highlightText(
                                                                    result.title,
                                                                    result.matchedTerms,
                                                                ),
                                                            }}
                                                        />
                                                        <span
                                                            className={`
                                                                px-2 py-0.5 text-xs font-medium rounded-full flex-shrink-0
                                                                ${CATEGORY_COLORS[result.category as SearchCategory]}
                                                            `}
                                                        >
                                                            {
                                                                CATEGORY_LABELS[
                                                                    result.category as SearchCategory
                                                                ]
                                                            }
                                                        </span>
                                                    </div>
                                                    <p
                                                        className="text-sm text-white/60 line-clamp-2"
                                                        dangerouslySetInnerHTML={{
                                                            __html: highlightText(
                                                                result.description,
                                                                result.matchedTerms,
                                                            ),
                                                        }}
                                                    />
                                                    <p className="text-xs text-white/40 mt-1 flex items-center gap-1">
                                                        <ArrowRight size={12} />
                                                        {result.path}
                                                        {result.section &&
                                                            `#${result.section}`}
                                                    </p>
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            )}

                            {/* No Results */}
                            {query.length >= 2 && results.length === 0 && (
                                <div className="text-center py-12">
                                    <div className="text-5xl mb-4">🔍</div>
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        No results found
                                    </h3>
                                    <p className="text-white/60 mb-6">
                                        Try different keywords or check spelling
                                    </p>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {suggestions
                                            .slice(0, 4)
                                            .map((suggestion) => (
                                                <button
                                                    key={suggestion}
                                                    onClick={() =>
                                                        handleQuickSearch(
                                                            suggestion,
                                                        )
                                                    }
                                                    className="px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-full text-sm text-white/80 transition-colors"
                                                >
                                                    {suggestion}
                                                </button>
                                            ))}
                                    </div>
                                </div>
                            )}

                            {/* Default State - Recent & Suggestions */}
                            {query.length < 2 && (
                                <div className="space-y-8">
                                    {/* Recent Searches */}
                                    {recentSearches.length > 0 && (
                                        <div>
                                            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-white/60 mb-4 flex items-center gap-2">
                                                <Clock size={14} />
                                                Recent Searches
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {recentSearches.map(
                                                    (recent) => (
                                                        <button
                                                            key={recent}
                                                            onClick={() =>
                                                                handleQuickSearch(
                                                                    recent,
                                                                )
                                                            }
                                                            className="
                                                            px-4 py-2 bg-white/5 hover:bg-white/15
                                                            rounded-lg border border-white/10 hover:border-white/30
                                                            text-sm text-white/80 hover:text-white
                                                            transition-all duration-300
                                                        "
                                                        >
                                                            {recent}
                                                        </button>
                                                    ),
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {/* Popular Searches */}
                                    <div>
                                        <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-white/60 mb-4 flex items-center gap-2">
                                            <TrendingUp size={14} />
                                            Popular Searches
                                        </h3>
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                            {suggestions.map(
                                                (suggestion, idx) => (
                                                    <button
                                                        key={suggestion}
                                                        onClick={() =>
                                                            handleQuickSearch(
                                                                suggestion,
                                                            )
                                                        }
                                                        className="
                                                        group px-4 py-3 bg-white/5 hover:bg-white/15
                                                        rounded-xl border border-white/10 hover:border-[var(--color-accent)]/50
                                                        text-left transition-all duration-300
                                                    "
                                                        style={{
                                                            animationDelay: `${idx * 50}ms`,
                                                        }}
                                                    >
                                                        <span className="text-sm font-medium text-white/85 group-hover:text-white">
                                                            {suggestion}
                                                        </span>
                                                    </button>
                                                ),
                                            )}
                                        </div>
                                    </div>

                                    {/* Quick Categories */}
                                    <div>
                                        <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-white/60 mb-4">
                                            Browse by Category
                                        </h3>
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                            {[
                                                {
                                                    icon: "📋",
                                                    label: "Admissions",
                                                    query: "admission",
                                                },
                                                {
                                                    icon: "🎓",
                                                    label: "Programs",
                                                    query: "program",
                                                },
                                                {
                                                    icon: "📄",
                                                    label: "Disclosures",
                                                    query: "mandatory disclosures",
                                                },
                                                {
                                                    icon: "🏫",
                                                    label: "Facilities",
                                                    query: "campus facilities",
                                                },
                                            ].map((cat, idx) => (
                                                <button
                                                    key={cat.label}
                                                    onClick={() =>
                                                        handleQuickSearch(
                                                            cat.query,
                                                        )
                                                    }
                                                    className="
                                                        group flex items-center gap-3 px-4 py-3
                                                        bg-white/5 hover:bg-white/15 rounded-xl
                                                        border border-white/10 hover:border-[var(--color-accent)]/50
                                                        transition-all duration-300
                                                    "
                                                    style={{
                                                        animationDelay: `${idx * 50}ms`,
                                                    }}
                                                >
                                                    <span className="text-xl">
                                                        {cat.icon}
                                                    </span>
                                                    <span className="text-sm font-medium text-white/85 group-hover:text-white">
                                                        {cat.label}
                                                    </span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

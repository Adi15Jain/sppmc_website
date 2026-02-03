import { Search, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
    open: boolean;
    onClose: () => void;
};

const QUICK_LINKS = [
    { label: "Admissions", path: "/admissions", icon: "📋" },
    { label: "B.Ed Program", path: "/academics", icon: "🎓" },
    { label: "D.El.Ed Program", path: "/academics", icon: "📖" },
    { label: "Contact Us", path: "/contact", icon: "📞" },
    { label: "About College", path: "/about", icon: "🏛️" },
    { label: "Campus Life", path: "/student-life", icon: "🎭" },
];

const SEARCH_SUGGESTIONS = [
    { query: "admission process", path: "/admissions" },
    { query: "fee structure", path: "/admissions" },
    { query: "b.ed eligibility", path: "/academics" },
    { query: "principal message", path: "/about" },
    { query: "campus facilities", path: "/student-life" },
    { query: "contact details", path: "/contact" },
    { query: "downloads", path: "/downloads" },
    { query: "gallery", path: "/gallery" },
];

export default function SearchModal({ open, onClose }: Props) {
    const [query, setQuery] = useState("");
    const [filteredSuggestions, setFilteredSuggestions] =
        useState(SEARCH_SUGGESTIONS);
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (open && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
        if (!open) {
            setQuery("");
        }
    }, [open]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && open) {
                onClose();
            }
        };
        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, [open, onClose]);

    useEffect(() => {
        if (query.trim()) {
            const filtered = SEARCH_SUGGESTIONS.filter((s) =>
                s.query.toLowerCase().includes(query.toLowerCase()),
            );
            setFilteredSuggestions(filtered);
        } else {
            setFilteredSuggestions(SEARCH_SUGGESTIONS);
        }
    }, [query]);

    const handleSearch = (path: string) => {
        navigate(path);
        onClose();
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (filteredSuggestions.length > 0) {
            handleSearch(filteredSuggestions[0].path);
        }
    };

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
                        className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                        aria-label="Close search"
                    >
                        <span className="text-sm font-medium">Close</span>
                        <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white/60 group-hover:bg-white/10 transition-all">
                            <X size={20} />
                        </div>
                    </button>
                </div>

                {/* Search section */}
                <div
                    className={`
                        flex-1 flex flex-col items-center justify-center px-6
                        transition-all duration-500 delay-100
                        ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                    `}
                >
                    <div className="w-full max-w-2xl">
                        {/* Search input */}
                        <form onSubmit={handleSubmit} className="relative">
                            <div className="relative">
                                <Search
                                    className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50"
                                    size={24}
                                />
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Search for admissions, programs, contact..."
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
                            <p className="mt-3 text-sm text-white/50 text-center">
                                Press{" "}
                                <kbd className="px-2 py-0.5 bg-white/10 rounded text-white/70">
                                    Enter
                                </kbd>{" "}
                                to search or{" "}
                                <kbd className="px-2 py-0.5 bg-white/10 rounded text-white/70">
                                    Esc
                                </kbd>{" "}
                                to close
                            </p>
                        </form>

                        {/* Suggestions */}
                        {query && filteredSuggestions.length > 0 && (
                            <div className="mt-6 bg-white/10 rounded-xl border border-white/20 overflow-hidden">
                                {filteredSuggestions.map((suggestion, idx) => (
                                    <button
                                        key={suggestion.query}
                                        onClick={() =>
                                            handleSearch(suggestion.path)
                                        }
                                        className={`
                                            w-full px-6 py-4 text-left flex items-center gap-3
                                            text-white hover:bg-white/10 transition-colors
                                            ${idx !== filteredSuggestions.length - 1 ? "border-b border-white/10" : ""}
                                        `}
                                    >
                                        <Search
                                            size={16}
                                            className="text-white/50"
                                        />
                                        <span>{suggestion.query}</span>
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Quick links */}
                        <div className="mt-12">
                            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-white/60 mb-6 text-center">
                                Quick Links
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {QUICK_LINKS.map((link, idx) => (
                                    <button
                                        key={link.label}
                                        onClick={() => handleSearch(link.path)}
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
                                            {link.icon}
                                        </span>
                                        <span className="text-sm font-medium text-white/85 group-hover:text-white">
                                            {link.label}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

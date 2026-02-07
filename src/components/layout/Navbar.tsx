import { Search, Menu } from "lucide-react";
import Container from "./Container";

type NavbarProps = {
    scrolled?: boolean;
    onMenuOpen: () => void;
    onSearchOpen: () => void;
};

export default function Navbar({
    scrolled = false,
    onMenuOpen,
    onSearchOpen,
}: NavbarProps) {
    return (
        <nav
            className={`
                fixed top-0 left-0 right-0 z-50
                transition-all duration-500 ease-out
                ${
                    scrolled
                        ? "py-2 bg-gradient-to-r from-accent via-orange-500 to-yellow-400 backdrop-blur-xl border-b border-black/5 shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
                        : "py-4 bg-white/10 backdrop-blur-md border-b border-white/10"
                }
            `}
        >
            <Container>
                <div className="flex items-center justify-between">
                    {/* Brand */}
                    <div className="flex items-center gap-4">
                        <a href="/" className="flex items-center gap-3 group">
                            <div className="relative">
                                <img
                                    src="/logo.png"
                                    alt="College Logo"
                                    className={`
                                        object-contain transition-all duration-500 ease-out drop-shadow-[0_2px_12px_rgba(255,255,255,0.4)]
                                        ${scrolled ? "h-16 w-16" : "h-20 w-20"}
                                        group-hover:scale-105
                                    `}
                                />
                                {!scrolled && (
                                    <div className="absolute inset-0 bg-white/20 blur-xl rounded-full -z-10 animate-pulse-glow" />
                                )}
                            </div>
                            <span
                                className={`
                                    font-bold tracking-tight transition-all duration-500
                                    ${scrolled ? "text-lg text-white" : "text-xl text-white"}
                                `}
                            >
                                <span className="hidden md:inline text-2xl">
                                    Shri Prem Prakash Memorial College
                                </span>
                                <span className="md:hidden">SPPMC</span>
                            </span>
                        </a>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        {/* Search Button */}
                        <button
                            onClick={onSearchOpen}
                            className={`
                                group flex items-center justify-center
                                w-11 h-11 rounded-full
                                border transition-all duration-500
                                ${
                                    scrolled
                                        ? "border-black/5 text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/5"
                                        : "border-white/20 text-white hover:border-white hover:bg-white/10"
                                }
                            `}
                            aria-label="Search"
                        >
                            <Search
                                size={22}
                                className="transition-transform group-hover:scale-110"
                            />
                        </button>

                        {/* Menu Button */}
                        <button
                            onClick={onMenuOpen}
                            className={`
                                flex items-center gap-2 px-5 py-2.5 rounded-full
                                text-sm font-bold tracking-wide uppercase
                                transition-all duration-500
                                shadow-sm group
                                ${
                                    scrolled
                                        ? "text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] hover:shadow-lg hover:-translate-y-0.5"
                                        : "text-[var(--color-primary)] bg-white hover:bg-white/90 hover:shadow-[0_8px_20px_rgba(255,255,255,0.3)] hover:-translate-y-0.5"
                                }
                            `}
                        >
                            <span>Menu</span>
                            <div className="w-6 h-6 flex items-center justify-center">
                                <Menu
                                    size={20}
                                    className="transition-transform duration-500 group-hover:rotate-180"
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </Container>
        </nav>
    );
}

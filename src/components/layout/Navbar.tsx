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
                relative z-40
                transition-all duration-300 ease-out
                ${
                    scrolled
                        ? "bg-white border-b border-[var(--color-border)] shadow-sm"
                        : "bg-white/10 backdrop-blur-md border-b border-white/10"
                }
            `}
        >
            <Container>
                <div className="flex items-center justify-between py-3">
                    {/* Brand */}
                    <div className="flex items-center gap-3">
                        <a href="/">
                            <img
                                src="/logo.png"
                                alt="College Logo"
                                className="h-15 w-15 object-contain"
                            />
                        </a>
                        <a href="/">
                            <span
                                className={`
                                    text-lg font-semibold transition-colors duration-300
                                    ${scrolled ? "text-[var(--color-text-primary)]" : "text-white"}
                                `}
                            >
                                Shri Prem Prakash Memorial College
                            </span>
                        </a>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        {/* Search Button */}
                        <button
                            onClick={onSearchOpen}
                            className={`
                                group flex items-center justify-center
                                w-10 h-10 rounded-full
                                border transition-all duration-300
                                ${
                                    scrolled
                                        ? "border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/5"
                                        : "border-white/30 text-white hover:border-white hover:bg-white/10"
                                }
                            `}
                            aria-label="Search"
                        >
                            <Search size={25} />
                        </button>

                        {/* Menu Button */}
                        <button
                            onClick={onMenuOpen}
                            className={`
                                flex items-center gap-2 px-4 py-2 rounded-md
                                text-sm font-semibold
                                transition-all duration-300
                                group
                                ${
                                    scrolled
                                        ? "text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)]"
                                        : "text-[var(--color-primary)] bg-white hover:bg-white/90"
                                }
                            `}
                        >
                            <span>Menu</span>
                            <Menu
                                size={25}
                                className="transition-transform group-hover:rotate-90"
                            />
                        </button>
                    </div>
                </div>
            </Container>
        </nav>
    );
}

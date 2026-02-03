import { Search, Menu } from "lucide-react";
import Container from "./Container";

type NavbarProps = {
    scrolled?: boolean;
    onMenuOpen: () => void;
    onSearchOpen: () => void;
};

export default function Navbar({ onMenuOpen, onSearchOpen }: NavbarProps) {
    return (
        <nav
            className="
                relative z-40
                bg-white
                border-b border-[var(--color-border)]
                transition-all duration-300 ease-out
            "
        >
            <Container>
                <div className="flex items-center justify-between py-4">
                    {/* Brand */}
                    <div className="flex items-center gap-3">
                        <img
                            src="/logo.png"
                            alt="College Logo"
                            className="h-12 w-12 object-contain"
                        />
                        <span className="text-lg font-semibold text-[var(--color-text-primary)]">
                            Shri Prem Prakash Memorial College
                        </span>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        {/* Search Button */}
                        <button
                            onClick={onSearchOpen}
                            className="
                                group flex items-center justify-center
                                w-10 h-10 rounded-full
                                border border-[var(--color-border)]
                                text-[var(--color-text-secondary)]
                                hover:border-[var(--color-accent)]
                                hover:text-[var(--color-accent)]
                                hover:bg-[var(--color-accent)]/5
                                transition-all duration-300
                            "
                            aria-label="Search"
                        >
                            <Search size={18} />
                        </button>

                        {/* Menu Button */}
                        <button
                            onClick={onMenuOpen}
                            className="
                                flex items-center gap-2 px-4 py-2 rounded-md
                                text-sm font-semibold
                                text-white
                                bg-[var(--color-primary)]
                                hover:bg-[var(--color-primary-hover)]
                                transition-all duration-300
                                group
                            "
                        >
                            <span>Menu</span>
                            <Menu
                                size={18}
                                className="transition-transform group-hover:rotate-90"
                            />
                        </button>
                    </div>
                </div>
            </Container>
        </nav>
    );
}

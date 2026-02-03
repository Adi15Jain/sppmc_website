import Container from "./Container";

type NavbarProps = {
    scrolled?: boolean;
    onMenuOpen: () => void;
};

export default function Navbar({ onMenuOpen }: NavbarProps) {
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

                    {/* Menu Button */}
                    <button
                        onClick={onMenuOpen}
                        className="
                            flex items-center gap-2 px-4 py-2 rounded-md
                            text-sm font-semibold
                            text-[var(--color-primary)]
                            border border-[var(--color-primary)]
                            hover:bg-[var(--color-primary)]
                            hover:text-white
                            transition-all duration-300
                        "
                    >
                        Menu
                    </button>
                </div>
            </Container>
        </nav>
    );
}

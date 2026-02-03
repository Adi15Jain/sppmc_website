import { useState } from "react";
import { Menu } from "lucide-react";
import Container from "./Container";
import FullscreenMenu from "./FullscreenMenu";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="border-b border-[var(--color-border)] bg-white">
                <Container>
                    <div className="flex items-center justify-between py-4">
                        {/* Brand */}
                        <div className="flex items-center gap-3">
                            <a href="/">
                                <img
                                    src="/logo.png"
                                    alt="College Logo"
                                    className="h-12 w-12 object-contain"
                                />
                            </a>
                            <a href="/">
                                <span className="text-lg font-semibold text-[var(--color-text-primary)]">
                                    Shri Prem Prakash Memorial College
                                </span>
                            </a>
                        </div>

                        {/* Menu Button */}
                        <button
                            onClick={() => setOpen(true)}
                            className="flex items-center gap-2
                text-sm font-semibold
                text-[var(--color-primary)]
                border border-[var(--color-primary)]
                px-4 py-2 rounded-md
                hover:bg-[var(--color-primary)]
                hover:text-white
                transition-colors
              "
                        >
                            <Menu size={18} />
                            Menu
                        </button>
                    </div>
                </Container>
            </header>

            {/* Fullscreen Menu */}
            <FullscreenMenu open={open} onClose={() => setOpen(false)} />
        </>
    );
}

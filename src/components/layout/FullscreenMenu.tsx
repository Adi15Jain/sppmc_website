import { X } from "lucide-react";
import { NavLink } from "react-router-dom";
import Container from "./Container";

type Props = {
    open: boolean;
    onClose: () => void;
};

const PRIMARY_LINKS = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Academics", to: "/academics" },
    { label: "Admissions", to: "/admissions" },
    { label: "Student Life", to: "/student-life" },
    { label: "Gallery", to: "/gallery" },
    { label: "Downloads", to: "/downloads" },
    { label: "Contact", to: "/contact" },
];

const EXTERNAL_LINKS = [
    { label: "TMU University", href: "https://www.tmu.ac.in/" },
    { label: "TMU Hospital", href: "https://www.tmuhospital.com/" },
    { label: "Student Portal", href: "#" },
    { label: "Faculty Login", href: "#" },
    { label: "Examination Portal", href: "#" },
];

export default function FullscreenMenu({ open, onClose }: Props) {
    return (
        <div
            className={`
                fixed inset-0 z-50
                transition-all duration-500 ease-out
                ${
                    open
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6 pointer-events-none"
                }
            `}
        >
            {/* Background */}
            <div className="absolute inset-0">
                <img
                    src="/images/campus-2.jpg"
                    alt="Campus background"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[var(--color-primary)]/80" />
            </div>

            <div className="relative z-10 flex h-full flex-col">
                {/* Top bar */}
                <div className="border-b border-white/30">
                    <Container>
                        <div className="flex items-center justify-between py-4">
                            <span className="text-base font-semibold tracking-wide text-white">
                                Navigation
                            </span>
                            <button
                                onClick={onClose}
                                className="hover:text-[var(--color-accent)] transition-colors"
                                aria-label="Close menu"
                            >
                                <X size={28} />
                            </button>
                        </div>
                    </Container>
                </div>

                {/* Content */}
                <Container>
                    <div className="grid flex-1 items-center gap-16 py-16 md:grid-cols-2">
                        {/* Primary navigation */}
                        <div
                            className={`
                                transition-all duration-500 delay-150
                                ${
                                    open
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-6"
                                }
                            `}
                        >
                            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-white/80">
                                Main Menu
                            </h3>

                            <ul className="mt-8 space-y-5">
                                {PRIMARY_LINKS.map((link) => (
                                    <li key={link.label}>
                                        <NavLink
                                            to={link.to}
                                            onClick={onClose}
                                            className={({ isActive }) =>
                                                `
                                                    block
                                                    text-2xl md:text-3xl
                                                    font-bold
                                                    leading-snug
                                                    transition-colors
                                                    ${
                                                        isActive
                                                            ? "text-[var(--color-accent)]"
                                                            : "text-white hover:text-[var(--color-accent)]"
                                                    }
                                                `
                                            }
                                        >
                                            {link.label}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* External links */}
                        <div
                            className={`
                                transition-all duration-500 delay-300
                                ${
                                    open
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-6"
                                }
                            `}
                        >
                            <h3 className="text-lg font-bold uppercase tracking-[0.25em] text-white/80">
                                Other Portals
                            </h3>

                            <ul className="mt-6 space-y-4 font-semibold">
                                {EXTERNAL_LINKS.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="
                                                text-lg md:text-xl
                                                text-white/85
                                                hover:text-[var(--color-accent)]
                                                transition-colors
                                            "
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

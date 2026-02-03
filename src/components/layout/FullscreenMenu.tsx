import { X, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Container from "./Container";

type Props = {
    open: boolean;
    onClose: () => void;
};

type SubLink = {
    label: string;
    to: string;
};

type PrimaryLink = {
    label: string;
    to: string;
    sublinks?: SubLink[];
};

const PRIMARY_LINKS: PrimaryLink[] = [
    { label: "Home", to: "/" },
    {
        label: "About",
        to: "/about",
        sublinks: [
            { label: "Our Story", to: "/about#story" },
            { label: "Vision & Mission", to: "/about#vision" },
            { label: "Principal's Message", to: "/about#principal" },
            { label: "Faculty", to: "/about#faculty" },
        ],
    },
    {
        label: "Academics",
        to: "/academics",
        sublinks: [
            { label: "B.Ed Program", to: "/academics#bed" },
            { label: "D.El.Ed Program", to: "/academics#deled" },
            { label: "Curriculum", to: "/academics#curriculum" },
        ],
    },
    {
        label: "Admissions",
        to: "/admissions",
        sublinks: [
            { label: "Admission Process", to: "/admissions#process" },
            { label: "Eligibility Criteria", to: "/admissions#eligibility" },
            { label: "Fee Structure", to: "/admissions#fees" },
            { label: "Apply Now", to: "/admissions#apply" },
        ],
    },
    {
        label: "Student Life",
        to: "/student-life",
        sublinks: [
            { label: "Campus Facilities", to: "/student-life#campus" },
            { label: "Activities & Events", to: "/student-life#activities" },
            { label: "Placements", to: "/student-life#placements" },
        ],
    },
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
    const [expandedItems, setExpandedItems] = useState<string[]>([]);

    const toggleExpand = (label: string) => {
        setExpandedItems((prev) =>
            prev.includes(label)
                ? prev.filter((item) => item !== label)
                : [...prev, label],
        );
    };

    const handleLinkClick = () => {
        setExpandedItems([]);
        onClose();
    };

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
                <div className="absolute inset-0 bg-[var(--color-primary)]/90 backdrop-blur-sm" />
            </div>

            <div className="relative z-10 flex h-full flex-col overflow-y-auto">
                {/* Top bar */}
                <div className="border-b border-white/20 sticky top-0 bg-[var(--color-primary)]/80 backdrop-blur-md z-10">
                    <Container>
                        <div className="flex items-center justify-between py-4">
                            <span className="text-base font-semibold tracking-wide text-white">
                                Navigation
                            </span>
                            <button
                                onClick={onClose}
                                className="
                                    group flex items-center gap-2 px-3 py-2 rounded-lg
                                    text-white/80 hover:text-white
                                    hover:bg-white/10
                                    transition-all duration-300
                                "
                                aria-label="Close menu"
                            >
                                <span className="text-sm font-medium">
                                    Close
                                </span>
                                <X size={20} />
                            </button>
                        </div>
                    </Container>
                </div>

                {/* Content */}
                <Container>
                    <div className="grid items-start gap-16 py-12 md:grid-cols-2">
                        {/* Primary navigation */}
                        <div
                            className={`
                                transition-all duration-500 delay-100
                                ${
                                    open
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-6"
                                }
                            `}
                        >
                            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-white/60 mb-8">
                                Main Menu
                            </h3>

                            <ul className="space-y-2">
                                {PRIMARY_LINKS.map((link, idx) => (
                                    <li
                                        key={link.label}
                                        className="animate-fade-up"
                                        style={{
                                            animationDelay: `${100 + idx * 50}ms`,
                                            animationFillMode: "both",
                                        }}
                                    >
                                        {link.sublinks ? (
                                            <div>
                                                {/* Parent with sublinks */}
                                                <button
                                                    onClick={() =>
                                                        toggleExpand(link.label)
                                                    }
                                                    className="
                                                        w-full flex items-center justify-between
                                                        py-3 px-4 -mx-4 rounded-lg
                                                        text-2xl md:text-3xl font-bold text-white
                                                        hover:bg-white/10
                                                        transition-all duration-300
                                                        group
                                                    "
                                                >
                                                    <span className="group-hover:text-[var(--color-accent)] transition-colors">
                                                        {link.label}
                                                    </span>
                                                    <ChevronDown
                                                        size={24}
                                                        className={`
                                                            text-white/60 group-hover:text-[var(--color-accent)]
                                                            transition-transform duration-300
                                                            ${expandedItems.includes(link.label) ? "rotate-180" : ""}
                                                        `}
                                                    />
                                                </button>

                                                {/* Sublinks */}
                                                <div
                                                    className={`
                                                        overflow-hidden transition-all duration-300 ease-out
                                                        ${
                                                            expandedItems.includes(
                                                                link.label,
                                                            )
                                                                ? "max-h-96 opacity-100"
                                                                : "max-h-0 opacity-0"
                                                        }
                                                    `}
                                                >
                                                    <ul className="pl-4 mt-2 mb-4 space-y-1 border-l-2 border-[var(--color-accent)]/30">
                                                        {link.sublinks.map(
                                                            (sublink) => (
                                                                <li
                                                                    key={
                                                                        sublink.label
                                                                    }
                                                                >
                                                                    <NavLink
                                                                        to={
                                                                            sublink.to
                                                                        }
                                                                        onClick={
                                                                            handleLinkClick
                                                                        }
                                                                        className="
                                                                        block py-2 px-4 rounded-lg
                                                                        text-lg text-white/80
                                                                        hover:text-[var(--color-accent)]
                                                                        hover:bg-white/5
                                                                        transition-all duration-200
                                                                    "
                                                                    >
                                                                        {
                                                                            sublink.label
                                                                        }
                                                                    </NavLink>
                                                                </li>
                                                            ),
                                                        )}
                                                    </ul>
                                                </div>
                                            </div>
                                        ) : (
                                            /* Simple link without sublinks */
                                            <NavLink
                                                to={link.to}
                                                onClick={handleLinkClick}
                                                className={({ isActive }) =>
                                                    `
                                                    block py-3 px-4 -mx-4 rounded-lg
                                                    text-2xl md:text-3xl font-bold
                                                    hover:bg-white/10
                                                    transition-all duration-300
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
                                        )}
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
                            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-white/60 mb-8">
                                Other Portals
                            </h3>

                            <ul className="space-y-3">
                                {EXTERNAL_LINKS.map((link, idx) => (
                                    <li
                                        key={link.label}
                                        className="animate-fade-up"
                                        style={{
                                            animationDelay: `${300 + idx * 50}ms`,
                                            animationFillMode: "both",
                                        }}
                                    >
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="
                                                group flex items-center gap-3
                                                py-3 px-4 -mx-4 rounded-lg
                                                text-lg font-medium text-white/80
                                                hover:text-[var(--color-accent)]
                                                hover:bg-white/5
                                                transition-all duration-300
                                            "
                                        >
                                            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]/50 group-hover:bg-[var(--color-accent)] transition-colors" />
                                            {link.label}
                                            <span className="ml-auto text-sm text-white/40 group-hover:text-white/60">
                                                ↗
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            {/* Contact info */}
                            <div className="mt-12 p-6 rounded-xl bg-white/5 border border-white/10">
                                <h4 className="text-sm font-semibold text-white/80 mb-4">
                                    Quick Contact
                                </h4>
                                <div className="space-y-2 text-sm text-white/60">
                                    <p>📞 +91-XXXXXXXXXX</p>
                                    <p>✉️ info@sppmc.edu.in</p>
                                    <p>📍 Moradabad, Uttar Pradesh</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

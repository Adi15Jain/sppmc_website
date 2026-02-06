import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Container from "./Container";

export default function Footer() {
    const footerRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    // Intersection Observer for scroll-triggered animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 },
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // GSAP animations when visible
    useEffect(() => {
        if (!isVisible || !footerRef.current) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            // Logo and brand section
            tl.from(".footer-brand", {
                opacity: 0,
                y: 30,
                duration: 0.7,
            });

            // Footer columns with stagger
            tl.from(
                ".footer-column",
                {
                    opacity: 0,
                    y: 30,
                    stagger: 0.15,
                    duration: 0.6,
                },
                "-=0.4",
            );

            // Bottom bar
            tl.from(
                ".footer-bottom",
                {
                    opacity: 0,
                    y: 20,
                    duration: 0.5,
                },
                "-=0.2",
            );
        }, footerRef);

        return () => ctx.revert();
    }, [isVisible]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer ref={footerRef} className="relative overflow-hidden">
            {/* Gradient background */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(135deg, #001055 0%, #0a1a5c 40%, #001866 70%, #0d1f6c 100%)",
                }}
            />

            {/* Decorative gradient accents */}
            <div
                className="absolute top-0 left-0 w-[500px] h-[500px] opacity-15"
                style={{
                    background:
                        "radial-gradient(circle, rgba(255, 121, 0, 0.4) 0%, transparent 60%)",
                    filter: "blur(60px)",
                }}
            />
            <div
                className="absolute bottom-0 right-0 w-[400px] h-[400px] opacity-10"
                style={{
                    background:
                        "radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 60%)",
                    filter: "blur(50px)",
                }}
            />
            <div
                className="absolute top-1/2 right-1/4 w-[300px] h-[300px] opacity-10"
                style={{
                    background:
                        "radial-gradient(circle, rgba(255, 121, 0, 0.2) 0%, transparent 60%)",
                    filter: "blur(40px)",
                }}
            />

            {/* Subtle grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: "50px 50px",
                }}
            />

            {/* Top decorative line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

            <Container>
                <div className="relative z-10 pt-16 pb-8">
                    {/* Main footer content */}
                    <div className="grid gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-4">
                        {/* Brand Column */}
                        <div className="footer-brand lg:col-span-1">
                            {/* Logo with glow */}
                            <a href="/" className="inline-block group">
                                <div className="relative">
                                    <img
                                        src="/logo.png"
                                        alt="Shri Prem Prakash Memorial College"
                                        className="h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                    />
                                    {/* Logo glow effect */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        style={{
                                            background:
                                                "radial-gradient(circle at center, rgba(255, 121, 0, 0.15) 0%, transparent 70%)",
                                            filter: "blur(20px)",
                                            transform: "scale(1.2)",
                                        }}
                                    />
                                </div>
                            </a>

                            <h3 className="mt-4 text-lg font-semibold text-white flex items-center gap-2">
                                <span className="w-1 h-5 bg-accent rounded-full" />
                                SPPMC
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-slate-300/80 max-w-xs">
                                A teacher education institution committed to
                                academic excellence, ethical values, and
                                professional development under Teerthanker
                                Mahaveer University.
                            </p>

                            {/* Social Links */}
                            <div className="mt-5 flex items-center gap-3">
                                {[
                                    {
                                        icon: (
                                            <svg
                                                className="w-4 h-4"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                            </svg>
                                        ),
                                        href: "https://x.com/Tmumbd",
                                        label: "Twitter",
                                    },
                                    {
                                        icon: (
                                            <svg
                                                className="w-4 h-4"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                                            </svg>
                                        ),
                                        href: "https://www.facebook.com/tmumbd/",
                                        label: "Facebook",
                                    },
                                    {
                                        icon: (
                                            <svg
                                                className="w-4 h-4"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                            </svg>
                                        ),
                                        href: "https://www.instagram.com/tmu_mbd/",
                                        label: "Instagram",
                                    },
                                    {
                                        icon: (
                                            <svg
                                                className="w-4 h-4"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                            </svg>
                                        ),
                                        href: "https://www.youtube.com/c/TeerthankerMahaveerUniversity",
                                        label: "YouTube",
                                    },
                                ].map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="w-9 h-9 rounded-full flex items-center justify-center text-slate-300 transition-all duration-300 hover:text-white hover:bg-accent/20 hover:scale-110"
                                        style={{
                                            background:
                                                "rgba(255,255,255,0.05)",
                                            border: "1px solid rgba(255,255,255,0.1)",
                                        }}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-column">
                            <h4 className="text-white font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
                                <span className="w-6 h-px bg-accent" />
                                Quick Links
                            </h4>
                            <ul className="mt-5 space-y-3 text-sm">
                                {[
                                    { label: "Home", href: "/" },
                                    { label: "About Us", href: "/about" },
                                    { label: "Academics", href: "/academics" },
                                    {
                                        label: "Admissions",
                                        href: "/admissions",
                                    },
                                    { label: "Gallery", href: "/gallery" },
                                    { label: "Contact", href: "/contact" },
                                ].map((item) => (
                                    <li key={item.label}>
                                        <a
                                            href={item.href}
                                            className="text-slate-300/80 transition-all duration-300 hover:text-white inline-flex items-center gap-2 group"
                                        >
                                            <span className="w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-3" />
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Programs */}
                        <div className="footer-column">
                            <h4 className="text-white font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
                                <span className="w-6 h-px bg-accent" />
                                Programs
                            </h4>
                            <ul className="mt-5 space-y-3 text-sm">
                                <li className="text-slate-300/80 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-accent/50 rounded-full" />
                                    <span>
                                        <strong className="text-white">
                                            B.Ed
                                        </strong>{" "}
                                        – Bachelor of Education
                                    </span>
                                </li>
                                <li className="text-slate-300/80 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-accent/50 rounded-full" />
                                    <span>
                                        <strong className="text-white">
                                            D.El.Ed
                                        </strong>{" "}
                                        – Diploma in Elementary Education
                                    </span>
                                </li>
                            </ul>

                            <h4 className="mt-8 text-white font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
                                <span className="w-6 h-px bg-accent" />
                                Resources
                            </h4>
                            <ul className="mt-5 space-y-3 text-sm">
                                {[
                                    { label: "Student Portal", href: "#" },
                                    { label: "Library", href: "#" },
                                    {
                                        label: "Mandatory Disclosures",
                                        href: "/mandatory-disclosures",
                                    },
                                ].map((item) => (
                                    <li key={item.label}>
                                        <a
                                            href={item.href}
                                            className="text-slate-300/80 transition-all duration-300 hover:text-white inline-flex items-center gap-2 group"
                                        >
                                            <span className="w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-3" />
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="footer-column">
                            <h4 className="text-white font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
                                <span className="w-6 h-px bg-accent" />
                                Contact Us
                            </h4>
                            <div className="mt-5 space-y-4 text-sm">
                                <a
                                    href="https://maps.google.com/?q=Moradabad,+Uttar+Pradesh"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-3 text-slate-300/80 transition-colors duration-300 hover:text-white group"
                                >
                                    <span className="mt-0.5 text-accent group-hover:scale-110 transition-transform duration-300">
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                    </span>
                                    <span>
                                        Delhi Road, Moradabad
                                        <br />
                                        Uttar Pradesh 244001
                                    </span>
                                </a>

                                <a
                                    href="mailto:info@sppmc.edu.in"
                                    className="flex items-center gap-3 text-slate-300/80 transition-colors duration-300 hover:text-white group"
                                >
                                    <span className="text-accent group-hover:scale-110 transition-transform duration-300">
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </span>
                                    <span>info@sppmc.edu.in</span>
                                </a>

                                <a
                                    href="tel:+919876543210"
                                    className="flex items-center gap-3 text-slate-300/80 transition-colors duration-300 hover:text-white group"
                                >
                                    <span className="text-accent group-hover:scale-110 transition-transform duration-300">
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
                                    </span>
                                    <span>+91 98765 43210</span>
                                </a>
                            </div>

                            {/* Map preview */}
                            <a
                                href="https://maps.app.goo.gl/ZJaMNv5biS8BWgKHA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-5 block relative overflow-hidden rounded-lg group"
                            >
                                <div
                                    className="h-24 w-full"
                                    style={{
                                        background:
                                            "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                    }}
                                >
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-white/60 text-sm group-hover:text-accent transition-colors duration-300">
                                            View on Google Maps →
                                        </span>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </a>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="footer-bottom mt-12 pt-6 border-t border-white/10">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
                            <p>
                                © {new Date().getFullYear()} Shri Prem Prakash
                                Memorial College. All rights reserved.
                            </p>

                            <div className="flex items-center gap-6">
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors duration-300"
                                >
                                    Privacy Policy
                                </a>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors duration-300"
                                >
                                    Terms of Use
                                </a>
                                <button
                                    onClick={scrollToTop}
                                    className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-accent/20 hover:scale-110"
                                    style={{
                                        background: "rgba(255,255,255,0.05)",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                    }}
                                    aria-label="Back to top"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

import { Link } from "react-router-dom";
import Container from "../components/layout/Container";

export default function NotFound() {
    return (
        <main className="min-h-screen relative overflow-hidden flex items-center justify-center">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#001055] via-[#1a2a6c] to-[#001866]" />

            {/* Mesh overlay */}
            <div
                className="absolute inset-0 opacity-50"
                style={{
                    background: `
                        radial-gradient(ellipse at 20% 30%, rgba(255, 121, 0, 0.15) 0%, transparent 50%),
                        radial-gradient(ellipse at 80% 70%, rgba(26, 42, 108, 0.3) 0%, transparent 50%)
                    `,
                }}
            />

            {/* Floating decorations */}
            <div className="absolute top-20 right-[15%] w-32 h-32 bg-accent/10 rounded-full animate-morph-blob hidden md:block" />
            <div
                className="absolute bottom-32 left-[10%] w-24 h-24 border-2 border-white/10 rounded-full animate-float-rotate hidden md:block"
                style={{ animationDelay: "1s" }}
            />
            <div className="absolute top-[40%] right-20 w-3 h-3 bg-accent rounded-full animate-particle" />
            <div
                className="absolute bottom-[30%] left-[25%] w-2 h-2 bg-white/50 rounded-full animate-particle"
                style={{ animationDelay: "2s" }}
            />

            {/* Content */}
            <Container className="relative z-10 text-center">
                <div className="max-w-2xl mx-auto">
                    {/* 404 Number */}
                    <div className="relative mb-8 animate-reveal-up">
                        <h1 className="text-[10rem] md:text-[14rem] font-bold leading-none text-white/5 select-none">
                            404
                        </h1>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-6xl md:text-8xl font-bold text-gradient-primary">
                                404
                            </span>
                        </div>
                    </div>

                    {/* Message */}
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-reveal-up animate-delay-200">
                        Page Not Found
                    </h2>

                    <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed animate-reveal-up animate-delay-400">
                        Oops! The page you're looking for doesn't exist or has
                        been moved. Let's get you back on track.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 animate-reveal-up animate-delay-600">
                        <Link
                            to="/"
                            className="btn-primary px-8 py-4 text-lg inline-flex items-center gap-2"
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
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                            </svg>
                            Go Home
                        </Link>
                        <Link
                            to="/contact"
                            className="btn-glass hover:border-white/40 px-8 py-4 inline-flex items-center gap-2"
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
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                            Contact Us
                        </Link>
                    </div>

                    {/* Quick Links */}
                    <div className="mt-16 animate-reveal-up animate-delay-800">
                        <p className="text-white/50 text-sm mb-4">
                            Or try these pages:
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 text-sm">
                            {[
                                { to: "/about", label: "About" },
                                { to: "/programmes", label: "Programmes" },
                                { to: "/admissions", label: "Admissions" },
                                { to: "/student-life", label: "Student Life" },
                            ].map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className="px-4 py-2 rounded-full bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    );
}

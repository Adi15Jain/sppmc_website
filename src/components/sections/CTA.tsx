import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Container from "../layout/Container";

export default function CTA() {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const floatingRefs = useRef<HTMLDivElement[]>([]);
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
            { threshold: 0.2 },
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // GSAP animations when visible
    useEffect(() => {
        if (!isVisible || !sectionRef.current) return;

        const ctx = gsap.context(() => {
            // Main content reveal timeline
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            // Badge animation
            tl.from(".cta-badge", {
                opacity: 0,
                y: 30,
                scale: 0.9,
                duration: 0.7,
            });

            // Heading reveal with blur
            tl.from(
                ".cta-heading",
                {
                    opacity: 0,
                    y: 50,
                    filter: "blur(10px)",
                    duration: 0.9,
                },
                "-=0.4",
            );

            // Description
            tl.from(
                ".cta-description",
                {
                    opacity: 0,
                    y: 30,
                    duration: 0.7,
                },
                "-=0.4",
            );

            // CTA button with scale
            tl.from(
                ".cta-button",
                {
                    opacity: 0,
                    y: 20,
                    scale: 0.9,
                    duration: 0.6,
                },
                "-=0.3",
            );

            // Floating elements continuous animation
            floatingRefs.current.forEach((el, i) => {
                if (el) {
                    gsap.to(el, {
                        y: "random(-25, 25)",
                        x: "random(-20, 20)",
                        rotation: "random(-15, 15)",
                        duration: "random(4, 7)",
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut",
                        delay: i * 0.2,
                    });
                }
            });

            // Decorative lines animation
            gsap.to(".cta-line", {
                scaleX: 1,
                duration: 1.2,
                stagger: 0.2,
                ease: "power2.out",
                delay: 0.5,
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [isVisible]);

    const addToFloatingRefs = (el: HTMLDivElement | null) => {
        if (el && !floatingRefs.current.includes(el)) {
            floatingRefs.current.push(el);
        }
    };

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden pt-16 pb-24 md:pt-16 md:pb-24"
        >
            {/* Animated gradient background */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(135deg, #001055 0%, #0a1a5c 40%, #001866 70%, #0d1f6c 100%)",
                }}
            />

            {/* Subtle animated gradient overlay */}
            <div
                className="absolute inset-0 opacity-60"
                style={{
                    background: `
                        radial-gradient(ellipse at 20% 30%, rgba(255, 121, 0, 0.2) 0%, transparent 50%),
                        radial-gradient(ellipse at 80% 70%, rgba(26, 42, 108, 0.3) 0%, transparent 50%),
                        radial-gradient(ellipse at 60% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 40%)
                    `,
                }}
            />

            {/* Morphing blob background 1 */}
            <div
                ref={addToFloatingRefs}
                className="absolute -top-20 -right-20 w-72 h-72 opacity-20 blur-3xl"
                style={{
                    background:
                        "radial-gradient(circle, rgba(255, 121, 0, 0.5) 0%, transparent 70%)",
                    animation: "morph-blob 10s ease-in-out infinite",
                }}
            />

            {/* Morphing blob background 2 */}
            <div
                ref={addToFloatingRefs}
                className="absolute -bottom-32 -left-32 w-96 h-96 opacity-15 blur-3xl"
                style={{
                    background:
                        "radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)",
                    animation: "morph-blob 12s ease-in-out infinite reverse",
                }}
            />

            {/* Floating decorative shapes */}
            <div
                ref={addToFloatingRefs}
                className="absolute top-16 left-[15%] w-16 h-16 border border-white/10 rounded-full hidden md:block"
            />
            <div
                ref={addToFloatingRefs}
                className="absolute top-1/4 right-[20%] w-8 h-8 bg-accent/15 rounded-full hidden md:block"
            />
            <div
                ref={addToFloatingRefs}
                className="absolute bottom-1/4 left-[25%] w-6 h-6 bg-white/10 rounded-full hidden md:block"
            />
            <div
                ref={addToFloatingRefs}
                className="absolute bottom-20 right-[15%] w-12 h-12 border border-accent/15 rounded-full hidden md:block"
            />
            <div
                ref={addToFloatingRefs}
                className="absolute top-1/3 left-[8%] w-4 h-4 bg-accent/20 rounded-full hidden lg:block"
            />
            <div
                ref={addToFloatingRefs}
                className="absolute bottom-1/3 right-[10%] w-5 h-5 bg-white/8 rounded-full hidden lg:block"
            />

            {/* Animated particles */}
            {[...Array(6)].map((_, i) => (
                <div
                    key={i}
                    ref={addToFloatingRefs}
                    className="absolute w-1.5 h-1.5 bg-accent/30 rounded-full hidden md:block"
                    style={{
                        left: `${15 + i * 15}%`,
                        top: `${20 + (i % 3) * 25}%`,
                        animation: `particle-float ${5 + i}s ease-in-out infinite`,
                        animationDelay: `${i * 0.5}s`,
                    }}
                />
            ))}

            {/* Subtle grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Decorative horizontal lines */}
            <div
                className="cta-line absolute top-12 left-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full"
                style={{ transform: "scaleX(0)", transformOrigin: "left" }}
            />
            <div
                className="cta-line absolute bottom-12 left-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent w-full"
                style={{ transform: "scaleX(0)", transformOrigin: "right" }}
            />

            <Container>
                <div
                    ref={contentRef}
                    className="relative z-10 flex flex-col items-center text-center"
                >
                    {/* Badge with glow */}
                    <span
                        className="cta-badge inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium rounded-full"
                        style={{
                            background: "rgba(255, 121, 0, 0.1)",
                            border: "1px solid rgba(255, 121, 0, 0.3)",
                            color: "#ff7900",
                            boxShadow: "0 0 20px rgba(255, 121, 0, 0.15)",
                        }}
                    >
                        <span
                            className="w-2 h-2 bg-accent rounded-full"
                            style={{
                                animation: "pulse-glow 2s ease-in-out infinite",
                            }}
                        />
                        Now Accepting Applications
                    </span>

                    {/* Heading with gradient text */}
                    <h2 className="cta-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-3xl leading-tight">
                        Admissions Open for the{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-accent to-amber-500">
                                Academic Year
                            </span>
                            {/* Decorative underline */}
                            <span
                                className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-accent/60 via-accent to-accent/60 rounded-full"
                                style={{
                                    animation:
                                        "shimmer 2s ease-in-out infinite",
                                }}
                            />
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="cta-description mt-6 max-w-xl text-white/80 text-base md:text-lg leading-relaxed">
                        Begin your journey towards becoming a professional
                        educator with structured programs, experienced faculty,
                        and a nurturing learning environment.
                    </p>

                    {/* CTA Button with glow effect */}
                    <a
                        href="/admissions"
                        className="cta-button mt-8 relative group"
                    >
                        <span
                            className="relative z-10 inline-flex items-center gap-2 px-8 py-3.5 text-white font-semibold rounded-lg transition-all duration-300"
                            style={{
                                background:
                                    "linear-gradient(135deg, #ff7900 0%, #ff9f40 100%)",
                            }}
                        >
                            Apply Now
                            <svg
                                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </span>
                        {/* Glow effect */}
                        <span
                            className="absolute inset-0 rounded-lg opacity-40 blur-xl transition-opacity duration-300 group-hover:opacity-70"
                            style={{
                                background:
                                    "linear-gradient(135deg, #ff7900 0%, #ff9f40 100%)",
                                animation: "pulse-glow 3s ease-in-out infinite",
                            }}
                        />
                    </a>

                    {/* Trust indicators */}
                    <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
                        <div className="flex items-center gap-2">
                            <svg
                                className="w-4 h-4 text-accent"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span>SCERT Affiliated</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg
                                className="w-4 h-4 text-accent"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span>B.A.B.Ed (Int) & D.El.Ed Programmes</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg
                                className="w-4 h-4 text-accent"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span>Experienced Faculty</span>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

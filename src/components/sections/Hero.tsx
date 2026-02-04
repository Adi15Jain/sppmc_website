import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Container from "../layout/Container";

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const floatingRefs = useRef<HTMLDivElement[]>([]);
    const statsRef = useRef<HTMLDivElement>(null);

    // GSAP Timeline animations on mount
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Main content reveal timeline
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            // Badge animation
            tl.from(".hero-badge", {
                opacity: 0,
                y: 30,
                scale: 0.9,
                duration: 0.8,
            });

            // Heading with split effect
            tl.from(
                ".hero-heading",
                {
                    opacity: 0,
                    y: 50,
                    duration: 1,
                },
                "-=0.4",
            );

            // Accent text
            tl.from(
                ".hero-accent",
                {
                    opacity: 0,
                    x: -30,
                    duration: 0.8,
                },
                "-=0.6",
            );

            // Description
            tl.from(
                ".hero-description",
                {
                    opacity: 0,
                    y: 30,
                    duration: 0.8,
                },
                "-=0.4",
            );

            // Stats with stagger
            tl.from(
                ".hero-stat",
                {
                    opacity: 0,
                    y: 40,
                    stagger: 0.15,
                    duration: 0.6,
                },
                "-=0.3",
            );

            // CTA buttons
            tl.from(
                ".hero-cta",
                {
                    opacity: 0,
                    y: 20,
                    stagger: 0.1,
                    duration: 0.5,
                },
                "-=0.3",
            );

            // Scroll indicator
            tl.from(
                ".scroll-indicator",
                {
                    opacity: 0,
                    y: -20,
                    duration: 0.6,
                },
                "-=0.2",
            );

            // Floating elements continuous animation
            floatingRefs.current.forEach((el, i) => {
                if (el) {
                    gsap.to(el, {
                        y: "random(-20, 20)",
                        x: "random(-15, 15)",
                        rotation: "random(-10, 10)",
                        duration: "random(3, 5)",
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut",
                        delay: i * 0.3,
                    });
                }
            });

            // Animate stat counters
            const statNumbers = document.querySelectorAll(".stat-number");
            statNumbers.forEach((stat) => {
                const target = parseInt(
                    stat.getAttribute("data-target") || "0",
                );
                const suffix = stat.getAttribute("data-suffix") || "";
                gsap.to(stat, {
                    duration: 2,
                    delay: 1.2,
                    ease: "power2.out",
                    onUpdate: function () {
                        const progress = this.progress();
                        stat.textContent =
                            Math.floor(target * progress) + suffix;
                    },
                });
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    // Mouse move parallax effect
    useEffect(() => {
        const hero = heroRef.current;
        if (!hero) return;

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const xPercent = (clientX / innerWidth - 0.5) * 2;
            const yPercent = (clientY / innerHeight - 0.5) * 2;

            floatingRefs.current.forEach((el, i) => {
                if (el) {
                    const depth = (i + 1) * 0.5;
                    gsap.to(el, {
                        x: xPercent * 20 * depth,
                        y: yPercent * 15 * depth,
                        duration: 0.8,
                        ease: "power2.out",
                    });
                }
            });
        };

        hero.addEventListener("mousemove", handleMouseMove);
        return () => hero.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const addToFloatingRefs = (el: HTMLDivElement | null) => {
        if (el && !floatingRefs.current.includes(el)) {
            floatingRefs.current.push(el);
        }
    };

    return (
        <section
            ref={heroRef}
            className="relative h-screen min-h-[100vh] w-full overflow-hidden"
        >
            {/* Background image */}
            <div className="absolute inset-0">
                <img
                    src="/images/campus-3.jpg"
                    alt="Shri Prem Prakash Memorial College Campus"
                    className="h-full w-full object-cover"
                />
                {/* Premium gradient overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(135deg, rgba(0, 16, 85, 0.92) 0%, rgba(26, 42, 108, 0.8) 50%, rgba(0, 24, 102, 0.88) 100%)",
                    }}
                />
                {/* Animated gradient mesh */}
                <div
                    className="absolute inset-0 opacity-60"
                    style={{
                        background: `
                            radial-gradient(ellipse at 20% 30%, rgba(255, 121, 0, 0.2) 0%, transparent 50%),
                            radial-gradient(ellipse at 80% 70%, rgba(26, 42, 108, 0.3) 0%, transparent 50%),
                            radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 70%)
                        `,
                    }}
                />
            </div>

            {/* Floating decorative elements with GSAP refs */}
            <div
                ref={addToFloatingRefs}
                className="absolute top-20 right-20 w-24 h-24 bg-white/5 rounded-full hidden md:block"
            />
            <div
                ref={addToFloatingRefs}
                className="absolute top-40 right-40 w-16 h-16 border-2 border-white/10 rounded-full hidden md:block"
            />
            <div
                ref={addToFloatingRefs}
                className="absolute bottom-32 left-16 w-20 h-20 bg-accent/10 rounded-full hidden md:block"
            />
            <div
                ref={addToFloatingRefs}
                className="absolute bottom-48 left-48 w-12 h-12 border border-accent/20 rounded-full hidden md:block"
            />
            <div
                ref={addToFloatingRefs}
                className="absolute top-1/3 left-1/4 w-8 h-8 bg-white/10 rounded-full hidden lg:block"
            />
            <div
                ref={addToFloatingRefs}
                className="absolute bottom-1/4 right-1/3 w-6 h-6 bg-accent/15 rounded-full hidden lg:block"
            />

            {/* Subtle grid pattern */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "50px 50px",
                }}
            />

            {/* Content */}
            <div
                ref={contentRef}
                className="relative z-10 flex h-full items-center pt-[112px]"
            >
                <Container>
                    <div className="max-w-3xl">
                        {/* Badge */}
                        <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 mb-6 glass rounded-full text-white/90 text-sm font-medium">
                            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                            Affiliated to SCERT, Govt. of UP
                        </div>

                        <h1 className="hero-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white">
                            Building Future Educators with
                            <span className="hero-accent text-[var(--color-accent)] block mt-2">
                                Purpose & Integrity
                            </span>
                        </h1>

                        <p className="hero-description mt-6 text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl">
                            Shri Prem Prakash Memorial College is committed to
                            nurturing, motivating, and empowering future
                            teachers to meet the challenges of a globalized
                            education system.
                        </p>

                        {/* Stats row with animated counters */}
                        <div
                            ref={statsRef}
                            className="mt-8 flex flex-wrap gap-8"
                        >
                            <div className="hero-stat text-center">
                                <div
                                    className="stat-number text-3xl font-bold text-white"
                                    data-target="500"
                                    data-suffix="+"
                                >
                                    0+
                                </div>
                                <div className="text-sm text-white/70">
                                    Graduates
                                </div>
                            </div>
                            <div className="hero-stat text-center">
                                <div
                                    className="stat-number text-3xl font-bold text-accent"
                                    data-target="20"
                                    data-suffix="+"
                                >
                                    0+
                                </div>
                                <div className="text-sm text-white/70">
                                    Years Legacy
                                </div>
                            </div>
                            <div className="hero-stat text-center">
                                <div
                                    className="stat-number text-3xl font-bold text-white"
                                    data-target="98"
                                    data-suffix="%"
                                >
                                    0%
                                </div>
                                <div className="text-sm text-white/70">
                                    Placement Rate
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href="/academics"
                                className="hero-cta btn-primary"
                            >
                                Explore Academics
                            </a>

                            <a
                                href="/about"
                                className="hero-cta btn-glass hover:border-white/40"
                            >
                                About the College
                            </a>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Scroll indicator */}
            <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <span className="text-white/60 text-sm font-medium tracking-wider uppercase">
                    Scroll
                </span>
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                    <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
                </div>
            </div>
        </section>
    );
}

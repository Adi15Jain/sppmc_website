import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Sparkles,
    Building2,
    Award,
    ArrowRight,
    BookOpen,
    Users,
} from "lucide-react";
import Container from "../layout/Container";

gsap.registerPlugin(ScrollTrigger);

const HIGHLIGHTS = [
    {
        icon: Building2,
        label: "Established",
        value: 2004,
        isNumber: true,
        description: "Two decades of excellence",
        gradient: "from-orange-500 to-amber-500",
    },
    {
        icon: Award,
        label: "Affiliation",
        value: "SCERT, UP",
        isNumber: false,
        description: "Government recognized",
        gradient: "from-blue-500 to-indigo-500",
    },
    {
        icon: BookOpen,
        label: "Programs",
        value: 2,
        suffix: "+",
        isNumber: true,
        description: "B.Ed & D.El.Ed",
        gradient: "from-emerald-500 to-teal-500",
    },
    {
        icon: Users,
        label: "Alumni",
        value: 5000,
        suffix: "+",
        isNumber: true,
        description: "Successful educators",
        gradient: "from-purple-500 to-violet-500",
    },
];

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const [counters, setCounters] = useState<Record<string, number>>({});

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            // Apple-style headline reveal - dramatic fade from below with opacity
            gsap.fromTo(
                ".hero-badge",
                { opacity: 0, y: 30, scale: 0.9 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                },
            );

            // Split headline animation - each line reveals separately
            gsap.fromTo(
                ".headline-line-1",
                { opacity: 0, y: 80, rotateX: -15 },
                {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    duration: 1.2,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 75%",
                        toggleActions: "play none none reverse",
                    },
                },
            );

            gsap.fromTo(
                ".headline-line-2",
                { opacity: 0, y: 80, rotateX: -15 },
                {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    duration: 1.2,
                    delay: 0.15,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 75%",
                        toggleActions: "play none none reverse",
                    },
                },
            );

            // Body text - smooth fade in
            gsap.fromTo(
                ".body-text",
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 0.3,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 70%",
                        toggleActions: "play none none reverse",
                    },
                },
            );

            // CTA button with bounce
            gsap.fromTo(
                ".cta-button",
                { opacity: 0, y: 40, scale: 0.9 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    delay: 0.5,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 65%",
                        toggleActions: "play none none reverse",
                    },
                },
            );

            // Stats cards - dramatic staggered reveal with scale and rotation
            HIGHLIGHTS.forEach((_, index) => {
                gsap.fromTo(
                    `.stat-card-${index}`,
                    {
                        opacity: 0,
                        y: 100,
                        scale: 0.8,
                        rotateY: -10,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        rotateY: 0,
                        duration: 0.9,
                        delay: 0.1 + index * 0.12,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: ".stats-grid",
                            start: "top 80%",
                            toggleActions: "play none none reverse",
                        },
                    },
                );
            });

            // Counter animation triggered on scroll
            ScrollTrigger.create({
                trigger: ".stats-grid",
                start: "top 75%",
                onEnter: () => {
                    HIGHLIGHTS.forEach((stat) => {
                        if (stat.isNumber && typeof stat.value === "number") {
                            const target = stat.value;
                            const duration = 2000;
                            const startTime = Date.now();

                            const animate = () => {
                                const elapsed = Date.now() - startTime;
                                const progress = Math.min(
                                    elapsed / duration,
                                    1,
                                );
                                // Ease out cubic
                                const eased = 1 - Math.pow(1 - progress, 3);
                                const current = Math.floor(target * eased);

                                setCounters((prev) => ({
                                    ...prev,
                                    [stat.label]: current,
                                }));

                                if (progress < 1) {
                                    requestAnimationFrame(animate);
                                }
                            };
                            requestAnimationFrame(animate);
                        }
                    });
                },
                once: true,
            });

            // Parallax on decorative elements
            gsap.to(".parallax-orb-1", {
                y: -80,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
            });

            gsap.to(".parallax-orb-2", {
                y: -120,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.5,
                },
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="about"
            className="relative py-20 md:py-28 overflow-hidden"
            style={{ perspective: "1000px" }}
        >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/80 to-blue-50/30" />

            {/* Parallax decorative orbs */}
            <div
                className="parallax-orb-1 absolute -top-20 right-[10%] w-[400px] h-[400px] rounded-full pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle, rgba(255, 121, 0, 0.08) 0%, transparent 70%)",
                }}
            />
            <div
                className="parallax-orb-2 absolute top-[40%] -left-20 w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle, rgba(0, 16, 85, 0.06) 0%, transparent 70%)",
                }}
            />

            <Container>
                <div className="relative z-10">
                    {/* Hero-style headline section */}
                    <div className="text-center mb-16 md:mb-20">
                        {/* Badge */}
                        <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary bg-primary/5 rounded-full border border-primary/10 mb-8">
                            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                            About SPPMC
                        </div>

                        {/* Split headline - Apple style large text */}
                        <h2
                            ref={headlineRef}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <span className="headline-line-1 block text-slate-900">
                                Shaping Tomorrow's
                            </span>
                            <span className="headline-line-2 block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent">
                                Educators Today
                            </span>
                        </h2>
                    </div>

                    {/* Two-column content */}
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
                        {/* Text content */}
                        <div className="body-text space-y-6 max-w-xl">
                            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium">
                                Shri Prem Prakash Memorial College has been a
                                cornerstone of teacher education since 2004.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                We are committed to nurturing passionate
                                educators who transform lives through
                                excellence, innovation, and ethical values.
                                Affiliated with SCERT, Uttar Pradesh, we offer
                                nationally recognized programs that blend
                                traditional wisdom with modern pedagogy.
                            </p>

                            <a
                                href="/about"
                                className="cta-button inline-flex items-center gap-3 mt-6 px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-hover transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 group"
                            >
                                <Sparkles size={18} />
                                Discover Our Story
                                <ArrowRight
                                    size={16}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </a>
                        </div>

                        {/* Stats grid */}
                        <div className="stats-grid grid grid-cols-2 gap-4 md:gap-5">
                            {HIGHLIGHTS.map((stat, index) => (
                                <div
                                    key={stat.label}
                                    className={`stat-card-${index} group relative p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/60 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden`}
                                    style={{ transformStyle: "preserve-3d" }}
                                >
                                    {/* Gradient accent on hover */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                                    />

                                    {/* Top accent line */}
                                    <div
                                        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                                    />

                                    {/* Icon */}
                                    <div
                                        className={`relative inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <stat.icon size={22} />
                                    </div>

                                    {/* Label */}
                                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                                        {stat.label}
                                    </p>

                                    {/* Value with animated counter */}
                                    <div className="flex items-baseline gap-0.5">
                                        <span className="text-2xl md:text-3xl font-bold text-slate-900 tabular-nums">
                                            {stat.isNumber
                                                ? (counters[stat.label] ?? 0)
                                                : stat.value}
                                        </span>
                                        {stat.suffix && (
                                            <span className="text-xl font-bold text-accent">
                                                {stat.suffix}
                                            </span>
                                        )}
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm text-slate-500 mt-1.5">
                                        {stat.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

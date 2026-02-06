import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    GraduationCap,
    BookOpen,
    Clock,
    ArrowRight,
    Users,
    Sparkles,
    CheckCircle,
} from "lucide-react";
import Container from "../layout/Container";

gsap.registerPlugin(ScrollTrigger);

type Program = {
    title: string;
    shortTitle: string;
    description: string;
    duration: string;
    intake: string;
    features: string[];
    Icon: typeof GraduationCap;
    gradient: string;
    accentColor: string;
};

const PROGRAMS: Program[] = [
    {
        title: "Bachelor of Education",
        shortTitle: "B.Ed",
        description:
            "A two-year professional program preparing competent secondary school educators with strong pedagogical expertise.",
        duration: "2 Years",
        intake: "100 Seats",
        features: [
            "Child psychology & development",
            "Advanced teaching methods",
            "School-based internship",
        ],
        Icon: GraduationCap,
        gradient: "from-orange-500 to-amber-500",
        accentColor: "rgba(249, 115, 22, 0.15)",
    },
    {
        title: "Diploma in Elementary Education",
        shortTitle: "D.El.Ed",
        description:
            "A foundational two-year program focused on developing skilled primary educators with child-centered learning approaches.",
        duration: "2 Years",
        intake: "50 Seats",
        features: [
            "Primary education pedagogy",
            "Inclusive classroom practices",
            "Hands-on teaching experience",
        ],
        Icon: BookOpen,
        gradient: "from-orange-500 to-amber-500",
        accentColor: "rgba(59, 130, 246, 0.15)",
    },
];

export default function Programmes() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const mm = gsap.matchMedia();
        const ctx = gsap.context(() => {
            // ─────────────────────────────────────────────────────────────
            // 1. PROGRESSIVE BACKGROUND TRANSITION - creates depth as you enter
            // ─────────────────────────────────────────────────────────────
            const bgTl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top 90%",
                    end: "top 20%",
                    scrub: 1.2,
                },
            });

            bgTl.fromTo(
                ".prog-bg-dark",
                { opacity: 0, scale: 1.1 },
                { opacity: 1, scale: 1, ease: "power2.out" },
            );

            bgTl.fromTo(
                ".prog-ambient-glow",
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, ease: "power2.out" },
                "<0.1",
            );

            // ─────────────────────────────────────────────────────────────
            // 2. HEADER CINEMATIC REVEAL
            // ─────────────────────────────────────────────────────────────
            const headerTl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top 70%",
                    toggleActions: "play none none reverse",
                },
            });

            // Badge entrance with spring
            headerTl.fromTo(
                ".prog-badge",
                { opacity: 0, y: 30, scale: 0.8, rotateX: -20 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotateX: 0,
                    duration: 0.8,
                    ease: "back.out(1.7)",
                },
            );

            // Headline word-by-word reveal
            headerTl.fromTo(
                ".prog-headline-word",
                {
                    opacity: 0,
                    y: 60,
                    rotateX: -30,
                    transformOrigin: "bottom center",
                },
                {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    duration: 0.9,
                    stagger: 0.08,
                    ease: "power4.out",
                },
                "-=0.4",
            );

            // Accent underline scales in
            headerTl.fromTo(
                ".prog-headline-accent",
                { scaleX: 0 },
                { scaleX: 1, duration: 0.6, ease: "power3.inOut" },
                "-=0.3",
            );

            // ─────────────────────────────────────────────────────────────
            // 3. PROGRAM CARDS - DRAMATIC STAGGERED ENTRANCE
            // ─────────────────────────────────────────────────────────────
            mm.add("(min-width: 768px)", () => {
                // Desktop: Cards slide from opposite directions
                gsap.fromTo(
                    ".program-card-0",
                    {
                        opacity: 0,
                        x: -80,
                        rotateY: 15,
                        transformPerspective: 1000,
                    },
                    {
                        opacity: 1,
                        x: 0,
                        rotateY: 0,
                        duration: 1.1,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: ".cards-grid",
                            start: "top 80%",
                            toggleActions: "play none none reverse",
                        },
                    },
                );

                gsap.fromTo(
                    ".program-card-1",
                    {
                        opacity: 0,
                        x: 80,
                        rotateY: -15,
                        transformPerspective: 1000,
                    },
                    {
                        opacity: 1,
                        x: 0,
                        rotateY: 0,
                        duration: 1.1,
                        delay: 0.15,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: ".cards-grid",
                            start: "top 80%",
                            toggleActions: "play none none reverse",
                        },
                    },
                );
            });

            mm.add("(max-width: 767px)", () => {
                // Mobile: Cards slide up sequentially
                gsap.fromTo(
                    ".program-card",
                    { opacity: 0, y: 60, scale: 0.95 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        stagger: 0.2,
                        duration: 0.9,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: ".cards-grid",
                            start: "top 85%",
                            toggleActions: "play none none reverse",
                        },
                    },
                );
            });

            // Card inner elements reveal
            gsap.fromTo(
                ".card-icon",
                { opacity: 0, scale: 0, rotate: -180 },
                {
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    stagger: 0.15,
                    duration: 0.7,
                    delay: 0.4,
                    ease: "back.out(2)",
                    scrollTrigger: {
                        trigger: ".cards-grid",
                        start: "top 75%",
                        toggleActions: "play none none reverse",
                    },
                },
            );

            // Features tags cascade in
            gsap.fromTo(
                ".feature-tag",
                { opacity: 0, x: -20, scale: 0.9 },
                {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    stagger: 0.05,
                    duration: 0.5,
                    delay: 0.6,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".cards-grid",
                        start: "top 75%",
                        toggleActions: "play none none reverse",
                    },
                },
            );

            // ─────────────────────────────────────────────────────────────
            // 4. FLOATING PARALLAX ORBS
            // ─────────────────────────────────────────────────────────────
            gsap.to(".prog-orb-1", {
                y: -60,
                x: 20,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 2,
                },
            });

            gsap.to(".prog-orb-2", {
                y: -40,
                x: -30,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 2.5,
                },
            });

            gsap.to(".prog-orb-3", {
                y: -80,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.5,
                },
            });

            // ─────────────────────────────────────────────────────────────
            // 5. CTA BUTTON WITH BOUNCE ENTRANCE
            // ─────────────────────────────────────────────────────────────
            gsap.fromTo(
                ".prog-cta",
                { opacity: 0, y: 40, scale: 0.9 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    ease: "back.out(1.5)",
                    scrollTrigger: {
                        trigger: ".prog-cta",
                        start: "top 90%",
                        toggleActions: "play none none reverse",
                    },
                },
            );

            // ─────────────────────────────────────────────────────────────
            // 6. SUBTLE GRID PATTERN REVEAL
            // ─────────────────────────────────────────────────────────────
            gsap.fromTo(
                ".prog-grid-pattern",
                { opacity: 0 },
                {
                    opacity: 0.03,
                    duration: 1.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 60%",
                        toggleActions: "play none none reverse",
                    },
                },
            );
        }, section);

        return () => {
            ctx.revert();
            mm.revert();
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            id="programmes"
            className="relative pt-16 pb-16 md:pt-12 md:pb-12 overflow-hidden"
            style={{ perspective: "1000px" }}
        >
            {/* Base gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-slate-100" />

            {/* Dark background that fades in on scroll */}
            <div
                className="prog-bg-dark absolute inset-0 opacity-0"
                style={{
                    background:
                        "linear-gradient(180deg, #0a1628 0%, #0f2847 50%, #0a1628 100%)",
                }}
            />

            {/* Ambient gradient glow */}
            <div className="prog-ambient-glow absolute inset-0 opacity-0 pointer-events-none">
                <div
                    className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(255,121,0,0.12) 0%, transparent 70%)",
                    }}
                />
                <div
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
                    }}
                />
            </div>

            {/* Floating parallax orbs */}
            <div className="prog-orb-1 absolute top-20 left-[10%] w-4 h-4 rounded-full bg-accent/30 blur-sm" />
            <div className="prog-orb-2 absolute top-40 right-[15%] w-3 h-3 rounded-full bg-blue-400/30 blur-sm" />
            <div className="prog-orb-3 absolute bottom-32 left-[20%] w-2 h-2 rounded-full bg-orange-300/40 blur-[2px]" />

            {/* Animated grid pattern */}
            <div
                className="prog-grid-pattern absolute inset-0 opacity-0"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            <Container>
                <div className="relative z-10">
                    {/* Header with cinematic text reveal */}
                    <div className="text-center mb-14">
                        <div className="prog-badge inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white/90 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                            </span>
                            Academic Programs
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                            <span
                                className="prog-headline-word inline-block text-white"
                                style={{ perspective: "1000px" }}
                            >
                                Programs
                            </span>{" "}
                            <span
                                className="prog-headline-word inline-block text-white"
                                style={{ perspective: "1000px" }}
                            >
                                That
                            </span>{" "}
                            <span
                                className="prog-headline-word inline-block text-white"
                                style={{ perspective: "1000px" }}
                            >
                                Shape
                            </span>{" "}
                            <span className="relative inline-block">
                                <span
                                    className="prog-headline-word inline-block text-transparent bg-clip-text bg-gradient-to-r from-accent via-orange-400 to-yellow-400"
                                    style={{ perspective: "1000px" }}
                                >
                                    Educators
                                </span>
                                <span className="prog-headline-accent absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-accent to-orange-400 rounded-full origin-left" />
                            </span>
                        </h2>

                        <p className="prog-headline-word mt-5 text-base md:text-lg text-white/50 max-w-2xl mx-auto">
                            Discover our nationally recognized education
                            programs designed to create transformative teaching
                            professionals.
                        </p>
                    </div>

                    {/* Program cards grid */}
                    <div
                        ref={cardsRef}
                        className="cards-grid grid md:grid-cols-2 gap-6 lg:gap-8"
                    >
                        {PROGRAMS.map((program, index) => (
                            <div
                                key={program.title}
                                className={`program-card program-card-${index} group relative rounded-3xl overflow-hidden`}
                                style={{
                                    transformStyle: "preserve-3d",
                                }}
                            >
                                {/* Card background with glass effect */}
                                <div className="absolute inset-0 bg-white/[0.04] backdrop-blur-xl" />
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                    style={{
                                        background: `radial-gradient(circle at 50% 0%, ${program.accentColor} 0%, transparent 50%)`,
                                    }}
                                />

                                {/* Border gradient */}
                                <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-white/20 transition-colors duration-500" />

                                {/* Card content */}
                                <div className="relative p-7 md:p-8">
                                    {/* Icon and title row */}
                                    <div className="flex items-start gap-5 mb-5">
                                        <div
                                            className={`card-icon flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${program.gradient} flex items-center justify-center text-white shadow-xl shadow-black/20 group-hover:scale-110 transition-transform duration-500`}
                                        >
                                            <program.Icon
                                                size={26}
                                                strokeWidth={1.8}
                                            />
                                        </div>
                                        <div>
                                            <span
                                                className={`text-xs font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r ${program.gradient}`}
                                            >
                                                {program.shortTitle}
                                            </span>
                                            <h3 className="text-xl md:text-2xl font-bold text-white leading-tight mt-1 group-hover:text-white transition-colors">
                                                {program.title}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm md:text-base text-white/60 leading-relaxed mb-6">
                                        {program.description}
                                    </p>

                                    {/* Features with check icons */}
                                    <div className="space-y-2.5 mb-6">
                                        {program.features.map((feature) => (
                                            <div
                                                key={feature}
                                                className="feature-tag flex items-center gap-3 text-sm text-white/70"
                                            >
                                                <CheckCircle
                                                    size={16}
                                                    className={`flex-shrink-0 text-transparent bg-clip-text bg-gradient-to-r ${program.gradient}`}
                                                    style={{
                                                        stroke: "currentColor",
                                                    }}
                                                />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Footer with meta and CTA */}
                                    <div className="flex items-center gap-4 pt-5 border-t border-white/10">
                                        <div className="flex items-center gap-5">
                                            <div className="flex items-center gap-2 text-sm text-white/50">
                                                <Clock
                                                    size={16}
                                                    className="text-accent"
                                                />
                                                <span>{program.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-white/50">
                                                <Users
                                                    size={16}
                                                    className="text-accent"
                                                />
                                                <span>{program.intake}</span>
                                            </div>
                                        </div>
                                        <a
                                            href="/programmes"
                                            className={`ml-auto flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white rounded-full bg-gradient-to-r ${program.gradient} opacity-80 hover:opacity-100 hover:shadow-lg transition-all duration-300 group/btn`}
                                        >
                                            Learn More
                                            <ArrowRight
                                                size={14}
                                                className="transition-transform group-hover/btn:translate-x-0.5"
                                            />
                                        </a>
                                    </div>
                                </div>

                                {/* Hover lift effect */}
                                <div className="absolute inset-0 transition-transform duration-500 group-hover:-translate-y-1 pointer-events-none" />
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="prog-cta mt-14 text-center">
                        <a
                            href="/programmes"
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent via-orange-500 to-amber-500 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-accent/30 transition-all duration-500 hover:-translate-y-1"
                        >
                            <Sparkles
                                size={20}
                                className="group-hover:rotate-12 transition-transform duration-300"
                            />
                            <span>Explore All Programs</span>
                            <ArrowRight
                                size={18}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </a>
                        <p className="mt-4 text-sm text-white/40">
                            Career-focused education with strong placement
                            support
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}

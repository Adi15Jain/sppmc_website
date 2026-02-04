import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Building2,
    Palette,
    BookOpen,
    Users,
    ArrowRight,
    Sparkles,
} from "lucide-react";
import Container from "../layout/Container";

gsap.registerPlugin(ScrollTrigger);

const LIFE_PILLARS = [
    {
        icon: Building2,
        title: "Infrastructure",
        description: "Smart classrooms, digital library, and modern ICT labs.",
        gradient: "from-blue-500 to-indigo-600",
    },
    {
        icon: Palette,
        title: "Cultural Life",
        description: "Annual festivals, talent shows, and creative workshops.",
        gradient: "from-purple-500 to-pink-500",
    },
    {
        icon: BookOpen,
        title: "Teaching Practice",
        description: "School internships and hands-on classroom training.",
        gradient: "from-orange-500 to-amber-500",
    },
    {
        icon: Users,
        title: "Community",
        description: "NSS activities, outreach programs, and ethical values.",
        gradient: "from-emerald-500 to-teal-500",
    },
];

const STATS = [
    { value: 15, suffix: "+", label: "Clubs" },
    { value: 10, suffix: "+", label: "Events" },
    { value: 100, suffix: "%", label: "Support" },
];

export default function StudentLife() {
    const sectionRef = useRef<HTMLElement>(null);
    const [counters, setCounters] = useState<Record<string, number>>({});

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            // Badge entrance
            gsap.fromTo(
                ".sl-badge",
                { opacity: 0, y: 20, scale: 0.9 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                },
            );

            // Headline word reveal
            gsap.fromTo(
                ".sl-headline-word",
                { opacity: 0, y: 50, rotateX: -20 },
                {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    duration: 0.9,
                    stagger: 0.08,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 75%",
                        toggleActions: "play none none reverse",
                    },
                },
            );

            // Underline
            gsap.fromTo(
                ".sl-underline",
                { scaleX: 0 },
                {
                    scaleX: 1,
                    duration: 0.6,
                    delay: 0.4,
                    ease: "power3.inOut",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 70%",
                        toggleActions: "play none none reverse",
                    },
                },
            );

            // Body text
            gsap.fromTo(
                ".sl-body",
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 70%",
                        toggleActions: "play none none reverse",
                    },
                },
            );

            // Pillar cards staggered entrance
            gsap.fromTo(
                ".pillar-card",
                { opacity: 0, y: 60, scale: 0.92, rotateY: -8 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotateY: 0,
                    stagger: 0.1,
                    duration: 0.9,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: ".pillars-grid",
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                },
            );

            // Icons
            gsap.fromTo(
                ".pillar-icon",
                { opacity: 0, scale: 0, rotate: -180 },
                {
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    stagger: 0.08,
                    duration: 0.7,
                    delay: 0.3,
                    ease: "back.out(2)",
                    scrollTrigger: {
                        trigger: ".pillars-grid",
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                },
            );

            // Stats counter
            ScrollTrigger.create({
                trigger: ".stats-inline",
                start: "top 85%",
                onEnter: () => {
                    STATS.forEach((stat) => {
                        const target = stat.value;
                        const duration = 1500;
                        const startTime = Date.now();

                        const animate = () => {
                            const elapsed = Date.now() - startTime;
                            const progress = Math.min(elapsed / duration, 1);
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
                    });
                },
                once: true,
            });

            // CTA
            gsap.fromTo(
                ".sl-cta",
                { opacity: 0, y: 30, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.7,
                    ease: "back.out(1.5)",
                    scrollTrigger: {
                        trigger: ".sl-cta",
                        start: "top 90%",
                        toggleActions: "play none none reverse",
                    },
                },
            );

            // Parallax orb
            gsap.to(".sl-orb", {
                y: -60,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 2,
                },
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="student-life"
            className="relative py-20 md:py-28 overflow-hidden"
            style={{ perspective: "1000px" }}
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/40 to-amber-50/30" />

            {/* Decorative orb */}
            <div
                className="sl-orb absolute top-10 right-[10%] w-[400px] h-[400px] rounded-full pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle, rgba(255, 121, 0, 0.08) 0%, transparent 70%)",
                }}
            />

            <Container>
                <div className="relative z-10">
                    {/* Two Column Layout - matches About section */}
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
                        {/* Left: Header Content */}
                        <div>
                            <div className="sl-badge inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary bg-primary/5 rounded-full border border-primary/10 mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                                </span>
                                Campus Experience
                            </div>

                            <h2
                                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                <span className="sl-headline-word inline-block text-slate-900">
                                    Beyond
                                </span>{" "}
                                <span className="sl-headline-word inline-block text-slate-900">
                                    the
                                </span>{" "}
                                <span className="relative inline-block">
                                    <span className="sl-headline-word inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-accent to-amber-500">
                                        Classroom
                                    </span>
                                    <span className="sl-underline absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full origin-left" />
                                </span>
                            </h2>

                            <p className="sl-body text-lg md:text-xl text-slate-600 leading-relaxed mb-6">
                                Education at SPPMC extends far beyond textbooks.
                                Our vibrant campus nurtures well-rounded
                                educators through cultural activities, community
                                service, and hands-on experience.
                            </p>

                            {/* Inline Stats */}
                            <div className="stats-inline flex items-center gap-6 mb-8">
                                {STATS.map((stat) => (
                                    <div
                                        key={stat.label}
                                        className="text-center"
                                    >
                                        <div className="flex items-baseline justify-center gap-0.5">
                                            <span className="text-2xl md:text-3xl font-bold text-slate-900 tabular-nums">
                                                {counters[stat.label] ?? 0}
                                            </span>
                                            <span className="text-lg font-bold text-accent">
                                                {stat.suffix}
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-500 uppercase tracking-wider">
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                            <a
                                href="/student-life"
                                className="sl-cta inline-flex items-center gap-3 px-7 py-3.5 bg-gradient-to-r from-accent to-orange-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5 group"
                            >
                                <Sparkles size={18} />
                                <span>Explore Campus Life</span>
                                <ArrowRight
                                    size={16}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </a>
                        </div>

                        {/* Right: Compact Cards Grid */}
                        <div className="pillars-grid grid grid-cols-2 gap-4">
                            {LIFE_PILLARS.map((pillar) => (
                                <div
                                    key={pillar.title}
                                    className="pillar-card group relative p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                                    style={{ transformStyle: "preserve-3d" }}
                                >
                                    {/* Top accent on hover */}
                                    <div
                                        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                                    />

                                    {/* Icon */}
                                    <div
                                        className={`pillar-icon inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${pillar.gradient} text-white mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <pillar.icon
                                            size={20}
                                            strokeWidth={2}
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-base font-bold text-slate-900 mb-1">
                                        {pillar.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        {pillar.description}
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

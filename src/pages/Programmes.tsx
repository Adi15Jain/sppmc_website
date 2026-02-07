import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    GraduationCap,
    BookOpen,
    Clock,
    Users,
    CheckCircle,
    Award,
    Target,
    Briefcase,
    IndianRupee,
    // Palette,
} from "lucide-react";
import Container from "../components/layout/Container";

gsap.registerPlugin(ScrollTrigger);

type ProgramDetail = {
    title: string;
    shortTitle: string;
    description: string;
    duration: string;
    intake: string;
    fees: string;
    eligibility: string;
    curriculum: string[];
    careerProspects: string[];
    Icon: typeof GraduationCap;
    gradient: string;
    heroImage: string;
};

const PROGRAMS: ProgramDetail[] = [
    {
        title: "D.El.Ed",
        shortTitle: "Diploma in Elementary Education",
        description:
            "A foundational two-year diploma program focused on developing skilled primary educators with child-centered learning approaches, classroom management skills, and innovative teaching methodologies.",
        duration: "2 Years",
        intake: "100 Seats",
        fees: "₹ 41,000 / Year",
        eligibility:
            "Graduation with minimum 50% marks (45% for reserved categories)",
        curriculum: [
            "Childhood and Development of Children",
            "Understanding Society and Education",
            "Pedagogy of Hindi & Mathematics",
            "Pedagogy of Environmental Studies",
            "Art, Craft and Physical Education",
            "ICT in Education",
            "School Experience Programme",
        ],
        careerProspects: [
            "Primary School Teacher",
            "Pre-Primary Educator",
            "Special Educator",
            "Education Coordinator",
            "Learning Centre Facilitator",
        ],
        Icon: BookOpen,
        gradient: "from-orange-500 to-amber-500",
        heroImage: "/images/classroom.jpeg",
    },
    {
        title: "B.A.-B.Ed. (Integrated)",
        shortTitle: "Integrated Bachelor of Arts & Education",
        description:
            "A comprehensive four-year integrated program that combines liberal arts education with professional teacher training. This dual-degree course saves one academic year and provides a strong foundation in both subject matter and pedagogy.",
        duration: "4 Years",
        intake: "100 Seats",
        fees: "₹ 20,700 / Semester",
        eligibility: "10+2 (Senior Secondary) with minimum 50% marks",
        curriculum: [
            "Liberal Arts Subjects (History, Pol. Sci, etc.)",
            "Foundations of Education",
            "Pedagogical Content Knowledge",
            "Language Proficiency",
            "Curriculum Design & Evaluation",
            "School Internship & Practicum",
            "Action Research",
        ],
        careerProspects: [
            "Secondary School Teacher (TGT)",
            "Education Researcher",
            "Curriculum Designer",
            "Educational Consultant",
            "Higher Education Pursuits (M.A./M.Ed)",
        ],
        Icon: GraduationCap,
        gradient: "from-orange-500 to-amber-500",
        heroImage: "/images/library.jpeg",
    },
    // {
    //     title: "B.A.",
    //     shortTitle: "Bachelor of Arts",
    //     description:
    //         "A diverse three-year undergraduate program emphasizing critical thinking, effective communication, and cultural understanding. Students gain in-depth knowledge in humanities and social sciences.",
    //     duration: "3 Years",
    //     intake: "50 Seats",
    //     fees: "₹ 15,300 / Semester",
    //     eligibility: "10+2 (Senior Secondary) from a recognized board",
    //     curriculum: [
    //         "English / Hindi Literature",
    //         "History of India & World",
    //         "Political Science & Public Administration",
    //         "Sociology & Social Anthropology",
    //         "Economics & Development Studies",
    //         "Environmental Studies",
    //         "Communication Skills",
    //     ],
    //     careerProspects: [
    //         "Civil Services & Public Administration",
    //         "Journalism & Mass Media",
    //         "Social Work & NGO Management",
    //         "Corporate Communications",
    //         "Higher Studies (M.A., MBA, Law)",
    //     ],
    //     Icon: Palette,
    //     gradient: "from-orange-500 to-amber-500",
    //     heroImage: "/images/seminar.jpeg",
    // },
];

export default function Programmes() {
    const heroRef = useRef<HTMLElement>(null);
    const backgroundRef = useRef<HTMLDivElement>(null);
    const floatingRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const hero = heroRef.current;
        if (!hero) return;

        const ctx = gsap.context(() => {
            // Main Hero Timeline
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            // Background entrance
            tl.fromTo(
                backgroundRef.current,
                { scale: 1.1, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1.5 },
            );

            // Badge/Context reveal
            tl.from(
                ".hero-badge",
                {
                    opacity: 0,
                    y: 20,
                    duration: 0.8,
                },
                "-=1",
            );

            // Title Reveal
            tl.from(
                ".hero-title",
                {
                    opacity: 0,
                    y: 40,
                    duration: 1,
                },
                "-=0.6",
            );

            // Subtitle Reveal
            tl.from(
                ".hero-subtitle",
                {
                    opacity: 0,
                    y: 30,
                    duration: 0.8,
                },
                "-=0.7",
            );

            // Scroll indicator reveal
            tl.from(
                ".scroll-indicator",
                {
                    opacity: 0,
                    y: -20,
                    duration: 0.6,
                },
                "-=0.4",
            );

            // Floating elements continuous animation
            floatingRefs.current.forEach((el, i) => {
                if (el) {
                    gsap.to(el, {
                        y: "random(-25, 25)",
                        x: "random(-15, 15)",
                        rotation: "random(-15, 15)",
                        duration: "random(4, 7)",
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut",
                        delay: i * 0.4,
                    });
                }
            });

            // Program sections reveal logic
            gsap.utils.toArray(".program-section").forEach((section) => {
                gsap.fromTo(
                    section as Element,
                    { opacity: 0, y: 60 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.9,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: section as Element,
                            start: "top 80%",
                            toggleActions: "play none none reverse",
                        },
                    },
                );
            });
        }, hero);

        return () => ctx.revert();
    }, []);

    // Mouse Parallax Effect
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
                    const depth = (i + 1) * 0.4;
                    gsap.to(el, {
                        x: xPercent * 15 * depth,
                        y: yPercent * 10 * depth,
                        duration: 1,
                        ease: "power2.out",
                    });
                }
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const addToFloatingRefs = (el: HTMLDivElement | null) => {
        if (el && !floatingRefs.current.includes(el)) {
            floatingRefs.current.push(el);
        }
    };

    return (
        <main>
            {/* Hero Section */}
            <section
                ref={heroRef}
                className="relative h-[100vh] min-h-[600px] w-full overflow-hidden"
            >
                {/* Background Layer */}
                <div ref={backgroundRef} className="absolute inset-0">
                    <img
                        src="/images/campus-1.png"
                        alt="Academic Programs"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    {/* Multi-layered overlay for depth */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "linear-gradient(135deg, rgba(0, 16, 85, 0.95) 0%, rgba(0, 16, 85, 0.7) 50%, rgba(255, 121, 0, 0.1) 100%)",
                        }}
                    />
                    <div className="absolute inset-0 bg-slate-900/40" />
                </div>

                {/* Grid Pattern Overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }}
                />

                {/* Floating Decorative Elements */}
                <div
                    ref={addToFloatingRefs}
                    className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
                />
                <div
                    ref={addToFloatingRefs}
                    className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-primary/20 rounded-full blur-3xl"
                />
                <div
                    ref={addToFloatingRefs}
                    className="absolute top-1/3 left-10 w-24 h-24 border border-white/10 rounded-full hidden md:block"
                />
                <div
                    ref={addToFloatingRefs}
                    className="absolute bottom-1/3 right-10 w-32 h-32 border border-accent/10 rounded-full hidden md:block"
                />

                {/* Content */}
                <div className="relative z-10 flex h-full items-center pt-[112px]">
                    <Container>
                        <div className="max-w-4xl">
                            {/* Animated Badge */}
                            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 mb-8 glass rounded-full text-white/90 text-sm font-semibold tracking-wide border border-white/10">
                                <span className="w-2 h-2 bg-accent rounded-full animate-pulse shadow-[0_0_10px_rgba(255,121,0,0.8)]" />
                                Comprehensive Academic Portfolio
                            </div>

                            <h1 className="hero-title text-5xl md:text-5xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
                                Academic{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-orange-400 to-amber-300">
                                    Programmes
                                </span>
                            </h1>

                            <p className="hero-subtitle text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl font-light">
                                Empowering the next generation of educators
                                through innovation, excellence, and specialized
                                pedagogical training.
                            </p>

                            {/* Decorative Line */}
                            <div className="mt-12 h-1 w-24 bg-gradient-to-r from-accent to-transparent rounded-full" />
                        </div>
                    </Container>
                </div>

                {/* Scroll Indicator */}
                <div className="scroll-indicator absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
                    <span className="text-white/40 text-sm font-bold tracking-[0.3em] uppercase">
                        Explore
                    </span>
                    <div className="w-[1px] h-16 bg-gradient-to-b from-white/60 to-transparent relative">
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-accent animate-infinite-scroll" />
                    </div>
                </div>
            </section>

            {/* Program Details */}
            {PROGRAMS.map((program, index) => (
                <section
                    key={program.title}
                    className={`program-section py-12 md:py-12 ${index % 2 === 1 ? "bg-slate-50" : "bg-white"}`}
                >
                    <Container>
                        {/* Program Header */}
                        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
                            <div
                                className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${program.gradient} flex items-center justify-center text-white shadow-xl`}
                            >
                                <program.Icon size={32} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                                    {program.title}
                                </h2>
                                <span
                                    className={`text-sm font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r ${program.gradient}`}
                                >
                                    {program.shortTitle}
                                </span>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-10">
                            {/* Left Column - Overview */}
                            <div className="lg:col-span-2 space-y-8">
                                <div>
                                    <p className="text-lg text-slate-600 leading-relaxed">
                                        {program.description}
                                    </p>
                                </div>

                                {/* Quick Stats */}
                                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                    <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-accent/30 transition-colors">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Clock
                                                size={18}
                                                className="text-slate-400"
                                            />
                                            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                                Duration
                                            </span>
                                        </div>
                                        <p className="text-lg font-bold text-slate-900">
                                            {program.duration}
                                        </p>
                                    </div>
                                    <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-accent/30 transition-colors">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Users
                                                size={18}
                                                className="text-slate-400"
                                            />
                                            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                                Intake
                                            </span>
                                        </div>
                                        <p className="text-lg font-bold text-slate-900">
                                            {program.intake}
                                        </p>
                                    </div>
                                    <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-accent/30 transition-colors col-span-2 sm:col-span-2 lg:col-span-2">
                                        <div className="flex items-center gap-3 mb-2">
                                            <IndianRupee
                                                size={18}
                                                className="text-slate-400"
                                            />
                                            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                                Annual Fee Breakdown
                                            </span>
                                        </div>
                                        <p className="text-lg font-bold text-accent">
                                            {program.fees}
                                        </p>
                                    </div>
                                </div>

                                {/* Eligibility */}
                                <div className="p-6 bg-gradient-to-r from-accent/5 to-orange-500/5 rounded-2xl border border-accent/10">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Target
                                            size={22}
                                            className="text-accent"
                                        />
                                        <h3 className="text-lg font-semibold text-slate-900">
                                            Eligibility
                                        </h3>
                                    </div>
                                    <p className="text-slate-600">
                                        {program.eligibility}
                                    </p>
                                </div>

                                {/* Curriculum */}
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                                        <Award
                                            size={20}
                                            className="text-accent"
                                        />
                                        Curriculum & Subjects
                                    </h3>
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {program.curriculum.map((item) => (
                                            <div
                                                key={item}
                                                className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                                            >
                                                <CheckCircle
                                                    size={18}
                                                    className={`mt-0.5 text-green-500 flex-shrink-0`}
                                                />
                                                <span className="text-sm font-medium text-slate-700">
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Career */}
                            <div className="space-y-6">
                                <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                                    <img
                                        src={program.heroImage}
                                        alt={program.title}
                                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <span className="inline-block px-3 py-1 bg-accent/90 text-white text-xs font-bold rounded-full mb-2">
                                            Future Ready
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6 bg-slate-900 rounded-2xl text-white shadow-xl">
                                    <div className="flex items-center gap-3 mb-6">
                                        <Briefcase
                                            size={22}
                                            className="text-accent"
                                        />
                                        <h3 className="text-lg font-semibold">
                                            Career Opportunities
                                        </h3>
                                    </div>
                                    <ul className="space-y-4">
                                        {program.careerProspects.map((item) => (
                                            <li
                                                key={item}
                                                className="flex items-center gap-3 text-white/80"
                                            >
                                                <span
                                                    className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${program.gradient}`}
                                                />
                                                <span className="text-sm">
                                                    {item}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <button
                                    disabled={true}
                                    className={`block text-center w-full px-6 py-4 bg-gradient-to-r ${program.gradient} text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
                                >
                                    To Apply, please visit the college counter
                                    <br />
                                    and receive the application form.
                                </button>
                            </div>
                        </div>
                    </Container>
                </section>
            ))}
        </main>
    );
}

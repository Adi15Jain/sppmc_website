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
} from "lucide-react";
import Container from "../components/layout/Container";

gsap.registerPlugin(ScrollTrigger);

type ProgramDetail = {
    title: string;
    shortTitle: string;
    description: string;
    duration: string;
    intake: string;
    eligibility: string;
    curriculum: string[];
    careerProspects: string[];
    Icon: typeof GraduationCap;
    gradient: string;
    heroImage: string;
};

const PROGRAMS: ProgramDetail[] = [
    {
        title: "Bachelor of Education",
        shortTitle: "B.Ed",
        description:
            "A comprehensive two-year professional program designed to prepare competent secondary school educators with strong pedagogical expertise, subject knowledge, and practical teaching skills.",
        duration: "2 Years (4 Semesters)",
        intake: "100 Seats",
        eligibility:
            "Graduation with minimum 50% marks (45% for reserved categories)",
        curriculum: [
            "Childhood and Growing Up",
            "Contemporary India and Education",
            "Learning and Teaching",
            "Language Across the Curriculum",
            "Understanding Disciplines and Subjects",
            "Pedagogy of School Subjects",
            "Assessment for Learning",
            "Creating an Inclusive School",
            "School Internship",
        ],
        careerProspects: [
            "Secondary School Teacher",
            "Education Administrator",
            "Curriculum Developer",
            "Educational Consultant",
            "Content Writer (Education)",
        ],
        Icon: GraduationCap,
        gradient: "from-orange-500 to-amber-500",
        heroImage: "/images/classroom.jpeg",
    },
    {
        title: "Diploma in Elementary Education",
        shortTitle: "D.El.Ed",
        description:
            "A foundational two-year diploma program focused on developing skilled primary educators with child-centered learning approaches, classroom management skills, and innovative teaching methodologies.",
        duration: "2 Years (4 Semesters)",
        intake: "50 Seats",
        eligibility:
            "10+2 with minimum 50% marks (45% for reserved categories)",
        curriculum: [
            "Childhood and Development of Children",
            "Understanding Society and Education",
            "Pedagogy of Hindi",
            "Pedagogy of Mathematics",
            "Pedagogy of Environmental Studies",
            "Art, Craft and Physical Education",
            "Health and Hygiene",
            "ICT in Education",
            "School Experience Programme",
        ],
        careerProspects: [
            "Primary School Teacher",
            "Pre-Primary Educator",
            "Special Educator (with additional training)",
            "Education Coordinator",
            "Learning Centre Facilitator",
        ],
        Icon: BookOpen,
        gradient: "from-blue-500 to-indigo-500",
        heroImage: "/images/library.jpeg",
    },
];

export default function Programmes() {
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const hero = heroRef.current;
        if (!hero) return;

        const ctx = gsap.context(() => {
            // Hero animations
            gsap.fromTo(
                ".hero-title",
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1, ease: "power4.out" },
            );

            gsap.fromTo(
                ".hero-subtitle",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: 0.2,
                    ease: "power3.out",
                },
            );

            // Program sections
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

    return (
        <main>
            {/* Hero Section */}
            <section
                ref={heroRef}
                className="relative h-[60vh] min-h-[400px] overflow-hidden"
            >
                <img
                    src="/images/campus-1.png"
                    alt="Academic Programs"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50" />

                <div className="relative z-10 flex h-full items-center pt-[112px]">
                    <Container>
                        <div className="max-w-3xl">
                            <h1 className="hero-title text-4xl md:text-6xl font-bold text-white mb-4">
                                Academic{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">
                                    Programmes
                                </span>
                            </h1>
                            <p className="hero-subtitle text-xl text-white/80 leading-relaxed">
                                Explore our nationally recognized education
                                programs designed to create transformative
                                teaching professionals.
                            </p>
                        </div>
                    </Container>
                </div>
            </section>

            {/* Program Details */}
            {PROGRAMS.map((program, index) => (
                <section
                    key={program.title}
                    className={`program-section py-16 md:py-24 ${index % 2 === 1 ? "bg-slate-50" : ""}`}
                >
                    <Container>
                        {/* Program Header */}
                        <div className="flex items-start gap-6 mb-10">
                            <div
                                className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${program.gradient} flex items-center justify-center text-white shadow-xl`}
                            >
                                <program.Icon size={32} strokeWidth={1.5} />
                            </div>
                            <div>
                                <span
                                    className={`text-sm font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r ${program.gradient}`}
                                >
                                    {program.shortTitle}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-1">
                                    {program.title}
                                </h2>
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
                                <div className="grid sm:grid-cols-3 gap-4">
                                    <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Clock
                                                size={20}
                                                className="text-accent"
                                            />
                                            <span className="text-sm font-medium text-slate-500">
                                                Duration
                                            </span>
                                        </div>
                                        <p className="text-lg font-semibold text-slate-900">
                                            {program.duration}
                                        </p>
                                    </div>
                                    <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Users
                                                size={20}
                                                className="text-accent"
                                            />
                                            <span className="text-sm font-medium text-slate-500">
                                                Intake
                                            </span>
                                        </div>
                                        <p className="text-lg font-semibold text-slate-900">
                                            {program.intake}
                                        </p>
                                    </div>
                                    <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Award
                                                size={20}
                                                className="text-accent"
                                            />
                                            <span className="text-sm font-medium text-slate-500">
                                                Affiliation
                                            </span>
                                        </div>
                                        <p className="text-lg font-semibold text-slate-900">
                                            SCERT, UP
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
                                    <h3 className="text-xl font-semibold text-slate-900 mb-4">
                                        Curriculum Highlights
                                    </h3>
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {program.curriculum.map((item) => (
                                            <div
                                                key={item}
                                                className="flex items-center gap-3 text-slate-600"
                                            >
                                                <CheckCircle
                                                    size={18}
                                                    className="text-green-500 flex-shrink-0"
                                                />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Career */}
                            <div className="space-y-6">
                                <div className="p-6 bg-slate-900 rounded-2xl text-white">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Briefcase size={22} />
                                        <h3 className="text-lg font-semibold">
                                            Career Prospects
                                        </h3>
                                    </div>
                                    <ul className="space-y-3">
                                        {program.careerProspects.map((item) => (
                                            <li
                                                key={item}
                                                className="flex items-center gap-3 text-white/80"
                                            >
                                                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="relative overflow-hidden rounded-2xl">
                                    <img
                                        src={program.heroImage}
                                        alt={program.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                </div>

                                <a
                                    href="/admissions"
                                    className={`block text-center px-6 py-4 bg-gradient-to-r ${program.gradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300`}
                                >
                                    Apply for {program.shortTitle}
                                </a>
                            </div>
                        </div>
                    </Container>
                </section>
            ))}
        </main>
    );
}

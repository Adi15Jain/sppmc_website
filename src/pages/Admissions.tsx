import { useState, useEffect, useRef } from "react";
import {
    Megaphone,
    FileText,
    Target,
    ClipboardCheck,
    CreditCard,
    GraduationCap,
    UserCheck,
    Landmark,
    Sparkles,
    Calendar,
    Phone,
    Mail,
    Check,
    Users,
    ArrowRight,
    Clock,
    FileCheck,
} from "lucide-react";
import Container from "../components/layout/Container";
import "../styles/admissions.css";

// ============================================
// DATA
// ============================================

const PROCESS_STEPS = [
    {
        step: "01",
        title: "Admission Notification",
        description:
            "Admission notifications are released by the competent authority as per the academic calendar. Stay updated through official channels.",
        icon: Megaphone,
    },
    {
        step: "02",
        title: "Online Application",
        description:
            "Complete online registration and submit the application form with required documents through the official portal.",
        icon: FileText,
    },
    {
        step: "03",
        title: "Entrance / Counseling",
        description:
            "Admission is conducted through entrance examination and/or counseling process as per SCERT guidelines.",
        icon: Target,
    },
    {
        step: "04",
        title: "Document Verification",
        description:
            "Original documents are verified by the admission committee and seats are allotted based on merit.",
        icon: ClipboardCheck,
    },
    {
        step: "05",
        title: "Fee Submission",
        description:
            "Selected candidates confirm admission by paying the prescribed fees within the stipulated timeframe.",
        icon: CreditCard,
    },
];

const ELIGIBILITY_DATA = [
    {
        program: "B.Ed",
        badge: "Bachelor of Education",
        duration: "2 Years",
        points: [
            "Graduation in any discipline with minimum marks as per SCERT norms",
            "Valid entrance examination score (if applicable)",
            "Admission through official UP counseling process",
            "Age criteria as per government guidelines",
        ],
        gradient: "from-orange-500 to-amber-500",
    },
    {
        program: "D.El.Ed",
        badge: "Diploma in Elementary Education",
        duration: "2 Years",
        points: [
            "10+2 or equivalent qualification from recognized board",
            "Minimum marks as per government eligibility norms",
            "Selection through counseling process",
            "Domicile of Uttar Pradesh (if required)",
        ],
        gradient: "from-orange-500 to-amber-500",
    },
];

const QUICK_STATS = [
    { label: "Programs", value: "B.Ed, D.El.Ed", icon: GraduationCap },
    { label: "Admission Mode", value: "Merit/Counseling", icon: UserCheck },
    { label: "Authority", value: "SCERT, UP", icon: Landmark },
    { label: "Status", value: "Admissions Open", icon: Sparkles },
];

const REQUIRED_DOCUMENTS = [
    { name: "Marksheets of qualifying examinations", category: "Academic" },
    { name: "Transfer Certificate (TC)", category: "Academic" },
    { name: "Migration Certificate (if applicable)", category: "Academic" },
    { name: "Character Certificate", category: "Personal" },
    { name: "Caste Certificate (if applicable)", category: "Personal" },
    { name: "Domicile Certificate", category: "Personal" },
    { name: "Passport-size photographs (recent)", category: "Identity" },
    {
        name: "Government-issued ID proof (Aadhar/Voter ID)",
        category: "Identity",
    },
    { name: "Income Certificate (for scholarship)", category: "Financial" },
];

const IMPORTANT_DATES = [
    {
        event: "Application Start",
        date: "As per SCERT notification",
        status: "upcoming",
        icon: Calendar,
    },
    {
        event: "Last Date to Apply",
        date: "Check official portal",
        status: "upcoming",
        icon: Clock,
    },
    {
        event: "Counseling Schedule",
        date: "Post-notification",
        status: "upcoming",
        icon: Users,
    },
    {
        event: "Classes Commence",
        date: "As per academic calendar",
        status: "upcoming",
        icon: GraduationCap,
    },
];

// ============================================
// SCROLL ANIMATION HOOK
// ============================================

function useScrollAnimation(threshold = 0.1) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold },
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [threshold]);

    return { ref, isVisible };
}

// ============================================
// ANIMATED SECTION WRAPPER
// ============================================

function AnimatedSection({
    children,
    className = "",
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out ${className}`}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(60px)",
                transitionDelay: `${delay}ms`,
            }}
        >
            {children}
        </div>
    );
}

// ============================================
// MAIN COMPONENT
// ============================================

export default function Admissions() {
    return (
        <main className="overflow-x-hidden">
            {/* ==========================================
                SECTION 1: IMMERSIVE HERO
               ========================================== */}
            <section className="admissions-hero relative min-h-screen overflow-hidden">
                {/* Background layers */}
                <div className="absolute inset-0">
                    <img
                        src="/images/academics.jpg"
                        alt="SPPMC Campus"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 admissions-hero-gradient" />
                    <div className="absolute inset-0 admissions-hero-mesh opacity-70" />
                </div>

                {/* Floating decorative elements */}
                <div className="absolute top-20 right-[15%] w-32 h-32 bg-accent/15 rounded-full animate-morph-blob hidden md:block" />
                <div
                    className="absolute top-[40%] right-10 w-20 h-20 border-2 border-white/10 rounded-full animate-float-rotate hidden md:block"
                    style={{ animationDelay: "1s" }}
                />
                <div
                    className="absolute bottom-32 left-[10%] w-24 h-24 bg-white/5 rounded-full animate-float-rotate hidden md:block"
                    style={{ animationDelay: "2s" }}
                />
                <div className="absolute bottom-24 right-[25%] w-3 h-3 bg-accent rounded-full animate-particle" />
                <div
                    className="absolute top-[35%] left-16 w-2 h-2 bg-white/40 rounded-full animate-particle"
                    style={{ animationDelay: "1.5s" }}
                />

                {/* Content */}
                <div className="relative z-10 flex h-full min-h-screen items-center pt-[112px]">
                    <Container>
                        <div className="max-w-4xl">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-3 px-5 py-2.5 mb-8 glass rounded-full text-white/90 text-sm font-medium animate-text-blur">
                                <span className="w-2 h-2 bg-accent rounded-full animate-pulse shadow-[0_0_10px_rgba(255,121,0,0.8)]" />
                                Admissions 2024-25
                            </div>

                            {/* Main Heading */}
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white animate-text-blur animate-delay-200 tracking-tight">
                                Begin Your
                                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-accent via-orange-400 to-amber-300">
                                    Teaching Journey
                                </span>
                            </h1>

                            {/* Subtitle */}
                            <p className="mt-8 text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl animate-reveal-up animate-delay-400 font-light">
                                A step-by-step guide to joining our prestigious
                                teacher education programs. Shape the future of
                                education with us.
                            </p>

                            {/* CTA Buttons */}
                            <div className="mt-8 flex flex-wrap gap-4 animate-reveal-up animate-delay-600">
                                <a
                                    href="#apply"
                                    className="group btn-primary px-8 py-4 text-lg flex items-center gap-2"
                                >
                                    Apply Now
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a
                                    href="#eligibility"
                                    className="btn-glass hover:border-white/40 px-8 py-4"
                                >
                                    Check Eligibility
                                </a>
                            </div>

                            {/* Quick Stats */}
                            <div className="mt-12 flex flex-wrap gap-8 md:gap-12 animate-reveal-up animate-delay-800">
                                {[
                                    { value: "2", label: "Programs" },
                                    { value: "NCTE", label: "Approved" },
                                    {
                                        value: "100%",
                                        label: "Placement Support",
                                    },
                                ].map((stat) => (
                                    <div
                                        key={stat.label}
                                        className="text-center"
                                    >
                                        <div className="text-3xl md:text-4xl font-bold text-accent">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm text-white/60 mt-1 uppercase tracking-wider font-semibold">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Container>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-fade-in animate-delay-1000">
                    <span className="text-white/50 text-[10px] font-bold tracking-[0.3em] uppercase">
                        Explore
                    </span>
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                        <div className="w-1.5 h-3 bg-accent rounded-full animate-bounce shadow-[0_0_8px_rgba(255,121,0,0.6)]" />
                    </div>
                </div>
            </section>

            {/* ==========================================
                SECTION 2: AT A GLANCE
               ========================================== */}
            <section className="py-16 bg-gradient-to-b from-[#f8f9fa] to-white">
                <Container>
                    <AnimatedSection className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
                            Quick Overview
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-heading">
                            Admissions at a Glance
                        </h2>
                    </AnimatedSection>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {QUICK_STATS.map((stat, index) => (
                            <AnimatedSection
                                key={stat.label}
                                delay={index * 100}
                            >
                                <div className="admissions-stat-card group">
                                    <div className="inline-flex p-3 rounded-2xl bg-accent/10 mb-4 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                                        <stat.icon className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
                                    </div>
                                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">
                                        {stat.label}
                                    </p>
                                    <p className="admissions-stat-value">
                                        {stat.value}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ==========================================
                SECTION 3: ELIGIBILITY CRITERIA
               ========================================== */}
            <section id="eligibility" className="py-12 bg-white">
                <Container>
                    <AnimatedSection className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                            Who Can Apply
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-heading">
                            Eligibility Criteria
                        </h2>
                        <p className="mt-4 text-lg text-body max-w-2xl mx-auto">
                            Check if you meet the requirements for our teacher
                            education programs
                        </p>
                    </AnimatedSection>

                    <div className="grid gap-8 lg:grid-cols-2">
                        {ELIGIBILITY_DATA.map((program, index) => (
                            <AnimatedSection
                                key={program.program}
                                delay={index * 150}
                            >
                                <div className="admissions-eligibility-card h-full">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-8">
                                        <div>
                                            <span
                                                className={`admissions-eligibility-badge bg-gradient-to-r ${program.gradient} text-white`}
                                            >
                                                {program.badge}
                                            </span>
                                            <h3 className="text-3xl font-bold text-heading mt-4">
                                                {program.program} Program
                                            </h3>
                                        </div>
                                        <div className="text-right glass-card p-3 rounded-2xl border border-slate-100 shadow-sm">
                                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                                                Duration
                                            </span>
                                            <p className="text-2xl font-bold text-primary">
                                                {program.duration}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Requirements list */}
                                    <ul className="space-y-4">
                                        {program.points.map((point, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-4 group"
                                            >
                                                <div className="mt-1 p-1 rounded-full bg-accent/10 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                                                    <Check className="w-3 h-3 text-accent group-hover:text-white" />
                                                </div>
                                                <span className="text-body leading-relaxed group-hover:text-slate-900 transition-colors">
                                                    {point}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ==========================================
                SECTION 4: ADMISSION PROCESS TIMELINE
               ========================================== */}
            <section
                id="process"
                className="py-16 relative overflow-hidden"
                style={{
                    background:
                        "linear-gradient(135deg, #001055 0%, #1a2a6c 50%, #001866 100%)",
                }}
            >
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"
                        style={{ transform: "translate(-50%, -50%)" }}
                    />
                    <div
                        className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl"
                        style={{ transform: "translate(50%, 50%)" }}
                    />
                </div>

                <Container className="relative z-10">
                    <AnimatedSection className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-4 border border-white/10">
                            Step by Step
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                            Admission Process
                        </h2>
                        <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto font-light">
                            Follow these steps to complete your admission
                            journey
                        </p>
                    </AnimatedSection>

                    <div className="max-w-3xl mx-auto admissions-timeline">
                        {PROCESS_STEPS.map((step, index) => (
                            <AnimatedSection
                                key={step.step}
                                delay={index * 150}
                                className="admissions-timeline-step"
                            >
                                <div className="admissions-step-number">
                                    {step.step}
                                </div>
                                <div className="glass-card-dark p-8 rounded-3xl hover:bg-white/10 transition-all duration-500 group border border-white/5">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 rounded-2xl bg-white/10 group-hover:bg-accent group-hover:scale-110 transition-all duration-500">
                                            <step.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white">
                                            {step.title}
                                        </h3>
                                    </div>
                                    <p className="text-white/70 leading-relaxed font-light">
                                        {step.description}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ==========================================
                SECTION 5: REQUIRED DOCUMENTS
               ========================================== */}
            <section className="py-16 bg-gradient-to-b from-white to-[#f8f9fa]">
                <Container>
                    <AnimatedSection className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
                            Be Prepared
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-heading">
                            Required Documents
                        </h2>
                        <p className="mt-4 text-lg text-body max-w-2xl mx-auto">
                            Keep these documents ready for a smooth admission
                            process
                        </p>
                    </AnimatedSection>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {REQUIRED_DOCUMENTS.map((doc, index) => (
                            <AnimatedSection key={doc.name} delay={index * 75}>
                                <div className="admissions-doc-card group flex items-center gap-4 hover:bg-slate-50 transition-colors">
                                    <div className="admissions-doc-icon bg-gradient-to-br from-primary to-primary-light group-hover:from-accent group-hover:to-orange-400 transition-all duration-500">
                                        <FileCheck className="w-4 h-4" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm text-heading font-bold truncate group-hover:text-primary transition-colors">
                                            {doc.name}
                                        </p>
                                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                                            {doc.category}
                                        </span>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ==========================================
                SECTION 6: IMPORTANT DATES
               ========================================== */}
            <section className="py-16 bg-white">
                <Container>
                    <AnimatedSection className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                            Mark Your Calendar
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-heading">
                            Important Dates
                        </h2>
                        <p className="mt-4 text-lg text-body max-w-2xl mx-auto">
                            Stay updated with key admission deadlines
                        </p>
                    </AnimatedSection>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {IMPORTANT_DATES.map((item, index) => (
                            <AnimatedSection
                                key={item.event}
                                delay={index * 100}
                            >
                                <div className="admissions-date-card group h-full hover:bg-white transition-all duration-500">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="p-3 rounded-2xl bg-accent/5 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                                            <item.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                                        </div>
                                        <span
                                            className={`admissions-date-badge ${item.status === "active" ? "active" : ""}`}
                                        >
                                            <span className="w-1.5 h-1.5 bg-current rounded-full" />
                                            {item.status === "active"
                                                ? "Active"
                                                : "Upcoming"}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-heading mb-2 group-hover:text-primary transition-colors">
                                        {item.event}
                                    </h3>
                                    <p className="text-base text-primary font-bold tracking-tight">
                                        {item.date}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    {/* Note */}
                    <AnimatedSection delay={500} className="mt-12">
                        <div className="bg-gradient-to-r from-accent/5 to-primary/5 border border-accent/20 rounded-2xl p-6 md:p-8 text-center backdrop-blur-sm">
                            <p className="text-body">
                                <span className="font-bold text-heading uppercase tracking-widest text-sm mr-2">
                                    Notice:
                                </span>{" "}
                                Dates are subject to change. Please check the
                                official SCERT, UP portal for the latest
                                updates.
                            </p>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* ==========================================
                SECTION 7: CTA - READY TO APPLY
               ========================================== */}
            <section id="apply" className="admissions-cta py-20 relative">
                {/* Decorative circles */}
                <div className="admissions-cta-decoration" />
                <div className="admissions-cta-decoration" />
                <div className="admissions-cta-decoration" />

                <Container className="relative z-10">
                    <AnimatedSection className="text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
                            Ready to Shape the
                            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-accent via-orange-400 to-amber-300">
                                Future of Education?
                            </span>
                        </h2>
                        <p className="text-xl text-white/80 mb-12 leading-relaxed font-light">
                            Begin your journey towards becoming a distinguished
                            educator. Join SPPMC and make a difference in the
                            lives of students.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6">
                            <a
                                href="https://scertup.org"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group btn-primary bg-white text-primary hover:bg-white/90 px-10 py-5 text-lg shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.4)] transition-all flex items-center gap-2"
                            >
                                Apply Through SCERT Portal
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="/contact"
                                className="btn-glass border-white/30 hover:border-white/50 px-10 py-5 text-lg backdrop-blur-md"
                            >
                                Contact Us
                            </a>
                        </div>

                        {/* Contact info */}
                        <div className="mt-16 flex flex-wrap justify-center gap-10 text-white/70">
                            <div className="flex items-center gap-3 glass-card px-4 py-2 rounded-full border border-white/5">
                                <Phone className="w-4 h-4 text-accent" />
                                <span className="font-medium">
                                    +91-591-2460664
                                </span>
                            </div>
                            <div className="flex items-center gap-3 glass-card px-4 py-2 rounded-full border border-white/5">
                                <Mail className="w-4 h-4 text-accent" />
                                <span className="font-medium">
                                    principal@sppmc.in
                                </span>
                            </div>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>
        </main>
    );
}

import { useState, useEffect, useRef } from "react";
import {
    Eye,
    Target,
    BookOpen,
    Users,
    Lightbulb,
    Award,
    MapPin,
    Phone,
} from "lucide-react";
import Container from "../components/layout/Container";
import "../styles/about.css";

// ============================================
// DATA
// ============================================

const COLLEGE_STATS = [
    { value: "2010", label: "Established", suffix: "" },
    { value: "9,138+", label: "Library Books", suffix: "" },
    { value: "100%", label: "Placement Support", suffix: "" },
    { value: "NCTE", label: "Approved", suffix: "" },
];

const MISSION_POINTS = [
    {
        icon: <BookOpen className="w-6 h-6 text-accent" />,
        text: "Deliver quality professional education that meets national standards",
    },
    {
        icon: <Users className="w-6 h-6 text-accent" />,
        text: "Promote ethical values, social responsibility, and moral integrity",
    },
    {
        icon: <Lightbulb className="w-6 h-6 text-accent" />,
        text: "Encourage reflective, innovative, and research-based teaching",
    },
    {
        icon: <Award className="w-6 h-6 text-accent" />,
        text: "Develop competent, confident, and committed educators",
    },
];

const FACILITIES = [
    {
        title: "Smart Classrooms",
        description:
            "ICT-enabled rooms with projectors and digital boards for interactive learning",
        image: "/images/classroom.jpeg",
        stats: "10+ Rooms",
    },
    {
        title: "Digital Library",
        description:
            "Well-stocked library with 9,138+ books, journals, magazines, and encyclopedias",
        image: "/images/library.jpeg",
        stats: "9,138+ Books",
    },
    {
        title: "ET & ICT Lab",
        description:
            "High-speed internet, language lab, and modern computers for 100 students",
        image: "/images/seminar.jpeg",
        stats: "100 Workstations",
    },
    {
        title: "Seminar Hall",
        description:
            "Multipurpose hall for conferences, workshops, and cultural events",
        image: "/images/event.jpeg",
        stats: "200+ Capacity",
    },
];

const MANAGEMENT = [
    {
        name: "Shri Pawan Kumar Agarwal",
        position: "President",
        initials: "PKA",
    },
    {
        name: "Shri Manoj Kumar Agarwal",
        position: "General Secretary",
        initials: "MKA",
    },
    {
        name: "Shri Sanjay Kumar Agarwal",
        position: "Secretary",
        initials: "SKA",
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

export default function About() {
    return (
        <main className="overflow-x-hidden">
            {/* ==========================================
                SECTION 1: IMMERSIVE HERO
               ========================================== */}
            <section className="about-hero relative min-h-screen overflow-hidden">
                {/* Background layers */}
                <div className="absolute inset-0">
                    <img
                        src="/images/campus-1.png"
                        alt="SPPMC Campus"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 about-hero-gradient" />
                    <div className="absolute inset-0 about-hero-mesh opacity-80" />
                </div>

                {/* Floating decorative elements */}
                <div className="absolute top-24 right-[12%] w-36 h-36 bg-accent/10 rounded-full animate-morph-blob hidden md:block" />
                <div
                    className="absolute top-[45%] right-16 w-24 h-24 border-2 border-white/10 rounded-full animate-float-rotate hidden md:block"
                    style={{ animationDelay: "1s" }}
                />
                <div
                    className="absolute bottom-28 left-[8%] w-20 h-20 bg-white/5 rounded-full animate-float-rotate hidden md:block"
                    style={{ animationDelay: "2s" }}
                />
                <div className="absolute bottom-20 right-[30%] w-3 h-3 bg-accent rounded-full animate-particle" />
                <div
                    className="absolute top-[30%] left-20 w-2 h-2 bg-white/50 rounded-full animate-particle"
                    style={{ animationDelay: "1.5s" }}
                />

                {/* Content */}
                <div className="relative z-10 flex h-full min-h-screen items-center pt-[112px]">
                    <Container>
                        <div className="max-w-4xl">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-3 px-5 py-2.5 mb-2 glass rounded-full text-white/90 text-sm font-medium animate-text-blur">
                                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                                Since 2010 • Affiliated to SCERT, UP
                            </div>

                            {/* Main Heading */}
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white animate-text-blur animate-delay-200">
                                Shaping the
                                <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-accent via-orange-400 to-amber-300">
                                    Future of Education
                                </span>
                            </h1>

                            {/* Subtitle */}
                            <p className="mt-4 text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl animate-reveal-up animate-delay-400">
                                A legacy of excellence in teacher education,
                                guided by values, discipline, and unwavering
                                commitment to academic integrity.
                            </p>

                            {/* CTA Buttons */}
                            <div className="mt-8 flex flex-wrap gap-4 animate-reveal-up animate-delay-600">
                                <a
                                    href="#story"
                                    className="btn-primary px-8 py-4 text-lg"
                                >
                                    Discover Our Story
                                </a>
                                <a
                                    href="#management"
                                    className="btn-glass hover:border-white/40 px-8 py-4"
                                >
                                    Meet Our Team
                                </a>
                            </div>

                            {/* Quick Stats */}
                            <div className="mt-4 grid grid-cols-2 md:flex md:flex-wrap gap-4 md:gap-0 animate-reveal-up animate-delay-800">
                                {COLLEGE_STATS.map((stat, index) => (
                                    <div
                                        key={stat.label}
                                        className="about-stat-item text-center px-6"
                                        style={{
                                            animationDelay: `${800 + index * 100}ms`,
                                        }}
                                    >
                                        <div className="about-stat-value">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm text-white/60">
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
                    <span className="text-white/50 text-xs font-medium tracking-widest uppercase">
                        Scroll
                    </span>
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                        <div className="w-1.5 h-3 bg-accent rounded-full animate-bounce" />
                    </div>
                </div>
            </section>

            {/* ==========================================
                SECTION 2: OUR STORY / JOURNEY
               ========================================== */}
            <section
                id="story"
                className="py-12 bg-gradient-to-b from-[#f8f9fa] to-white"
            >
                <Container>
                    <AnimatedSection className="text-center mb-16">
                        <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary bg-primary/5 rounded-full border border-primary/10 mb-6">
                            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                            Our Journey
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-heading">
                            A Legacy of Excellence
                        </h2>
                        <p className="mt-4 text-lg text-body max-w-2xl mx-auto">
                            Building tomorrow's educators with values,
                            knowledge, and vision
                        </p>
                    </AnimatedSection>

                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        {/* Content */}
                        <AnimatedSection>
                            <div className="about-journey-card">
                                <h3 className="text-2xl font-bold text-heading mb-6">
                                    The SPPMC Story
                                </h3>
                                <div className="space-y-4 text-body leading-relaxed">
                                    <p>
                                        <strong className="text-heading">
                                            Shri Prem Prakash Memorial College
                                        </strong>{" "}
                                        was established with a profound vision –
                                        to strengthen the very foundation of
                                        education by preparing capable,
                                        committed, and compassionate teachers.
                                    </p>
                                    <p>
                                        Named in honor of Late Shri Prem Prakash
                                        Ji, whose life exemplified dedication to
                                        education and social welfare, the
                                        college carries forward his legacy of
                                        nurturing minds and building character.
                                    </p>
                                    <p>
                                        Affiliated to{" "}
                                        <strong className="text-heading">
                                            SCERT, Government of Uttar Pradesh
                                        </strong>
                                        , we follow national standards while
                                        promoting ethical values, professional
                                        excellence, and a deep sense of social
                                        responsibility in every educator we
                                        shape.
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Image Grid */}
                        <AnimatedSection delay={200}>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="about-facility-card">
                                    <img
                                        src="/images/classroom.jpeg"
                                        alt="Classroom"
                                    />
                                    <div className="about-facility-overlay" />
                                    <div className="about-facility-content">
                                        <h4 className="text-white font-bold">
                                            Modern Classrooms
                                        </h4>
                                        <p className="about-facility-desc text-white/70 text-sm mt-1">
                                            ICT-enabled learning
                                        </p>
                                    </div>
                                </div>
                                <div className="about-facility-card">
                                    <img
                                        src="/images/library.jpeg"
                                        alt="Library"
                                    />
                                    <div className="about-facility-overlay" />
                                    <div className="about-facility-content">
                                        <h4 className="text-white font-bold">
                                            Digital Library
                                        </h4>
                                        <p className="about-facility-desc text-white/70 text-sm mt-1">
                                            9,138+ resources
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </Container>
            </section>

            {/* ==========================================
                SECTION 3: VISION & MISSION
               ========================================== */}
            <section id="vision" className="py-12 bg-white">
                <Container>
                    <AnimatedSection className="text-center mb-12">
                        <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary bg-primary/5 rounded-full border border-primary/10 mb-6">
                            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                            Our Purpose
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-heading">
                            Vision & Mission
                        </h2>
                        <p className="mt-4 text-lg text-body max-w-2xl mx-auto">
                            Guiding principles that shape our educational
                            philosophy
                        </p>
                    </AnimatedSection>

                    <div className="grid gap-8 lg:grid-cols-2">
                        {/* Vision Card */}
                        <AnimatedSection>
                            <div className="about-vision-card h-full">
                                <div className="about-vision-icon bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                                    <Eye className="w-8 h-8 text-accent" />
                                </div>
                                <h3 className="text-2xl font-bold text-heading mb-4">
                                    Our Vision
                                </h3>
                                <p className="text-lg text-body leading-relaxed">
                                    To emerge as a{" "}
                                    <strong className="text-accent">
                                        center of excellence
                                    </strong>{" "}
                                    in teacher education by nurturing
                                    innovation, integrity, and lifelong
                                    learning. We envision educators who are not
                                    just teachers, but
                                    <strong className="text-accent">
                                        {" "}
                                        transformers of society
                                    </strong>
                                    .
                                </p>
                                <div className="mt-6 flex items-center gap-3 text-sm text-accent font-medium">
                                    <span className="w-8 h-0.5 bg-accent rounded-full" />
                                    Excellence in Education
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Mission Card */}
                        <AnimatedSection delay={150}>
                            <div className="about-vision-card h-full">
                                <div className="about-vision-icon bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                                    <Target className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold text-heading mb-4">
                                    Our Mission
                                </h3>
                                <ul className="space-y-4">
                                    {MISSION_POINTS.map((point, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-4 group"
                                        >
                                            <span className="text-xl group-hover:scale-110 transition-transform">
                                                {point.icon}
                                            </span>
                                            <span className="text-body leading-relaxed">
                                                {point.text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedSection>
                    </div>
                </Container>
            </section>

            {/* ==========================================
                SECTION 4: PRINCIPAL'S MESSAGE
               ========================================== */}
            <section
                id="principal"
                className="py-12 relative overflow-hidden about-principal-section"
                style={{
                    background:
                        "linear-gradient(135deg, #001055 0%, #1a2a6c 50%, #001866 100%)",
                }}
            >
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"
                        style={{ transform: "translate(30%, -30%)" }}
                    />
                    <div
                        className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full blur-3xl"
                        style={{ transform: "translate(-30%, 30%)" }}
                    />
                </div>

                <Container className="relative z-10">
                    <AnimatedSection className="text-center mb-12">
                        <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-4">
                            Leadership
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Principal's Message
                        </h2>
                    </AnimatedSection>

                    <AnimatedSection delay={200}>
                        <div className="max-w-4xl mx-auto">
                            <div className="glass-card-dark p-8 md:p-12 rounded-3xl">
                                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                                    {/* Image */}
                                    <div className="flex-shrink-0">
                                        <div className="about-principal-image">
                                            <img
                                                src="/images/principal.jpeg"
                                                alt="Principal"
                                            />
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div className="relative flex-1 text-center md:text-left">
                                        <span className="about-quote-mark">
                                            "
                                        </span>
                                        <blockquote className="relative z-10">
                                            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-6">
                                                Education is the cornerstone of
                                                a progressive society. Our
                                                institution strives to prepare
                                                educators who are intellectually
                                                capable, morally upright, and
                                                socially responsible.
                                            </p>
                                            <p className="text-lg text-white/70 leading-relaxed">
                                                We emphasize discipline,
                                                professionalism, and continuous
                                                improvement in teaching and
                                                learning. Together, we are
                                                building the future of
                                                education.
                                            </p>
                                        </blockquote>
                                        <footer className="mt-8">
                                            <div className="text-accent font-bold text-lg">
                                                Dr. (Principal Name)
                                            </div>
                                            <div className="text-white/60 text-sm">
                                                Principal, SPPMC
                                            </div>
                                        </footer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* ==========================================
                SECTION 5: MANAGEMENT TEAM
               ========================================== */}
            <section
                id="management"
                className="py-12 bg-gradient-to-b from-white to-[#f8f9fa]"
            >
                <Container>
                    <AnimatedSection className="text-center mb-12">
                        <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
                            Our Leadership
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-heading">
                            Managing Committee
                        </h2>
                        <p className="mt-4 text-lg text-body max-w-2xl mx-auto">
                            Dedicated leaders guiding our institution towards
                            excellence
                        </p>
                    </AnimatedSection>

                    <div className="grid gap-8 md:grid-cols-3">
                        {MANAGEMENT.map((member, index) => (
                            <AnimatedSection
                                key={member.name}
                                delay={index * 150}
                            >
                                <div className="about-management-card">
                                    <div className="about-management-avatar">
                                        {member.initials}
                                    </div>
                                    <h3 className="text-xl font-bold text-heading mb-1">
                                        {member.name}
                                    </h3>
                                    <p className="text-accent font-medium">
                                        {member.position}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ==========================================
                SECTION 6: INFRASTRUCTURE & FACILITIES
               ========================================== */}
            <section className="py-12 bg-white">
                <Container>
                    <AnimatedSection className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                            World-Class Amenities
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-heading">
                            Infrastructure & Facilities
                        </h2>
                        <p className="mt-4 text-lg text-body max-w-2xl mx-auto">
                            State-of-the-art campus designed for holistic
                            development
                        </p>
                    </AnimatedSection>

                    {/* Facilities Grid */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
                        {FACILITIES.map((facility, index) => (
                            <AnimatedSection
                                key={facility.title}
                                delay={index * 100}
                            >
                                <div className="about-facility-card">
                                    <img
                                        src={facility.image}
                                        alt={facility.title}
                                    />
                                    <div className="about-facility-overlay" />
                                    <div className="about-facility-content">
                                        <span className="inline-block px-2 py-1 bg-accent text-white text-xs font-semibold rounded mb-2">
                                            {facility.stats}
                                        </span>
                                        <h4 className="text-white font-bold text-lg">
                                            {facility.title}
                                        </h4>
                                        <p className="about-facility-desc text-white/80 text-sm mt-2">
                                            {facility.description}
                                        </p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ==========================================
                SECTION 7: CTA - JOIN US
               ========================================== */}
            <section className="about-cta py-24 relative">
                {/* Animated lines */}
                <div className="about-cta-line" />
                <div className="about-cta-line" />
                <div className="about-cta-line" />

                <Container className="relative z-10">
                    <AnimatedSection className="text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Ready to Begin Your
                            <span className="block text-gradient-primary mt-2">
                                Teaching Journey?
                            </span>
                        </h2>
                        <p className="text-xl text-white/80 mb-10 leading-relaxed">
                            Join a community of dedicated educators and shape
                            the future of education with us at SPPMC.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="/admissions"
                                className="btn-primary bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all"
                            >
                                Apply for Admission
                            </a>
                            <a
                                href="/contact"
                                className="btn-glass border-white/30 hover:border-white/50 px-8 py-4 text-lg"
                            >
                                Contact Us
                            </a>
                        </div>

                        {/* Contact info */}
                        <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/70">
                            <div className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-accent" />
                                <span>Moradabad, Uttar Pradesh</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-5 h-5 text-accent" />
                                <span>+91-591-2460664</span>
                            </div>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>
        </main>
    );
}

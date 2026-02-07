import { useState, useEffect, useRef } from "react";
import {
    // Eye,
    // Target,
    // BookOpen,
    // Users,
    // Lightbulb,
    // Award,
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
        name: "Mr Deepak Malik",
        position: "President",
        initials: "DM",
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

const UNDERTAKING_TABLE = [
    {
        label: "a) Sanctioned programmes & intake",
        value: "D.El.Ed.",
    },
    {
        label: "b) Faculty/Staff Details",
        value: "N.A.",
    },
    {
        label: "c) Last quarter movement",
        value: "N.A.",
    },
    {
        label: "d) Current session admissions",
        value: "N.A.",
    },
    {
        label: "e) Fee Structure",
        value: "N.A.",
    },
    {
        label: "f) Infrastructural facilities",
        value: "As per NCTE",
    },
    {
        label: "g) Recent facility additions",
        value: "As per NCTE",
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

                    <div className="grid gap-8 lg:grid-cols-2">
                        {/* Card 1: About the College */}
                        <AnimatedSection>
                            <div className="about-journey-card h-full">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                                    <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                                    Institutional Profile
                                </div>
                                <h3 className="text-2xl font-bold text-heading mb-6">
                                    About The College
                                </h3>
                                <div className="space-y-6 text-body leading-relaxed text-md">
                                    <p>
                                        The Shri PREM PRAKASH MEMORIAL COLLEGE,
                                        established with an aim to impart high
                                        quality education to prospective
                                        teachers. The College is committed to
                                        nurture, motivate and empower the future
                                        teachers who will serve as beacon lights
                                        for posterity, and meet the challenges
                                        and demands of the globalised world.
                                    </p>
                                    <p>
                                        The courses are designed in such a
                                        manner so as to help the students
                                        broaden their horizon coupled with
                                        problem-solving abilities, managerial
                                        skills and developing a scientific frame
                                        of mind. Besides, they are given deep
                                        insight into the methodology of teaching
                                        and are trained in such a manner that
                                        after completing their course, they
                                        become accomplished teachers and role
                                        models, both for the students and
                                        society at large.
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Card 2: NCTE Undertaking */}
                        <AnimatedSection delay={200}>
                            <div className="about-journey-card h-full">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/5 text-orange-600 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
                                    Regulatory Compliance
                                </div>
                                <h4 className="text-2xl font-bold text-heading mb-6">
                                    NCTE Undertaking
                                </h4>
                                <p className="text-sm text-slate-400 font-medium mb-6 italic">
                                    As per clause 8(5) of the NCTE Regulation,
                                    2014
                                </p>
                                <ul className="space-y-3 ">
                                    {UNDERTAKING_TABLE.map((item, i) => (
                                        <li
                                            key={i}
                                            className="flex justify-between items-center gap-4 text-base pb-2.5 border-b border-slate-50 last:border-0"
                                        >
                                            <span className="text-slate-500">
                                                {item.label}
                                            </span>
                                            <span className="text-primary font-bold text-right shrink-0">
                                                {item.value}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* Image & Highlights Grid */}
                    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
                        <AnimatedSection delay={300} className="h-full">
                            <div className="about-facility-card">
                                <img
                                    src="/images/classroom.jpeg"
                                    alt="Classroom"
                                    className="h-full w-full object-cover"
                                />
                                <div className="about-facility-overlay" />
                                <div className="about-facility-content">
                                    <h4 className="text-white font-bold text-lg">
                                        Modern Classrooms
                                    </h4>
                                    <p className="about-facility-desc text-white/80 text-sm mt-1">
                                        ICT-Enabled Learning
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={400} className="h-full">
                            <div className="about-facility-card">
                                <img
                                    src="/images/library.jpeg"
                                    alt="Library"
                                    className="h-full w-full object-cover"
                                />
                                <div className="about-facility-overlay" />
                                <div className="about-facility-content">
                                    <h4 className="text-white font-bold text-lg">
                                        Digital Library
                                    </h4>
                                    <p className="about-facility-desc text-white/80 text-sm mt-1">
                                        9,000+ Rich Resources
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={500} className="h-full">
                            <div className="about-facility-card">
                                <img
                                    src="/images/seminar_hall.jpeg"
                                    alt="Seminar Hall"
                                    className="h-full w-full object-cover"
                                />
                                <div className="about-facility-overlay" />
                                <div className="about-facility-content">
                                    <h4 className="text-white font-bold text-lg">
                                        Seminar Hall
                                    </h4>
                                    <p className="about-facility-desc text-white/80 text-sm mt-1">
                                        Interactive Workshops
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={600} className="h-full">
                            <div className="about-facility-card">
                                <img
                                    src="/images/computer_lab.jpeg"
                                    alt="Computer Lab"
                                    className="h-full w-full object-cover"
                                />
                                <div className="about-facility-overlay" />
                                <div className="about-facility-content">
                                    <h4 className="text-white font-bold text-lg">
                                        Computer Lab
                                    </h4>
                                    <p className="about-facility-desc text-white/80 text-sm mt-1">
                                        Advanced IT Systems
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
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
                            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-accent via-orange-400 to-amber-300">
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

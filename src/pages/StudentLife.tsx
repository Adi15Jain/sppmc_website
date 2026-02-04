import { useState, useEffect, useRef } from "react";
import Container from "../components/layout/Container";

// ============================================
// DATA
// ============================================

const FACILITIES = [
    {
        title: "Smart Classrooms",
        description:
            "ICT-enabled rooms with projectors and digital boards for interactive learning",
        image: "/images/campus-facilities.png",
    },
    {
        title: "Digital Library",
        description:
            "Extensive collection of books, journals, and e-resources for research",
        image: "/images/library.jpeg",
    },
    {
        title: "Computer Labs",
        description:
            "Modern computer facilities with high-speed internet connectivity",
        image: "/images/seminar.jpeg",
    },
    {
        title: "Seminar Hall",
        description:
            "Spacious auditorium for conferences, workshops, and cultural events",
        image: "/images/event.jpeg",
    },
];

const ACTIVITIES = [
    {
        title: "Cultural Programs",
        description: "Annual festivals, dance, music, and drama performances",
        gradient: "from-orange-500 to-pink-500",
    },
    {
        title: "Sports Events",
        description: "Inter-college tournaments and fitness activities",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        title: "Educational Workshops",
        description: "Skill development sessions and expert lectures",
        gradient: "from-purple-500 to-indigo-500",
    },
    {
        title: "Community Outreach",
        description: "Social service initiatives and awareness campaigns",
        gradient: "from-green-500 to-teal-500",
    },
];

const CLUBS = [
    { name: "Literary Club", icon: "✍️", members: 45 },
    { name: "Science Club", icon: "🔬", members: 38 },
    { name: "Art & Craft", icon: "🎨", members: 52 },
    { name: "Music Society", icon: "🎵", members: 34 },
    { name: "Debate Forum", icon: "🗣️", members: 28 },
    { name: "Eco Warriors", icon: "🌱", members: 41 },
];

const TESTIMONIALS = [
    {
        name: "Priya Sharma",
        program: "B.Ed Graduate, 2023",
        quote: "The supportive environment and practical training prepared me perfectly for my teaching career. The faculty mentorship was exceptional.",
        avatar: "PS",
    },
    {
        name: "Rahul Verma",
        program: "D.El.Ed Graduate, 2022",
        quote: "My time at SPPMC shaped me into a confident educator. The hands-on experience in local schools was invaluable.",
        avatar: "RV",
    },
    {
        name: "Anjali Singh",
        program: "B.Ed Graduate, 2024",
        quote: "The modern facilities and dedicated teachers created the perfect learning atmosphere. I'm grateful for every moment here.",
        avatar: "AS",
    },
];

const SUPPORT_SERVICES = [
    {
        title: "Academic Mentoring",
        description:
            "Personalized guidance from experienced faculty to help you excel",
        icon: "🎯",
    },
    {
        title: "Grievance Redressal",
        description:
            "Transparent system ensuring student concerns are heard and resolved",
        icon: "🤝",
    },
    {
        title: "Anti-Ragging Cell",
        description:
            "Zero tolerance policy with dedicated committee for a safe campus",
        icon: "🛡️",
    },
    {
        title: "Career Guidance",
        description:
            "Placement support and career counseling for your future success",
        icon: "🚀",
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

export default function StudentLife() {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="overflow-x-hidden">
            {/* ==========================================
                SECTION 1: IMMERSIVE HERO
               ========================================== */}
            <section className="relative h-screen min-h-[700px] overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="/images/student-life-hero.png"
                        alt="Student Life at SPPMC"
                        className="h-full w-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div
                        className="absolute inset-0 animate-gradient-morph"
                        style={{
                            background:
                                "linear-gradient(135deg, rgba(0, 16, 85, 0.92) 0%, rgba(26, 42, 108, 0.75) 50%, rgba(0, 24, 102, 0.88) 100%)",
                        }}
                    />
                    {/* Mesh gradient */}
                    <div
                        className="absolute inset-0 opacity-60"
                        style={{
                            background: `
                                radial-gradient(ellipse at 20% 30%, rgba(255, 121, 0, 0.25) 0%, transparent 50%),
                                radial-gradient(ellipse at 80% 70%, rgba(26, 42, 108, 0.35) 0%, transparent 50%)
                            `,
                        }}
                    />
                </div>

                {/* Floating Decorative Elements */}
                <div className="absolute top-20 right-[15%] w-32 h-32 bg-accent/10 rounded-full animate-morph-blob hidden md:block" />
                <div
                    className="absolute top-[40%] right-10 w-20 h-20 border-2 border-white/10 rounded-full animate-float-rotate hidden md:block"
                    style={{ animationDelay: "1s" }}
                />
                <div
                    className="absolute bottom-32 left-[10%] w-24 h-24 bg-white/5 rounded-full animate-float-rotate hidden md:block"
                    style={{ animationDelay: "2s" }}
                />
                <div className="absolute bottom-20 right-[20%] w-3 h-3 bg-accent rounded-full animate-particle" />
                <div
                    className="absolute top-[30%] left-20 w-2 h-2 bg-white/40 rounded-full animate-particle"
                    style={{ animationDelay: "1.5s" }}
                />

                {/* Content */}
                <div className="relative z-10 flex h-full items-center pt-[112px]">
                    <Container>
                        <div className="max-w-4xl">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-3 px-5 py-2.5 mb-8 glass rounded-full text-white/90 text-sm font-medium animate-text-blur">
                                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                                Experience Campus Life
                            </div>

                            {/* Main Heading */}
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white animate-text-blur animate-delay-200">
                                Where Learning
                                <span className="block mt-2 text-gradient-primary">
                                    Meets Life
                                </span>
                            </h1>

                            {/* Subtitle */}
                            <p className="mt-8 text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl animate-reveal-up animate-delay-400">
                                Discover a vibrant community of learners,
                                innovators, and future educators. Your journey
                                to excellence starts here.
                            </p>

                            {/* CTA Buttons */}
                            <div className="mt-8 flex flex-wrap gap-3 animate-reveal-up animate-delay-600">
                                <a href="#campus" className="btn-primary">
                                    Explore Campus
                                </a>
                                <a
                                    href="#activities"
                                    className="btn-glass hover:border-white/40"
                                >
                                    View Activities
                                </a>
                            </div>

                            {/* Quick Stats */}
                            <div className="mt-16 flex flex-wrap gap-12 animate-reveal-up animate-delay-800">
                                {[
                                    { value: "10+", label: "Student Clubs" },
                                    { value: "50+", label: "Annual Events" },
                                    { value: "100%", label: "Campus Safety" },
                                ].map((stat) => (
                                    <div
                                        key={stat.label}
                                        className="text-center"
                                    >
                                        <div className="text-4xl font-bold text-accent">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm text-white/60 mt-1">
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
                        Scroll to Explore
                    </span>
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                        <div className="w-1.5 h-3 bg-accent rounded-full animate-bounce" />
                    </div>
                </div>
            </section>

            {/* ==========================================
                SECTION 2: CAMPUS FACILITIES
               ========================================== */}
            <section
                id="campus"
                className="py-24 bg-gradient-to-b from-[#f8f9fa] to-white"
            >
                <Container>
                    <AnimatedSection className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
                            World-Class Infrastructure
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-heading">
                            Campus Facilities
                        </h2>
                        <p className="mt-4 text-lg text-body max-w-2xl mx-auto">
                            State-of-the-art amenities designed to enhance your
                            learning experience
                        </p>
                    </AnimatedSection>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {FACILITIES.map((facility, index) => (
                            <AnimatedSection
                                key={facility.title}
                                delay={index * 150}
                            >
                                <div className="group relative h-80 rounded-2xl overflow-hidden card-3d cursor-pointer">
                                    {/* Background Image */}
                                    <img
                                        src={facility.image}
                                        alt={facility.title}
                                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                                    {/* Content */}
                                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                        <h3 className="text-xl font-bold text-white mb-2">
                                            {facility.title}
                                        </h3>
                                        <p className="text-white/80 text-sm leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                            {facility.description}
                                        </p>
                                    </div>

                                    {/* Shine effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spotlight pointer-events-none" />
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ==========================================
                SECTION 3: STUDENT ACTIVITIES
               ========================================== */}
            <section
                id="activities"
                className="py-24 relative overflow-hidden"
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
                        <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-4">
                            Beyond Academics
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Student Activities
                        </h2>
                        <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
                            Engage in diverse activities that nurture
                            creativity, leadership, and personal growth
                        </p>
                    </AnimatedSection>

                    {/* Activities showcase image */}
                    <AnimatedSection delay={200} className="mb-16">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/student-activities.png"
                                alt="Cultural Festival"
                                className="w-full h-[400px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                <h3 className="text-3xl font-bold text-white mb-2">
                                    Annual Cultural Festival
                                </h3>
                                <p className="text-white/80 max-w-xl">
                                    Celebrating diversity through dance, music,
                                    and art
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Activity Cards */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {ACTIVITIES.map((activity, index) => (
                            <AnimatedSection
                                key={activity.title}
                                delay={300 + index * 100}
                            >
                                <div className="glass-card-dark p-6 h-full hover:scale-105 transition-transform duration-500 cursor-pointer group">
                                    <div
                                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${activity.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <div className="w-6 h-6 bg-white/30 rounded-full" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {activity.title}
                                    </h3>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        {activity.description}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ==========================================
                SECTION 4: CLUBS & ORGANIZATIONS
               ========================================== */}
            <section className="py-24 bg-white">
                <Container>
                    <AnimatedSection className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                            Find Your Tribe
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-heading">
                            Clubs & Organizations
                        </h2>
                        <p className="mt-4 text-lg text-body max-w-2xl mx-auto">
                            Join student-led communities that match your
                            interests and passions
                        </p>
                    </AnimatedSection>

                    {/* Clubs Grid */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {CLUBS.map((club, index) => (
                            <AnimatedSection
                                key={club.name}
                                delay={index * 100}
                            >
                                <div className="group relative p-8 rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 hover:shadow-xl hover:border-accent/30 transition-all duration-500 cursor-pointer overflow-hidden">
                                    {/* Background gradient on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                                                {club.icon}
                                            </span>
                                            <span className="px-3 py-1 bg-gray-100 group-hover:bg-accent/10 text-gray-600 group-hover:text-accent text-xs font-semibold rounded-full transition-colors duration-300">
                                                {club.members} Members
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-heading group-hover:text-primary transition-colors duration-300">
                                            {club.name}
                                        </h3>
                                        <div className="mt-4 flex items-center gap-2 text-sm text-body group-hover:text-accent transition-colors duration-300">
                                            <span>Learn more</span>
                                            <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                                                →
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    {/* Clubs image */}
                    <AnimatedSection delay={600} className="mt-16">
                        <div className="relative rounded-3xl overflow-hidden img-zoom">
                            <img
                                src="/images/clubs-organizations.png"
                                alt="Students collaborating"
                                className="w-full h-[350px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-transparent to-transparent" />
                            <div className="absolute inset-0 flex items-center p-12">
                                <div className="max-w-md">
                                    <h3 className="text-3xl font-bold text-white mb-4">
                                        Collaborate & Create
                                    </h3>
                                    <p className="text-white/80 mb-6">
                                        Work together on projects, events, and
                                        initiatives that make a difference in
                                        our campus community.
                                    </p>
                                    <button className="btn-primary">
                                        Join a Club
                                    </button>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* ==========================================
                SECTION 5: TESTIMONIALS
               ========================================== */}
            <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
                <Container>
                    <AnimatedSection className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
                            Student Voices
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-heading">
                            What Our Students Say
                        </h2>
                    </AnimatedSection>

                    {/* Testimonial Carousel */}
                    <AnimatedSection delay={200}>
                        <div className="max-w-4xl mx-auto">
                            <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-12 overflow-hidden">
                                {/* Quote decoration */}
                                <div className="absolute top-6 left-8 text-8xl text-accent/10 font-serif leading-none">
                                    "
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    {TESTIMONIALS.map((testimonial, index) => (
                                        <div
                                            key={testimonial.name}
                                            className={`transition-all duration-700 ${
                                                index === activeTestimonial
                                                    ? "opacity-100 translate-y-0"
                                                    : "opacity-0 translate-y-4 absolute inset-0 p-8 md:p-12"
                                            }`}
                                        >
                                            <p className="text-xl md:text-2xl text-body leading-relaxed mb-8">
                                                {testimonial.quote}
                                            </p>
                                            <div className="flex items-center gap-4">
                                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-bold text-lg">
                                                    {testimonial.avatar}
                                                </div>
                                                <div>
                                                    <div className="font-bold text-heading">
                                                        {testimonial.name}
                                                    </div>
                                                    <div className="text-sm text-body">
                                                        {testimonial.program}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Navigation dots */}
                                <div className="absolute bottom-6 right-8 flex gap-2">
                                    {TESTIMONIALS.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() =>
                                                setActiveTestimonial(index)
                                            }
                                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                                index === activeTestimonial
                                                    ? "bg-accent w-8"
                                                    : "bg-gray-300 hover:bg-gray-400"
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* ==========================================
                SECTION 6: SUPPORT SERVICES
               ========================================== */}
            <section className="py-24 bg-white">
                <Container>
                    <AnimatedSection className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                            We're Here for You
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-heading">
                            Student Support Services
                        </h2>
                        <p className="mt-4 text-lg text-body max-w-2xl mx-auto">
                            Comprehensive support to ensure your success and
                            well-being
                        </p>
                    </AnimatedSection>

                    <div className="grid gap-8 md:grid-cols-2">
                        {SUPPORT_SERVICES.map((service, index) => (
                            <AnimatedSection
                                key={service.title}
                                delay={index * 150}
                            >
                                <div className="flex gap-6 p-8 rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 hover:shadow-lg hover:border-primary/20 transition-all duration-500 group">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                                            {service.icon}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-heading mb-2 group-hover:text-primary transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <p className="text-body leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    {/* Support image */}
                    <AnimatedSection delay={600} className="mt-16">
                        <div className="relative rounded-3xl overflow-hidden">
                            <img
                                src="/images/student-support.png"
                                alt="Mentorship session"
                                className="w-full h-[300px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-l from-primary/70 via-primary/30 to-transparent" />
                            <div className="absolute inset-0 flex items-center justify-end p-12">
                                <div className="max-w-md text-right">
                                    <h3 className="text-3xl font-bold text-white mb-4">
                                        Always Here to Help
                                    </h3>
                                    <p className="text-white/80">
                                        Our dedicated support team ensures every
                                        student thrives academically and
                                        personally.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* ==========================================
                SECTION 7: FINAL CTA
               ========================================== */}
            <section className="relative py-32 overflow-hidden">
                {/* Animated gradient background */}
                <div
                    className="absolute inset-0 animate-gradient-morph"
                    style={{
                        background:
                            "linear-gradient(135deg, #001055 0%, #1a2a6c 25%, #ff7900 50%, #1a2a6c 75%, #001055 100%)",
                        backgroundSize: "400% 400%",
                    }}
                />

                {/* Overlay pattern */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                        backgroundSize: "40px 40px",
                    }}
                />

                {/* Floating particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-4 h-4 bg-white/20 rounded-full animate-particle"
                            style={{
                                left: `${15 + i * 15}%`,
                                top: `${20 + (i % 3) * 25}%`,
                                animationDelay: `${i * 0.8}s`,
                            }}
                        />
                    ))}
                </div>

                <Container className="relative z-10">
                    <AnimatedSection className="text-center">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Ready to Start Your Journey?
                        </h2>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                            Join a community of passionate learners and future
                            educators. Your transformation begins here.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <a
                                href="/admissions"
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg text-sm"
                            >
                                Apply Now
                                <span>→</span>
                            </a>
                            <a
                                href="/about"
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 text-sm"
                            >
                                Learn More
                            </a>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>
        </main>
    );
}

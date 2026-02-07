import { useState, useEffect, useRef } from "react";
import {
    Book,
    Newspaper,
    BookOpen,
    Library,
    Armchair,
    Hospital,
    Trophy,
    Utensils,
    Bus,
    PenTool,
    Palette,
    Music,
    MessageSquare,
    Sprout,
    Target,
    HeartHandshake,
    ShieldCheck,
    Rocket,
} from "lucide-react";
import Container from "../components/layout/Container";

// ============================================
// DATA
// ============================================

const FACILITIES = [
    {
        title: "Digital Library",
        description:
            "A well-stocked library with 9,000+ books, journals, magazines, and dictionaries for comprehensive research.",
        image: "/images/library.jpeg",
    },
    {
        title: "ET & ICT Lab",
        description:
            "Requisite software, printers, and high-speed internet catering to 100 students for effective teaching.",
        image: "/images/computer_lab.jpeg",
    },
    {
        title: "Medical Facility",
        description:
            "Monthly health check-ups at the attached 599-bed multi-specialty hospital.",
        image: "/images/classroom.jpeg",
    },
    {
        title: "Sports & Games",
        description:
            "Large playground and sports room for diverse indoor and outdoor games.",
        image: "/images/seminar_hall.jpeg",
    },
];

// Detailed library statistics from parent website
const LIBRARY_STATS = [
    { value: "9,138+", label: "Books", icon: Book },
    { value: "6", label: "Journals", icon: Newspaper },
    { value: "10", label: "Magazines", icon: BookOpen },
    { value: "4", label: "Encyclopedias", icon: Library },
    { value: "50", label: "Seating Capacity", icon: Armchair },
];

// Infrastructure rooms list
const INFRASTRUCTURE_ROOMS = [
    "Principal Office",
    "Administrative Office",
    "Faculty / Staff Room",
    "Library / Reading Room",
    "Classrooms",
    "Multipurpose Hall",
    "Educational & ICT Labs",
];

// Additional services from parent website
const CAMPUS_SERVICES = [
    {
        title: "Medical Facility",
        description:
            "Top priority is accorded to student health with monthly check-ups at the 599-bed multi-specialty TMMC&RC hospital under expert supervision.",
        icon: Hospital,
        gradient: "from-yellow-500 to-orange-500",
    },
    {
        title: "Sports & Games",
        description:
            "Playground and sports room for table tennis, cricket, volleyball, badminton, football, kabaddi, carrom, and chess.",
        icon: Trophy,
        gradient: "from-orange-500 to-amber-500",
    },
    {
        title: "Canteen & Mess",
        description:
            "Sumptuous dishes and delicious food options provided from a well-curated menu card.",
        icon: Utensils,
        gradient: "from-amber-500 to-yellow-500",
    },
    {
        title: "College Transport",
        description:
            "Dedicated college buses running between Moradabad city and the campus for students and staff.",
        icon: Bus,
        gradient: "from-yellow-500 to-orange-500",
    },
];

const CURRICULAR_ACTIVITIES = {
    theory: {
        title: "Theory & Academic Foundation",
        description:
            "Regular theory classes conducted throughout the year with advanced syllabus completion.",
        highlights: [
            "Monthly Seminar & Group Discussions",
            "Expert Guest Lectures",
            "Internal Evaluation (Mid-term Exams)",
            "Scientific Mindset Development",
        ],
    },
    practical: {
        title: "Practical Training",
        description:
            "Hands-on experience through micro-teaching and professional lesson planning.",
        records: [
            "Micro Teaching Records",
            "Teaching Practice L.P. Records",
            "Observation Records",
            "Psychological Test Records",
            "Audio-Visual Aids Operations",
            "Test Items & Exam Question Papers",
            "Case Study & Cultural Records",
            "Physical Exercise & Sports Records",
            "Subject-specific Projects",
        ],
    },
};

const CO_CURRICULAR_ACTIVITIES = [
    { name: "Art and Craft Activity", icon: Palette },
    { name: "Sports & Fitness", icon: Trophy },
    { name: "Preparation of TLM & PTA", icon: PenTool },
    { name: "Seminars & Workshops", icon: MessageSquare },
    { name: "Cultural - Music & Dance", icon: Music },
    { name: "Community Service", icon: Sprout },
];

const TESTIMONIALS = [
    {
        name: "Priya Sharma",
        program: "B.Ed Graduate, 2023",
        quote: "The supportive environment and practical training prepared me perfectly for my teaching career. The faculty mentorship was exceptional.",
        avatar: "PS",
        image: "/images/testimonials/student1.png",
    },
    {
        name: "Rahul Verma",
        program: "D.El.Ed Graduate, 2022",
        quote: "My time at SPPMC shaped me into a confident educator. The hands-on experience in local schools was invaluable.",
        avatar: "RV",
        image: "/images/testimonials/student2.png",
    },
    {
        name: "Anjali Singh",
        program: "B.Ed Graduate, 2024",
        quote: "The modern facilities and dedicated teachers created the perfect learning atmosphere. I'm grateful for every moment here.",
        avatar: "AS",
        image: "/images/testimonials/student3.png",
    },
];

const SUPPORT_SERVICES = [
    {
        title: "Academic Mentoring",
        description:
            "Personalized guidance from experienced faculty to help you excel",
        icon: Target,
    },
    {
        title: "Grievance Redressal",
        description:
            "Transparent system ensuring student concerns are heard and resolved",
        icon: HeartHandshake,
    },
    {
        title: "Anti-Ragging Cell",
        description:
            "Zero tolerance policy with dedicated committee for a safe campus",
        icon: ShieldCheck,
    },
    {
        title: "Career Guidance",
        description:
            "Placement support and career counseling for your future success",
        icon: Rocket,
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
                                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-accent via-orange-400 to-amber-300">
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
                className="py-16 bg-gradient-to-b from-[#f8f9fa] to-white"
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

                    {/* Library Statistics */}
                    <AnimatedSection delay={600} className="mt-20">
                        <div className="bg-gradient-to-br from-primary to-primary-light rounded-3xl p-8 md:p-12 text-white">
                            <div className="text-center mb-10">
                                <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-semibold mb-4">
                                    Library Resources
                                </span>
                                <h3 className="text-3xl md:text-4xl font-bold">
                                    Well-Stocked Digital Library
                                </h3>
                                <p className="mt-4 text-white/80 max-w-2xl mx-auto">
                                    Our library houses an extensive collection
                                    including textbooks, reference materials,
                                    educational CDs, and resources from Indian
                                    and foreign authors.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                                {LIBRARY_STATS.map((stat, index) => (
                                    <div
                                        key={stat.label}
                                        className="text-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300"
                                        style={{
                                            animationDelay: `${index * 100}ms`,
                                        }}
                                    >
                                        <div className="flex justify-center mb-2">
                                            <stat.icon className="w-8 h-8 text-accent" />
                                        </div>
                                        <div className="text-2xl md:text-3xl font-bold">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm text-white/70 mt-1">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Campus Services */}
                    <AnimatedSection delay={1000} className="mt-16">
                        <div className="text-center mb-10">
                            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                                Essential Services
                            </span>
                            <h3 className="text-3xl font-bold text-heading">
                                Campus Life Support
                            </h3>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {CAMPUS_SERVICES.map((service) => (
                                <div
                                    key={service.title}
                                    className="group p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-xl hover:border-transparent transition-all duration-500"
                                >
                                    <div
                                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                                    >
                                        <service.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h4 className="text-lg font-bold text-heading mb-2 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h4>
                                    <p className="text-sm text-body leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* ==========================================
                SECTION 3: STUDENT ACTIVITIES
               ========================================== */}
            <section
                id="activities"
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
                    <AnimatedSection className="text-center mb-10">
                        <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-4">
                            Beyond Academics
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Student Activities
                        </h2>
                        <p className="mt-4 text-xl text-white/70 max-w-3xl mx-auto">
                            Engage in diverse activities that nurture
                            creativity, leadership, and personal growth
                        </p>
                    </AnimatedSection>

                    {/* Curricular Activities: Theory & Practical */}
                    <div className="grid gap-8 lg:grid-cols-2 mb-16">
                        <AnimatedSection delay={200}>
                            <div className="glass-card-dark p-8 h-full border border-white/10 hover:border-accent/30 transition-all duration-500">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                                        <BookOpen className="w-6 h-6 text-accent" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">
                                        {CURRICULAR_ACTIVITIES.theory.title}
                                    </h3>
                                </div>
                                <p className="text-white/70 mb-8 leading-relaxed">
                                    {CURRICULAR_ACTIVITIES.theory.description}
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {CURRICULAR_ACTIVITIES.theory.highlights.map(
                                        (item) => (
                                            <li
                                                key={item}
                                                className="flex items-start gap-3 group"
                                            >
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform" />
                                                <span className="text-sm text-white/60 group-hover:text-white transition-colors">
                                                    {item}
                                                </span>
                                            </li>
                                        ),
                                    )}
                                </ul>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={400}>
                            <div className="glass-card-dark p-8 h-full border border-white/10 hover:border-accent/30 transition-all duration-500">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                                        <PenTool className="w-6 h-6 text-accent" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">
                                        {CURRICULAR_ACTIVITIES.practical.title}
                                    </h3>
                                </div>
                                <p className="text-white/70 mb-6 text-sm leading-relaxed">
                                    {
                                        CURRICULAR_ACTIVITIES.practical
                                            .description
                                    }
                                </p>
                                <div className="space-y-3 max-h-[220px] overflow-y-auto pr-4 custom-scrollbar">
                                    {CURRICULAR_ACTIVITIES.practical.records.map(
                                        (record) => (
                                            <div
                                                key={record}
                                                className="flex items-center gap-3 p-2 bg-white/5 rounded-lg border border-white/5 hover:border-accent/20 transition-all group"
                                            >
                                                <div className="w-6 h-6 rounded bg-accent/10 flex items-center justify-center text-[10px] font-bold text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                                                    ✓
                                                </div>
                                                <span className="text-xs text-white/50 group-hover:text-white transition-colors">
                                                    {record}
                                                </span>
                                            </div>
                                        ),
                                    )}
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>

                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-bold text-white">
                            Co-Curricular Activities
                        </h3>
                    </div>

                    {/* Co-Curricular Activity Cards */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {CO_CURRICULAR_ACTIVITIES.map((activity, index) => (
                            <AnimatedSection
                                key={activity.name}
                                delay={500 + index * 100}
                            >
                                <div className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:shadow-xl hover:border-accent/30 transition-all duration-500 cursor-pointer overflow-hidden">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-orange-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <activity.icon className="w-6 h-6 text-accent" />
                                        </div>
                                        <h4 className="text-lg font-bold text-white leading-tight">
                                            {activity.name}
                                        </h4>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ==========================================
                SECTION 4: CAMPUS INFRASTRUCTURE (ROOMS)
               ========================================== */}
            <section className="py-16 bg-white">
                <Container>
                    <AnimatedSection className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                            Strategic Planning
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-heading">
                            Institutional Infrastructure
                        </h2>
                        <p className="mt-4 text-lg text-body max-w-2xl mx-auto">
                            Comprehensive building with spacious rooms and
                            necessary materials as per NCTE requirements
                        </p>
                    </AnimatedSection>

                    {/* Rooms Grid */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {INFRASTRUCTURE_ROOMS.map((room, index) => (
                            <AnimatedSection key={room} delay={index * 100}>
                                <div className="group relative p-6 rounded-2xl border border-transparent bg-primary shadow-xl hover:bg-white hover:border-gray-100 hover:shadow-none transition-all duration-500 cursor-default overflow-hidden">
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-10 h-10 rounded-xl bg-white/10 group-hover:bg-primary/5 flex items-center justify-center transition-colors">
                                                <span className="text-white group-hover:text-primary font-bold text-lg">
                                                    {index + 1}
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors duration-300">
                                                {room}
                                            </h3>
                                        </div>
                                    </div>
                                    {/* Decorative background number */}
                                    <div className="absolute -bottom-4 -right-4 text-8xl font-bold text-accent group-hover:text-black/[0.02] transition-colors pointer-events-none">
                                        {index + 1}
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ==========================================
                SECTION 5: TESTIMONIALS
               ========================================== */}
            <section className="py-16 md:py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
                <Container>
                    <AnimatedSection className="text-center mb-12">
                        <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
                            Student Voices
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-heading tracking-tight">
                            What Our Students Say
                        </h2>
                    </AnimatedSection>

                    {/* Horizontal Stacked Card Testimonial Queue */}
                    <AnimatedSection delay={200}>
                        <div className="max-w-4xl mx-auto relative h-[400px] md:h-[350px]">
                            {TESTIMONIALS.map((testimonial, index) => {
                                // Calculate position relative to activeTestimonial
                                let position = index - activeTestimonial;
                                if (position < 0)
                                    position += TESTIMONIALS.length;

                                const isActive = position === 0;
                                const isNext = position === 1;
                                const isFar = position === 2;
                                const isPast =
                                    index ===
                                    (activeTestimonial -
                                        1 +
                                        TESTIMONIALS.length) %
                                        TESTIMONIALS.length;

                                // Card Styles based on horizontal position in queue with refined polish
                                let cardStyle =
                                    "opacity-0 scale-75 translate-x-24 z-0 blur-2xl pointer-events-none";

                                if (isActive) {
                                    cardStyle =
                                        "opacity-100 scale-100 translate-x-0 z-30 blur-0 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border-accent/10";
                                } else if (isNext) {
                                    cardStyle =
                                        "opacity-40 scale-95 translate-x-12 z-20 blur-[2px] shadow-xl pointer-events-none border-gray-100";
                                } else if (isFar) {
                                    cardStyle =
                                        "opacity-10 scale-90 translate-x-24 z-10 blur-[4px] shadow-lg pointer-events-none border-gray-50";
                                } else if (isPast) {
                                    cardStyle =
                                        "opacity-0 -translate-x-full scale-95 z-40 blur-xl pointer-events-none";
                                }

                                return (
                                    <div
                                        key={testimonial.name}
                                        className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${cardStyle}`}
                                    >
                                        <div
                                            className={`bg-white rounded-[1.5rem] md:rounded-[2rem] border p-8 md:p-12 h-full flex flex-col justify-between relative overflow-hidden transition-all duration-500`}
                                        >
                                            {/* Student Portrait - Uncapped Massive Scale */}
                                            <div className="absolute bottom-[52%] right-[-5%] w-[60%] h-[140%] z-0 pointer-events-none select-none flex items-end justify-end">
                                                {/* Professional Radial Glow */}
                                                <div
                                                    className={`absolute bottom-[20%] right-[10%] w-[100%] h-[80%] bg-radial-gradient from-accent/20 via-accent/5 to-transparent transition-opacity duration-1000 ${isActive ? "opacity-100" : "opacity-0"}`}
                                                    style={{
                                                        backgroundImage:
                                                            "radial-gradient(circle at center, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 70%)",
                                                    }}
                                                />

                                                <img
                                                    src={testimonial.image}
                                                    alt=""
                                                    className={`w-full h-full object-contain object-bottom transition-all duration-1000 delay-300 ${isActive ? "scale-250 translate-y-0 opacity-100" : "scale-250 translate-y-8 opacity-0"}`}
                                                    style={{
                                                        mixBlendMode:
                                                            "multiply",
                                                        WebkitMaskImage:
                                                            "linear-gradient(to right, transparent 0%, black 25%, black 100%)",
                                                        maskImage:
                                                            "linear-gradient(to right, transparent 0%, black 25%, black 100%)",
                                                        WebkitMaskComposite:
                                                            "source-in",
                                                        maskComposite:
                                                            "intersect",
                                                    }}
                                                />
                                            </div>

                                            <div className="relative z-10 w-[60%]">
                                                <div className="text-7xl text-accent/20 font-serif h-8 select-none leading-none">
                                                    "
                                                </div>
                                                <p className="text-xl md:text-2xl text-heading leading-relaxed font-medium italic mb-2 tracking-tight">
                                                    {testimonial.quote}
                                                </p>
                                            </div>

                                            <div className="relative z-10 flex flex-col gap-1 mt-auto">
                                                <div className="font-bold text-2xl text-heading tracking-tighter">
                                                    {testimonial.name}
                                                </div>
                                                <div className="text-accent font-semibold text-base md:text-lg flex items-center gap-2 tracking-tight">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-accent/60 animate-pulse" />
                                                    {testimonial.program}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                            {/* Navigation Controls */}
                            <div className="absolute -bottom-16 left-0 right-0 flex justify-center items-center gap-8">
                                <button
                                    onClick={() =>
                                        setActiveTestimonial(
                                            (prev) =>
                                                (prev -
                                                    1 +
                                                    TESTIMONIALS.length) %
                                                TESTIMONIALS.length,
                                        )
                                    }
                                    className="p-3 rounded-full bg-white border border-gray-100 shadow-md hover:shadow-lg hover:border-accent/30 text-gray-400 hover:text-accent transition-all group"
                                    aria-label="Previous testimonial"
                                >
                                    <svg
                                        className="w-6 h-6 transform rotate-180"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>

                                <div className="flex gap-2">
                                    {TESTIMONIALS.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() =>
                                                setActiveTestimonial(index)
                                            }
                                            className={`h-1.5 rounded-full transition-all duration-500 ${
                                                index === activeTestimonial
                                                    ? "bg-accent w-8"
                                                    : "bg-gray-200 hover:bg-gray-300 w-2"
                                            }`}
                                        />
                                    ))}
                                </div>

                                <button
                                    onClick={() =>
                                        setActiveTestimonial(
                                            (prev) =>
                                                (prev + 1) %
                                                TESTIMONIALS.length,
                                        )
                                    }
                                    className="p-3 rounded-full bg-white border border-gray-100 shadow-md hover:shadow-lg hover:border-accent/30 text-gray-400 hover:text-accent transition-all group"
                                    aria-label="Next testimonial"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            {/* ==========================================
                SECTION 6: SUPPORT SERVICES
               ========================================== */}
            <section className="py-16 bg-white">
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
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <service.icon className="w-8 h-8 text-accent" />
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

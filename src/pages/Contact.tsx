import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Container from "../components/layout/Container";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    ChevronRight,
    Facebook,
    Instagram,
    Twitter,
    Youtube,
    ExternalLink,
} from "lucide-react";

// Contact information data
const CONTACT_INFO = [
    {
        icon: MapPin,
        title: "Our Location",
        details: [
            "Shri Prem Prakash Memorial College",
            "Delhi Road, Moradabad",
            "Uttar Pradesh 244001",
        ],
        action: {
            label: "Get Directions",
            href: "https://www.google.com/maps/place/Shri+PREM+PRAKASH+MEMORIAL+COLLEGE/@28.8242346,78.6749477,17z/data=!4m14!1m7!3m6!1s0x390afdeb45a33025:0x2ad784a472146430!2sShri+PREM+PRAKASH+MEMORIAL+COLLEGE!8m2!3d28.8242346!4d78.6748271!16s%2Fg%2F11c1rstzhh!3m5!1s0x390afdeb45a33025:0x2ad784a472146430!8m2!3d28.8242346!4d78.6748271!16s%2Fg%2F11c1rstzhh?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D",
        },
        color: "from-amber-500 to-orange-500",
    },
    {
        icon: Phone,
        title: "Phone Numbers",
        details: ["+91 95684 18000", "+91 95687 17000"],
        action: {
            label: "Call Now",
            href: "tel:+919568418000",
        },
        color: "from-amber-500 to-orange-500",
    },
    {
        icon: Mail,
        title: "Email Address",
        details: ["principal.sppmc@tmu.ac.in", "studentswelfare@tmu.ac.in"],
        action: {
            label: "Send Email",
            href: "mailto:principal.sppmc@tmu.ac.in",
        },
        color: "from-amber-500 to-orange-500",
    },
    {
        icon: Clock,
        title: "Office Hours",
        details: [
            "Monday - Friday: 9:00 AM - 5:00 PM",
            "Saturday: 9:00 AM - 1:00 PM",
            "Sunday: Closed",
        ],
        color: "from-amber-500 to-orange-500",
    },
];

// Quick links for the footer
// const QUICK_CONTACTS = [
//     { dept: "Admissions Office", phone: "+91 98765 43211" },
//     { dept: "Examination Cell", phone: "+91 98765 43212" },
//     { dept: "Principal's Office", phone: "+91 98765 43213" },
//     { dept: "Library", phone: "+91 98765 43214" },
// ];

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const heroRef = useRef<HTMLElement>(null);
    const formRef = useRef<HTMLFormElement>(null);

    // GSAP animations
    useEffect(() => {
        if (!heroRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".hero-content > *",
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.15,
                    duration: 0.8,
                    ease: "power3.out",
                },
            );
        }, heroRef);

        return () => ctx.revert();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        });

        // Reset after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <>
            <main className="min-h-screen">
                {/* Hero Section with proper navbar padding */}
                <section
                    ref={heroRef}
                    className="relative min-h-[60vh] overflow-hidden pt-[112px]"
                    style={{
                        background:
                            "linear-gradient(135deg, #001055 0%, #1a2a6c 50%, #001866 100%)",
                    }}
                >
                    {/* Decorative elements */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div
                            className="absolute top-20 left-[10%] w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse"
                            style={{ animationDuration: "4s" }}
                        />
                        <div
                            className="absolute bottom-20 right-[10%] w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"
                            style={{
                                animationDuration: "6s",
                                animationDelay: "1s",
                            }}
                        />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full" />
                    </div>

                    {/* Grid pattern overlay */}
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: `
                                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                            `,
                            backgroundSize: "60px 60px",
                        }}
                    />

                    <Container className="relative z-10">
                        <div className="hero-content py-16 md:py-24 text-center max-w-4xl mx-auto">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
                                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                                We're Here to Help
                            </div>

                            {/* Main heading */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-accent via-orange-400 to-amber-300">
                                Get in Touch
                            </h1>

                            {/* Subtitle */}
                            <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
                                Have questions about admissions, programs, or
                                campus life? We'd love to hear from you. Reach
                                out and let's start a conversation.
                            </p>

                            {/* Quick contact buttons */}
                            <div className="mt-8 flex flex-wrap justify-center gap-4">
                                <a
                                    href="tel:+919876543210"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-full hover:bg-accent/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-accent/25"
                                >
                                    <Phone className="w-5 h-5" />
                                    Call Us Now
                                </a>
                                <a
                                    href="mailto:info@sppmc.edu.in"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300"
                                >
                                    <Mail className="w-5 h-5" />
                                    Send Email
                                </a>
                            </div>
                        </div>
                    </Container>

                    {/* Bottom curve */}
                    <div className="absolute bottom-0 left-0 right-0">
                        <svg
                            viewBox="0 0 1440 120"
                            fill="none"
                            className="w-full h-auto"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                </section>

                {/* Contact Cards Section */}
                <section className="relative py-20 -mt-16 z-20">
                    <Container>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {CONTACT_INFO.map((info) => (
                                <div
                                    key={info.title}
                                    className="group relative bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                                >
                                    {/* Top Color Line (Animates on Hover) */}
                                    <div
                                        className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                    />

                                    {/* Icon Container */}
                                    <div className="relative mb-6">
                                        {/* Background blob */}
                                        <div
                                            className={`absolute -inset-2 bg-gradient-to-r ${info.color} rounded-full opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300`}
                                        />

                                        {/* Icon Circle */}
                                        <div className="relative w-14 h-14 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:border-transparent transition-colors duration-300">
                                            {/* We use the gradient text clip trick for the icon on hover */}
                                            <info.icon className="w-6 h-6 text-slate-400 group-hover:text-slate-700 transition-colors duration-300" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors duration-300">
                                            {info.title}
                                        </h3>

                                        <div className="space-y-1.5 mb-5">
                                            {info.details.map((detail, i) => (
                                                <p
                                                    key={i}
                                                    className="text-sm text-slate-500 font-medium leading-relaxed"
                                                >
                                                    {detail}
                                                </p>
                                            ))}
                                        </div>

                                        {/* Action Link */}
                                        {info.action && (
                                            <a
                                                href={info.action.href}
                                                target={
                                                    info.action.href.startsWith(
                                                        "http",
                                                    )
                                                        ? "_blank"
                                                        : undefined
                                                }
                                                rel={
                                                    info.action.href.startsWith(
                                                        "http",
                                                    )
                                                        ? "noopener noreferrer"
                                                        : undefined
                                                }
                                                className={`inline-flex items-center gap-2 text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r ${info.color} opacity-80 group-hover:opacity-100 transition-all duration-300`}
                                            >
                                                {info.action.label}
                                                <ChevronRight
                                                    className={`w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform duration-300`}
                                                />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* Contact Form & Map Section */}
                <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
                    <Container>
                        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
                            {/* Contact Form */}
                            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100">
                                <div className="mb-8">
                                    <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
                                        Send a Message
                                    </span>
                                    <h2 className="text-3xl font-bold text-heading">
                                        We'd Love to Hear From You
                                    </h2>
                                    <p className="mt-2 text-body">
                                        Fill out the form below and we'll get
                                        back to you within 24 hours.
                                    </p>
                                </div>

                                {submitted ? (
                                    <div className="py-12 text-center">
                                        <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                                            <svg
                                                className="w-10 h-10 text-green-500"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-heading mb-2">
                                            Message Sent!
                                        </h3>
                                        <p className="text-body">
                                            Thank you for reaching out. We'll
                                            respond shortly.
                                        </p>
                                    </div>
                                ) : (
                                    <form
                                        ref={formRef}
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                    >
                                        <div className="grid gap-6 sm:grid-cols-2">
                                            <div>
                                                <label
                                                    htmlFor="name"
                                                    className="block text-sm font-medium text-heading mb-2"
                                                >
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none"
                                                    placeholder="Your name"
                                                />
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="email"
                                                    className="block text-sm font-medium text-heading mb-2"
                                                >
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid gap-6 sm:grid-cols-2">
                                            <div>
                                                <label
                                                    htmlFor="phone"
                                                    className="block text-sm font-medium text-heading mb-2"
                                                >
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none"
                                                    placeholder="+91 98765 43210"
                                                />
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="subject"
                                                    className="block text-sm font-medium text-heading mb-2"
                                                >
                                                    Subject *
                                                </label>
                                                <select
                                                    id="subject"
                                                    name="subject"
                                                    required
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none bg-white"
                                                >
                                                    <option value="">
                                                        Select a subject
                                                    </option>
                                                    <option value="admissions">
                                                        Admissions Inquiry
                                                    </option>
                                                    <option value="programs">
                                                        Program Information
                                                    </option>
                                                    <option value="fees">
                                                        Fees & Scholarships
                                                    </option>
                                                    <option value="campus">
                                                        Campus Visit
                                                    </option>
                                                    <option value="general">
                                                        General Question
                                                    </option>
                                                    <option value="other">
                                                        Other
                                                    </option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="message"
                                                className="block text-sm font-medium text-heading mb-2"
                                            >
                                                Your Message *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                rows={3}
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none resize-none"
                                                placeholder="How can we help you?"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <svg
                                                        className="animate-spin w-5 h-5"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <circle
                                                            className="opacity-25"
                                                            cx="12"
                                                            cy="12"
                                                            r="10"
                                                            stroke="currentColor"
                                                            strokeWidth="4"
                                                        />
                                                        <path
                                                            className="opacity-75"
                                                            fill="currentColor"
                                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                                        />
                                                    </svg>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5" />
                                                    Send Message
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>

                            {/* Map & Quick Contacts */}
                            <div className="space-y-8">
                                {/* Embedded Map */}
                                <div className="relative rounded-3xl overflow-hidden shadow-xl h-[680px]">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3495.491131985771!2d78.6749477!3d28.8242346!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390afdeb45a33025%3A0x2ad784a472146430!2sShri%20PREM%20PRAKASH%20MEMORIAL%20COLLEGE!5e0!3m2!1sen!2sin!4v1770447765185!5m2!1sen!2sin"
                                        className="w-full h-full border-0"
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="College Location"
                                    />
                                    {/* Overlay with action */}
                                    <a
                                        href="https://www.google.com/maps/place/Shri+PREM+PRAKASH+MEMORIAL+COLLEGE/@28.8242346,78.6749477,17z/data=!4m14!1m7!3m6!1s0x390afdeb45a33025:0x2ad784a472146430!2sShri+PREM+PRAKASH+MEMORIAL+COLLEGE!8m2!3d28.8242346!4d78.6748271!16s%2Fg%2F11c1rstzhh!3m5!1s0x390afdeb45a33025:0x2ad784a472146430!8m2!3d28.8242346!4d78.6748271!16s%2Fg%2F11c1rstzhh?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Open in Maps
                                    </a>
                                </div>

                                {/* Quick Contact Cards */}
                                {/* <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
                                    <h3 className="text-lg font-bold text-heading mb-4 flex items-center gap-2">
                                        <Phone className="w-5 h-5 text-accent" />
                                        Department Contacts
                                    </h3>
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        {QUICK_CONTACTS.map((contact) => (
                                            <a
                                                key={contact.dept}
                                                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                                                className="group p-4 bg-slate-50 rounded-xl hover:bg-primary/5 transition-colors duration-300"
                                            >
                                                <p className="text-sm font-semibold text-heading group-hover:text-primary transition-colors">
                                                    {contact.dept}
                                                </p>
                                                <p className="text-sm text-accent mt-1">
                                                    {contact.phone}
                                                </p>
                                            </a>
                                        ))}
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </Container>
                </section>
            </main>

            {/* Custom Contact Page Footer */}
            <footer className="relative overflow-hidden">
                {/* Gradient background */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(135deg, #001055 0%, #0a1a5c 40%, #001866 70%, #0d1f6c 100%)",
                    }}
                />

                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-[400px] h-[400px] opacity-20">
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "radial-gradient(circle, rgba(255, 121, 0, 0.4) 0%, transparent 60%)",
                            filter: "blur(60px)",
                        }}
                    />
                </div>

                {/* Top decorative line */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

                <Container>
                    <div className="relative z-10 py-16">
                        {/* Main footer grid */}
                        <div className="grid gap-12 md:grid-cols-3 text-center md:text-left">
                            {/* Brand */}
                            <div>
                                <a href="/" className="inline-block">
                                    <img
                                        src="/logo.png"
                                        alt="SPPMC"
                                        className="h-28 w-auto mx-auto md:mx-0"
                                    />
                                </a>
                                <h3 className="mt-4 text-lg font-semibold text-white">
                                    Shri Prem Prakash Memorial College
                                </h3>
                                <p className="mt-2 text-sm text-slate-300/80">
                                    Affiliated to SCERT, Govt. of UP
                                </p>
                            </div>

                            {/* Quick Contact */}
                            <div>
                                <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                                    Quick Contact
                                </h4>
                                <div className="space-y-3 text-sm text-slate-300/80">
                                    <span className="flex items-center gap-3 hover:text-white transition-colors justify-center md:justify-start">
                                        <Mail className="w-6 h-6 text-accent" />
                                        principal.sppmc@tmu.ac.in
                                        <br />
                                        studentswelfare@tmu.ac.in
                                    </span>
                                    <span className="flex items-center gap-3 hover:text-white transition-colors justify-center md:justify-start">
                                        <Phone className="w-6 h-6 text-accent" />
                                        +91 95687 17000
                                        <br />
                                        +91 95684 18000
                                    </span>
                                    <a
                                        href="https://www.google.com/maps/place/Shri+PREM+PRAKASH+MEMORIAL+COLLEGE/@28.8242346,78.6749477,17z/data=!4m14!1m7!3m6!1s0x390afdeb45a33025:0x2ad784a472146430!2sShri+PREM+PRAKASH+MEMORIAL+COLLEGE!8m2!3d28.8242346!4d78.6748271!16s%2Fg%2F11c1rstzhh!3m5!1s0x390afdeb45a33025:0x2ad784a472146430!8m2!3d28.8242346!4d78.6748271!16s%2Fg%2F11c1rstzhh?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 hover:text-white transition-colors justify-center md:justify-start"
                                    >
                                        <MapPin className="w-6 h-6 text-accent" />
                                        NH-24, Delhi Road
                                        <br />
                                        Moradabad
                                    </a>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div>
                                <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                                    Follow Us
                                </h4>
                                <div className="flex items-center gap-3 justify-center md:justify-start">
                                    {[
                                        {
                                            icon: Facebook,
                                            href: "https://www.facebook.com/tmumbd/",
                                            label: "Facebook",
                                        },
                                        {
                                            icon: Instagram,
                                            href: "https://www.instagram.com/tmu_mbd/",
                                            label: "Instagram",
                                        },
                                        {
                                            icon: Twitter,
                                            href: "https://x.com/Tmumbd",
                                            label: "Twitter",
                                        },
                                        {
                                            icon: Youtube,
                                            href: "https://www.youtube.com/c/TeerthankerMahaveerUniversity",
                                            label: "YouTube",
                                        },
                                    ].map((social) => (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.label}
                                            className="w-10 h-10 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-accent/20 transition-all duration-300"
                                            style={{
                                                background:
                                                    "rgba(255,255,255,0.05)",
                                                border: "1px solid rgba(255,255,255,0.1)",
                                            }}
                                        >
                                            <social.icon className="w-5 h-5" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Bottom bar */}
                        <div className="mt-12 pt-6 border-t border-white/10 text-center">
                            <p className="text-sm text-slate-400">
                                © {new Date().getFullYear()} Shri Prem Prakash
                                Memorial College. All rights reserved.
                            </p>
                        </div>
                    </div>
                </Container>
            </footer>
        </>
    );
}

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Container from "../components/layout/Container";

type DocumentItem = {
    id: string;
    title: string;
    description: string;
    link: string;
    category: "student" | "regulatory";
};

const DOCUMENTS: DocumentItem[] = [
    {
        id: "deled-students",
        title: "List of Students D.El.Ed 2020-21",
        description:
            "Complete list of enrolled students in the Diploma in Elementary Education program for the academic session 2020-21.",
        link: "/assets/pdf/deled_sppmc_student_details.pdf",
        category: "student",
    },
    {
        id: "ba-students",
        title: "List of Students B.A. 2020-21",
        description:
            "Complete list of enrolled students in the Bachelor of Arts program for the academic session 2020-21.",
        link: "/assets/pdf/ba_student_details.pdf",
        category: "student",
    },
    {
        id: "ba-bed-students",
        title: "List of Students B.A.-B.Ed. 2020-21",
        description:
            "Complete list of enrolled students in the integrated Bachelor of Arts and Bachelor of Education program for 2020-21.",
        link: "/assets/pdf/ba_bed_student_details.pdf",
        category: "student",
    },
    {
        id: "mandatory-disclosure",
        title: "Mandatory Disclosure",
        description:
            "Official mandatory disclosure document containing institutional information, infrastructure details, and regulatory compliance.",
        link: "/assets/pdf/mandatory_disclosure.pdf",
        category: "regulatory",
    },
];

export default function MandatoryDisclosures() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    // GSAP animations on mount
    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            // Cards with stagger
            if (cardsRef.current) {
                gsap.fromTo(
                    cardsRef.current.children,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        stagger: 0.12,
                        duration: 0.6,
                        ease: "power3.out",
                        delay: 0.3,
                    },
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <main>
            {/* Hero Section - matching About page style */}
            <section className="relative h-[100vh] min-h-[400px] overflow-hidden">
                <img
                    src="/images/documents-hero.png"
                    alt="Official Documents"
                    className="absolute inset-0 h-full w-full object-cover animate-fade-in"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50" />

                <div className="relative z-10 flex h-full items-center pt-[112px]">
                    <Container>
                        <div className="max-w-3xl animate-slide-in-left">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6 animate-fade-in">
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                </svg>
                                Official Documents
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold text-white text-gradient mb-4">
                                Mandatory Disclosures
                            </h1>
                            <p className="mt-4 text-xl text-white/90 leading-relaxed animate-slide-in-left animate-delay-200">
                                Access official documents, student records, and
                                regulatory compliance information as mandated by
                                educational authorities.
                            </p>
                        </div>
                    </Container>
                </div>

                {/* Floating elements for visual interest */}
                <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-float animate-delay-300"></div>
                <div className="absolute bottom-24 left-16 w-10 h-10 bg-accent/20 rounded-full animate-float animate-delay-700"></div>
            </section>

            {/* Documents Section */}
            <section ref={sectionRef} className="section">
                <Container>
                    {/* Section Header */}
                    <div className="text-center mb-12 animate-fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
                            Download Important Documents
                        </h2>
                        <p className="text-body text-lg max-w-2xl mx-auto">
                            All mandatory disclosures and official documents are
                            available for download below. Click on any document
                            to access the PDF.
                        </p>
                    </div>

                    {/* Documents Grid */}
                    <div
                        ref={cardsRef}
                        className="grid gap-6 md:grid-cols-2 lg:gap-8"
                    >
                        {DOCUMENTS.map((doc) => (
                            <div
                                key={doc.id}
                                className="card hover-lift group relative overflow-hidden"
                            >
                                {/* Category indicator */}
                                <div
                                    className={`absolute top-0 left-0 right-0 h-1 ${
                                        doc.category === "regulatory"
                                            ? "bg-gradient-to-r from-orange-500 to-orange-600"
                                            : "bg-gradient-to-r from-primary to-primary-light"
                                    }`}
                                />

                                <div className="p-6 md:p-8">
                                    {/* Header */}
                                    <div className="flex items-start gap-4 mb-4">
                                        <div
                                            className={`p-3 rounded-xl transition-transform duration-300 group-hover:scale-110 ${
                                                doc.category === "regulatory"
                                                    ? "bg-orange-100 text-orange-600"
                                                    : "bg-primary/10 text-primary"
                                            }`}
                                        >
                                            {doc.category === "regulatory" ? (
                                                <svg
                                                    className="w-6 h-6"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                                    />
                                                </svg>
                                            ) : (
                                                <svg
                                                    className="w-6 h-6"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                                                    />
                                                </svg>
                                            )}
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <span
                                                className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                                                    doc.category ===
                                                    "regulatory"
                                                        ? "bg-orange-100 text-orange-700"
                                                        : "bg-primary/10 text-primary"
                                                }`}
                                            >
                                                {doc.category === "regulatory"
                                                    ? "Regulatory Compliance"
                                                    : "Student Records"}
                                            </span>
                                            <h3 className="text-xl font-semibold text-slate-900">
                                                {doc.title}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-body leading-relaxed mb-6">
                                        {doc.description}
                                    </p>

                                    {/* Download button */}
                                    <a
                                        href={doc.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group/btn ${
                                            doc.category === "regulatory"
                                                ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                                                : "bg-gradient-to-r from-primary to-primary-light text-white"
                                        }`}
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            />
                                        </svg>
                                        Download PDF
                                        <svg
                                            className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </a>
                                </div>

                                {/* Decorative element */}
                                <div
                                    className={`absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-5 transition-all duration-500 group-hover:opacity-10 group-hover:scale-125 ${
                                        doc.category === "regulatory"
                                            ? "bg-orange-500"
                                            : "bg-primary"
                                    }`}
                                />
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Contact CTA Section */}
            <section className="section section-soft">
                <Container>
                    <div className="card bg-gradient-to-r from-primary to-primary-light text-white p-8 md:p-12 rounded-2xl animate-fade-up">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-sm">
                                <svg
                                    className="w-10 h-10"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                                    Need Additional Documents?
                                </h3>
                                <p className="text-white/85 text-lg leading-relaxed max-w-2xl">
                                    If you require any other official documents
                                    or have questions about the disclosures,
                                    please contact our administrative office.
                                    We're here to help you.
                                </p>
                            </div>
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-primary font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shrink-0"
                            >
                                Contact Us
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}

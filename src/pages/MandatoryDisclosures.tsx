import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import PageHero from "../components/sections/PageHero";
import Container from "../components/layout/Container";

type DocumentItem = {
    id: string;
    title: string;
    description: string;
    link: string;
    category: "student" | "financial" | "regulatory";
    icon: "users" | "file" | "shield";
};

const DOCUMENTS: DocumentItem[] = [
    {
        id: "deled-students",
        title: "List of Students D.El.Ed 2020-21",
        description:
            "Complete list of enrolled students in the Diploma in Elementary Education program for the academic session 2020-21.",
        link: "/assets/pdf/deled_sppmc_student_details.pdf",
        category: "student",
        icon: "users",
    },
    {
        id: "ba-students",
        title: "List of Students B.A. 2020-21",
        description:
            "Complete list of enrolled students in the Bachelor of Arts program for the academic session 2020-21.",
        link: "/assets/pdf/ba_student_details.pdf",
        category: "student",
        icon: "users",
    },
    {
        id: "ba-bed-students",
        title: "List of Students B.A.-B.Ed. 2020-21",
        description:
            "Complete list of enrolled students in the integrated Bachelor of Arts and Bachelor of Education program for 2020-21.",
        link: "/assets/pdf/ba_bed_student_details.pdf",
        category: "student",
        icon: "users",
    },
    {
        id: "mandatory-disclosure",
        title: "Mandatory Disclosure",
        description:
            "Official mandatory disclosure document containing institutional information, infrastructure details, and regulatory compliance.",
        link: "/assets/pdf/mandatory_disclosure.pdf",
        category: "regulatory",
        icon: "shield",
    },
];

const CATEGORY_INFO = {
    student: {
        label: "Student Records",
        color: "from-blue-500 to-blue-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
        textColor: "text-blue-700",
    },
    financial: {
        label: "Financial Documents",
        color: "from-green-500 to-green-600",
        bgColor: "bg-green-50",
        borderColor: "border-green-200",
        textColor: "text-green-700",
    },
    regulatory: {
        label: "Regulatory Compliance",
        color: "from-orange-500 to-orange-600",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-200",
        textColor: "text-orange-700",
    },
};

function DocumentIcon({ type }: { type: "users" | "file" | "shield" }) {
    const icons = {
        users: (
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
        ),
        file: (
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
            </svg>
        ),
        shield: (
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
        ),
    };
    return icons[type];
}

function DocumentCard({ doc, index }: { doc: DocumentItem; index: number }) {
    const category = CATEGORY_INFO[doc.category];

    return (
        <div
            className={`
                doc-card group relative overflow-hidden rounded-xl border ${category.borderColor}
                bg-white shadow-sm transition-all duration-500
                hover:shadow-xl hover:-translate-y-1
            `}
            style={{
                animationDelay: `${index * 100}ms`,
            }}
        >
            {/* Category gradient bar */}
            <div className={`h-1.5 bg-gradient-to-r ${category.color}`} />

            <div className="p-6">
                {/* Header */}
                <div className="flex items-start gap-4">
                    <div
                        className={`
                        p-3 rounded-xl ${category.bgColor} ${category.textColor}
                        transition-transform duration-300 group-hover:scale-110
                    `}
                    >
                        <DocumentIcon type={doc.icon} />
                    </div>

                    <div className="flex-1 min-w-0">
                        <span
                            className={`
                            inline-block px-2.5 py-0.5 rounded-full text-xs font-medium
                            ${category.bgColor} ${category.textColor} mb-2
                        `}
                        >
                            {category.label}
                        </span>
                        <h3 className="text-lg font-semibold text-slate-900 leading-tight">
                            {doc.title}
                        </h3>
                    </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                    {doc.description}
                </p>

                {/* Download button */}
                <div className="mt-6">
                    <a
                        href={doc.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                            inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
                            bg-gradient-to-r ${category.color} text-white font-medium text-sm
                            transition-all duration-300
                            hover:shadow-lg hover:scale-[1.02]
                            group/btn
                        `}
                    >
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
            </div>

            {/* Decorative corner accent */}
            <div
                className={`
                    absolute -bottom-8 -right-8 w-24 h-24 rounded-full opacity-5
                    bg-gradient-to-br ${category.color}
                    transition-all duration-500 group-hover:opacity-10 group-hover:scale-150
                `}
            />
        </div>
    );
}

export default function MandatoryDisclosures() {
    const sectionRef = useRef<HTMLElement>(null);

    // GSAP animations on mount
    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            // Section header animation
            gsap.from(".disclosure-header", {
                opacity: 0,
                y: 30,
                duration: 0.7,
                ease: "power3.out",
                delay: 0.2,
            });

            // Cards with stagger
            gsap.from(".doc-card", {
                opacity: 0,
                y: 40,
                stagger: 0.15,
                duration: 0.6,
                ease: "power3.out",
                delay: 0.4,
            });

            // Info card
            gsap.from(".info-card", {
                opacity: 0,
                y: 30,
                duration: 0.6,
                ease: "power3.out",
                delay: 0.8,
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <main>
            {/* Page hero */}
            <PageHero
                title="Mandatory Disclosures"
                subtitle="Access official documents, student records, and regulatory compliance information."
            />

            <section
                ref={sectionRef}
                className="py-20 bg-gradient-to-b from-slate-50 to-white"
            >
                <Container>
                    {/* Section header */}
                    <div className="disclosure-header text-center mb-12">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
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
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            Download Important Documents
                        </h2>
                        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                            All mandatory disclosures and official documents are
                            available for download below.
                        </p>
                    </div>

                    {/* Documents grid */}
                    <div className="grid gap-6 md:grid-cols-2">
                        {DOCUMENTS.map((doc, index) => (
                            <DocumentCard
                                key={doc.id}
                                doc={doc}
                                index={index}
                            />
                        ))}
                    </div>

                    {/* Info card */}
                    <div className="info-card mt-12 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-primary to-primary-light text-white">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                            <div className="p-4 rounded-xl bg-white/10">
                                <svg
                                    className="w-8 h-8"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold mb-2">
                                    Need Additional Documents?
                                </h3>
                                <p className="text-white/80 leading-relaxed">
                                    If you require any other official documents
                                    or have questions about the disclosures,
                                    please contact our administrative office.
                                    We're here to help you with all your
                                    documentation needs.
                                </p>
                            </div>
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-primary font-semibold transition-all duration-300 hover:bg-white/90 hover:scale-105 shrink-0"
                            >
                                Contact Us
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

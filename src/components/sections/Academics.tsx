import Container from "../layout/Container";

type Program = {
    title: string;
    description: string;
    duration: string;
    icon: string;
};

const PROGRAMS: Program[] = [
    {
        title: "Bachelor of Education (B.Ed)",
        description:
            "A professional program designed to prepare competent and ethical secondary school educators.",
        duration: "2 Years",
        icon: "🎓",
    },
    {
        title: "Diploma in Elementary Education (D.El.Ed)",
        description:
            "Focused on developing foundational teaching skills for primary and upper primary education.",
        duration: "2 Years",
        icon: "📖",
    },
];

export default function Academics() {
    return (
        <section id="academics" className="relative py-20 overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-50/50 to-indigo-50/30" />
            {/* Decorative elements */}
            <div
                className="absolute top-20 left-10 w-72 h-72 opacity-20 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle, rgba(0, 16, 85, 0.1) 0%, transparent 70%)",
                }}
            />

            <Container>
                <div className="relative z-10">
                    {/* Section header */}
                    <div className="max-w-2xl animate-fade-up">
                        <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/5 rounded-full border border-primary/10 mb-4">
                            <span className="w-2 h-2 bg-accent rounded-full" />
                            Our Programs
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            Academics
                        </h2>
                        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                            Our academic programs are structured to meet
                            national standards while fostering critical
                            thinking, professional competence, and ethical
                            responsibility.
                        </p>
                    </div>

                    {/* Programs grid */}
                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {PROGRAMS.map((program, idx) => (
                            <div
                                key={program.title}
                                className="group relative flex flex-col justify-between rounded-2xl bg-white p-8 shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-up"
                                style={{ animationDelay: `${idx * 100}ms` }}
                            >
                                {/* Top accent line */}
                                <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-b opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div>
                                    <span className="text-4xl">
                                        {program.icon}
                                    </span>
                                    <h3 className="mt-4 text-xl font-bold text-slate-900">
                                        {program.title}
                                    </h3>
                                    <p className="mt-3 text-slate-600 leading-relaxed">
                                        {program.description}
                                    </p>
                                </div>

                                <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-100">
                                    <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold text-primary bg-primary/5 rounded-full">
                                        ⏱️ {program.duration}
                                    </span>
                                    <a
                                        href="/academics"
                                        className="text-sm font-semibold text-accent group-hover:text-primary transition-colors flex items-center gap-1"
                                    >
                                        View details
                                        <span className="transition-transform group-hover:translate-x-1">
                                            →
                                        </span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}

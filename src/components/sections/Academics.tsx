import Container from "../layout/Container";

type Program = {
    title: string;
    description: string;
    duration: string;
};

const PROGRAMS: Program[] = [
    {
        title: "Bachelor of Education (B.Ed)",
        description:
            "A professional program designed to prepare competent and ethical secondary school educators.",
        duration: "2 Years",
    },
    {
        title: "Diploma in Elementary Education (D.El.Ed)",
        description:
            "Focused on developing foundational teaching skills for primary and upper primary education.",
        duration: "2 Years",
    },
];

export default function Academics() {
    return (
        <section
            id="academics"
            className="bg-slate-50 py-20 animate-[var(--animate-fade-up)]"
        >
            <Container>
                {/* Section header */}
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-semibold text-slate-900">
                        Academics
                    </h2>
                    <p className="mt-4 text-slate-600">
                        Our academic programs are structured to meet national
                        standards while fostering critical thinking,
                        professional competence, and ethical responsibility.
                    </p>
                </div>

                {/* Programs grid */}
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {PROGRAMS.map((program) => (
                        <div
                            key={program.title}
                            className="flex flex-col justify-between rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-md"
                        >
                            <div>
                                <h3 className="text-xl font-semibold text-slate-900">
                                    {program.title}
                                </h3>

                                <p className="mt-3 text-slate-600 leading-relaxed">
                                    {program.description}
                                </p>
                            </div>

                            <div className="mt-6 flex items-center justify-between text-sm">
                                <span className="text-slate-500">
                                    Duration: {program.duration}
                                </span>
                                <a
                                    href="#"
                                    className="font-medium text-primary hover:underline"
                                >
                                    View details →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

import Container from "../layout/Container";

const FEATURES = [
    {
        title: "Campus Facilities",
        description:
            "Well-equipped classrooms, library, and academic resources.",
    },
    {
        title: "Cultural Activities",
        description:
            "Events that promote creativity, leadership, and teamwork.",
    },
    {
        title: "Teaching Practice",
        description:
            "Hands-on classroom experience through structured internships.",
    },
];

export default function StudentLife() {
    return (
        <section className="py-20">
            <Container>
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-semibold text-slate-900">
                        Student Life
                    </h2>
                    <p className="mt-4 text-slate-600">
                        Beyond academics, the college encourages holistic
                        development through facilities, activities, and
                        real-world exposure.
                    </p>
                </div>

                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {FEATURES.map((feature) => (
                        <div
                            key={feature.title}
                            className="rounded-xl border bg-white p-6 shadow-sm"
                        >
                            <h3 className="text-lg font-semibold text-slate-900">
                                {feature.title}
                            </h3>
                            <p className="mt-3 text-slate-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

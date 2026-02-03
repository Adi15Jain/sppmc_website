import Container from "../layout/Container";

const FEATURES = [
    {
        title: "Campus Facilities",
        description:
            "Well-equipped classrooms, library, and academic resources.",
        icon: "🏛️",
        color: "from-blue-500 to-indigo-500",
    },
    {
        title: "Cultural Activities",
        description:
            "Events that promote creativity, leadership, and teamwork.",
        icon: "🎭",
        color: "from-purple-500 to-pink-500",
    },
    {
        title: "Teaching Practice",
        description:
            "Hands-on classroom experience through structured internships.",
        icon: "📚",
        color: "from-orange-500 to-amber-500",
    },
];

export default function StudentLife() {
    return (
        <section className="relative py-20 overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50/30 to-amber-50/20" />
            {/* Decorative elements */}
            <div
                className="absolute bottom-10 right-10 w-80 h-80 opacity-15 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle, rgba(255, 121, 0, 0.2) 0%, transparent 70%)",
                }}
            />

            <Container>
                <div className="relative z-10">
                    <div className="max-w-2xl animate-fade-up">
                        <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/5 rounded-full border border-primary/10 mb-4">
                            <span className="w-2 h-2 bg-accent rounded-full" />
                            Campus Experience
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            Student Life
                        </h2>
                        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                            Beyond academics, the college encourages holistic
                            development through facilities, activities, and
                            real-world exposure.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {FEATURES.map((feature, idx) => (
                            <div
                                key={feature.title}
                                className="group relative rounded-2xl bg-white p-8 shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-up"
                                style={{ animationDelay: `${idx * 100}ms` }}
                            >
                                {/* Icon container with gradient */}
                                <div
                                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl shadow-lg shadow-slate-200`}
                                >
                                    {feature.icon}
                                </div>

                                <h3 className="mt-5 text-xl font-bold text-slate-900">
                                    {feature.title}
                                </h3>
                                <p className="mt-3 text-slate-600 leading-relaxed">
                                    {feature.description}
                                </p>

                                {/* Hover accent */}
                                <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t" />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}

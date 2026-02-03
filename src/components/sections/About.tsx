import Container from "../layout/Container";

export default function About() {
    return (
        <section id="about" className="relative py-20 overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30" />
            {/* Decorative accent */}
            <div
                className="absolute top-0 right-0 w-96 h-96 opacity-30 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle, rgba(255, 121, 0, 0.1) 0%, transparent 70%)",
                }}
            />
            <div
                className="absolute bottom-0 left-0 w-64 h-64 opacity-20 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle, rgba(0, 16, 85, 0.15) 0%, transparent 70%)",
                }}
            />

            <Container>
                <div className="relative z-10 grid gap-12 md:grid-cols-2 md:items-center">
                    <div className="animate-fade-up">
                        {/* Section label */}
                        <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/5 rounded-full border border-primary/10 mb-4">
                            <span className="w-2 h-2 bg-accent rounded-full" />
                            Who We Are
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            About the College
                        </h2>

                        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                            Shri Prem Prakash Memorial College is committed to
                            nurture, motivate, and empower future teachers who
                            will serve as beacons of excellence in education and
                            society.
                        </p>

                        <p className="mt-4 text-slate-600 leading-relaxed">
                            The institution focuses on academic rigor, ethical
                            values, and holistic development to meet the demands
                            of a globalized world.
                        </p>

                        <a
                            href="/about"
                            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary group"
                        >
                            Learn more about us
                            <span className="transition-transform group-hover:translate-x-1">
                                →
                            </span>
                        </a>
                    </div>

                    <div
                        className="grid gap-4 sm:grid-cols-2 animate-fade-up"
                        style={{ animationDelay: "0.2s" }}
                    >
                        {[
                            {
                                title: "Established",
                                value: "2004",
                                icon: "📅",
                                color: "from-orange-50 to-amber-50",
                            },
                            {
                                title: "Affiliation",
                                value: "SCERT, UP",
                                icon: "🎓",
                                color: "from-blue-50 to-indigo-50",
                            },
                            {
                                title: "Programs",
                                value: "B.Ed, D.El.Ed",
                                icon: "📚",
                                color: "from-green-50 to-emerald-50",
                            },
                            {
                                title: "Campus",
                                value: "Modern Infrastructure",
                                icon: "🏛️",
                                color: "from-purple-50 to-violet-50",
                            },
                        ].map((item, idx) => (
                            <div
                                key={item.title}
                                className={`relative rounded-xl p-6 bg-gradient-to-br ${item.color} border border-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group`}
                                style={{ animationDelay: `${idx * 100}ms` }}
                            >
                                {/* Accent line */}
                                <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                <span className="text-2xl">{item.icon}</span>
                                <p className="mt-3 text-sm font-medium text-slate-500 uppercase tracking-wide">
                                    {item.title}
                                </p>
                                <p className="mt-1 text-xl font-bold text-slate-900">
                                    {item.value}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}

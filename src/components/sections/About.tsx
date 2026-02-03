import Container from "../layout/Container";

export default function About() {
    return (
        <section id="about" className="py-20 animate-[var(--animate-fade-up)]">
            <Container>
                <div className="grid gap-12 md:grid-cols-2 md:items-center">
                    <div>
                        <h2 className="text-3xl font-semibold text-slate-900">
                            About the College
                        </h2>

                        <p className="mt-4 text-slate-600 leading-relaxed">
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
                            href="#"
                            className="mt-6 inline-block text-sm font-medium text-primary hover:underline"
                        >
                            Read more →
                        </a>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                        {[
                            { title: "Established", value: "2004" },
                            { title: "Affiliation", value: "SCERT, UP" },
                            { title: "Programs", value: "B.Ed, D.El.Ed" },
                            { title: "Campus", value: "Modern Infrastructure" },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="rounded-lg border bg-white p-6 shadow-sm"
                            >
                                <p className="text-sm text-slate-500">
                                    {item.title}
                                </p>
                                <p className="mt-2 text-xl font-semibold text-slate-900">
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

import Container from "../components/layout/Container";

const PROCESS_STEPS = [
    {
        step: "01",
        title: "Admission Notification",
        description:
            "Admission notifications are released by the competent authority as per the academic calendar.",
    },
    {
        step: "02",
        title: "Online Application",
        description:
            "Candidates must complete online registration and submit the application form.",
    },
    {
        step: "03",
        title: "Entrance / Counseling",
        description:
            "Admission is conducted through entrance examination and/or counseling process.",
    },
    {
        step: "04",
        title: "Document Verification",
        description:
            "Original documents are verified and seats are allotted as per merit.",
    },
    {
        step: "05",
        title: "Fee Submission",
        description:
            "Selected candidates confirm admission by paying the prescribed fees.",
    },
];

export default function Admissions() {
    return (
        <main>
            {/* HERO */}
            <section className="relative h-[100vh] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-hover animate-fade-in"></div>
                <div className="absolute inset-0 bg-[url('/images/academics.jpg')] bg-cover bg-center opacity-10"></div>

                <div className="relative z-10 flex h-full items-center pt-[112px]">
                    <Container>
                        <div className="max-w-4xl animate-slide-in-left">
                            <h1 className="text-4xl md:text-6xl font-bold text-white text-gradient mb-2">
                                Admissions
                            </h1>
                            <p className="mt-6 text-xl text-white/90 leading-relaxed animate-slide-in-left animate-delay-200">
                                A step-by-step guide to joining our teacher
                                education programs and starting your journey in
                                education.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4 animate-bounce-in animate-delay-500">
                                <button className="btn-primary bg-white text-primary hover:bg-white/90 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl">
                                    Apply Now
                                </button>
                                <button className="px-6 py-3 border-2 border-white/30 text-white rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:border-white/50">
                                    View Eligibility
                                </button>
                            </div>
                        </div>
                    </Container>
                </div>

                {/* Animated background elements */}
                <div className="absolute top-20 right-20 w-24 h-24 bg-white/10 rounded-full animate-float animate-delay-300"></div>
                <div className="absolute bottom-32 left-16 w-16 h-16 bg-white/5 rounded-full animate-float animate-delay-700"></div>
                <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-accent/20 rounded-full animate-pulse-glow animate-delay-1000"></div>
            </section>

            {/* AT A GLANCE */}
            <section className="section section-warm">
                <Container>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 animate-fade-up">
                        {[
                            { label: "Programs", value: "B.Ed, D.El.Ed" },
                            { label: "Mode", value: "Merit / Counseling" },
                            { label: "Authority", value: "SCERT, UP" },
                            { label: "Status", value: "Admissions Open" },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="card border-l-4 border-primary"
                            >
                                <p className="text-sm text-body">
                                    {item.label}
                                </p>
                                <p className="mt-1 text-lg font-semibold text-heading">
                                    {item.value}
                                </p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ELIGIBILITY */}
            <section id="eligibility" className="section">
                <Container>
                    <h2 className="text-2xl py-2 font-semibold animate-fade-up">
                        Eligibility Criteria
                    </h2>

                    <div className="grid gap-8 md:grid-cols-2 animate-fade-up">
                        {[
                            {
                                title: "B.Ed Program",
                                points: [
                                    "Graduation in any discipline",
                                    "Minimum marks as per SCERT",
                                    "Official counseling required",
                                ],
                            },
                            {
                                title: "D.El.Ed Program",
                                points: [
                                    "10+2 or equivalent qualification",
                                    "Eligibility as per government norms",
                                    "Selection through counseling",
                                ],
                            },
                        ].map((program) => (
                            <div key={program.title} className="card">
                                <h3 className="text-lg font-semibold">
                                    {program.title}
                                </h3>
                                <ul className="mt-4 space-y-3 text-body">
                                    {program.points.map((p) => (
                                        <li
                                            key={p}
                                            className="flex items-start gap-3"
                                        >
                                            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                                            <span>{p}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* PROCESS TIMELINE */}
            <section id="process" className="section section-soft">
                <Container>
                    <h2 className="text-2xl font-semibold animate-fade-up">
                        Admission Process
                    </h2>

                    <div className="mt-12 space-y-10 animate-fade-up">
                        {PROCESS_STEPS.map((step, index) => (
                            <div
                                key={step.step}
                                className="relative flex gap-8"
                            >
                                {/* Left number */}
                                <div className="flex flex-col items-center">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-semibold">
                                        {step.step}
                                    </div>

                                    {/* Connector */}
                                    {index !== PROCESS_STEPS.length - 1 && (
                                        <div className="mt-2 h-full w-px bg-slate-300" />
                                    )}
                                </div>

                                {/* Content */}
                                <div className="card flex-1 animate-fade-up">
                                    <h3 className="font-semibold text-heading">
                                        {step.title}
                                    </h3>
                                    <p className="mt-2 text-body">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* DOCUMENTS */}
            <section className="section">
                <Container>
                    <h2 className="text-2xl font-semibold animate-fade-up">
                        Required Documents
                    </h2>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 animate-fade-up">
                        {[
                            "Marksheets of qualifying examinations",
                            "Transfer Certificate",
                            "Migration Certificate (if applicable)",
                            "Caste Certificate (if applicable)",
                            "Domicile Certificate",
                            "Passport-size photographs",
                            "Government-issued ID proof",
                        ].map((doc) => (
                            <div key={doc} className="card text-sm text-body">
                                <div className="flex items-center gap-3">
                                    <span className="h-2 w-2 rounded-full bg-primary" />
                                    <span>{doc}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* IMPORTANT NOTES */}
            <section
                id="apply"
                className="section bg-primary text-white animate-fade-up"
            >
                <Container>
                    <div className="text-center animate-fade-up">
                        <h2 className="text-3xl font-semibold">
                            Ready to Apply?
                        </h2>
                        <p className="mt-4 text-white/90">
                            Begin your admission process by registering through
                            the official counseling portal.
                        </p>
                        <button className="mt-6 btn-secondary bg-white text-primary">
                            Apply Now
                        </button>
                    </div>
                </Container>
            </section>
        </main>
    );
}

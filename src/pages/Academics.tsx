import Container from "../components/layout/Container";

const PROGRAMS = [
    {
        name: "Bachelor of Education (B.Ed)",
        duration: "2 Years",
        eligibility: "Graduation in any discipline (as per SCERT norms)",
        intake: "100 Seats",
        description:
            "A professional teacher education program designed to prepare qualified secondary and senior secondary school educators with strong pedagogical skills, subject expertise, and ethical grounding.",
        highlights: [
            "Child psychology & educational philosophy",
            "Teaching methodology across subjects",
            "School internship & teaching practice",
            "Assessment & evaluation techniques",
        ],
        image: "/images/classroom.jpeg",
    },
    {
        name: "Diploma in Elementary Education (D.El.Ed)",
        duration: "2 Years",
        eligibility: "10+2 or equivalent (as per government guidelines)",
        intake: "50 Seats",
        description:
            "A foundational program focused on developing competent teachers for primary and upper primary levels, emphasizing child-centered learning and classroom management.",
        highlights: [
            "Foundations of education",
            "Pedagogy for primary education",
            "School-based internship",
            "Inclusive education practices",
        ],
        image: "/images/library.jpeg",
    },
    {
        name: "Certificate Course in Teaching Skills",
        duration: "6 Months",
        eligibility: "Graduation or final-year students",
        intake: "Open",
        description:
            "A short-term certification program aimed at enhancing practical teaching skills, communication, lesson planning, and classroom engagement techniques.",
        highlights: [
            "Lesson planning & delivery",
            "Communication & presentation skills",
            "Classroom management basics",
            "Micro-teaching sessions",
        ],
        image: "/images/seminar.jpeg",
    },
    {
        name: "Professional Development Program for Teachers",
        duration: "3 Months",
        eligibility: "In-service teachers",
        intake: "Limited",
        description:
            "An advanced program designed for practicing teachers to upgrade their pedagogical approaches, integrate technology in teaching, and adopt modern assessment strategies.",
        highlights: [
            "ICT-enabled teaching tools",
            "Modern assessment strategies",
            "Inclusive & experiential learning",
            "Reflective teaching practices",
        ],
        image: "/images/event.jpeg",
    },
];

export default function Academics() {
    return (
        <main>
            {/* HERO */}
            <section className="relative h-[60vh] overflow-hidden">
                <img
                    src="/images/academics.jpg"
                    alt="Academic Campus"
                    className="absolute inset-0 h-full w-full object-cover animate-fade-in"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40" />

                <div className="relative z-10 flex h-full items-center">
                    <Container>
                        <div className="max-w-3xl animate-slide-in-left">
                            <h1 className="text-4xl md:text-6xl font-bold text-white text-gradient mb-2">
                                Academics
                            </h1>
                            <p className="mt-6 text-xl text-white/90 leading-relaxed animate-slide-in-left animate-delay-200">
                                Structured programs aligned with national
                                standards in teacher education and professional
                                development.
                            </p>
                            <div className="mt-8 animate-bounce-in animate-delay-500">
                                <div className="inline-flex items-center gap-3 px-6 py-3 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30 text-white font-medium hover:bg-accent/30 transition-all duration-300">
                                    <span>Explore Programs</span>
                                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>

                {/* Floating academic icons */}
                <div className="absolute top-16 right-20 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center animate-float animate-delay-300">
                    <div className="w-8 h-8 border-2 border-white rounded-full"></div>
                </div>
                <div className="absolute bottom-24 left-20 w-12 h-12 bg-accent/20 rounded-full animate-float animate-delay-700"></div>
            </section>

            {/* PROGRAMS */}
            <section className="section">
                <Container>
                    <h2 className="text-2xl font-semibold animate-fade-up">
                        Programs Offered
                    </h2>

                    <div className="mt-10 grid gap-8 md:grid-cols-2">
                        {PROGRAMS.map((program) => (
                            <div
                                key={program.name}
                                className="group card overflow-hidden animate-fade-up"
                            >
                                <div className="relative h-48 overflow-hidden rounded-lg">
                                    <img
                                        src={program.image}
                                        alt={program.name}
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>

                                <div className="mt-4">
                                    <h3 className="text-xl font-semibold">
                                        {program.name}
                                    </h3>
                                    <p className="mt-1 text-sm text-slate-500">
                                        Duration: {program.duration}
                                    </p>
                                    <p className="mt-3 text-body leading-relaxed">
                                        {program.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ACADEMIC FRAMEWORK */}
            <section className="section section-soft">
                <Container>
                    <div className="grid gap-12 md:grid-cols-2 md:items-center">
                        <div className="animate-fade-up">
                            <h2 className="text-2xl font-semibold">
                                Academic Framework
                            </h2>
                            <p className="mt-4 text-body leading-relaxed">
                                The academic framework is designed in accordance
                                with SCERT and Government of Uttar Pradesh
                                guidelines, integrating theory, practice,
                                continuous assessment, and field-based learning.
                            </p>
                        </div>

                        <div className="animate-fade-up [animation-delay:150ms]">
                            <img
                                src="/images/seminar.jpeg"
                                alt="Academic Seminar"
                                className="rounded-xl object-cover shadow-lg"
                            />
                        </div>
                    </div>
                </Container>
            </section>

            {/* LEARNING OUTCOMES */}
            <section className="section">
                <Container>
                    <h2 className="text-2xl font-semibold animate-fade-up">
                        Learning Outcomes
                    </h2>

                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            "Strong subject and pedagogical knowledge",
                            "Effective classroom management skills",
                            "Understanding of child psychology",
                            "Inclusive and learner-centered teaching",
                            "Professional ethics and responsibility",
                            "Reflective and research-oriented practice",
                        ].map((outcome) => (
                            <div
                                key={outcome}
                                className="card animate-fade-up text-body"
                            >
                                {outcome}
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* TEACHING METHODOLOGY */}
            <section className="section section-warm">
                <Container>
                    <h2 className="text-2xl font-semibold animate-fade-up">
                        Teaching Methodology
                    </h2>

                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            "Interactive Lectures",
                            "Group Discussions",
                            "Teaching Practice & Internship",
                            "Technology-Enabled Instruction",
                        ].map((method) => (
                            <div
                                key={method}
                                className="card text-sm text-body animate-fade-up"
                            >
                                {method}
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
        </main>
    );
}

import PageHero from "../components/sections/PageHero";
import Container from "../components/layout/Container";

const FACILITIES = [
    "Spacious and well-ventilated classrooms",
    "Library with academic resources",
    "ICT-enabled teaching facilities",
    "Seminar and multipurpose hall",
];

const ACTIVITIES = [
    "Cultural and literary programs",
    "Educational seminars and workshops",
    "Community outreach activities",
    "Sports and recreational events",
];

const SUPPORT = [
    "Academic mentoring and guidance",
    "Grievance redressal mechanism",
    "Anti-ragging committee",
    "Career guidance support",
];

export default function StudentLife() {
    return (
        <main>
            {/* Page hero */}
            <PageHero
                title="Student Life"
                subtitle="Facilities, activities, and support systems for holistic development."
            />

            {/* Facilities */}
            <section className="section animate-[var(--animate-fade-up)]">
                <Container>
                    <h2 className="text-2xl font-semibold text-heading">
                        Campus Facilities
                    </h2>

                    <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {FACILITIES.map((item) => (
                            <li
                                key={item}
                                className="rounded-lg border bg-white p-4 text-sm text-body card"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </Container>
            </section>

            {/* Activities */}
            <section className="section section-soft py-20 animate-[var(--animate-fade-up)]">
                <Container>
                    <h2 className="text-2xl font-semibold text-heading">
                        Student Activities
                    </h2>

                    <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {ACTIVITIES.map((item) => (
                            <li
                                key={item}
                                className="rounded-lg border bg-white p-4 text-sm text-body card"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </Container>
            </section>

            {/* Support */}
            <section className="section animate-[var(--animate-fade-up)]">
                <Container>
                    <h2 className="text-2xl font-semibold text-heading">
                        Student Support Services
                    </h2>

                    <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {SUPPORT.map((item) => (
                            <li
                                key={item}
                                className="rounded-lg border bg-white p-4 text-sm text-body card"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </Container>
            </section>
        </main>
    );
}

import PageHero from "../components/sections/PageHero";
import Container from "../components/layout/Container";

type DocumentItem = {
    title: string;
    link: string;
};

const DISCLOSURES: DocumentItem[] = [
    { title: "Affiliation Letter", link: "#" },
    { title: "Recognition Certificate", link: "#" },
    { title: "NCTE Approval", link: "#" },
    { title: "SCERT Disclosure", link: "#" },
];

const ACADEMIC_DOCS: DocumentItem[] = [
    { title: "B.Ed Syllabus", link: "#" },
    { title: "D.El.Ed Syllabus", link: "#" },
    { title: "Academic Calendar", link: "#" },
    { title: "Examination Guidelines", link: "#" },
];

const ADMIN_DOCS: DocumentItem[] = [
    { title: "Anti-Ragging Policy", link: "#" },
    { title: "Grievance Redressal Policy", link: "#" },
    { title: "Fee Structure", link: "#" },
    { title: "Code of Conduct", link: "#" },
];

function DocumentSection({
    title,
    items,
}: {
    title: string;
    items: DocumentItem[];
}) {
    return (
        <section className="py-6">
            <h2 className="text-xl font-semibold text-slate-900 animate-[var(--animate-fade-up)]">
                {title}
            </h2>

            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                    <li
                        key={item.title}
                        className="flex items-center justify-between rounded-lg border bg-white p-4 text-sm"
                    >
                        <span className="text-slate-700">{item.title}</span>
                        <a
                            href={item.link}
                            className="font-medium text-primary hover:underline"
                        >
                            Download
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default function Downloads() {
    return (
        <main>
            {/* Page hero */}
            <PageHero
                title="Downloads"
                subtitle="Mandatory disclosures, academic resources, and official documents."
            />

            <section className="py-20">
                <Container>
                    <DocumentSection
                        title="Mandatory Disclosures"
                        items={DISCLOSURES}
                    />

                    <DocumentSection
                        title="Academic Documents"
                        items={ACADEMIC_DOCS}
                    />

                    <DocumentSection
                        title="Administrative Documents"
                        items={ADMIN_DOCS}
                    />
                </Container>
            </section>
        </main>
    );
}

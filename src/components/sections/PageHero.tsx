import Container from "../layout/Container";

type PageHeroProps = {
    title: string;
    subtitle: string;
};

export default function PageHero({ title, subtitle }: PageHeroProps) {
    return (
        <section className="bg-slate-50 py-16 animate-[var(--animate-fade-up)]">
            <Container>
                <div className="max-w-3xl">
                    <h1 className="text-4xl font-semibold text-slate-900">
                        {title}
                    </h1>
                    <p className="mt-4 text-lg text-slate-600">{subtitle}</p>
                </div>
            </Container>
        </section>
    );
}

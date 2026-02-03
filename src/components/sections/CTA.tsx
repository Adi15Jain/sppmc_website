import Container from "../layout/Container";

export default function CTA() {
    return (
        <section className="bg-primary py-16 text-white animate-[var(--animate-fade-up)]">
            <Container>
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-3xl font-semibold">
                        Admissions Open for the Academic Year
                    </h2>
                    <p className="mt-4 max-w-xl opacity-90">
                        Begin your journey towards becoming a professional
                        educator with structured programs and experienced
                        faculty.
                    </p>
                    <a
                        href="#"
                        className="mt-6 rounded-md bg-white px-6 py-3 text-sm font-medium text-primary hover:bg-slate-100"
                    >
                        Apply Now
                    </a>
                </div>
            </Container>
        </section>
    );
}

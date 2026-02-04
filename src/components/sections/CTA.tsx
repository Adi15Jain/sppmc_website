import Container from "../layout/Container";

export default function CTA() {
    return (
        <section className="relative overflow-hidden py-20">
            {/* Gradient background */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(135deg, #001055 0%, #1a2a6c 50%, #001866 100%)",
                }}
            />
            {/* Decorative elements */}
            <div
                className="absolute top-0 right-0 w-96 h-96 opacity-20"
                style={{
                    background:
                        "radial-gradient(circle, rgba(255, 121, 0, 0.3) 0%, transparent 70%)",
                }}
            />
            <div
                className="absolute bottom-0 left-0 w-64 h-64 opacity-10"
                style={{
                    background:
                        "radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)",
                }}
            />

            <Container>
                <div className="relative z-10 flex flex-col items-center text-center animate-fade-up">
                    <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-accent bg-accent/10 rounded-full border border-accent/20">
                        Now Accepting Applications
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white max-w-2xl">
                        Admissions Open for the Academic Year
                    </h2>
                    <p className="mt-4 max-w-xl text-white/80 text-lg">
                        Begin your journey towards becoming a professional
                        educator with structured programs and experienced
                        faculty.
                    </p>
                    <a href="/admissions" className="mt-6 btn-primary">
                        Apply Now
                    </a>
                </div>
            </Container>
        </section>
    );
}

import Container from "../layout/Container";

export default function Hero() {
    return (
        <section
            className="
                relative
                h-screen
                min-h-[100vh]
                w-full
                overflow-hidden
            "
        >
            {/* Background image */}
            <div className="absolute inset-0">
                <img
                    src="/images/campus-3.jpg"
                    alt="Shri Prem Prakash Memorial College Campus"
                    className="h-full w-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-[var(--color-primary)]/75" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full items-center">
                <Container>
                    <div className="max-w-3xl pt-32 md:pt-40 animate-fade-up">
                        <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-white">
                            Building Future Educators with
                            <span className="text-[var(--color-accent)]">
                                {" "}
                                Purpose & Integrity
                            </span>
                        </h1>

                        <p className="mt-6 text-lg text-white/90 leading-relaxed">
                            Shri Prem Prakash Memorial College is committed to
                            nurturing, motivating, and empowering future
                            teachers to meet the challenges of a globalized
                            education system.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <a href="#academics" className="btn-primary">
                                Explore Academics
                            </a>

                            <a
                                href="#about"
                                className="
                                    btn-secondary
                                    border-white
                                    text-white
                                    hover:bg-white
                                    hover:text-[var(--color-primary)]
                                "
                            >
                                About the College
                            </a>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
}

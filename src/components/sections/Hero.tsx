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
                {/* Premium gradient overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(135deg, rgba(0, 16, 85, 0.92) 0%, rgba(26, 42, 108, 0.8) 50%, rgba(0, 24, 102, 0.88) 100%)",
                    }}
                />
                {/* Animated gradient mesh */}
                <div
                    className="absolute inset-0 opacity-60"
                    style={{
                        background: `
                            radial-gradient(ellipse at 20% 30%, rgba(255, 121, 0, 0.2) 0%, transparent 50%),
                            radial-gradient(ellipse at 80% 70%, rgba(26, 42, 108, 0.3) 0%, transparent 50%),
                            radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 70%)
                        `,
                    }}
                />
            </div>

            {/* Floating decorative elements */}
            <div className="absolute top-20 right-20 w-24 h-24 bg-white/5 rounded-full animate-float hidden md:block" />
            <div
                className="absolute top-40 right-40 w-16 h-16 border-2 border-white/10 rounded-full animate-float hidden md:block"
                style={{ animationDelay: "1s" }}
            />
            <div
                className="absolute bottom-32 left-16 w-20 h-20 bg-accent/10 rounded-full animate-float hidden md:block"
                style={{ animationDelay: "2s" }}
            />
            <div
                className="absolute bottom-48 left-48 w-12 h-12 border border-accent/20 rounded-full animate-float hidden md:block"
                style={{ animationDelay: "1.5s" }}
            />
            {/* Subtle grid pattern */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "50px 50px",
                }}
            />

            {/* Content */}
            <div className="relative z-10 flex h-full items-center">
                <Container>
                    <div className="max-w-3xl animate-fade-up">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass rounded-full text-white/90 text-sm font-medium animate-fade-in">
                            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                            Affiliated to SCERT, Govt. of UP
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white">
                            Building Future Educators with
                            <span className="text-[var(--color-accent)] block mt-2">
                                Purpose & Integrity
                            </span>
                        </h1>

                        <p className="mt-6 text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl">
                            Shri Prem Prakash Memorial College is committed to
                            nurturing, motivating, and empowering future
                            teachers to meet the challenges of a globalized
                            education system.
                        </p>

                        {/* Stats row */}
                        <div
                            className="mt-8 flex flex-wrap gap-8 animate-fade-up"
                            style={{ animationDelay: "0.3s" }}
                        >
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">
                                    500+
                                </div>
                                <div className="text-sm text-white/70">
                                    Graduates
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-accent">
                                    20+
                                </div>
                                <div className="text-sm text-white/70">
                                    Years Legacy
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">
                                    98%
                                </div>
                                <div className="text-sm text-white/70">
                                    Placement Rate
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <a href="#academics" className="btn-primary">
                                Explore Academics
                            </a>

                            <a
                                href="#about"
                                className="btn-glass hover:border-white/40"
                            >
                                About the College
                            </a>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Scroll indicator */}
            <div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in"
                style={{ animationDelay: "1s" }}
            >
                <span className="text-white/60 text-sm font-medium tracking-wider uppercase">
                    Scroll
                </span>
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                    <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
                </div>
            </div>
        </section>
    );
}

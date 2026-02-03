import Container from "./Container";

export default function Footer() {
    return (
        <footer className="relative overflow-hidden">
            {/* Gradient background */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(135deg, #001055 0%, #0a1a5c 50%, #001866 100%)",
                }}
            />
            {/* Decorative gradient accent */}
            <div
                className="absolute top-0 left-0 w-96 h-96 opacity-10"
                style={{
                    background:
                        "radial-gradient(circle, rgba(255, 121, 0, 0.4) 0%, transparent 70%)",
                }}
            />
            <div
                className="absolute bottom-0 right-0 w-64 h-64 opacity-10"
                style={{
                    background:
                        "radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%)",
                }}
            />

            <Container>
                <div className="relative z-10 grid gap-10 py-16 md:grid-cols-4 animate-fade-up text-slate-200">
                    {/* About */}
                    <div>
                        <h3 className="text-white font-bold text-lg flex items-center gap-2">
                            <span className="w-1 h-6 bg-accent rounded-full" />
                            Shri Prem Prakash Memorial College
                        </h3>
                        <p className="mt-4 text-sm leading-relaxed text-slate-300">
                            A teacher education institution committed to
                            academic excellence, ethical values, and
                            professional development.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-semibold">
                            Quick Links
                        </h4>

                        <ul className="mt-4 space-y-3 text-sm">
                            {[
                                { label: "About", href: "/about" },
                                { label: "Academics", href: "/academics" },
                                { label: "Admissions", href: "/admissions" },
                                { label: "Gallery", href: "/gallery" },
                            ].map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        className="text-slate-300 transition-all duration-300 hover:text-accent hover:translate-x-1 inline-flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-3" />
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h4 className="text-white font-semibold">Programs</h4>
                        <ul className="mt-4 space-y-3 text-sm">
                            <li className="text-slate-300 flex items-center gap-2">
                                <span className="w-2 h-2 bg-accent/60 rounded-full" />
                                B.Ed
                            </li>
                            <li className="text-slate-300 flex items-center gap-2">
                                <span className="w-2 h-2 bg-accent/60 rounded-full" />
                                D.El.Ed
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold">Contact</h4>
                        <div className="mt-4 space-y-3 text-sm text-slate-300">
                            <p className="flex items-start gap-2">
                                <span className="text-accent mt-0.5">📍</span>
                                Moradabad, Uttar Pradesh
                            </p>
                            <p className="flex items-center gap-2">
                                <span className="text-accent">✉️</span>
                                info@example.com
                            </p>
                            <p className="flex items-center gap-2">
                                <span className="text-accent">📞</span>
                                +91-XXXXXXXXXX
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="relative z-10 border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
                    <p>
                        © {new Date().getFullYear()} Shri Prem Prakash Memorial
                        College. All rights reserved.
                    </p>
                    <div className="flex items-center gap-1">
                        <span>Part of</span>
                        <a
                            href="https://www.tmu.ac.in/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-accent hover:underline font-medium"
                        >
                            TMU Group
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

import Container from "./Container";

export default function Footer() {
    return (
        <footer className="bg-[var(--color-primary)] text-slate-200">
            <Container>
                <div className="grid gap-10 py-16 md:grid-cols-4 animate-fade-up">
                    {/* About */}
                    <div>
                        <h3 className="text-white font-semibold text-lg">
                            Shri Prem Prakash Memorial College
                        </h3>
                        <p className="mt-4 text-sm leading-relaxed">
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

                        <ul className="mt-4 space-y-2 text-sm">
                            {[
                                "About",
                                "Academics",
                                "Admissions",
                                "Gallery",
                            ].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-slate-300 transition-colors hover:text-white"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h4 className="text-white font-semibold">Programs</h4>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li>B.Ed</li>
                            <li>D.El.Ed</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold">Contact</h4>
                        <p className="mt-4 text-sm">
                            Moradabad, Uttar Pradesh
                            <br />
                            Email: info@example.com
                            <br />
                            Phone: +91-XXXXXXXXXX
                        </p>
                    </div>
                </div>

                <div className="border-t border-white/20 py-4 text-center text-sm">
                    © {new Date().getFullYear()} Shri Prem Prakash Memorial
                    College. All rights reserved.
                </div>
            </Container>
        </footer>
    );
}

import Container from "../layout/Container";

const TRUST_ITEMS = [
    { label: "SCERT, Uttar Pradesh", icon: "🎓" },
    { label: "Government Recognized", icon: "✓" },
    { label: "Established 2004", icon: "📅" },
    { label: "Qualified Faculty", icon: "👨‍🏫" },
];

export default function Trust() {
    return (
        <section className="relative border-b bg-gradient-to-r from-slate-50 via-white to-slate-50 py-6 overflow-hidden">
            {/* Subtle top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

            <Container>
                <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-4">
                    {TRUST_ITEMS.map((item) => (
                        <div
                            key={item.label}
                            className="flex items-center justify-center gap-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:text-primary hover:scale-105"
                        >
                            <span className="text-accent">{item.icon}</span>
                            {item.label}
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

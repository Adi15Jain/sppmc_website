import Container from "../layout/Container";

const TRUST_ITEMS = [
    "SCERT, Uttar Pradesh",
    "Government Recognized",
    "Established 2004",
    "Qualified Faculty",
];

export default function Trust() {
    return (
        <section className="border-y bg-white py-10">
            <Container>
                <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-4">
                    {TRUST_ITEMS.map((item) => (
                        <div
                            key={item}
                            className="text-sm font-medium text-slate-700"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

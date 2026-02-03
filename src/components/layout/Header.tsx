import Container from "./Container";

export default function Header() {
    return (
        <header className="w-full border-b border-[var(--color-border)] bg-white">
            {/* Top info bar */}
            <div className="bg-[var(--color-primary)] text-sm text-white">
                <Container>
                    <div className="flex items-center justify-between py-2">
                        <span>Moradabad, Uttar Pradesh</span>
                        <span>Affiliated to SCERT, Govt. of UP</span>
                    </div>
                </Container>
            </div>
        </header>
    );
}

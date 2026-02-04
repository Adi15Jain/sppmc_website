import Container from "./Container";

type HeaderProps = {
    scrolled?: boolean;
};

export default function Header({ scrolled = false }: HeaderProps) {
    return (
        <header
            className={`
                w-full border-b transition-all duration-300
                ${scrolled ? "border-[var(--color-border)] bg-white" : "border-transparent bg-transparent"}
            `}
        >
            {/* Top info bar */}
            <div
                className={`
                    text-sm transition-all duration-300
                    ${scrolled ? "bg-[var(--color-primary)] text-white" : "bg-white/10 backdrop-blur-sm text-white/90"}
                `}
            >
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

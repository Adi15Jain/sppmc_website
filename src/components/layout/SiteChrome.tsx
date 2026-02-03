import { useEffect, useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import FullscreenMenu from "./FullscreenMenu";

export default function SiteChrome() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 80);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            {/* Spacer – occupies layout space */}
            <div
                className={`
                    h-[112px]
                    transition-all duration-300
                    ${scrolled ? "h-[64px]" : "h-[112px]"}
                `}
            />

            {/* Fixed chrome */}
            <div className="fixed top-0 left-0 right-0 z-40">
                <div
                    className={`
                        transition-transform duration-300 ease-out
                        ${scrolled ? "-translate-y-[48px]" : "translate-y-0"}
                    `}
                >
                    <Header />
                    <Navbar
                        scrolled={scrolled}
                        onMenuOpen={() => setMenuOpen(true)}
                    />
                </div>
            </div>

            {/* Fullscreen menu */}
            <FullscreenMenu
                open={menuOpen}
                onClose={() => setMenuOpen(false)}
            />
        </>
    );
}

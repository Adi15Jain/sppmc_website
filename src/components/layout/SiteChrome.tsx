import { useEffect, useState } from "react";
// import Header from "./Header";
import Navbar from "./Navbar";
import FullscreenMenu from "./FullscreenMenu";
import SearchModal from "./SearchModal";

export default function SiteChrome() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 80);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            {/* Fixed chrome */}
            <div className="fixed top-0 left-0 right-0 z-40">
                <div
                    className={`
                    transition-transform duration-300 ease-out 
                    ${scrolled ? "-translate-y-[0px]" : "translate-y-0"}
                `}
                >
                    {/* <Header scrolled={scrolled} /> */}
                    <Navbar
                        scrolled={scrolled}
                        onMenuOpen={() => setMenuOpen(true)}
                        onSearchOpen={() => setSearchOpen(true)}
                    />
                </div>
            </div>

            {/* Fullscreen menu */}
            <FullscreenMenu
                open={menuOpen}
                onClose={() => setMenuOpen(false)}
            />

            {/* Search modal */}
            <SearchModal
                open={searchOpen}
                onClose={() => setSearchOpen(false)}
            />
        </>
    );
}

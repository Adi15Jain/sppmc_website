import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Handles smooth scrolling to hash-targeted elements on navigation.
 * Accounts for the fixed navbar height.
 */
export default function ScrollToHash() {
    const { hash, pathname } = useLocation();

    useEffect(() => {
        if (hash) {
            // Small delay to ensure the DOM is ready after navigation
            const timeoutId = setTimeout(() => {
                const element = document.querySelector(hash);
                if (element) {
                    const navbarHeight = 80; // Account for fixed navbar
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition =
                        elementPosition + window.scrollY - navbarHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                    });
                }
            }, 100);

            return () => clearTimeout(timeoutId);
        } else {
            // Scroll to top when navigating to a page without hash
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [hash, pathname]);

    return null;
}

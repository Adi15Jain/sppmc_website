import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Programmes from "./pages/Programmes";
import Admissions from "./pages/Admissions";
import StudentLife from "./pages/StudentLife";
import Gallery from "./pages/Gallery";
import MandatoryDisclosures from "./pages/MandatoryDisclosures";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import SiteChrome from "./components/layout/SiteChrome";
import ScrollToHash from "./components/layout/ScrollToHash";

// Conditional Footer wrapper - hides on Contact page
function ConditionalFooter() {
    const location = useLocation();
    // Contact page has its own custom footer
    if (location.pathname === "/contact") {
        return null;
    }
    return <Footer />;
}

export default function App() {
    return (
        <BrowserRouter>
            <ScrollToHash />
            <SiteChrome />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/programmes" element={<Programmes />} />
                <Route path="/admissions" element={<Admissions />} />
                <Route path="/student-life" element={<StudentLife />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route
                    path="/mandatory-disclosures"
                    element={<MandatoryDisclosures />}
                />
                <Route path="/contact" element={<Contact />} />
                {/* Catch-all route for 404 */}
                <Route path="*" element={<NotFound />} />
            </Routes>

            <ConditionalFooter />
        </BrowserRouter>
    );
}

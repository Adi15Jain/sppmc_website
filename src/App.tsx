import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Programmes from "./pages/Programmes";
import Admissions from "./pages/Admissions";
import StudentLife from "./pages/StudentLife";
import Gallery from "./pages/Gallery";
import Downloads from "./pages/Downloads";
import SiteChrome from "./components/layout/SiteChrome";
import ScrollToHash from "./components/layout/ScrollToHash";

export default function App() {
    return (
        <BrowserRouter>
            <ScrollToHash />
            <SiteChrome />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                {/* <Route path="/academics" element={<Programmes />} /> */}
                <Route path="/programmes" element={<Programmes />} />
                <Route path="/admissions" element={<Admissions />} />
                <Route path="/student-life" element={<StudentLife />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/downloads" element={<Downloads />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

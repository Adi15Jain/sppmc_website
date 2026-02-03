import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import StudentLife from "./pages/StudentLife";
import Gallery from "./pages/Gallery";
import Downloads from "./pages/ Downloads";
import Header from "./components/layout/Header";

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/academics" element={<Academics />} />
                <Route path="/admissions" element={<Admissions />} />
                <Route path="/student-life" element={<StudentLife />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/downloads" element={<Downloads />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

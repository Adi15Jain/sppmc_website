import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Programmes from "../components/sections/Programmes";
import StudentLife from "../components/sections/StudentLife";
import CTA from "../components/sections/CTA";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Programmes />
            <StudentLife />
            <CTA />
        </>
    );
}

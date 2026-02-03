import Hero from "../components/sections/Hero";
import Trust from "../components/sections/Trust";
import About from "../components/sections/About";
import Academics from "../components/sections/Academics";
import StudentLife from "../components/sections/StudentLife";
import CTA from "../components/sections/CTA";

export default function Home() {
    return (
        <>
            <Hero />
            <Trust />
            <About />
            <Academics />
            <StudentLife />
            <CTA />
        </>
    );
}

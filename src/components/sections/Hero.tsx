import { useEffect, useState } from "react";

const IMAGES = [
    "/images/campus-1.png",
    "/images/classroom.jpeg",
    "/images/library.jpeg",
    "/images/event.jpeg",
    "/images/seminar.jpeg",
    "/images/activity.png",
];

function HeroImageCarousel() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % IMAGES.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
            <img
                key={IMAGES[current]}
                src={IMAGES[current]}
                alt=""
                className="h-full w-full object-cover transition-opacity duration-700 ease-in-out"
            />
        </div>
    );
}

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-section-soft animate-[var(--animate-fade-up)]">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-20 md:grid-cols-2 md:items-center">
                {/* Text */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-heading">
                        Building Future Educators with
                        <span className="text-primary">
                            {" "}
                            Purpose & Integrity
                        </span>
                    </h2>

                    <p className="mt-6 text-lg text-body animate-[var(--animate-fade-up)]">
                        Shri Prem Prakash Memorial College is committed to
                        nurturing, motivating, and empowering future teachers to
                        meet the challenges of a globalized education system.
                    </p>

                    <div className="mt-8 flex gap-4">
                        <a
                            href="#academics"
                            className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-white hover:opacity-90"
                        >
                            Explore Academics
                        </a>
                        <a
                            href="#about"
                            className="rounded-md border border-slate-300 px-6 py-3 text-sm font-medium text-body hover:bg-slate-100"
                        >
                            About the College
                        </a>
                    </div>
                </div>

                {/* Visual */}
                <div className="relative h-full w-full">
                    <HeroImageCarousel />
                </div>
            </div>
        </section>
    );
}

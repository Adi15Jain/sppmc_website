import { useState } from "react";
import PageHero from "../components/sections/PageHero";
import Container from "../components/layout/Container";

type GalleryImage = {
    id: number;
    src: string;
    alt: string;
};

const IMAGES: GalleryImage[] = [
    { id: 1, src: "/images/campus-1.png", alt: "Campus View" },
    { id: 2, src: "/images/classroom.jpeg", alt: "Classroom" },
    { id: 3, src: "/images/library.jpeg", alt: "Library" },
    { id: 4, src: "/images/event.jpeg", alt: "Cultural Event" },
    { id: 5, src: "/images/seminar.jpeg", alt: "Seminar Hall" },
    { id: 6, src: "/images/activity.png", alt: "Student Activity" },
];

export default function Gallery() {
    const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

    return (
        <main>
            {/* Page hero */}
            <PageHero
                title="Gallery"
                subtitle="A glimpse into campus life, facilities, and activities."
            />

            {/* Image grid */}
            <section className="py-20 animate-[var(--animate-fade-up)]">
                <Container>
                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                        {IMAGES.map((image) => (
                            <button
                                key={image.id}
                                onClick={() => setActiveImage(image)}
                                className="group relative overflow-hidden rounded-lg"
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    loading="lazy"
                                    className="h-56 w-full object-cover transition group-hover:scale-105"
                                />
                            </button>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Modal */}
            {activeImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
                    onClick={() => setActiveImage(null)}
                >
                    <div className="max-w-4xl">
                        <img
                            src={activeImage.src}
                            alt={activeImage.alt}
                            className="max-h-[80vh] w-full rounded-lg object-contain"
                        />
                    </div>
                </div>
            )}
        </main>
    );
}

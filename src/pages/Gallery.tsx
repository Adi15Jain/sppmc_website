import { useState, useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import Container from "../components/layout/Container";

type GalleryImage = {
    id: number;
    src: string;
    alt: string;
    category: "campus" | "events" | "facilities" | "activities";
    featured?: boolean;
};

const CATEGORIES = [
    { id: "all", label: "All Photos", icon: "📸" },
    { id: "campus", label: "Campus", icon: "🏛️" },
    { id: "facilities", label: "Facilities", icon: "🏫" },
    { id: "events", label: "Events", icon: "🎭" },
    { id: "activities", label: "Activities", icon: "🎨" },
];

const IMAGES: GalleryImage[] = [
    {
        id: 1,
        src: "/images/campus-1.png",
        alt: "Campus Main Building",
        category: "campus",
        featured: true,
    },
    {
        id: 2,
        src: "/images/campus-2.jpg",
        alt: "Campus Aerial View",
        category: "campus",
    },
    {
        id: 3,
        src: "/images/campus-3.jpg",
        alt: "Campus Gardens",
        category: "campus",
    },
    {
        id: 4,
        src: "/images/classroom.jpeg",
        alt: "Smart Classroom",
        category: "facilities",
    },
    {
        id: 5,
        src: "/images/library.jpeg",
        alt: "Digital Library",
        category: "facilities",
        featured: true,
    },
    {
        id: 6,
        src: "/images/seminar.jpeg",
        alt: "Seminar Hall",
        category: "facilities",
    },
    {
        id: 7,
        src: "/images/event.jpeg",
        alt: "Cultural Festival",
        category: "events",
        featured: true,
    },
    {
        id: 8,
        src: "/images/activity.png",
        alt: "Student Activities",
        category: "activities",
    },
    {
        id: 9,
        src: "/images/campus-facilities.png",
        alt: "Campus Facilities",
        category: "facilities",
    },
    {
        id: 10,
        src: "/images/student-activities.png",
        alt: "Extra-curricular Activities",
        category: "activities",
        featured: true,
    },
    {
        id: 11,
        src: "/images/clubs-organizations.png",
        alt: "Clubs & Organizations",
        category: "activities",
    },
    {
        id: 12,
        src: "/images/student-support.png",
        alt: "Student Support Services",
        category: "facilities",
    },
];

// Lightbox Component
function Lightbox({
    image,
    images,
    onClose,
    onNavigate,
}: {
    image: GalleryImage;
    images: GalleryImage[];
    onClose: () => void;
    onNavigate: (img: GalleryImage) => void;
}) {
    const [zoom, setZoom] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    const currentIndex = images.findIndex((img) => img.id === image.id);

    // Reset zoom and position when image changes
    useEffect(() => {
        setZoom(1);
        setPosition({ x: 0, y: 0 });
    }, [image]);

    // Keyboard navigation
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            switch (e.key) {
                case "Escape":
                    onClose();
                    break;
                case "ArrowLeft":
                    if (currentIndex > 0) {
                        onNavigate(images[currentIndex - 1]);
                    }
                    break;
                case "ArrowRight":
                    if (currentIndex < images.length - 1) {
                        onNavigate(images[currentIndex + 1]);
                    }
                    break;
                case "+":
                case "=":
                    setZoom((z) => Math.min(z + 0.5, 4));
                    break;
                case "-":
                    setZoom((z) => Math.max(z - 0.5, 1));
                    break;
            }
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [currentIndex, images, onClose, onNavigate]);

    // Mouse handlers for panning
    const handleMouseDown = useCallback(
        (e: React.MouseEvent) => {
            if (zoom > 1) {
                setIsDragging(true);
                setDragStart({
                    x: e.clientX - position.x,
                    y: e.clientY - position.y,
                });
            }
        },
        [zoom, position],
    );

    const handleMouseMove = useCallback(
        (e: React.MouseEvent) => {
            if (isDragging && zoom > 1) {
                setPosition({
                    x: e.clientX - dragStart.x,
                    y: e.clientY - dragStart.y,
                });
            }
        },
        [isDragging, dragStart, zoom],
    );

    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
    }, []);

    // Double click to toggle zoom
    const handleDoubleClick = useCallback(() => {
        if (zoom > 1) {
            setZoom(1);
            setPosition({ x: 0, y: 0 });
        } else {
            setZoom(2);
        }
    }, [zoom]);

    // Wheel zoom
    const handleWheel = useCallback((e: React.WheelEvent) => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.3 : 0.3;
        setZoom((z) => {
            const newZoom = Math.max(1, Math.min(4, z + delta));
            if (newZoom === 1) {
                setPosition({ x: 0, y: 0 });
            }
            return newZoom;
        });
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-xl animate-fade-in"
            onClick={(e) => {
                if (e.target === containerRef.current) onClose();
            }}
        >
            {/* Header */}
            <div className="flex items-center justify-between p-4 md:p-6 text-white z-20">
                <div className="flex items-center gap-4">
                    <span className="text-sm text-white/60">
                        {currentIndex + 1} / {images.length}
                    </span>
                    <h3 className="text-lg font-medium hidden sm:block">
                        {image.alt}
                    </h3>
                </div>

                <div className="flex items-center gap-2">
                    {/* Zoom controls */}
                    <div className="hidden sm:flex items-center gap-1 bg-white/10 rounded-lg p-1">
                        <button
                            onClick={() => setZoom((z) => Math.max(z - 0.5, 1))}
                            className="p-2 hover:bg-white/10 rounded transition-colors"
                            disabled={zoom <= 1}
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M20 12H4"
                                />
                            </svg>
                        </button>
                        <span className="px-2 text-sm min-w-[3rem] text-center">
                            {Math.round(zoom * 100)}%
                        </span>
                        <button
                            onClick={() => setZoom((z) => Math.min(z + 0.5, 4))}
                            className="p-2 hover:bg-white/10 rounded transition-colors"
                            disabled={zoom >= 4}
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 4v16m8-8H4"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Download button */}
                    <a
                        href={image.src}
                        download={image.alt}
                        className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                        title="Download"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                        </svg>
                    </a>

                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                        title="Close (Esc)"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Image container */}
            <div
                className="flex-1 flex items-center justify-center overflow-hidden relative"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onWheel={handleWheel}
                onDoubleClick={handleDoubleClick}
                style={{
                    cursor:
                        zoom > 1
                            ? isDragging
                                ? "grabbing"
                                : "grab"
                            : "zoom-in",
                }}
            >
                <img
                    ref={imageRef}
                    src={image.src}
                    alt={image.alt}
                    className="max-h-[80vh] max-w-[90vw] object-contain transition-transform duration-200 select-none"
                    style={{
                        transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
                    }}
                    draggable={false}
                />

                {/* Navigation arrows */}
                {currentIndex > 0 && (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onNavigate(images[currentIndex - 1]);
                        }}
                        className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all hover:scale-110"
                    >
                        <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>
                )}
                {currentIndex < images.length - 1 && (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onNavigate(images[currentIndex + 1]);
                        }}
                        className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all hover:scale-110"
                    >
                        <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                )}
            </div>

            {/* Thumbnail strip */}
            <div className="p-4 bg-black/50 overflow-x-auto">
                <div className="flex gap-2 justify-center">
                    {images.map((img, idx) => (
                        <button
                            key={img.id}
                            onClick={() => onNavigate(img)}
                            className={`
                                flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all duration-300
                                ${img.id === image.id ? "ring-2 ring-accent scale-110" : "opacity-50 hover:opacity-100"}
                            `}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover"
                                loading={
                                    Math.abs(idx - currentIndex) < 3
                                        ? "eager"
                                        : "lazy"
                                }
                            />
                        </button>
                    ))}
                </div>
            </div>

            {/* Instructions */}
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-4 text-white/40 text-xs">
                <span>Double-click to zoom</span>
                <span>•</span>
                <span>Scroll to zoom</span>
                <span>•</span>
                <span>Arrow keys to navigate</span>
                <span>•</span>
                <span>Esc to close</span>
            </div>
        </div>
    );
}

export default function Gallery() {
    const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);
    const [activeCategory, setActiveCategory] = useState("all");
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    const filteredImages =
        activeCategory === "all"
            ? IMAGES
            : IMAGES.filter((img) => img.category === activeCategory);

    // GSAP animation on mount and category change
    useEffect(() => {
        if (!gridRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                gridRef.current?.children ?? [],
                { opacity: 0, y: 30, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    stagger: 0.08,
                    duration: 0.5,
                    ease: "power3.out",
                },
            );
        }, gridRef);

        return () => ctx.revert();
    }, [activeCategory]);

    // Prevent body scroll when lightbox is open
    useEffect(() => {
        if (activeImage) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [activeImage]);

    return (
        <main>
            {/* Hero Section */}
            <section className="relative h-[100vh] min-h-[400px] overflow-hidden">
                <img
                    src="/images/gallery-hero.png"
                    alt="Gallery Collage"
                    className="absolute inset-0 h-full w-full object-cover animate-fade-in"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50" />

                <div className="relative z-10 flex h-full items-center pt-[112px]">
                    <Container>
                        <div className="max-w-3xl animate-slide-in-left">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6 animate-fade-in">
                                <span className="text-lg">📸</span>
                                Photo Gallery
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold text-white text-gradient mb-4">
                                Campus Gallery
                            </h1>
                            <p className="mt-4 text-xl text-white/90 leading-relaxed animate-slide-in-left animate-delay-200">
                                Explore the vibrant life at SPPMC through our
                                collection of photographs capturing memorable
                                moments, events, and campus experiences.
                            </p>
                        </div>
                    </Container>
                </div>

                {/* Floating elements */}
                <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-float animate-delay-300"></div>
                <div className="absolute bottom-24 left-16 w-10 h-10 bg-accent/20 rounded-full animate-float animate-delay-700"></div>
            </section>

            {/* Gallery Section */}
            <section className="section bg-gradient-to-b from-slate-50 to-white">
                <Container>
                    {/* Category Filters */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-up">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`
                                    flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm
                                    transition-all duration-300 hover:scale-105
                                    ${
                                        activeCategory === cat.id
                                            ? "bg-gradient-to-r from-primary to-primary-light text-white shadow-lg"
                                            : "bg-white text-slate-700 border border-slate-200 hover:border-primary/30 hover:shadow-md"
                                    }
                                `}
                            >
                                <span className="text-lg">{cat.icon}</span>
                                {cat.label}
                                {activeCategory === cat.id && (
                                    <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                                        {filteredImages.length}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Photo Grid - Masonry-like layout */}
                    <div
                        ref={gridRef}
                        className="grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                    >
                        {filteredImages.map((image, index) => (
                            <button
                                key={image.id}
                                onClick={() => setActiveImage(image)}
                                onMouseEnter={() => setHoveredId(image.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                className={`
                                    group relative overflow-hidden rounded-xl
                                    transition-all duration-500 hover:shadow-2xl hover:z-10
                                    ${image.featured ? "md:col-span-2 md:row-span-2" : ""}
                                    ${hoveredId === image.id ? "scale-[1.02]" : ""}
                                `}
                            >
                                <div
                                    className={`
                                    relative overflow-hidden
                                    ${image.featured ? "h-64 md:h-[400px]" : "h-48 md:h-64"}
                                `}
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        loading={index < 6 ? "eager" : "lazy"}
                                        className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                                    />

                                    {/* Gradient overlay */}
                                    <div
                                        className={`
                                        absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent
                                        transition-opacity duration-300
                                        ${hoveredId === image.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
                                    `}
                                    />

                                    {/* Content overlay */}
                                    <div
                                        className={`
                                        absolute inset-0 flex flex-col justify-end p-4
                                        transition-all duration-300
                                        ${hoveredId === image.id ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"}
                                    `}
                                    >
                                        <span
                                            className={`
                                            inline-flex self-start items-center gap-1 px-2 py-1 rounded-full text-xs font-medium mb-2
                                            ${
                                                image.category === "campus"
                                                    ? "bg-blue-500/80 text-white"
                                                    : image.category ===
                                                        "facilities"
                                                      ? "bg-green-500/80 text-white"
                                                      : image.category ===
                                                          "events"
                                                        ? "bg-purple-500/80 text-white"
                                                        : "bg-orange-500/80 text-white"
                                            }
                                        `}
                                        >
                                            {image.category
                                                .charAt(0)
                                                .toUpperCase() +
                                                image.category.slice(1)}
                                        </span>
                                        <h3 className="text-white font-semibold text-sm md:text-base">
                                            {image.alt}
                                        </h3>
                                    </div>

                                    {/* Zoom icon */}
                                    <div
                                        className={`
                                        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                                        p-3 bg-white/20 backdrop-blur-sm rounded-full
                                        transition-all duration-300
                                        ${hoveredId === image.id ? "scale-100 opacity-100" : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"}
                                    `}
                                    >
                                        <svg
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                            />
                                        </svg>
                                    </div>

                                    {/* Featured badge */}
                                    {image.featured && (
                                        <div className="absolute top-4 right-4 px-3 py-1 bg-accent text-white text-xs font-bold rounded-full">
                                            Featured
                                        </div>
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Empty state */}
                    {filteredImages.length === 0 && (
                        <div className="text-center py-16">
                            <span className="text-5xl mb-4 block">📷</span>
                            <h3 className="text-xl font-semibold text-slate-900 mb-2">
                                No photos in this category
                            </h3>
                            <p className="text-slate-600">
                                Check back later for more photos!
                            </p>
                        </div>
                    )}
                </Container>
            </section>

            {/* Stats Section */}
            <section className="section section-soft">
                <Container>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-fade-up">
                        {[
                            {
                                value: IMAGES.length,
                                label: "Photos",
                                icon: "📸",
                            },
                            {
                                value: IMAGES.filter(
                                    (i) => i.category === "events",
                                ).length,
                                label: "Events Captured",
                                icon: "🎭",
                            },
                            {
                                value: IMAGES.filter((i) => i.featured).length,
                                label: "Featured Images",
                                icon: "⭐",
                            },
                            {
                                value: CATEGORIES.length - 1,
                                label: "Categories",
                                icon: "📂",
                            },
                        ].map((stat) => (
                            <div key={stat.label} className="card p-6">
                                <span className="text-3xl mb-2 block">
                                    {stat.icon}
                                </span>
                                <div className="text-3xl md:text-4xl font-bold text-gradient">
                                    {stat.value}+
                                </div>
                                <div className="text-slate-600 text-sm mt-1">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Lightbox */}
            {activeImage && (
                <Lightbox
                    image={activeImage}
                    images={filteredImages}
                    onClose={() => setActiveImage(null)}
                    onNavigate={setActiveImage}
                />
            )}
        </main>
    );
}

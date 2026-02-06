import { useState, useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import {
    Landmark,
    Building2,
    Theater,
    Palette,
    Image as ImageIcon,
    Star,
    LayoutGrid,
    Search,
    Download,
    X,
    ChevronLeft,
    ChevronRight,
    ZoomIn,
    ZoomOut,
} from "lucide-react";
import Container from "../components/layout/Container";

type GalleryImage = {
    id: number;
    src: string;
    alt: string;
    category: "campus" | "events" | "facilities" | "activities";
    featured?: boolean;
};

const CATEGORIES = [
    { id: "all", label: "All Photos", icon: LayoutGrid },
    { id: "campus", label: "Campus", icon: Landmark },
    { id: "facilities", label: "Facilities", icon: Building2 },
    { id: "events", label: "Events", icon: Theater },
    { id: "activities", label: "Activities", icon: Palette },
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
    {
        id: 13,
        src: "/images/campus-1.png",
        alt: "Administrative Block",
        category: "campus",
    },
    {
        id: 14,
        src: "/images/event.jpeg",
        alt: "Annual Sports Day",
        category: "events",
    },
    {
        id: 15,
        src: "/images/classroom.jpeg",
        alt: "Computer Laboratory",
        category: "facilities",
    },
    {
        id: 16,
        src: "/images/activity.png",
        alt: "Art Workshop",
        category: "activities",
    },
    {
        id: 17,
        src: "/images/campus-2.jpg",
        alt: "Evening Campus View",
        category: "campus",
        featured: true,
    },
    {
        id: 18,
        src: "/images/seminar.jpeg",
        alt: "Guest Lecture Series",
        category: "events",
    },
    {
        id: 19,
        src: "/images/library.jpeg",
        alt: "Reading Room",
        category: "facilities",
    },
    {
        id: 20,
        src: "/images/student-activities.png",
        alt: "Music Club Jam",
        category: "activities",
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
                            <ZoomOut className="w-5 h-5" />
                        </button>
                        <span className="px-2 text-sm min-w-[3rem] text-center">
                            {Math.round(zoom * 100)}%
                        </span>
                        <button
                            onClick={() => setZoom((z) => Math.min(z + 0.5, 4))}
                            className="p-2 hover:bg-white/10 rounded transition-colors"
                            disabled={zoom >= 4}
                        >
                            <ZoomIn className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Download button */}
                    <a
                        href={image.src}
                        download={image.alt}
                        className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                        title="Download"
                    >
                        <Download className="w-5 h-5" />
                    </a>

                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                        title="Close (Esc)"
                    >
                        <X className="w-6 h-6" />
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
                        <ChevronLeft className="w-6 h-6 text-white" />
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
                        <ChevronRight className="w-6 h-6 text-white" />
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
    const heroRef = useRef<HTMLElement>(null);
    const backgroundRef = useRef<HTMLDivElement>(null);
    const floatingRefs = useRef<HTMLDivElement[]>([]);

    const filteredImages =
        activeCategory === "all"
            ? IMAGES
            : IMAGES.filter((img) => img.category === activeCategory);

    // Hero GSAP animations
    useEffect(() => {
        const hero = heroRef.current;
        if (!hero) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            // Background zoom out entrance
            tl.fromTo(
                backgroundRef.current,
                { scale: 1.1, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1.5 },
            );

            // Staggered content reveal
            tl.from(
                ".hero-badge",
                {
                    opacity: 0,
                    y: 20,
                    duration: 0.8,
                },
                "-=1",
            );

            tl.from(
                ".hero-title",
                {
                    opacity: 0,
                    y: 40,
                    duration: 1,
                },
                "-=0.6",
            );

            tl.from(
                ".hero-subtitle",
                {
                    opacity: 0,
                    y: 30,
                    duration: 0.8,
                },
                "-=0.7",
            );

            tl.from(
                ".scroll-indicator",
                {
                    opacity: 0,
                    y: -20,
                    duration: 0.6,
                },
                "-=0.4",
            );

            // Floating elements continuous animation
            floatingRefs.current.forEach((el, i) => {
                if (el) {
                    gsap.to(el, {
                        y: "random(-30, 30)",
                        x: "random(-20, 20)",
                        rotation: "random(-15, 15)",
                        duration: "random(4, 7)",
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut",
                        delay: i * 0.4,
                    });
                }
            });
        }, hero);

        return () => ctx.revert();
    }, []);

    // Mouse Parallax for Hero
    useEffect(() => {
        const hero = heroRef.current;
        if (!hero) return;

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const xPercent = (clientX / innerWidth - 0.5) * 2;
            const yPercent = (clientY / innerHeight - 0.5) * 2;

            floatingRefs.current.forEach((el, i) => {
                if (el) {
                    const depth = (i + 1) * 0.45;
                    gsap.to(el, {
                        x: xPercent * 15 * depth,
                        y: yPercent * 10 * depth,
                        duration: 1,
                        ease: "power2.out",
                    });
                }
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const addToFloatingRefs = (el: HTMLDivElement | null) => {
        if (el && !floatingRefs.current.includes(el)) {
            floatingRefs.current.push(el);
        }
    };

    // GSAP animation on category change for grid
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
            <section
                ref={heroRef}
                className="relative h-[100vh] min-h-[600px] w-full overflow-hidden"
            >
                {/* Background Layer with Parallax capability */}
                <div ref={backgroundRef} className="absolute inset-0">
                    <img
                        src="/images/gallery-hero.png"
                        alt="Gallery Collage"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    {/* Multi-layered premium overlay */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.7) 50%, rgba(255, 121, 0, 0.1) 100%)",
                        }}
                    />
                    <div className="absolute inset-0 bg-slate-900/40" />
                </div>

                {/* Subtle Grid Overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }}
                />

                {/* Decorative Elements */}
                <div
                    ref={addToFloatingRefs}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
                />
                <div
                    ref={addToFloatingRefs}
                    className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-[100px]"
                />
                <div
                    ref={addToFloatingRefs}
                    className="absolute top-1/3 right-10 w-20 h-20 border border-white/10 rounded-full hidden md:block"
                />
                <div
                    ref={addToFloatingRefs}
                    className="absolute bottom-1/3 left-10 w-28 h-28 border border-accent/10 rounded-full hidden md:block"
                />

                {/* Content */}
                <div className="relative z-10 flex h-full items-center pt-[112px]">
                    <Container>
                        <div className="max-w-4xl">
                            {/* Animated Badge */}
                            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 mb-8 glass rounded-full text-white/90 text-sm font-semibold tracking-wide border border-white/10">
                                <span className="w-2 h-2 bg-accent rounded-full animate-pulse shadow-[0_0_10px_rgba(255,121,0,0.8)]" />
                                Capturing Moments
                            </div>

                            <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
                                Campus{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-orange-400 to-amber-300">
                                    Gallery
                                </span>
                            </h1>

                            <p className="hero-subtitle text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl font-light">
                                A visual journey through SPPMC&apos;s vibrant
                                academic life, cultural festivities, and
                                world-class infrastructure.
                            </p>

                            {/* Decorative Line */}
                            <div className="mt-12 h-1 w-24 bg-gradient-to-r from-accent to-transparent rounded-full" />
                        </div>
                    </Container>
                </div>

                {/* Scroll Indicator */}
                <div className="scroll-indicator absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
                    <span className="text-white/40 text-sm font-bold tracking-[0.3em] uppercase">
                        Explore
                    </span>
                    <div className="w-[1px] h-16 bg-gradient-to-b from-white/60 to-transparent relative">
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-accent animate-infinite-scroll" />
                    </div>
                </div>
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
                                <cat.icon
                                    className={`w-5 h-5 ${activeCategory === cat.id ? "text-white" : "text-accent"}`}
                                />
                                {cat.label}
                                {activeCategory === cat.id && (
                                    <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                                        {filteredImages.length}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Photo Grid - True Masonry Layout */}
                    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                        {filteredImages.map((image, index) => (
                            <button
                                key={image.id}
                                onClick={() => setActiveImage(image)}
                                onMouseEnter={() => setHoveredId(image.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                className={`
                                    break-inside-avoid mb-4 w-full text-left
                                    group relative overflow-hidden rounded-xl
                                    transition-all duration-500 hover:shadow-2xl hover:z-10
                                    ${hoveredId === image.id ? "scale-[1.02]" : ""}
                                `}
                            >
                                <div
                                    className={`
                                    relative overflow-hidden w-full
                                    ${image.featured ? "aspect-[4/5]" : index % 3 === 0 ? "aspect-[3/4]" : "aspect-square"}
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
                                        <h3 className="text-white font-semibold text-sm md:text-base line-clamp-2">
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
                                        <Search className="w-6 h-6 text-white" />
                                    </div>

                                    {/* Featured badge */}
                                    {image.featured && (
                                        <div className="absolute top-4 right-4 px-3 py-1 bg-accent text-white text-xs font-bold rounded-full flex items-center gap-1">
                                            <Star className="w-3 h-3 fill-current" />
                                            Featured
                                        </div>
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Empty state */}
                    {filteredImages.length === 0 && (
                        <div className="text-center py-24 bg-slate-50/50 rounded-3xl border border-dashed border-slate-200">
                            <ImageIcon className="w-16 h-16 text-accent/40 mx-auto mb-4" />
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

import Container from "../components/layout/Container";

export default function About() {
    return (
        <main>
            {/* About Hero */}
            <section className="relative h-[100vh] overflow-hidden">
                <img
                    src="/images/campus-1.png"
                    alt="College Campus"
                    className="absolute inset-0 h-full w-full object-cover animate-fade-in"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40" />

                <div className="relative z-10 flex h-full items-center pt-[112px]">
                    <Container>
                        <div className="max-w-3xl animate-slide-in-left">
                            <h1 className="text-4xl md:text-6xl font-bold text-white text-gradient mb-2">
                                About the College
                            </h1>
                            <p className="mt-6 text-xl text-white/90 leading-relaxed animate-slide-in-left animate-delay-200">
                                A legacy of excellence in teacher education,
                                guided by values, discipline, and academic
                                integrity.
                            </p>
                            <div className="mt-8 animate-bounce-in animate-delay-500">
                                <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-300">
                                    Discover Our Story
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>

                {/* Floating elements for visual interest */}
                <div className="absolute top-20 right-20 w-20 h-20 bg-white/10 rounded-full animate-float animate-delay-300"></div>
                <div className="absolute bottom-32 left-16 w-12 h-12 bg-accent/20 rounded-full animate-float animate-delay-700"></div>
            </section>

            {/* Institution Overview */}
            <section id="story" className="section">
                <Container>
                    <div className="grid gap-12 md:grid-cols-2 md:items-center">
                        {/* Text */}
                        <div className="animate-fade-up">
                            <h2 className="text-2xl font-semibold">
                                Our Journey
                            </h2>

                            <p className="mt-4 text-body leading-relaxed">
                                Shri Prem Prakash Memorial College was
                                established with the vision of strengthening the
                                foundation of education by preparing capable and
                                committed teachers.
                            </p>

                            <p className="mt-4 text-body leading-relaxed">
                                Affiliated to SCERT, Government of Uttar
                                Pradesh, the college follows national standards
                                while promoting ethical values and professional
                                excellence.
                            </p>
                        </div>

                        {/* Image */}
                        <div className="animate-fade-up [animation-delay:150ms]">
                            <img
                                src="/images/classroom.jpeg"
                                alt="Classroom Environment"
                                className="rounded-xl object-cover shadow-lg"
                            />
                        </div>
                    </div>
                </Container>
            </section>

            {/* Vision & Mission */}
            <section id="vision" className="section section-soft">
                <Container>
                    <div className="text-center mb-12 animate-fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
                            Our Vision & Mission
                        </h2>
                        <p className="text-body text-lg max-w-2xl mx-auto">
                            Guiding principles that shape our educational
                            philosophy and commitment to excellence
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="card animate-scale-in hover-lift group">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                                    <div className="w-6 h-6 bg-accent rounded-full"></div>
                                </div>
                                <h3 className="text-2xl font-bold text-gradient">
                                    Our Vision
                                </h3>
                            </div>
                            <p className="text-body text-lg leading-relaxed">
                                To emerge as a center of excellence in teacher
                                education by nurturing innovation, integrity,
                                and lifelong learning.
                            </p>
                        </div>

                        <div className="card animate-scale-in animate-delay-200 hover-lift group">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <div className="w-6 h-6 bg-primary rounded-full"></div>
                                </div>
                                <h3 className="text-2xl font-bold text-gradient">
                                    Our Mission
                                </h3>
                            </div>
                            <ul className="space-y-4 text-body">
                                {[
                                    "Deliver quality professional education",
                                    "Promote ethical and social responsibility",
                                    "Encourage reflective and innovative teaching",
                                    "Develop competent and committed educators",
                                ].map((item, index) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-4 animate-fade-up"
                                        style={{
                                            animationDelay: `${index * 0.1}s`,
                                        }}
                                    >
                                        <span className="mt-1 h-2 w-2 rounded-full bg-accent animate-bounce-in"></span>
                                        <span className="text-lg leading-relaxed">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Leadership */}
            <section id="principal" className="section">
                <Container>
                    <div className="grid gap-12 md:grid-cols-3 md:items-center">
                        {/* Image */}
                        <div className="flex justify-center animate-fade-up">
                            <img
                                src="/images/principal.jpeg"
                                alt="Principal"
                                className="h-48 w-48 rounded-full object-cover shadow-md"
                            />
                        </div>

                        {/* Text */}
                        <div className="md:col-span-2 animate-fade-up [animation-delay:150ms]">
                            <h3 className="text-2xl font-semibold">
                                Principal’s Message
                            </h3>

                            <p className="mt-4 text-body leading-relaxed">
                                Education is the cornerstone of a progressive
                                society. Our institution strives to prepare
                                educators who are intellectually capable,
                                morally upright, and socially responsible.
                            </p>

                            <p className="mt-4 text-body leading-relaxed">
                                We emphasize discipline, professionalism, and
                                continuous improvement in teaching and learning.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Infrastructure */}
            <section id="faculty" className="section section-warm">
                <Container>
                    <div className="text-center mb-12 animate-fade-up">
                        <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                            World-Class Amenities
                        </span>
                        <h3 className="text-3xl md:text-4xl font-bold text-gradient">
                            Infrastructure & Facilities
                        </h3>
                        <p className="mt-4 text-body max-w-2xl mx-auto">
                            The college has necessary buildings with spacious
                            rooms, furniture, equipment and materials as per
                            course requirements
                        </p>
                    </div>

                    {/* Main Facilities Grid */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
                        {[
                            {
                                title: "Classrooms",
                                img: "/images/classroom.jpeg",
                                desc: "ICT-enabled smart rooms",
                            },
                            {
                                title: "Library",
                                img: "/images/library.jpeg",
                                desc: "9,138+ books & resources",
                            },
                            {
                                title: "ICT Labs",
                                img: "/images/seminar.jpeg",
                                desc: "100 computer workstations",
                            },
                            {
                                title: "Seminar Hall",
                                img: "/images/event.jpeg",
                                desc: "Multipurpose auditorium",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="group relative overflow-hidden rounded-xl card animate-fade-up h-48"
                            >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                                <div className="relative z-10 h-full flex flex-col justify-end p-5 text-white">
                                    <h4 className="font-bold text-lg">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-white/70 mt-1">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Services */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                icon: "🏥",
                                title: "Medical Facility",
                                desc: "Monthly health check-ups at TMU's 599-bed hospital",
                                color: "from-red-500 to-pink-500",
                            },
                            {
                                icon: "⚽",
                                title: "Sports Complex",
                                desc: "Cricket, volleyball, badminton, football & indoor games",
                                color: "from-green-500 to-teal-500",
                            },
                            {
                                icon: "🍽️",
                                title: "Canteen & Mess",
                                desc: "On-campus dining with variety of food options",
                                color: "from-yellow-500 to-orange-500",
                            },
                            {
                                icon: "🚌",
                                title: "College Transport",
                                desc: "Dedicated buses from Moradabad city to campus",
                                color: "from-blue-500 to-indigo-500",
                            },
                        ].map((service) => (
                            <div
                                key={service.title}
                                className="group p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-xl hover:border-transparent transition-all duration-500 animate-fade-up"
                            >
                                <div
                                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                                >
                                    <span className="text-xl">
                                        {service.icon}
                                    </span>
                                </div>
                                <h4 className="font-bold text-heading mb-2 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h4>
                                <p className="text-sm text-body leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
        </main>
    );
}

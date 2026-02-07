export type ContentCategory =
    | "page"
    | "program"
    | "admission"
    | "facility"
    | "activity"
    | "document"
    | "club"
    | "service"
    | "faq";

export const CATEGORY_LABELS: Record<ContentCategory, string> = {
    page: "Page",
    program: "Academic Program",
    admission: "Admissions",
    facility: "Campus Facility",
    activity: "Student Activity",
    document: "Official Document",
    club: "Student Club",
    service: "Campus Service",
    faq: "FAQ",
};

export const CATEGORY_COLORS: Record<ContentCategory, string> = {
    page: "bg-blue-500/10 text-blue-400",
    program: "bg-purple-500/10 text-purple-400",
    admission: "bg-green-500/10 text-green-400",
    facility: "bg-amber-500/10 text-amber-400",
    activity: "bg-pink-500/10 text-pink-400",
    document: "bg-red-500/10 text-red-400",
    club: "bg-indigo-500/10 text-indigo-400",
    service: "bg-teal-500/10 text-teal-400",
    faq: "bg-gray-500/10 text-gray-400",
};

// Synonym mappings for common search terms
export const SYNONYMS: Record<string, string[]> = {
    fee: ["fees", "cost", "price", "payment", "charges", "tuition"],
    admission: [
        "admissions",
        "apply",
        "application",
        "enrollment",
        "enroll",
        "join",
    ],
    program: ["programmes", "programs", "course", "courses", "degree"],
    eligibility: [
        "eligible",
        "qualification",
        "criteria",
        "requirements",
        "required",
    ],
    document: ["documents", "papers", "certificate", "certificates", "docs"],
    download: ["downloads", "downloadable", "pdf", "file", "files"],
    syllabus: ["curriculum", "subjects", "coursework", "modules"],
    contact: ["contacts", "phone", "email", "address", "reach", "call"],
    faculty: ["teachers", "professors", "staff", "educators"],
    student: ["students", "learner", "learners", "pupil", "pupils"],
    library: ["books", "reading", "study"],
    lab: ["labs", "laboratory", "laboratories", "computer"],
    campus: ["college", "institution", "building", "infrastructure"],
    club: ["clubs", "society", "societies", "organization", "organizations"],
    event: ["events", "festival", "festivals", "function", "celebration"],
    sport: ["sports", "games", "athletics", "physical"],
    cultural: ["culture", "art", "arts", "music", "dance", "drama"],
    bed: ["b.ed", "b ed", "bachelor of education", "b.ed."],
    deled: [
        "d.el.ed",
        "d el ed",
        "d.el.ed.",
        "diploma in elementary education",
        "elementary",
    ],
    principal: ["head", "director", "dean"],
    vision: ["aim", "goal", "objective"],
    mission: ["purpose", "objective"],
    placement: ["job", "jobs", "career", "careers", "employment"],
    scholarship: ["scholarships", "financial aid", "assistance"],
    hostel: ["accommodation", "lodging", "residence", "staying"],
    transport: ["bus", "travel", "commute"],
    exam: ["exams", "examination", "examinations", "test", "tests"],
    result: ["results", "marks", "grade", "grades", "score"],
    timetable: ["schedule", "routine", "timing"],
    calendar: ["dates", "academic calendar", "schedule"],
};

export interface SearchEntry {
    id: string;
    title: string;
    description: string;
    path: string;
    keywords: string[];
    category: ContentCategory;
    section?: string;
    icon: string;
    priority: number;
}

export const SEARCH_REGISTRY: SearchEntry[] = [
    // Main Pages
    {
        id: "home",
        title: "Home",
        description:
            "Main landing page of SPPMC - Shri Prem Prakash Memorial College of Education",
        path: "/",
        keywords: ["home", "main", "welcome"],
        category: "page",
        icon: "🏠",
        priority: 10,
    },
    {
        id: "about",
        title: "About Us",
        description: "History, vision, mission, and leadership of SPPMC",
        path: "/about",
        keywords: ["about", "history", "story", "vision", "mission"],
        category: "page",
        icon: "🏛️",
        priority: 9,
    },
    {
        id: "programmes",
        title: "Academic Programmes",
        description: "B.Ed and D.El.Ed teacher education programs",
        path: "/programmes",
        keywords: ["courses", "degree", "bed", "deled", "curriculum"],
        category: "page",
        icon: "🎓",
        priority: 9,
    },
    {
        id: "admissions",
        title: "Admissions",
        description: "Admission process, eligibility, and counseling guide",
        path: "/admissions",
        keywords: ["apply", "enroll", "counseling", "merit"],
        category: "page",
        icon: "📋",
        priority: 9,
    },
    {
        id: "student-life",
        title: "Student Life",
        description: "Campus experience, activities, and facilities",
        path: "/student-life",
        keywords: ["campus", "activities", "facilities", "community"],
        category: "page",
        icon: "🎭",
        priority: 8,
    },
    {
        id: "gallery",
        title: "Photo Gallery",
        description: "Visual journey of campus life and events",
        path: "/gallery",
        keywords: ["photos", "images", "pictures", "events"],
        category: "page",
        icon: "📸",
        priority: 7,
    },
    {
        id: "disclosures",
        title: "Mandatory Disclosures",
        description: "Regulatory compliance and institutional documents",
        path: "/mandatory-disclosures",
        keywords: ["legal", "official", "ncte", "documents"],
        category: "page",
        icon: "📄",
        priority: 8,
    },
    {
        id: "contact",
        title: "Contact Us",
        description: "Get in touch with our administration and campus",
        path: "/contact",
        keywords: ["contact", "reach", "email", "phone", "address"],
        category: "page",
        icon: "📞",
        priority: 7,
    },

    // About Page Sections
    {
        id: "abt-vision",
        title: "Vision & Mission",
        description: "Center of excellence in teacher education",
        path: "/about",
        section: "vision",
        keywords: ["vision", "mission", "goal", "aim"],
        category: "page",
        icon: "🎯",
        priority: 8,
    },
    {
        id: "abt-principal",
        title: "Principal's Message",
        description: "Message on excellence and discipline from our Principal",
        path: "/about",
        section: "principal",
        keywords: ["head", "leadership", "director"],
        category: "page",
        icon: "👤",
        priority: 8,
    },

    // Programs Detail
    {
        id: "prog-bed",
        title: "B.Ed (Bachelor of Education)",
        description: "2-year professional degree for secondary educators",
        path: "/programmes",
        section: "bed",
        keywords: ["bed", "secondary", "teacher", "degree"],
        category: "program",
        icon: "🎓",
        priority: 10,
    },
    {
        id: "prog-deled",
        title: "D.El.Ed (Diploma)",
        description: "2-year program for primary educators",
        path: "/programmes",
        section: "deled",
        keywords: ["deled", "primary", "diploma", "teacher"],
        category: "program",
        icon: "📖",
        priority: 10,
    },

    // Student Life Refined Content
    {
        id: "sl-library",
        title: "Digital Library",
        description: "9,000+ books, journals, and 50+ seating capacity",
        path: "/student-life",
        section: "campus",
        keywords: ["books", "reading", "study", "research"],
        category: "facility",
        icon: "📚",
        priority: 8,
    },
    {
        id: "sl-ict",
        title: "ET & ICT Lab",
        description:
            "Requisite software, printers, and 100+ high-speed computers",
        path: "/student-life",
        section: "campus",
        keywords: ["computer", "lab", "technology", "internet", "it"],
        category: "facility",
        icon: "💻",
        priority: 8,
    },
    {
        id: "sl-medical",
        title: "Medical Facility",
        description: "Health check-ups at the 599-bed TMMC&RC hospital",
        path: "/student-life",
        section: "campus",
        keywords: ["health", "hospital", "doctor", "medical"],
        category: "service",
        icon: "🏥",
        priority: 7,
    },
    {
        id: "sl-transport",
        title: "College Transport",
        description: "Institutional buses from Moradabad city to campus",
        path: "/student-life",
        section: "campus",
        keywords: ["bus", "commute", "travel", "conveyance"],
        category: "service",
        icon: "🚌",
        priority: 7,
    },
    {
        id: "sl-sports",
        title: "Sports & Games",
        description:
            "Indoor and outdoor facilities for Table Tennis, Volleyball, Cricket",
        path: "/student-life",
        section: "campus",
        keywords: ["sports", "games", "fitness", "athletics"],
        category: "activity",
        icon: "⚽",
        priority: 7,
    },
    {
        id: "sl-rooms",
        title: "Institutional Infrastructure",
        description: "Principal office, faculty rooms, and multipurpose hall",
        path: "/student-life",
        section: "campus",
        keywords: ["infrastructure", "building", "rooms", "hall"],
        category: "facility",
        icon: "🏫",
        priority: 6,
    },

    // Academic Activities
    {
        id: "act-theory",
        title: "Theory Classes",
        description:
            "Monthly seminars, group discussions, and expert guest lectures",
        path: "/student-life",
        section: "activities",
        keywords: ["theory", "seminar", "lecture", "seminars"],
        category: "activity",
        icon: "📖",
        priority: 6,
    },
    {
        id: "act-practical",
        title: "Practical Training",
        description:
            "Micro-teaching, lesson planning, and professional record maintains",
        path: "/student-life",
        section: "activities",
        keywords: ["practical", "training", "internship", "teaching"],
        category: "activity",
        icon: "✏️",
        priority: 6,
    },
    {
        id: "act-cocurricular",
        title: "Co-Curricular Activities",
        description: "Art & Craft, Community Service, Music, and Dancing",
        path: "/student-life",
        section: "activities",
        keywords: ["cultural", "sports", "arts", "craft", "music"],
        category: "activity",
        icon: "🎨",
        priority: 5,
    },

    // Admissions
    {
        id: "adm-process",
        title: "Admission Process",
        description:
            "Guide: Counseling, Document Verification, and Fee Submission",
        path: "/admissions",
        section: "process",
        keywords: ["apply", "enroll", "registration", "how to apply"],
        category: "admission",
        icon: "📋",
        priority: 9,
    },
    {
        id: "adm-eligibility",
        title: "Eligibility Criteria",
        description: "10+2/Graduation requirements with minimum 50% marks",
        path: "/admissions",
        section: "eligibility",
        keywords: ["qualification", "criteria", "requirements", "marks"],
        category: "admission",
        icon: "✅",
        priority: 8,
    },
    {
        id: "adm-docs",
        title: "Required Documents",
        description:
            "Marksheets, certificates, ID proof, and photos needed for admission",
        path: "/admissions",
        keywords: ["documents", "papers", "certificates", "id"],
        category: "admission",
        icon: "📄",
        priority: 7,
    },

    // Mandatory Disclosures
    {
        id: "md-ncte",
        title: "NCTE Disclosures",
        description: "Legal affidavits, land documents, and regulatory records",
        path: "/mandatory-disclosures",
        keywords: ["ncte", "legal", "official", "regulatory"],
        category: "document",
        icon: "⚖️",
        priority: 7,
    },
    {
        id: "md-students",
        title: "Student Records",
        description: "Academic records and enrollment data as per regulations",
        path: "/mandatory-disclosures",
        keywords: ["students", "records", "data"],
        category: "document",
        icon: "👥",
        priority: 6,
    },
    {
        id: "md-fees",
        title: "Fee Structure",
        description:
            "Official institutional fee structure for academic programs",
        path: "/mandatory-disclosures",
        keywords: ["fees", "cost", "payment"],
        category: "service",
        icon: "💰",
        priority: 8,
    },
];

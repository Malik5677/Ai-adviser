<<<<<<< HEAD
// Structured data extracted from the NIILM University presentation deck AND
// the live NIILM University website (niilmuniversity.ac.in/departmentslug/*),
// which was fetched to confirm every `link` below is a real, working page.
// Used both for the local (offline) recommendation engine and as grounding
// context sent to the NVIDIA LLM so its answers stay accurate to NIILM's
// real programs.

const SITE = "https://www.niilmuniversity.ac.in";
=======
// Offline fallback copy of server/data/niilmData.js
// Keeps the kiosk fully functional even if the backend/API is briefly down
// during a live demo. If you edit program data, update BOTH files.
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c

export const PROGRAMS = [
  {
    id: "cse-ai",
    group: "B.Tech Engineering",
    name: "B.Tech Computer Science Engineering",
    specialisation: "AI · Machine Learning · Data Science",
<<<<<<< HEAD
    tags: ["math", "computer-science", "physics", "logic", "information-technology", "artificial-intelligence"],
    interests: ["engineering", "coding", "ai"],
    streamFit: ["non-medical", "both-combined"],
    careers: ["AI Engineer", "Software Developer", "Data Scientist", "ML Engineer", "Full Stack Developer"],
    highlights: ["AI & Robotics Labs", "Apple Mac Lab", "Mentors from IIT & IIM", "AI-integrated curriculum"],
    blurb: "The flagship program at NIILM — every core CS subject is paired with hands-on AI, ML and Data Science project work.",
    link: `${SITE}/departmentslug/engineering-technology`
=======
    tags: ["math", "computer-science", "physics", "logic"],
    interests: ["engineering", "coding", "ai"],
    careers: ["AI Engineer", "Software Developer", "Data Scientist", "ML Engineer", "Full Stack Developer"],
    highlights: ["AI & Robotics Labs", "Apple Mac Lab", "Mentors from IIT & IIM", "AI-integrated curriculum"],
    blurb: "The flagship program at NIILM — every core CS subject is paired with hands-on AI, ML and Data Science project work."
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c
  },
  {
    id: "ece",
    group: "B.Tech Engineering",
    name: "B.Tech Electronics Engineering",
    specialisation: "Embedded Systems · IoT",
    tags: ["physics", "math", "computer-science"],
    interests: ["engineering", "electronics"],
<<<<<<< HEAD
    streamFit: ["non-medical", "both-combined"],
    careers: ["IoT Engineer", "Embedded Systems Developer", "Hardware Engineer", "Robotics Technician"],
    highlights: ["Department-wise modern labs", "Industry expert sessions", "Live hardware projects"],
    blurb: "For students who like building things that sense and respond to the physical world — circuits, sensors, and connected devices.",
    link: `${SITE}/departmentslug/engineering-technology`
=======
    careers: ["IoT Engineer", "Embedded Systems Developer", "Hardware Engineer", "Robotics Technician"],
    highlights: ["Department-wise modern labs", "Industry expert sessions", "Live hardware projects"],
    blurb: "For students who like building things that sense and respond to the physical world — circuits, sensors, and connected devices."
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c
  },
  {
    id: "mech",
    group: "B.Tech Engineering",
    name: "B.Tech Mechanical Engineering",
    specialisation: "Robotics · Automation",
    tags: ["physics", "math"],
    interests: ["engineering", "machines"],
<<<<<<< HEAD
    streamFit: ["non-medical", "both-combined"],
    careers: ["Robotics Engineer", "Automation Engineer", "Design Engineer", "Manufacturing Engineer"],
    highlights: ["AI & Robotics Labs", "Industrial visits", "Hands-on practical learning"],
    blurb: "For students fascinated by machines, robotics and how automation is transforming manufacturing.",
    link: `${SITE}/departmentslug/engineering-technology`
=======
    careers: ["Robotics Engineer", "Automation Engineer", "Design Engineer", "Manufacturing Engineer"],
    highlights: ["AI & Robotics Labs", "Industrial visits", "Hands-on practical learning"],
    blurb: "For students fascinated by machines, robotics and how automation is transforming manufacturing."
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c
  },
  {
    id: "civil",
    group: "B.Tech Engineering",
    name: "B.Tech Civil Engineering",
    specialisation: "Smart Infrastructure",
    tags: ["physics", "math"],
    interests: ["engineering", "infrastructure"],
<<<<<<< HEAD
    streamFit: ["non-medical", "both-combined"],
    careers: ["Civil Engineer", "Infrastructure Planner", "Site Engineer", "Urban Planner"],
    highlights: ["Real-world infrastructure projects", "Industry mentorship", "Research & innovation focus"],
    blurb: "For students who want to design and build the smart cities and infrastructure of tomorrow.",
    link: `${SITE}/departmentslug/engineering-technology`
=======
    careers: ["Civil Engineer", "Infrastructure Planner", "Site Engineer", "Urban Planner"],
    highlights: ["Real-world infrastructure projects", "Industry mentorship", "Research & innovation focus"],
    blurb: "For students who want to design and build the smart cities and infrastructure of tomorrow."
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c
  },
  {
    id: "electrical",
    group: "B.Tech Engineering",
    name: "B.Tech Electrical Engineering",
    specialisation: "Renewable Energy · Smart Grid",
    tags: ["physics", "math"],
    interests: ["engineering", "energy"],
<<<<<<< HEAD
    streamFit: ["non-medical", "both-combined"],
    careers: ["Electrical Engineer", "Renewable Energy Specialist", "Power Systems Engineer"],
    highlights: ["Smart classrooms", "Industry-oriented curriculum", "Research on emerging tech"],
    blurb: "For students interested in power systems and the shift towards renewable, sustainable energy.",
    link: `${SITE}/departmentslug/engineering-technology`
  },
  {
    id: "bca",
    group: "Computer Science & Applications",
    name: "BCA (Bachelor of Computer Applications)",
    specialisation: "Software Development · Applications",
    tags: ["computer-science", "math", "information-technology"],
    interests: ["coding", "ai"],
    streamFit: ["non-medical", "both-combined"],
    careers: ["Software Developer", "App Developer", "Web Developer", "IT Analyst"],
    highlights: ["Modern computer labs", "AI-integrated curriculum", "Live coding projects"],
    blurb: "A focused, hands-on path into software and app development, with AI woven into every semester.",
    link: `${SITE}/departmentslug/computer-science-applications`
  },
  {
    id: "commerce-mgmt",
    group: "Commerce & Management",
    name: "BBA / B.Com (Commerce & Management)",
    specialisation: "Business, Finance & Management",
    tags: ["economics", "commerce", "business-studies", "accountancy"],
    interests: ["management", "commerce"],
    streamFit: ["commerce"],
    careers: ["Business Analyst", "Financial Analyst", "Marketing Executive", "Entrepreneur"],
    highlights: ["Industry mentorship", "Live case studies", "Placement preparation"],
    blurb: "For students who enjoy business, numbers and strategy — a strong foundation for management careers.",
    link: `${SITE}/departmentslug/commerce-management`
  },
  {
    id: "law",
    group: "Legal Studies",
    name: "BA-LLB / B.COM-LLB / BBA-LLB",
    specialisation: "Law integrated with Arts, Commerce & Business",
    tags: ["arts", "economics", "commerce", "social-science", "political-science", "history"],
    interests: ["management", "law"],
    streamFit: ["commerce", "humanities"],
    careers: ["Lawyer", "Corporate Counsel", "Legal Advisor", "Business Manager"],
    highlights: ["AI-integrated learning even in Law", "Industry mentorship", "Placement preparation"],
    blurb: "For students who enjoy debate, reasoning and business — a five-year integrated path into law.",
    link: `${SITE}/departmentslug/legal-studies`
  },
  {
    id: "pharmacy",
    group: "Pharmaceutical Science",
    name: "B.Pharm / D.Pharm (Pharmacy)",
    specialisation: "Pharmaceutical Sciences",
    tags: ["biology", "chemistry", "science"],
    interests: ["pharmacy", "healthcare"],
    streamFit: ["medical", "both-combined"],
    careers: ["Pharmacist", "Drug Researcher", "Clinical Research Associate"],
    highlights: ["AI-integrated curriculum", "Research & innovation labs", "Industry mentorship"],
    blurb: "For students who enjoy biology and chemistry and want a career in healthcare and medicine.",
    link: `${SITE}/departmentslug/pharmaceutical-science`
  },
  {
    id: "health-science",
    group: "Health Science",
    name: "Health Science Programs",
    specialisation: "Paramedical & Allied Health",
    tags: ["biology", "chemistry", "science"],
    interests: ["healthcare"],
    streamFit: ["medical", "both-combined"],
    careers: ["Paramedical Professional", "Health Technician", "Clinical Support Specialist"],
    highlights: ["Practical clinical training", "Modern labs", "Industry tie-ups with hospitals"],
    blurb: "For students drawn to healthcare beyond pharmacy — allied health and paramedical careers.",
    link: `${SITE}/departmentslug/health-science`
  },
  {
    id: "applied-science",
    group: "Applied Science",
    name: "B.Sc (Applied Science)",
    specialisation: "Pure & Applied Sciences",
    tags: ["math", "physics", "chemistry", "biology", "science"],
    interests: ["science"],
    streamFit: ["non-medical", "medical", "both-combined"],
    careers: ["Research Scientist", "Lab Analyst", "Science Educator"],
    highlights: ["Well-equipped science labs", "Research-driven curriculum", "AI applied to science"],
    blurb: "For students who love core science — Physics, Chemistry, Maths or Biology — and want to go deep into it.",
    link: `${SITE}/departmentslug/applied-science`
  },
  {
    id: "agriculture",
    group: "Agriculture",
    name: "Agriculture Programs",
    specialisation: "Modern & Smart Agriculture",
    tags: ["biology", "agriculture-science", "science"],
    interests: ["agriculture"],
    streamFit: ["medical", "non-medical", "both-combined"],
    careers: ["Agricultural Scientist", "Farm Manager", "Agri-Tech Entrepreneur"],
    highlights: ["Hands-on field learning", "AI applied to agriculture", "Research-driven curriculum"],
    blurb: "For students interested in farming, food systems and how technology is transforming agriculture.",
    link: `${SITE}/departmentslug/agriculture`
  },
  {
    id: "humanities",
    group: "Social Science & Humanities",
    name: "BA (Social Science & Humanities)",
    specialisation: "History, Political Science, Sociology & more",
    tags: ["arts", "social-science", "history", "political-science", "sociology", "psychology"],
    interests: ["humanities"],
    streamFit: ["humanities"],
    careers: ["Civil Services Aspirant", "Policy Researcher", "Social Worker", "Educator"],
    highlights: ["Discussion-driven classrooms", "Research projects", "AI-integrated learning"],
    blurb: "For students who love ideas, society, and understanding the world — a strong base for many careers.",
    link: `${SITE}/departmentslug/social-science-humanities`
  },
  {
    id: "journalism",
    group: "Journalism & Mass Communication",
    name: "BA Journalism & Mass Communication",
    specialisation: "Media, Journalism & Content",
    tags: ["arts", "english", "social-science"],
    interests: ["humanities", "media"],
    streamFit: ["humanities", "commerce"],
    careers: ["Journalist", "Content Creator", "PR Specialist", "News Anchor"],
    highlights: ["Studio & production labs", "Industry mentorship", "Live newsroom projects"],
    blurb: "For students who love storytelling, media and communication in a fast-changing digital world.",
    link: `${SITE}/departmentslug/journalism-mass-communication`
  },
  {
    id: "fashion",
    group: "Fashion Designing",
=======
    careers: ["Electrical Engineer", "Renewable Energy Specialist", "Power Systems Engineer"],
    highlights: ["Smart classrooms", "Industry-oriented curriculum", "Research on emerging tech"],
    blurb: "For students interested in power systems and the shift towards renewable, sustainable energy."
  },
  {
    id: "law",
    group: "Commerce & Management",
    name: "BA-LLB / B.COM-LLB / BBA-LLB",
    specialisation: "Law integrated with Arts, Commerce & Business",
    tags: ["arts", "economics", "commerce"],
    interests: ["management", "law"],
    careers: ["Lawyer", "Corporate Counsel", "Legal Advisor", "Business Manager"],
    highlights: ["AI-integrated learning even in Law", "Industry mentorship", "Placement preparation"],
    blurb: "For students who enjoy debate, reasoning and business — a five-year integrated path into law."
  },
  {
    id: "pharmacy",
    group: "Professional Programs",
    name: "Pharmacy",
    specialisation: "Pharmaceutical Sciences",
    tags: ["biology", "chemistry"],
    interests: ["pharmacy", "healthcare"],
    careers: ["Pharmacist", "Drug Researcher", "Clinical Research Associate"],
    highlights: ["AI-integrated curriculum", "Research & innovation labs", "Industry mentorship"],
    blurb: "For students who enjoy biology and chemistry and want a career in healthcare and medicine."
  },
  {
    id: "agriculture",
    group: "Professional Programs",
    name: "Agriculture",
    specialisation: "Modern & Smart Agriculture",
    tags: ["biology", "agriculture-science"],
    interests: ["agriculture"],
    careers: ["Agricultural Scientist", "Farm Manager", "Agri-Tech Entrepreneur"],
    highlights: ["Hands-on field learning", "AI applied to agriculture", "Research-driven curriculum"],
    blurb: "For students interested in farming, food systems and how technology is transforming agriculture."
  },
  {
    id: "fashion",
    group: "Professional Programs",
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c
    name: "Fashion Design",
    specialisation: "Design & Creative Industries",
    tags: ["arts"],
    interests: ["design", "fashion"],
<<<<<<< HEAD
    streamFit: ["humanities"],
    careers: ["Fashion Designer", "Stylist", "Textile Entrepreneur"],
    highlights: ["Creative studios", "Industry mentorship", "Live projects"],
    blurb: "For creatively-minded students who want to build a career in design and fashion.",
    link: `${SITE}/departmentslug/fashion-designing`
  },
  {
    id: "beauty",
    group: "Beauty and Wellness",
=======
    careers: ["Fashion Designer", "Stylist", "Textile Entrepreneur"],
    highlights: ["Creative studios", "Industry mentorship", "Live projects"],
    blurb: "For creatively-minded students who want to build a career in design and fashion."
  },
  {
    id: "beauty",
    group: "Professional Programs",
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c
    name: "Beauty & Wellness",
    specialisation: "Wellness & Personal Care Industry",
    tags: ["arts"],
    interests: ["beauty", "wellness"],
<<<<<<< HEAD
    streamFit: ["humanities"],
    careers: ["Wellness Consultant", "Salon Entrepreneur", "Cosmetology Expert"],
    highlights: ["Industry-oriented training", "Practical skill labs"],
    blurb: "For students drawn to the beauty and wellness industry, one of the fastest growing service sectors.",
    link: `${SITE}/departmentslug/beauty-and-wellness`
  },
  {
    id: "hotel",
    group: "Hospitality & Tourism Management",
=======
    careers: ["Wellness Consultant", "Salon Entrepreneur", "Cosmetology Expert"],
    highlights: ["Industry-oriented training", "Practical skill labs"],
    blurb: "For students drawn to the beauty and wellness industry, one of the fastest growing service sectors."
  },
  {
    id: "hotel",
    group: "Professional Programs",
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c
    name: "Hotel Management",
    specialisation: "Hospitality & Tourism",
    tags: ["arts", "commerce"],
    interests: ["hospitality"],
<<<<<<< HEAD
    streamFit: ["humanities", "commerce"],
    careers: ["Hotel Manager", "Event Manager", "Hospitality Entrepreneur"],
    highlights: ["Industry visits", "Personality development", "Placement support"],
    blurb: "For outgoing students who enjoy people, service and the hospitality industry.",
    link: `${SITE}/departmentslug/hospitality-and-tourism-management`
  },
  {
    id: "working-professional",
    group: "Working Professionals",
    name: "Engineering & Technology for Working Professionals",
    specialisation: "Lateral Entry & Flexible-Schedule B.Tech",
    tags: [],
    interests: ["lateral-entry", "working"],
    streamFit: [],
    careers: ["Software Developer", "Field Engineer", "Technical Lead"],
    highlights: ["Flexible schedule", "Lateral entry into 2nd year", "Built for diploma holders & working graduates"],
    blurb: "A flexible B.Tech track designed for diploma holders and working graduates who want to keep earning while they study.",
    link: `${SITE}/departmentslug/working-professional`
  }
];

// ---------------- Class 10 path: Board + Subjects + Stream ----------------

export const BOARDS = [
  { id: "cbse", label: "CBSE", fullName: "Central Board of Secondary Education" },
  { id: "hbse", label: "HBSE", fullName: "Board of School Education, Haryana" }
];

// Verified against CBSE's 2026-27 curriculum notice and BSEH's 2025-26
// Class 10 syllabus circulars.
export const BOARD_SUBJECTS = {
  cbse: [
    { id: "english", label: "English", icon: "BookOpen" },
    { id: "hindi", label: "Hindi", icon: "Languages" },
    { id: "math", label: "Mathematics", icon: "Calculator" },
    { id: "science", label: "Science", icon: "FlaskConical" },
    { id: "social-science", label: "Social Science", icon: "Globe2" },
    { id: "computer-applications", label: "Computer Applications", icon: "Code2" },
    { id: "information-technology", label: "Information Technology", icon: "Cpu" },
    { id: "artificial-intelligence", label: "Artificial Intelligence", icon: "Brain" },
    { id: "sanskrit", label: "Sanskrit", icon: "ScrollText" },
    { id: "home-science", label: "Home Science", icon: "Home" },
    { id: "painting", label: "Painting", icon: "Palette" }
  ],
  hbse: [
    { id: "english", label: "English", icon: "BookOpen" },
    { id: "hindi", label: "Hindi", icon: "Languages" },
    { id: "math", label: "Mathematics", icon: "Calculator" },
    { id: "science", label: "Science", icon: "FlaskConical" },
    { id: "social-science", label: "Social Science", icon: "Globe2" },
    { id: "sanskrit", label: "Sanskrit", icon: "ScrollText" },
    { id: "punjabi", label: "Punjabi", icon: "Languages" },
    { id: "computer-science", label: "Computer Science", icon: "Code2" },
    { id: "agriculture-science", label: "Agriculture", icon: "Sprout" },
    { id: "home-science", label: "Home Science", icon: "Home" },
    { id: "beauty-wellness", label: "Beauty & Wellness", icon: "Sparkles" },
    { id: "drawing", label: "Drawing", icon: "Palette" },
    { id: "physical-education", label: "Physical Education & Sports", icon: "Dumbbell" }
  ]
};

export const STREAMS = [
  { id: "non-medical", label: "Non-Medical (PCM)", icon: "Cpu", description: "Physics, Chemistry, Mathematics" },
  { id: "medical", label: "Medical (PCB)", icon: "HeartPulse", description: "Physics, Chemistry, Biology" },
  { id: "both-combined", label: "Both Combined (PCMB)", icon: "Layers", description: "Non-Medical + Medical together" },
  { id: "commerce", label: "Commerce", icon: "Briefcase", description: "Accountancy, Business Studies, Economics" },
  { id: "humanities", label: "Humanities / Arts", icon: "Palette", description: "History, Political Science, Sociology" }
];

// ---------------- Diploma / Graduate path ----------------

export const DIPLOMA_OPTIONS = [
  { id: "diploma-mech", label: "Diploma in Mechanical Engg.", icon: "Settings2", leadsTo: "mech" },
  { id: "diploma-civil", label: "Diploma in Civil Engg.", icon: "Building2", leadsTo: "civil" },
  { id: "diploma-ece", label: "Diploma in Electronics Engg.", icon: "CircuitBoard", leadsTo: "ece" },
  { id: "diploma-ee", label: "Diploma in Electrical Engg.", icon: "Zap", leadsTo: "electrical" },
  { id: "diploma-cse", label: "Diploma in Computer Science / IT", icon: "Code2", leadsTo: "cse-ai" },
  { id: "diploma-pharmacy", label: "Diploma in Pharmacy (D.Pharm)", icon: "Pill", leadsTo: "pharmacy" },
  { id: "iti", label: "ITI", icon: "Wrench", leadsTo: "working-professional" },
  { id: "diploma-other", label: "Other Diploma", icon: "FileBadge", leadsTo: "working-professional" }
];

export const DEGREE_OPTIONS = [
  { id: "ba", label: "B.A.", icon: "BookOpen", leadsTo: "humanities" },
  { id: "bsc", label: "B.Sc.", icon: "FlaskConical", leadsTo: "applied-science" },
  { id: "bcom", label: "B.Com.", icon: "Briefcase", leadsTo: "commerce-mgmt" },
  { id: "bba", label: "BBA", icon: "Briefcase", leadsTo: "commerce-mgmt" },
  { id: "bca", label: "BCA", icon: "Code2", leadsTo: "bca" },
  { id: "btech", label: "B.Tech / B.E.", icon: "Cpu", leadsTo: "working-professional" },
  { id: "bpharm", label: "B.Pharm", icon: "Pill", leadsTo: "pharmacy" },
  { id: "llb", label: "LLB / BA-LLB", icon: "Scale", leadsTo: "law" },
  { id: "degree-other", label: "Other Degree", icon: "FileBadge", leadsTo: "working-professional" }
=======
    careers: ["Hotel Manager", "Event Manager", "Hospitality Entrepreneur"],
    highlights: ["Industry visits", "Personality development", "Placement support"],
    blurb: "For outgoing students who enjoy people, service and the hospitality industry."
  }
];

export const SUBJECTS = [
  { id: "math", label: "Mathematics", icon: "Calculator" },
  { id: "physics", label: "Physics", icon: "Atom" },
  { id: "chemistry", label: "Chemistry", icon: "FlaskConical" },
  { id: "biology", label: "Biology", icon: "Dna" },
  { id: "computer-science", label: "Computer Science", icon: "Code2" },
  { id: "economics", label: "Economics / Business Studies", icon: "ChartBar" },
  { id: "arts", label: "Arts / Humanities", icon: "Palette" },
  { id: "agriculture-science", label: "Agriculture Science", icon: "Sprout" }
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c
];

export const INTERESTS = [
  { id: "engineering", label: "Engineering (B.Tech)", icon: "Cpu" },
  { id: "management", label: "Management, Commerce & Law", icon: "Briefcase" },
  { id: "pharmacy", label: "Pharmacy & Healthcare", icon: "Pill" },
  { id: "agriculture", label: "Agriculture", icon: "Sprout" },
  { id: "design", label: "Fashion Design", icon: "Shirt" },
  { id: "wellness", label: "Beauty & Wellness", icon: "Sparkles" },
  { id: "hospitality", label: "Hotel Management", icon: "Building2" },
  { id: "unsure", label: "Not sure — let AI decide", icon: "Wand2" }
];

export const ENGINEERING_FOCUS = [
  { id: "ai", label: "AI, Coding & Software", icon: "Brain", programId: "cse-ai" },
  { id: "electronics", label: "Electronics & IoT", icon: "CircuitBoard", programId: "ece" },
  { id: "machines", label: "Machines & Robotics", icon: "Settings2", programId: "mech" },
  { id: "infrastructure", label: "Smart Buildings & Infrastructure", icon: "Building2", programId: "civil" },
  { id: "energy", label: "Power & Renewable Energy", icon: "Zap", programId: "electrical" }
];

export const CAREER_JOURNEY = [
<<<<<<< HEAD
  "Class 10 / 12", "Choose NIILM", "Learn Skills", "Build Projects", "Internships", "Placements", "Industry Professional", "Tech / Field Leader"
=======
  "Class 12",
  "Choose NIILM",
  "Learn Skills",
  "Build Projects",
  "Internships",
  "Placements",
  "Industry Professional",
  "Tech / Field Leader"
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c
];

export const DREAM_COMPANIES = [
  "Google", "Microsoft", "Amazon", "Infosys", "TCS", "Accenture", "Adobe", "NVIDIA", "Oracle"
];
<<<<<<< HEAD

// ---------------- Class 12 subjects (distinct from Class 10!) ----------------
// Class 12 students are already inside a stream, so they pick from the real
// subjects taught within Non-Medical/Medical/Commerce/Humanities — NOT the
// Class 10 curriculum. This is what actually determines a sensible match.

export const SUBJECTS_12 = [
  { id: "physics", label: "Physics", icon: "Atom" },
  { id: "chemistry", label: "Chemistry", icon: "FlaskConical" },
  { id: "biology", label: "Biology", icon: "Dna" },
  { id: "math", label: "Mathematics", icon: "Calculator" },
  { id: "computer-science", label: "Computer Science", icon: "Code2" },
  { id: "accountancy", label: "Accountancy", icon: "Calculator" },
  { id: "business-studies", label: "Business Studies", icon: "Briefcase" },
  { id: "economics", label: "Economics", icon: "ChartBar" },
  { id: "history", label: "History", icon: "ScrollText" },
  { id: "political-science", label: "Political Science", icon: "Landmark" },
  { id: "sociology", label: "Sociology", icon: "Users" },
  { id: "psychology", label: "Psychology", icon: "Brain" },
  { id: "english", label: "English", icon: "BookOpen" }
];

// Which Class 10 subjects genuinely pull toward which stream — used only to
// generate honest, non-fabricated reasoning text (never to override the
// student's own stream choice).
export const SUBJECT_STREAM_AFFINITY = {
  math: ["non-medical", "both-combined"],
  science: ["non-medical", "medical", "both-combined"],
  "social-science": ["humanities", "commerce"],
  english: ["humanities"],
  hindi: ["humanities"],
  sanskrit: ["humanities"],
  "computer-applications": ["non-medical"],
  "information-technology": ["non-medical"],
  "artificial-intelligence": ["non-medical"],
  "home-science": ["medical", "humanities"],
  painting: ["humanities"],
  punjabi: ["humanities"],
  "computer-science": ["non-medical"],
  "agriculture-science": ["medical", "non-medical"],
  "beauty-wellness": ["humanities"],
  drawing: ["humanities"],
  "physical-education": ["humanities"]
};

// Every subject id used anywhere in the app, mapped to a human-readable
// label — used to build safe, grounded reasoning sentences (e.g. "Your
// interest in Physics and Mathematics lines up well with...") instead of
// ever letting free-form AI text invent a relationship that doesn't exist.
export const SUBJECT_LABELS = {};
[...BOARD_SUBJECTS.cbse, ...BOARD_SUBJECTS.hbse, ...SUBJECTS_12].forEach((s) => {
  SUBJECT_LABELS[s.id] = s.label;
});



export const SUBJECTS = BOARD_SUBJECTS.cbse;
=======
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c

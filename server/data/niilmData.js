// Structured data extracted from the NIILM University presentation deck.
// Used both for the local (offline) recommendation engine and as grounding
// context sent to the NVIDIA LLM so its answers stay accurate to NIILM's
// real programs.

const PROGRAMS = [
  {
    id: "cse-ai",
    group: "B.Tech Engineering",
    name: "B.Tech Computer Science Engineering",
    specialisation: "AI · Machine Learning · Data Science",
    tags: ["math", "computer-science", "physics", "logic"],
    interests: ["engineering", "coding", "ai"],
    careers: ["AI Engineer", "Software Developer", "Data Scientist", "ML Engineer", "Full Stack Developer"],
    highlights: ["AI & Robotics Labs", "Apple Mac Lab", "Mentors from IIT & IIM", "AI-integrated curriculum"],
    blurb: "The flagship program at NIILM — every core CS subject is paired with hands-on AI, ML and Data Science project work."
  },
  {
    id: "ece",
    group: "B.Tech Engineering",
    name: "B.Tech Electronics Engineering",
    specialisation: "Embedded Systems · IoT",
    tags: ["physics", "math", "computer-science"],
    interests: ["engineering", "electronics"],
    careers: ["IoT Engineer", "Embedded Systems Developer", "Hardware Engineer", "Robotics Technician"],
    highlights: ["Department-wise modern labs", "Industry expert sessions", "Live hardware projects"],
    blurb: "For students who like building things that sense and respond to the physical world — circuits, sensors, and connected devices."
  },
  {
    id: "mech",
    group: "B.Tech Engineering",
    name: "B.Tech Mechanical Engineering",
    specialisation: "Robotics · Automation",
    tags: ["physics", "math"],
    interests: ["engineering", "machines"],
    careers: ["Robotics Engineer", "Automation Engineer", "Design Engineer", "Manufacturing Engineer"],
    highlights: ["AI & Robotics Labs", "Industrial visits", "Hands-on practical learning"],
    blurb: "For students fascinated by machines, robotics and how automation is transforming manufacturing."
  },
  {
    id: "civil",
    group: "B.Tech Engineering",
    name: "B.Tech Civil Engineering",
    specialisation: "Smart Infrastructure",
    tags: ["physics", "math"],
    interests: ["engineering", "infrastructure"],
    careers: ["Civil Engineer", "Infrastructure Planner", "Site Engineer", "Urban Planner"],
    highlights: ["Real-world infrastructure projects", "Industry mentorship", "Research & innovation focus"],
    blurb: "For students who want to design and build the smart cities and infrastructure of tomorrow."
  },
  {
    id: "electrical",
    group: "B.Tech Engineering",
    name: "B.Tech Electrical Engineering",
    specialisation: "Renewable Energy · Smart Grid",
    tags: ["physics", "math"],
    interests: ["engineering", "energy"],
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
    name: "Fashion Design",
    specialisation: "Design & Creative Industries",
    tags: ["arts"],
    interests: ["design", "fashion"],
    careers: ["Fashion Designer", "Stylist", "Textile Entrepreneur"],
    highlights: ["Creative studios", "Industry mentorship", "Live projects"],
    blurb: "For creatively-minded students who want to build a career in design and fashion."
  },
  {
    id: "beauty",
    group: "Professional Programs",
    name: "Beauty & Wellness",
    specialisation: "Wellness & Personal Care Industry",
    tags: ["arts"],
    interests: ["beauty", "wellness"],
    careers: ["Wellness Consultant", "Salon Entrepreneur", "Cosmetology Expert"],
    highlights: ["Industry-oriented training", "Practical skill labs"],
    blurb: "For students drawn to the beauty and wellness industry, one of the fastest growing service sectors."
  },
  {
    id: "hotel",
    group: "Professional Programs",
    name: "Hotel Management",
    specialisation: "Hospitality & Tourism",
    tags: ["arts", "commerce"],
    interests: ["hospitality"],
    careers: ["Hotel Manager", "Event Manager", "Hospitality Entrepreneur"],
    highlights: ["Industry visits", "Personality development", "Placement support"],
    blurb: "For outgoing students who enjoy people, service and the hospitality industry."
  }
];

const SUBJECTS = [
  { id: "math", label: "Mathematics", icon: "calculator" },
  { id: "physics", label: "Physics", icon: "atom" },
  { id: "chemistry", label: "Chemistry", icon: "flask" },
  { id: "biology", label: "Biology", icon: "dna" },
  { id: "computer-science", label: "Computer Science", icon: "code" },
  { id: "economics", label: "Economics / Business Studies", icon: "chart-bar" },
  { id: "arts", label: "Arts / Humanities", icon: "palette" },
  { id: "agriculture-science", label: "Agriculture Science", icon: "plant" }
];

const INTERESTS = [
  { id: "engineering", label: "Engineering (B.Tech)", icon: "cpu" },
  { id: "management", label: "Management, Commerce & Law", icon: "briefcase" },
  { id: "pharmacy", label: "Pharmacy & Healthcare", icon: "pill" },
  { id: "agriculture", label: "Agriculture", icon: "seeding" },
  { id: "design", label: "Fashion Design", icon: "shirt" },
  { id: "wellness", label: "Beauty & Wellness", icon: "sparkles" },
  { id: "hospitality", label: "Hotel Management", icon: "building" },
  { id: "unsure", label: "Not sure — let AI decide", icon: "wand" }
];

const ENGINEERING_FOCUS = [
  { id: "ai", label: "AI, Coding & Software", icon: "brain", programId: "cse-ai" },
  { id: "electronics", label: "Electronics & IoT", icon: "chip", programId: "ece" },
  { id: "machines", label: "Machines & Robotics", icon: "settings", programId: "mech" },
  { id: "infrastructure", label: "Smart Buildings & Infrastructure", icon: "building-2", programId: "civil" },
  { id: "energy", label: "Power & Renewable Energy", icon: "bolt", programId: "electrical" }
];

const CAREER_JOURNEY = [
  "Class 12",
  "Choose NIILM",
  "Learn Skills",
  "Build Projects",
  "Internships",
  "Placements",
  "Industry Professional",
  "Tech / Field Leader"
];

const DREAM_COMPANIES = [
  "Google", "Microsoft", "Amazon", "Infosys", "TCS", "Accenture", "Adobe", "NVIDIA", "Oracle"
];

module.exports = {
  PROGRAMS,
  SUBJECTS,
  INTERESTS,
  ENGINEERING_FOCUS,
  CAREER_JOURNEY,
  DREAM_COMPANIES
};

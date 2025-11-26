// src/App.js
import React, { useState, useRef, useEffect, useMemo } from "react";
import {
  Mail,
  Linkedin,
  Briefcase,
  GraduationCap,
  Zap,
  ArrowRight,
  User,
  DownloadCloud,
  Layers,
  Calendar,
  Sun,
  Moon,
  X,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,

  MessageSquare,

} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";



const CV_PDF_PATH = "/Darlene Angel L. Custodio - CV.pdf";
const PROFILE_IMAGE_URL = "./images/PICTUREKO.jpg";

/*colors*/
const BRAND_COLOR = "#9c6936";
const ACCENT_COLOR_DARK = "#ac6547";
const BG_COLOR_LIGHT = "#F5F5DC";
const BG_COLOR_DARK = "#4a423f";

/*data of darlene*/
const RESUME_DATA = {
  name: "Darlene Angel L. Custodio",
  tagline:
    "20-year-old BSIT student | Consistent Dean's Lister & organizational leader | Former ESL teacher",
  bio:
    "BSIT student with strong academic record, leadership experience, and a background in ESL teaching. Passionate about coding, web design, video editing, and copywriting — blending creativity with technology to deliver human-centered digital experiences.",
  biolong:
  "As a highly motivated and academically accomplished BSIT student, I'm driven by a passion for leveraging technology to create meaningful and human-centered digital experiences. My strong academic record is complemented by practical leadership experience, honed through various projects and roles. My background as an ESL teacher has further cultivated my communication skills, empathy, and ability to connect with diverse groups, all of which I bring to my technical pursuits. I thrive on blending creativity with technology, constantly exploring the intersections of coding, web design, video editing, and copywriting. Whether it's crafting elegant code, designing intuitive user interfaces, producing engaging visual stories, or writing compelling narratives, I am committed to delivering impactful and accessible digital solutions.",
  contact: {
    phone: "+63 935 435 5492",
    email: "angel.lustre@2005.com",
    location: "Cavite City, Philippines",
    linkedin: "https://www.linkedin.com/in/darlene-custodio-13011b320/"
  },
  profileImageUrl: PROFILE_IMAGE_URL,
  summaryBullets: [
    "Consistent Dean’s Lister (6 consecutive semesters).",
    "SSG Secretary; former VP for External Affairs, Junior Philippine Computer Society (JPCS).",
    "Awarded Best in Programming (Python) — IT Week 2024.",
    "ESL teacher experience; strong communication & cross-cultural skills."
  ],
  experience: [
    {
      title: "English as a Second Language (ESL) Teacher",
      company: "Native Camp (Remote, Part-Time)",
      duration: "Jul 2024 – Sep 2024",
      details: [
        "Delivered tailored lessons to diverse learners and helped improve communication skills.",
        "Applied time management and cultural sensitivity in an online classroom setting."
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "San Sebastian College–Recoletos de Cavite",
      duration: "2023 – Present (Expected Graduation: May 2027)",
      details: [
        "Consistent Dean’s Lister for six consecutive semesters.",
        "Active student leader: SSG Secretary and JPCS officer.",
        "Champion — REAP 2024 Bible Quiz Bee."
      ]
    },
    {
      degree: "Senior High School — STE",
      institution: "Cavite National High School",
      duration: "2021 – 2023",
      details: [
        "Graduated with Highest Honors in Grade 11 and High Honors in Grade 12.",
        "Presented research at the 22nd International Students' Research Conference (University of Latvia)."
      ]
    },
    {
      degree: "Junior High School — STE",
      institution: "Cavite National High School",
      duration: "2017 – 2021",
      details: [
        "Part of Special Science Class (STE) program.",
        "Held SSG Grade 7 Representative and YES-O Grade 8 Representative roles."
      ]
    },
    {
      degree: "Primary Education",
      institution: "Ovidio Dela Rosa Elementary School — Salutatorian",
      duration: "2011 – 2017",
      details: []
    }
  ],


  certifications: [
    { title: "CCNA: Switching, Routing, and Wireless Essentials", issued: "Jul 2025", certImageUrl: "./images/CCNA.png" }, // Added image path
    { title: "CCNA: Introduction to Networks", issued: "Apr 2025", certImageUrl: "./images/CCNAIntroductiontoNetworks.png" }, // Added image path
    { title: "Python Essentials 1", issued: "Apr 2025", certImageUrl: "./images/python1.png" }, // Added image path
    { title: "Python Essentials 2", issued: "Apr 2025", certImageUrl: "./images/python2.png" }, // Added image path
    { title: "Linux Unhatched", issued: "Nov 2023", certImageUrl: "./images/linux.png" }, // Added image path
    { title: "Operating Systems Basics", issued: "Nov 2023", certImageUrl: "./images/cs401.png" }, // Added image path
    { title: "Saylor Academy: Preparing and Delivering Presentations", issued: "Apr 2025", certImageUrl: "./images/prdv008.png" }, // Added image path
    { title: "Saylor Academy: Professional Etiquette", issued: "Sep 2025", certImageUrl: "./images/prdv104.png" }, // Added image path
    { title: "PRDV223: Organizational Culture, Diversity, and Ethics", issued: "Sep 2025", certImageUrl: "./images/prdv223.png" }, // Added image path
    { title: "BUS200: Business Ethics", issued: "Sep 2025", certImageUrl: "./images/bus200.png" }, // Added image path
    { title: "PHIL102: Intro to Critical Thinking and Logic", issued: "Oct 2025", certImageUrl: "./images/phil102.png" }, // Added image path
    { title: "CS101: Intro to Critical Thinking and Logic", issued: "Oct 2025", certImageUrl: "./images/cs101.png" },
    { title: "CS102: Intro to Critical Thinking and Logic", issued: "Oct 2025", certImageUrl: "./images/cs102.png" },
    { title: "CS107: Intro to Critical Thinking and Logic", issued: "Oct 2025", certImageUrl: "./images/cs107.png" },
    { title: "CS201: Intro to Critical Thinking and Logic", issued: "Oct 2025", certImageUrl: "./images/cs201.png" },
    { title: "PRDV104: Intro to Critical Thinking and Logic", issued: "Oct 2025", certImageUrl: "./images/prdv104.png" },
    
  ],

    
  skills: {
    Technical: ["Java", "Python", "C#", "HTML", "CSS", "JavaScript", "C++", "SQL", "Git", "GitHub"],
    Design: ["Figma", "Canva", "Adobe Photoshop", "UI/UX design","Video editing (CapCut)", "Presentation design"],
    Soft: ["Communication", ""]
  },
  awards: ["Best in Programming (Python) — IT Week 2024", "Consistent Dean’s Lister — 6 semesters"],
  languages: ["English", "Filipino"]
};

const PROJECTS = [
  {
    id: "nomnoms",
    title: "NomNoms",
    subtitle: "Point of Sale System",
    description: "The Nomnoms Point of Sale System, created using NetBeans and SceneBuilder, is a functional POS application designed for businesses selling desserts, pastas, and similar food items. It focuses on smooth transactions, efficient order management, and a user-friendly interface.",
    images: [
      "./images/nomnoms-1.png",
      "./images/nomnoms-2.png",
      "./images/nomnoms-3.png",
      "./images/nomnoms-4.png"
    ],
    tags: ["Netbeans", "Scenebuilder", "Workbench"],
    category: "Systems"
  },
  {
    id: "Employee_Payroll_System",
    title: "Payroll System",
    subtitle: "Payroll Management System",
    description: "The Payroll Management System, built with Visual Basic 2022 and integrated with SQL Server Management Studio (SSMS), provides an organized way to track employee records, compute salaries, manage deductions, and generate payroll reports—ensuring accuracy and streamlined HR operations.",
    images: [
      "./images/payroll-1.png",
      "./images/payroll-2.png",
      "./images/payroll-3.png"
    ],
    tags: ["Visual Basic", "SQL Server", "Database Management"],
    category: "Systems"
  },
  {
    id: "sketchup",
    title: "Milku 3D Shop",
    subtitle: "Brand & visual design",
    description: "For creative and architectural design, the Milku 3D Shop, modeled in SketchUp, presents a conceptual building layout for “Milku,” a chocolate-themed brand. This 3D representation showcases spatial planning, branding elements, and aesthetic design.",
    images: ["./images/sketchup.png"],
    tags: ["Branding", "Sketchup", "Canva"],
    category: "Design"
  },
   {
    id: "milku_poster",
    title: "Milku Poster",
    subtitle: "Brand & visual design",
    description: "Complementing the visual identity, the Milku Promotional Poster, designed using Adobe Photoshop, highlights marketing creativity through graphic design. It aims to promote the Milku brand with eye-catching visuals and effective messaging.",
    images: ["./images/milku-poster.png"],
    tags: ["Branding", "Photoshop", "Canva"],
    category: "Design"
  },
  {
    id: "Resume_Design",
    title: "Resume Project",
    subtitle: "Resume Project for Web Development Course",
    description: "The Payroll Management System, built with Visual Basic 2022 and integrated with SQL Server Management Studio (SSMS), provides an organized way to track employee records, compute salaries, manage deductions, and generate payroll reports—ensuring accuracy and streamlined HR operations.",
    images: [
      "./images/resume.png",
      "./images/resume2.png",
      "./images/resume3.png",
      "./images/resume4.png"

    ],
    tags: ["HTML", "CSS", "JavaScript", "UI/UX Design"],
    category: "Resume",
    liveLink: "https://darleneangel.github.io/Resume_Custodio/RESUME.html", // Example link
  
  },
    {
    id: "Canvas",
    title: "Canvas Art Project",
    subtitle: "Canvas Art Project for Web Development Course",
    description: "The Canvas Art Project is Chuck from Angry Birds.",
    images: [
      "./images/chuck.png"

    ],
    tags: ["HTML", "CSS", "JavaScript", "UI/UX Design"],
    category: "Canvas",
    liveLink: "https://darleneangel.github.io/angry-birds-chuck/", // Example link
  
  },
  
  
];

const TESTIMONIALS = [
  {
    from: "Ja Gatchalian",
    title: "Improved English",
    quote: "Darlene's lessons helped me gain confidence speaking English. Very patient and clear.",
    role: "ESL Student"
  },
  {
    from: "Kuh Jane Valenzuela",
    title: "Committed Student",
    quote: "Consistently excellent work , with a team spirit and a strong collaborator in group projects.",
    role: "Course Lecturer"
  },
  {
    from: "Raven Alberto",
    title: "Good Work Ethic!",
    quote: "Does all her projects on time and with great attention to detail. A pleasure to have in class.",
    role: "Classmate"
  },
  {
    from: "Simoun ANdreo Supnet",
    title: "Good Friend!",
    quote: "Fun to be with! A good team sportsman and a strong collaborator in group projects.",
    role: "Classmate"
  },
  {
    from: "Ken Adrien Arceno",
    title: "Excellent Student!",
    quote: "Always submits her projects on time and with great attention to detail. A pleasure to have in class.",
    role: "Classmate"
  },


];

/*ui helpers*/
const BrandHeader = ({ dark }) => (
  <div className="flex items-center gap-3">
    <div
      style={{ backgroundColor: BRAND_COLOR }}
      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
    >
      D
    </div>
    <div>
      <div 
        // FIX: Remove inline style, use class for BRAND_COLOR in light mode and white in dark mode
        // style={{ color: BRAND_COLOR }} // <-- REMOVE THIS
        className="text-sm font-semibold text-stone-800 dark:text-white" 
        style={{ color: dark ? 'white' : BRAND_COLOR }} // <-- OPTIONAL: Use ternary if you MUST keep the BRAND_COLOR variable for the text itself
      >
        {RESUME_DATA.name}
      </div>
      <div className="text-[11px] text-stone-600 dark:text-stone-300">{RESUME_DATA.tagline}</div>
    </div>
  </div>
);

const SectionTitle = ({ icon: Icon, children }) => (
  <div className="flex items-center gap-3 mb-4">
    <Icon className="w-5 h-5 text-stone-700" />
    <h3 style={{ color: BRAND_COLOR }} className="text-xl font-bold">
      {children}
    </h3>
  </div>
);


function InlineCarousel({ slides, autoplay = true, interval = 4000 }) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);
  const autoplayRef = useRef();

  useEffect(() => {
    autoplayRef.current = () => setIndex(i => (i + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (!autoplay || slides.length <= 1) return;
    const id = setInterval(() => autoplayRef.current(), interval);
    return () => clearInterval(id);
  }, [autoplay, interval, slides.length]);

  function prev() {
    setIndex(i => (i - 1 + slides.length) % slides.length);
  }
  function next() {
    setIndex(i => (i + 1) % slides.length);
  }

  function onTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e) {
    if (touchStartX.current == null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 40) {
      if (diff < 0) next();
      else prev();
    }
    touchStartX.current = null;
  }

  return (
    <div className="relative">
      <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} className="overflow-hidden rounded-lg">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${index * 100}%)` }}>
          {slides.map((s, i) => (
            <div key={i} className="min-w-full">
              <img src={s.img} alt={s.title} className="w-full h-64 object-cover rounded-lg shadow-md" />
              <div className="p-4 bg-white rounded-b-lg -mt-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 style={{ color: BRAND_COLOR }} className="font-semibold">{s.title}</h4>
                    <p className="text-sm text-stone-700">{s.subtitle}</p>
                  </div>
                  <div className="text-xs text-stone-500">{i + 1}/{slides.length}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button onClick={prev} aria-label="Previous" className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button onClick={next} aria-label="Next" className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow">
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="flex justify-center gap-2 mt-3">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)} className={`w-2 h-2 rounded-full ${i === index ? "bg-stone-800" : "bg-stone-300"}`} aria-label={`Go to slide ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}


function CertificateModal({ open, onClose, certificate }) {
  useEffect(() => {
    function onKey(e) {
      if (!open) return;
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !certificate) return null;

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={onClose}>
        <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }} transition={{ type: "spring", stiffness: 300, damping: 30 }} className="max-w-4xl w-full bg-white dark:bg-stone-900 rounded-xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
          <div className="relative">
            {/* images of certificates */}
  {certificate.certImages && certificate.certImages.length > 0 ? (
  <div className="flex flex-wrap gap-4 justify-center">
    {certificate.certImages.map((img, index) => (
      <img
        key={index}
        src={img}
        alt={`${certificate.title} ${index + 1}`}
        className="w-full max-w-md h-auto object-contain rounded-lg shadow"
      />
    ))}
  </div>
) : (
  <img
    src={certificate.certImageUrl}
    alt={certificate.title}
    className="w-full h-auto object-contain max-h-[80vh]"
  />
)}

            
            {/* Close button */}
            <button onClick={onClose} className="absolute right-3 top-3 bg-white/90 p-2 rounded-full shadow">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 bg-stone-50 dark:bg-stone-800 border-t border-stone-200 dark:border-stone-700">
            <h3 className="text-xl font-bold text-center" style={{ color: BRAND_COLOR }}>{certificate.title}</h3>
            <p className="text-sm text-stone-700 dark:text-stone-300 text-center">Issued: {certificate.issued}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/*full image viewer*/
function FullImageModal({ open, onClose, imageUrl }) {
  useEffect(() => {
    function onKey(e) {
      if (!open) return;
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !imageUrl) return null;

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={onClose}>
        <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 300, damping: 30 }} className="max-w-5xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
          <img src={imageUrl} alt="Full view" className="w-full h-auto object-contain rounded-xl shadow-2xl" />
          <div className="mt-4 flex justify-center">
            <button onClick={onClose} className="px-4 py-2 rounded bg-white/90 text-stone-900 font-medium">
              <X className="inline w-5 h-5 mr-2" /> Close View
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}


/*Project Modal (C)*/
function ProjectModal({ open, onClose, project, setFullImageModal }) { // <-- ADDED setFullImageModal prop
  const [slideIdx, setSlideIdx] = useState(0);
 useEffect(() => setSlideIdx(0), [project?.id]);

  useEffect(() => {
    function onKey(e) {
      if (!open) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setSlideIdx(i => Math.max(0, i - 1));
      if (e.key === "ArrowRight") setSlideIdx(i => Math.min((project?.images?.length || 1) - 1, i + 1));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, project]);
 if (!open || !project) return null;

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={onClose}>
          <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }} transition={{ type: "spring", stiffness: 300, damping: 30 }} className="max-w-4xl w-full bg-white dark:bg-stone-900 rounded-xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative flex-shrink-0">
  
             <img 
              src={project.images[slideIdx]} 
              alt={project.title} 
              className="w-full h-72 object-cover cursor-zoom-in" 
              onClick={(e) => { 
              
   e.stopPropagation();
                setFullImageModal({ open: true, imageUrl: project.images[slideIdx] });
              }}
            />
            <button onClick={onClose} className="absolute right-3 top-3 bg-white/90 p-2 rounded-full shadow">
                <X className="w-5 h-5" />
            
 </button>

            {project.images.length > 1 && (
              <>
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <button onClick={() => setSlideIdx(i => (i - 1 + project.images.length) % project.images.length)} className="bg-white/90 p-2 rounded-full shadow">
                 
    <ChevronLeft className="w-5 h-5" />
                  </button>
                </div>
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <button onClick={() => setSlideIdx(i => (i + 1) % project.images.length)} className="bg-white/90 p-2 rounded-full shadow">
         
                <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </>
            )}
          </div>

          <div className="p-6">
     
            <div className="flex items-start justify-between">
              <div>
                <h3 style={{ color: BRAND_COLOR }} className="text-2xl font-bold">{project.title}</h3>
                <p className="text-stone-700 mt-1">{project.subtitle}</p>
              </div>
              {project.images.length > 1 && <div className="text-sm text-stone-500">{slideIdx + 
 1}/{project.images.length}</div>}
            </div>

            <div className="mt-4 text-stone-400">
              <p>{project.description}</p>
              <div className="mt-3 flex gap-2 flex-wrap">
                {project.tags.map((t, i) => <span key={i} className="text-xs bg-stone-800 px-2 py-1 rounded">{t}</span>)}
              </div>
   
          </div>

            {/* START NEW LINK SECTION */}
            <div className="mt-6 flex gap-3 justify-end border-t pt-4 border-stone-200">
              
              {project.repoLink && (
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border rounded text-sm flex items-center gap-2" style={{ color: BRAND_COLOR }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22V18M9 22V18M12 2A10 10 0 0 0 2 12c0 3.33 2.15 6.13 5.15 7.15A14.28 14.28 0 0 0 12 22a14.28 14.28 0 0 0 4.85-2.85C19.85 18.13 22 15.33 22 12A10 10 0 0 0 12 2zM12 6a3 3 0 1 1 0 6A3 3 0 0 1 12 6z"/></svg>
                  View Code
                </a>
              )}
              
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-stone-700 text-white rounded text-sm flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" /> View Live
                </a>
              )}
              
              <a href={CV_PDF_PATH} download className="px-4 py-2 border rounded text-sm flex items-center gap-2" style={{ color: BRAND_COLOR }}>
                <DownloadCloud className="w-4 h-4" /> Download CV
              </a>
              
            </div>
          
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
 }

/* Testimonials*/
function Testimonials({ items }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % items.length), 5000);
    return () => clearInterval(id);
  }, [items.length]);

  if (!items.length) return null;

  const item = items[idx];

  return (
    <div className="bg-white dark:bg-stone-800 rounded-xl p-6 shadow-lg">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center text-stone-700 font-semibold">{item.from[0]}</div>
        <div>
          <div className="text-sm font-semibold" style={{ color: BRAND_COLOR }}>{item.from} • <span className="text-xs text-stone-500">{item.role}</span></div>
          <div className="text-stone-700 dark:text-stone-300 mt-2">{item.quote}</div>
        </div>
      </div>
      <div className="mt-4 flex justify-end gap-2">
        <button onClick={() => setIdx((idx - 1 + items.length) % items.length)} className="p-2 rounded border"><ChevronLeft className="w-4 h-4" /></button>
        <button onClick={() => setIdx((idx + 1) % items.length)} className="p-2 rounded border"><ChevronRight className="w-4 h-4" /></button>
      </div>
    </div>
  );
}

/*Scroll Progress (D)*/
function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const pct = docHeight > 0 ? Math.min(100, Math.round((scrollTop / docHeight) * 100)) : 0;
      setProgress(pct);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50">
      <div style={{ width: `${progress}%`, background: BRAND_COLOR, height: "4px" }} />
    </div>
  );
}

/* Floating Contact (D)*/
function FloatingContact({ onOpenContact }) {
  return (
    <div className="fixed right-4 bottom-6 z-50">
      <div className="flex flex-col items-end gap-3">
        <button onClick={onOpenContact} className="bg-white/90 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-full px-4 py-2 shadow-lg flex items-center gap-2 hover:scale-105 transition-transform" style={{ color: BRAND_COLOR }}>
          <MessageSquare className="w-5 h-5" />
          <span className="hidden sm:inline text-sm">Contact</span>
        </button>
      </div>
    </div>
  );
}

/*Project Filters*/
function ProjectFilters({ selected, onChange, categories }) {
  return (
    <div className="flex gap-3 flex-wrap items-center">
      <button onClick={() => onChange("All")} className={`px-3 py-1 rounded ${selected === "All" ? "bg-stone-800 text-white" : "bg-white border"}`} style={{ borderColor: "#e6e6e6" }}>
        All
      </button>
      {categories.map((c) => (
        <button key={c} onClick={() => onChange(c)} className={`px-3 py-1 rounded ${selected === c ? "bg-stone-800 text-white" : "bg-white border"}`}>
          {c}
        </button>
      ))}
    </div>
  );
}

/*About / Timeline*/
function AboutSection() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white dark:bg-stone-800 rounded-xl p-6 shadow-lg">
      <h3 style={{ color: BRAND_COLOR }} className="text-xl font-bold mb-3">About Me</h3>
      <p className="text-stone-700 dark:text-stone-300">
        {open ? RESUME_DATA.biolong : `${RESUME_DATA.biolong.slice(0, 190)}...`}
      </p>
      <div className="mt-4 flex gap-3">
        <button onClick={() => setOpen(o => !o)} className="px-4 py-2 rounded bg-stone-700 text-white">
          {open ? "Show Less" : "Read More"}
        </button>
        <a href={CV_PDF_PATH} download className="px-4 py-2 border rounded" style={{ color: BRAND_COLOR }}>Download CV</a>
      </div>

      <div className="mt-6">
        <h4 className="text-md font-semibold mb-2" style={{ color: BRAND_COLOR }}>Timeline</h4>
        <div className="space-y-4">
          <div>
            <div className="text-sm text-stone-600">2023 — Present</div>
            <div className="font-medium ">BSIT Student • San Sebastian College</div>
            <div className="text-sm text-stone-700">Dean's Lister & Student leader</div>
          </div>
          <div>
            <div className="text-sm text-stone-600">Jul 2024 – Sep 2024</div>
            <div className="font-medium">ESL Teacher • Native Camp</div>
            <div className="text-sm text-stone-700">Remote, part-time teaching experience</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*Main App*/
export default function App() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("dac_theme");
      if (stored) setDark(stored === "dark");
    } catch {}
  }, []);
  useEffect(() => {
    try {
      window.localStorage.setItem("dac_theme", dark ? "dark" : "light");
    } catch {}
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const certificationsRef = useRef(null);
  const contactRef = useRef(null);

  const sections = [
    { id: "hero", label: "Home", ref: heroRef, icon: User },
    { id: "projects", label: "Projects", ref: projectsRef, icon: Layers },
    { id: "experience", label: "Experience", ref: experienceRef, icon: Briefcase },
    { id: "education", label: "Education", ref: educationRef, icon: GraduationCap },
    { id: "skills", label: "Skills", ref: skillsRef, icon: Zap },
    { id: "certifications", label: "Certs", ref: certificationsRef, icon: ShieldCheck },
    { id: "contact", label: "Contact", ref: contactRef, icon: Mail },
  ];

  const [projectModal, setProjectModal] = useState({ open: false, project: null });
  const [fullImageModal, setFullImageModal] = useState({ open: false, imageUrl: null }); // <-- FIX 1: DEFINE NEW STATE
  const [certModal, setCertModal] = useState({ open: false, certificate: null });
  const [filter, setFilter] = useState("All");
  const [skillQuery, setSkillQuery] = useState("");
  const [projectSlides] = useState(PROJECTS.map(p => ({ title: p.title, subtitle: p.subtitle, img: p.images[0] })));
  const [toast, setToast] = useState(null);
  const [openProfileModal, setOpenProfileModal] = useState(false);

  useEffect(() => {
    if (toast) {
      const id = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(id);
    }
  }, [toast]);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(PROJECTS.map(p => p.category)));
    return cats;
  }, []);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(p => (filter === "All" ? true : p.category === filter));
  }, [filter]);

  const filteredSkills = useMemo(() => {
    const q = skillQuery.trim().toLowerCase();
    if (!q) return RESUME_DATA.skills;
    const out = {};
    for (const [k, arr] of Object.entries(RESUME_DATA.skills)) {
      out[k] = arr.filter(s => s.toLowerCase().includes(q));
    }
    return out;
  }, [skillQuery]);

  function openProject(p) {
    setProjectModal({ open: true, project: p });
  }
  function closeProject() {
    setProjectModal({ open: false, project: null });
  }

  function openCertificate(cert) {
    setCertModal({ open: true, certificate: cert });
  }
  function closeCertificate() {
    setCertModal({ open: false, certificate: null });
  }
  
  function handleToggleTheme() {
    setDark(d => !d);
    setToast({ message: `Theme ${!dark ? "enabled (dark)" : "switched to light"}` });
  }

 /*home, education, etc*/
  function QuickNav({ sections }) {
    return (
      <div className="fixed right-4 top-1/3 z-40 hidden md:flex flex-col gap-3 transition-transform duration-300 hover:scale-105">
        {sections.map(s => (
          <button
            key={s.id}
            onClick={() => s.ref.current && s.ref.current.scrollIntoView({ behavior: "smooth", block: "start" })}
            className="flex items-center gap-2 bg-white/90 dark:bg-stone-900/90 border border-stone-200 dark:border-stone-700 px-3 py-2 rounded-full shadow-lg text-sm font-medium dark:text-white hover:scale-[1.02] hover:shadow-xl transition-all backdrop-blur-sm"
            style={{ color: BRAND_COLOR }}
          >
            <s.icon className="w-4 h-4 text-stone-700" />
            <span className="hidden lg:inline">{s.label}</span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className={`${dark ? "dark" : ""}`}>
      <ScrollProgress />
      <div className={`min-h-screen p-4 md:p-6`} style={{ backgroundColor: dark ? BG_COLOR_DARK : BG_COLOR_LIGHT, fontFamily: "Inter, sans-serif" }}>
        <FloatingContact onOpenContact={() => contactRef.current && contactRef.current.scrollIntoView({ behavior: "smooth" })} />
        <QuickNav sections={sections} />

        <div className="max-w-6xl mx-auto rounded-2xl p-6 md:p-10" style={{ backgroundColor: dark ? "#0b0b0b" : "#fff5ea" }}>
          <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b pb-4 border-stone-300 dark:border-stone-700">
            <BrandHeader dark={dark} />
            <div className="flex items-center gap-2 sm:gap-3 mt-4 sm:mt-0">
              <button onClick={() => contactRef.current && contactRef.current.scrollIntoView({ behavior: "smooth" })} className="text-sm font-semibold px-3 py-2 rounded-lg flex items-center gap-2" style={{ backgroundColor: BRAND_COLOR, color: "#fff" }}>
                <ArrowRight className="w-4 h-4" /> Get To Know Me!
              </button>

              <a href={CV_PDF_PATH} download className="flex items-center gap-2 border border-stone-300 dark:border-stone-700 px-3 py-2 rounded-lg text-sm" style={{ color: BRAND_COLOR }}>
                <DownloadCloud className="w-4 h-4" /> CV
              </a>

              <button onClick={handleToggleTheme} className="p-2 rounded-full border border-stone-300 dark:border-stone-700 bg-white/70 dark:bg-stone-800/70" title="Toggle theme" aria-label="Toggle theme" style={{ color: BRAND_COLOR }}>
                {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </header>

          <main className="mt-8 space-y-14">
            <motion.section id="hero" ref={heroRef} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <h1 style={{ color: BRAND_COLOR }} className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                  Hello! - I am Darlene.
                </h1>
                <p className="text-stone-700 dark:text-stone-300 max-w-3xl mb-6 text-lg">{RESUME_DATA.bio}</p>

                <div className="flex gap-3 flex-wrap mb-6">
                  {RESUME_DATA.summaryBullets.map((b, i) => (
                    <motion.span key={i} whileHover={{ scale: 1.03 }} className="text-xs bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 px-3 py-1 rounded-full text-stone-700 dark:text-stone-300 shadow-sm">
                      {b}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button onClick={() => projectsRef.current && projectsRef.current.scrollIntoView({ behavior: "smooth" })} className="px-6 py-3 text-white rounded-lg font-medium shadow-md" style={{ backgroundColor: BRAND_COLOR }}>
                    View Projects
                  </button>
                  <button onClick={() => experienceRef.current && experienceRef.current.scrollIntoView({ behavior: "smooth" })} className="px-6 py-3 border rounded-lg font-medium" style={{ color: BRAND_COLOR }}>
                    Read Experience
                  </button>
                </div>
              </div>

              <aside className="bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700 shadow-lg overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img src={RESUME_DATA.profileImageUrl} alt="profile" className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-[1.03]" onError={(e) => { e.target.onerror = null; e.target.src = "./images/PICTUREKO.jpg"; }} />
                </div>
                <div className="p-6">
                  <h2 style={{ color: BRAND_COLOR }} className="text-xl font-bold">{RESUME_DATA.name}</h2>
                  <p className="text-sm text-stone-600 dark:text-stone-300 mb-4">{RESUME_DATA.tagline}</p>
                  <div className="text-sm space-y-3 pt-3 border-t border-stone-200 dark:border-stone-700">
                    <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-orange-600" /><a href={`mailto:${RESUME_DATA.contact.email}`} className="text-stone-700 dark:text-stone-200 hover:underline">{RESUME_DATA.contact.email}</a></div>
                    <div className="flex items-center gap-3"><User className="w-5 h-5 text-orange-600" /><span className="text-stone-700 dark:text-stone-200">{RESUME_DATA.contact.phone}</span></div>
                    <div className="flex items-center gap-3"><Linkedin className="w-5 h-5 text-orange-600" /><a href={RESUME_DATA.contact.linkedin} target="_blank" rel="noreferrer" className="text-stone-700 dark:text-stone-200 hover:underline">LinkedIn Profile</a></div>
                    <div className="flex items-center gap-3"><Calendar className="w-5 h-5 text-orange-600" /><span className="text-stone-700 dark:text-stone-200">{RESUME_DATA.contact.location}</span></div>
                  </div>
                </div>
              </aside>
            </motion.section>

            <div className="grid md:grid-cols-3 gap-6">
              <AboutSection />
              <div className="md:col-span-2 space-y-6">
                <SectionTitle icon={ShieldCheck}>Testimonials</SectionTitle>
                <Testimonials items={TESTIMONIALS} />
              </div>
            </div>

            <motion.section id="projects" ref={projectsRef} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="flex justify-between items-center mb-4">
                <SectionTitle icon={Layers}>Projects & Portfolio</SectionTitle>
                <div className="flex items-center gap-4 transition-transform duration-300 hover:scale-105">
                  <ProjectFilters selected={filter} onChange={setFilter} categories={categories} />
                </div>
              </div>

              <div className="mb-8 transition-transform duration-300 hover:scale-105">
                <InlineCarousel slides={projectSlides} autoplay interval={3500} />
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {filteredProjects.map((p) => (
                  <motion.div key={p.id} whileHover={{ y: -6 }} className="bg-white dark:bg-stone-800 p-5 rounded-xl border border-stone-200 dark:border-stone-700 shadow-lg cursor-pointer flex flex-col transition-all" onClick={() => openProject(p)}>
                    <div className="relative mb-4 flex-shrink-0">
                      <img src={p.images[0]} alt={p.title} className="w-full h-44 object-cover rounded-lg" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x400/ccc/333?text=Project+Image"; }} />
                    </div>
                    <h4 style={{ color: BRAND_COLOR }} className="mt-1 text-xl font-bold">{p.title}</h4>
                    <p className="text-sm text-stone-600 dark:text-stone-400 flex-grow">{p.subtitle}</p>
                    <div className="mt-4 flex gap-2 flex-wrap pt-2 border-t border-stone-100 dark:border-stone-700">
                      {p.tags.slice(0, 3).map((t, i) => <span key={i} className="text-xs bg-stone-100 dark:bg-stone-700 text-stone-800 dark:text-stone-200 px-3 py-1 rounded-full">{t}</span>)}
                      {p.tags.length > 3 && <span className="text-xs text-stone-500">+{p.tags.length - 3} more</span>}
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <button className="text-sm font-medium text-stone-400" onClick={(e) => { e.stopPropagation(); openProject(p); }}>View Project <ArrowRight className="inline w-4 h-4 ml-1" /></button>
                      <div>
                        <button onClick={(e) => { e.stopPropagation(); navigator.clipboard?.writeText(window.location.href + `#project-${p.id}`); setToast({ message: "Project link copied" }); }} className="text-xs px-3 py-1 border rounded" style={{ color: BRAND_COLOR }}>Share</button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section id="experience" ref={experienceRef} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
              <SectionTitle icon={Briefcase}>Professional Experience</SectionTitle>
              <div className="grid gap-6">
                {RESUME_DATA.experience.map((exp, idx) => (
                  <motion.div key={idx} whileHover={{ scale: 1.01 }} className="p-6 bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700 shadow-lg">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3">
                      <div>
                        <h4 className="text-xl font-bold" style={{ color: BRAND_COLOR }}>{exp.title}</h4>
                        <div className="text-md text-stone-600 dark:text-stone-400">{exp.company}</div>
                      </div>
                      <div className="text-sm text-stone-700 dark:text-stone-300 font-semibold mt-2 sm:mt-0">{exp.duration}</div>
                    </div>
                    <ul className="mt-3 list-disc pl-5 text-stone-700 dark:text-stone-300 space-y-2">
                      {exp.details.map((d, i) => <li key={i}>{d}</li>)}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section id="education" ref={educationRef} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
              <SectionTitle icon={GraduationCap}>Education</SectionTitle>
              <div className="grid gap-4">
                {RESUME_DATA.education.map((edu, i) => (
                  <div key={i} className="p-6 bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700 transition-transform duration-300 hover:scale-105">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                      <div>
                        <div className="text-xl font-bold" style={{ color: BRAND_COLOR }}>{edu.degree}</div>
                        <div className="text-md text-stone-600 dark:text-stone-400">{edu.institution}</div>
                      </div>
                      <div className="text-sm text-stone-700 dark:text-stone-300 font-semibold mt-2 sm:mt-0">{edu.duration}</div>
                    </div>
                    {edu.details.length > 0 && <ul className="mt-3 list-disc pl-5 text-stone-700 dark:text-stone-300 space-y-1">{edu.details.map((d, k) => <li key={k}>{d}</li>)}</ul>}
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section id="skills" ref={skillsRef} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
                <SectionTitle icon={Zap}>Technical & Design Skills</SectionTitle>
                <div className="w-full sm:w-64">
                  <input value={skillQuery} onChange={(e) => setSkillQuery(e.target.value)} placeholder="Filter skills (e.g., Python)..." className="w-full border border-stone-300 dark:border-stone-700 rounded-lg px-4 py-2 text-sm bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 focus:ring-amber-500 focus:border-amber-500 transition-colors" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                {Object.entries(filteredSkills).map(([category, skills]) => (
                  <motion.div key={category} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="bg-white dark:bg-stone-800 p-5 rounded-xl border border-stone-200 dark:border-stone-700 shadow-lg">
                    <h4 className="text-lg font-bold mb-3" style={{ color: ACCENT_COLOR_DARK }}>{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.length > 0 ? skills.map((s, i) => <motion.span key={i} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 500, damping: 30 }} className="text-sm bg-stone-100 dark:bg-stone-700 text-stone-800 dark:text-stone-200 px-3 py-1 rounded-md font-medium shadow-sm">{s}</motion.span>) : <p className="text-sm text-stone-500 italic">No skills match filter.</p>}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section id="certifications" ref={certificationsRef} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
              <SectionTitle icon={ShieldCheck}>Certifications & Training</SectionTitle>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {RESUME_DATA.certifications.map((cert, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }} // Enhanced hover
                    className="p-5 bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700 shadow-lg cursor-pointer transition-shadow" // Added cursor-pointer
                    onClick={() => openCertificate(cert)} // NEW onClick HANDLER
                  >
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="w-5 h-5 text-stone-700" />
              
        <div>
                        <div className="text-md font-semibold text-stone-800 dark:text-stone-200">{cert.title}</div>
                        <div className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">Issued: {cert.issued}</div>
                      </div>
             
       </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section id="contact" ref={contactRef} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mt-8 text-center">
              <SectionTitle icon={Mail}>Let's Connect</SectionTitle>
              <h2 style={{ color: BRAND_COLOR }} className="text-3xl md:text-4xl font-extrabold mb-4">Ready to transform ideas into designs?</h2>
              <p className="text-stone-700 dark:text-stone-300 max-w-xl mx-auto mb-8 text-lg">I'm actively seeking opportunities in UX/UI design and front-end development. Reach out directly or connect on LinkedIn.</p>
              <div className="flex justify-center gap-4 flex-wrap">
                <a href={`mailto:${RESUME_DATA.contact.email}`} className="px-8 py-3 rounded-lg text-lg font-medium" style={{ backgroundColor: BRAND_COLOR, color: "#fff" }}><Mail className="w-5 h-5 inline" /> Say Hello</a>
                <a href={RESUME_DATA.contact.linkedin} target="_blank" rel="noreferrer" className="px-8 py-3 border rounded-lg text-lg font-medium" style={{ color: BRAND_COLOR }}><Linkedin className="w-5 h-5 inline" /> LinkedIn</a>
              </div>
            </motion.section>

          </main>

          <footer className="mt-12 pt-8 border-t border-stone-300 dark:border-stone-700 text-center text-sm text-stone-600 dark:text-stone-400">
            <p>&copy; {new Date().getFullYear()} {RESUME_DATA.name}. Built with React and Tailwind CSS.</p>
          </footer>
        </div>

       <ProjectModal open={projectModal.open} onClose={closeProject} project={projectModal.project} setFullImageModal={setFullImageModal} /> 
<FullImageModal open={fullImageModal.open} onClose={() => setFullImageModal({ open: false, imageUrl: null })} imageUrl={fullImageModal.imageUrl} /> 
        <AnimatePresence>
          {openProfileModal && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={() => setOpenProfileModal(false)}>
              <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
                <img src={RESUME_DATA.profileImageUrl} alt="profile full" className="w-full h-auto rounded-xl" />
                <div className="mt-4 text-right"><button onClick={() => setOpenProfileModal(false)} className="px-4 py-2 rounded bg-white">Close</button></div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <CertificateModal open={certModal.open} onClose={closeCertificate} certificate={certModal.certificate} />
        <AnimatePresence>
          {toast && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="fixed left-1/2 -translate-x-1/2 bottom-8 z-50 bg-white dark:bg-stone-800 px-4 py-2 rounded shadow-lg">
              <div className="text-sm text-stone-800 dark:text-stone-200">{toast.message}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

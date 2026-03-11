import React, { useState } from "react";
import resumePdf from "./assets/resume/resume.pdf";
import { translations } from "./i18n/translations";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Stats } from "./components/sections/Stats";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Services } from "./components/sections/Services";
import { Testimonials } from "./components/sections/Testimonials";
import { Blog } from "./components/sections/Blog";
import { Contact } from "./components/sections/Contact";
import { PdfViewerModal } from "./components/common/PdfViewerModal";

const t = translations;

export default function Portfolio() {
  const [lang, setLang] = useState("vi");
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [activePdfUrl, setActivePdfUrl] = useState(null);
  const [activePdfTitle, setActivePdfTitle] = useState(null);
  const tr = t[lang];

  const handleOpenPdf = (url, title) => {
    setActivePdfUrl(url);
    setActivePdfTitle(title);
    setIsCvOpen(true);
  };

  const handleClosePdf = () => {
    setIsCvOpen(false);
    setActivePdfUrl(null);
    setActivePdfTitle(null);
  };

  return (
    <div
      style={{
        background: "#05050f",
        color: "white",
        minHeight: "100vh",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #05050f; }
        ::-webkit-scrollbar-thumb { background: #7c3aed; border-radius: 3px; }

        @keyframes pulse { 0%, 100% { opacity: 0.7; transform: scale(1); } 50% { opacity: 1; transform: scale(1.05); } }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.25); }
        input:focus, textarea:focus { border-color: rgba(167,139,250,0.5) !important; }

        .hidden-mobile { display: flex; }
        .show-mobile { display: none; }

        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-grid > div:last-child { display: none; }
          .about-grid { grid-template-columns: 1fr !important; }
          .about-grid > div:first-child { display: none; }
          .info-grid-mobile { grid-template-columns: 1fr !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>

      <Navbar lang={lang} setLang={setLang} tr={tr} />
      <Hero lang={lang} tr={tr} />
      <Stats tr={tr} />
      <About
        lang={lang}
        tr={tr}
        onOpenCv={() => handleOpenPdf(resumePdf, tr.about.cvTitle)}
      />
      <Skills tr={tr} />
      <Experience lang={lang} tr={tr} onOpenPdf={handleOpenPdf} />
      <Projects lang={lang} tr={tr} />
      <Services lang={lang} tr={tr} />
      <Testimonials lang={lang} tr={tr} />
      <Blog lang={lang} tr={tr} />
      <Contact tr={tr} />
      <Footer tr={tr} />
      <PdfViewerModal
        isOpen={isCvOpen}
        onClose={handleClosePdf}
        tr={tr}
        pdfUrl={activePdfUrl}
        title={activePdfTitle}
      />
    </div>
  );
}
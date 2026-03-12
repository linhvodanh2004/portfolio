import React, { useState } from "react";
import { useTheme } from "./hooks/useTheme";
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
  const { theme } = useTheme();
  
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
        background: "var(--bg-primary)",
        color: "var(--text-primary)",
        minHeight: "100vh",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <style>{`
        :root {
          /* Dark Theme Variables */
          --bg-primary: #05050f;
          --bg-secondary: rgba(255, 255, 255, 0.03);
          --bg-tertiary: rgba(255, 255, 255, 0.06);
          --text-primary: #ffffff;
          --text-secondary: rgba(255, 255, 255, 0.7);
          --text-muted: rgba(255, 255, 255, 0.4);
          --border-color: rgba(255, 255, 255, 0.06);
          --border-color-hover: rgba(167, 139, 250, 0.3);
          --accent-primary: #7c3aed;
          --accent-secondary: #ec4899;
          --input-bg: rgba(255, 255, 255, 0.03);
          --modal-bg: rgba(10, 10, 20, 0.95);
        }

        .theme-light {
          /* Light Theme Variables */
          --bg-primary: #f8fafc;
          --bg-secondary: #ffffff;
          --bg-tertiary: rgba(0, 0, 0, 0.03);
          --text-primary: #0f172a;
          --text-secondary: #334155;
          --text-muted: #64748b;
          --border-color: rgba(0, 0, 0, 0.08);
          --border-color-hover: rgba(124, 58, 237, 0.4);
          --input-bg: rgba(0, 0, 0, 0.02);
          --modal-bg: rgba(255, 255, 255, 0.95);
        }

        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: var(--bg-primary); }
        ::-webkit-scrollbar-thumb { background: var(--accent-primary); border-radius: 3px; }

        @keyframes pulse { 0%, 100% { opacity: 0.7; transform: scale(1); } 50% { opacity: 1; transform: scale(1.05); } }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

        input::placeholder, textarea::placeholder { color: var(--text-muted); }
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
import React, { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export function Navbar({ lang, setLang, tr }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    "home",
    "about",
    "skills",
    "experience",
    "projects",
    "services",
    "blog",
    "contact",
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
    setActive(id);
  };

  return (
    <nav
      style={{
        background: scrolled ? "var(--modal-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border-color)"
          : "none",
        transition: "all 0.3s ease",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "0 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "70px",
        }}
      >
        <button
          onClick={() => scrollTo("home")}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 900,
            fontSize: "1.5rem",
            background: "linear-gradient(135deg, #a78bfa, #ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "-0.02em",
          }}
        >
          &lt;LinhPN /&gt;
        </button>

        <div
          style={{ display: "flex", gap: "0.25rem", alignItems: "center" }}
          className="hidden-mobile"
        >
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                padding: "0.4rem 0.8rem",
                borderRadius: "8px",
                fontSize: "0.85rem",
                fontWeight: active === link ? 700 : 400,
                color:
                  active === link
                    ? "var(--accent-primary)"
                    : "var(--text-secondary)",
                background:
                  active === link
                    ? "var(--bg-tertiary)"
                    : "transparent",
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s",
                textTransform: "capitalize",
              }}
            >
              {tr.nav[link]}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <button
            onClick={() => setLang(lang === "vi" ? "en" : "vi")}
            style={{
              background: "rgba(167,139,250,0.15)",
              border: "1px solid rgba(167,139,250,0.3)",
              color: "#a78bfa",
              borderRadius: "20px",
              padding: "0.3rem 0.8rem",
              fontSize: "0.8rem",
              fontWeight: 700,
              cursor: "pointer",
              transition: "all 0.2s",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <img
              src={
                lang === "vi"
                  ? "https://flagcdn.com/w20/vn.png"
                  : "https://flagcdn.com/w20/us.png"
              }
              alt="flag"
              style={{ width: "18px", height: "14px", borderRadius: "2px" }}
            />
            {lang === "vi" ? "VI" : "EN"}
          </button>
          <button
            onClick={toggleTheme}
            style={{
              background: "var(--bg-tertiary)",
              border: "1px solid var(--border-color)",
              color: "var(--text-primary)",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className="show-mobile"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              color: "var(--text-primary)",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          style={{
            background: "var(--bg-primary)",
            padding: "1rem 2rem 2rem",
            borderTop: "1px solid var(--border-color)",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                padding: "0.75rem 0",
                color: "var(--text-secondary)",
                background: "none",
                border: "none",
                borderBottom:
                  "1px solid var(--border-color)",
                fontSize: "1rem",
                cursor: "pointer",
                textTransform: "capitalize",
              }}
            >
              {tr.nav[link]}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}


import React from "react";
import { AnimatedSection } from "../common/AnimatedSection";
import { SectionHeader } from "../common/SectionHeader";

export function About({ lang, tr, onOpenCv }) {
  const a = tr.about;

  return (
    <section id="about" style={{ padding: "6rem 2rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeader title={a.title} subtitle={a.subtitle} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
          }}
          className="about-grid"
        >
          <AnimatedSection>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  borderRadius: "24px",
                  overflow: "hidden",
                  aspectRatio: "4/5",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80"
                  alt="about"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(5,5,15,0.7) 0%, transparent 60%)",
                  }}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "1.5rem",
                  left: "1.5rem",
                  background: "var(--bg-primary)",
                  border:
                    "1px solid var(--border-color-hover)",
                  borderRadius: "16px",
                  padding: "1rem 1.5rem",
                  backdropFilter: "blur(20px)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "2rem",
                    fontWeight: 900,
                    color: "#a78bfa",
                  }}
                >
                  5+
                </div>
                <div
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.8rem",
                  }}
                >
                  {lang === "vi"
                    ? "Năm kinh nghiệm"
                    : "Years of Experience"}
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.9,
                marginBottom: "1.25rem",
              }}
            >
              {a.p1}
            </p>
            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.9,
                marginBottom: "1.25rem",
              }}
            >
              {a.p2}
            </p>
            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.9,
                marginBottom: "2rem",
              }}
            >
              {a.p3}
            </p>

            <div
              className="info-grid-mobile"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.75rem",
                marginBottom: "2rem",
              }}
            >
              {Object.keys(a.labels).map((key) => (
                <div
                  key={key}
                  style={{ display: "flex", gap: "0.5rem" }}
                >
                  <span
                    style={{
                      color: "#a78bfa",
                      fontWeight: 600,
                      fontSize: "0.85rem",
                      minWidth: "80px",
                    }}
                  >
                    {a.labels[key]}:
                  </span>
                  <span
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.85rem",
                    }}
                  >
                    {a.info[key]}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                onOpenCv();
              }}
              style={{
                display: "inline-flex",
                border: "none",
                cursor: "pointer",
                fontSize: "1rem",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.85rem 2rem",
                borderRadius: "12px",
                fontWeight: 700,
                background:
                  "linear-gradient(135deg, #7c3aed, #ec4899)",
                color: "white",
                textDecoration: "none",
                transition: "all 0.3s",
                boxShadow:
                  "0 0 30px rgba(124,58,237,0.3)",
              }}
            >
              {a.download}
            </button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}


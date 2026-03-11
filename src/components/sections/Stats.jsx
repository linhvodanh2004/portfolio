import React from "react";
import { AnimatedSection } from "../common/AnimatedSection";

export function Stats({ tr }) {
  return (
    <section
      style={{
        padding: "2rem",
        background: "rgba(139,92,246,0.05)",
        borderTop: "1px solid rgba(139,92,246,0.1)",
        borderBottom: "1px solid rgba(139,92,246,0.1)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "2rem",
        }}
        className="stats-grid"
      >
        {tr.stats.map((s, i) => (
          <AnimatedSection key={s.label} delay={i * 0.1}>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: 900,
                  background:
                    "linear-gradient(135deg, #a78bfa, #ec4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "0.85rem",
                  marginTop: "0.25rem",
                }}
              >
                {s.label}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}


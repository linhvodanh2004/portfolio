import React from "react";
import { AnimatedSection } from "../common/AnimatedSection";

export function Stats({ tr }) {
  return (
    <section
      style={{
        padding: "2rem",
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border-color)",
        borderBottom: "1px solid var(--border-color)",
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
          <AnimatedSection key={s.label} delay={i * 0.1} variant="scale">
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
                  color: "var(--text-secondary)",
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


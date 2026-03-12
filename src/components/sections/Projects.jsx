import React, { useState } from "react";
import { projects as projectsData } from "../../data/projects";
import { AnimatedSection } from "../common/AnimatedSection";
import { SectionHeader } from "../common/SectionHeader";
import { Star, TrendingUp, ExternalLink, Code } from "lucide-react";

export function Projects({ lang, tr }) {
  const [filter, setFilter] = useState(0);
  const filters = tr.projects.filters;
  const filterKeys = ["All", "Web App", "Mobile", "Open Source", "API"];

  const filtered =
    filter === 0
      ? projectsData
      : projectsData.filter(
        (p) => p.cat === filterKeys[filter]
      );

  return (
    <section
      id="projects"
      style={{ padding: "6rem 2rem", background: "var(--bg-tertiary)" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeader
          title={tr.projects.title}
          subtitle={tr.projects.subtitle}
        />

        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "3rem",
          }}
        >
          {filters.map((f, i) => (
            <button
              key={f}
              onClick={() => setFilter(i)}
              style={{
                padding: "0.5rem 1.25rem",
                borderRadius: "20px",
                fontSize: "0.85rem",
                fontWeight: 600,
                border:
                  filter === i
                    ? "none"
                    : "1px solid var(--border-color)",
                background:
                  filter === i
                    ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
                    : "var(--bg-tertiary)",
                color: filter === i ? "#ffffff" : "var(--text-primary)", // sửa ở đây
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {f}
            </button>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {filtered.map((proj, i) => (
            <AnimatedSection key={proj.title} delay={i * 0.1} variant="scale">
              <ProjectCard proj={proj} lang={lang} tr={tr} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ proj, lang, tr }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--bg-secondary)",
        border: `1px solid ${hovered
            ? "var(--border-color-hover)"
            : "var(--border-color)"
          }`,
        borderRadius: "20px",
        overflow: "hidden",
        transition: "all 0.3s",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 20px 60px rgba(124,58,237,0.15)"
          : "none",
      }}
    >
      <div
        style={{
          position: "relative",
          aspectRatio: "16/9",
          overflow: "hidden",
        }}
      >
        <img
          src={proj.image}
          alt={proj.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s",
            transform: hovered ? "scale(1.05)" : "scale(1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(5,5,15,0.9) 0%, transparent 60%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            display: "flex",
            gap: "0.5rem",
          }}
        >
          <span
            style={{
              background: "var(--bg-tertiary)",
              border:
                "1px solid var(--border-color-hover)",
              borderRadius: "6px",
              padding: "0.2rem 0.6rem",
              fontSize: "0.72rem",
              color: "var(--accent-primary)",
              fontWeight: 600,
              backdropFilter: "blur(10px)",
            }}
          >
            {proj.cat}
          </span>
          {proj.featured && (
            <span
              style={{
                background: "rgba(251,191,36,0.2)",
                border:
                  "1px solid rgba(251,191,36,0.3)",
                borderRadius: "6px",
                padding: "0.2rem 0.6rem",
                fontSize: "0.72rem",
                color: "#fbbf24",
                fontWeight: 600,
                backdropFilter: "blur(10px)",
                display: "flex",
                alignItems: "center",
                gap: "0.25rem"
              }}
            >
              <Star size={12} fill="currentColor" /> Featured
            </span>
          )}
        </div>
        <div
          style={{ position: "absolute", bottom: "1rem", left: "1rem" }}
        >
          <span
            style={{
              color: "#10b981",
              fontWeight: 700,
              fontSize: "0.8rem",
              display: "flex",
              alignItems: "center",
              gap: "0.25rem"
            }}
          >
            <TrendingUp size={14} /> {proj.metrics[lang]}
          </span>
        </div>
      </div>

      <div style={{ padding: "1.25rem" }}>
        <h3
          style={{
            fontWeight: 800,
            fontSize: "1.05rem",
            color: "var(--text-primary)",
            marginBottom: "0.5rem",
          }}
        >
          {proj.title}
        </h3>
        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "0.85rem",
            lineHeight: 1.6,
            marginBottom: "1rem",
          }}
        >
          {proj.desc[lang]}
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.35rem",
            marginBottom: "1rem",
          }}
        >
          {proj.tags.map((tag) => (
            <span
              key={tag}
              style={{
                background: "var(--bg-tertiary)",
                border:
                  "1px solid var(--border-color)",
                borderRadius: "5px",
                padding: "0.15rem 0.5rem",
                fontSize: "0.72rem",
                color: "var(--accent-primary)",
                fontWeight: 600,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <a
            href={proj.demo}
            style={{
              flex: 1,
              textAlign: "center",
              padding: "0.55rem",
              borderRadius: "10px",
              background:
                "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
              color: "white",
              textDecoration: "none",
              fontSize: "0.8rem",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.35rem"
            }}
          >
            <ExternalLink size={14} /> {tr.projects.demo}
          </a>
          <a
            href={proj.code}
            style={{
              flex: 1,
              textAlign: "center",
              padding: "0.55rem",
              borderRadius: "10px",
              background: "var(--bg-secondary)",
              border:
                "1px solid var(--border-color)",
              color: "var(--text-primary)",
              textDecoration: "none",
              fontSize: "0.8rem",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.35rem"
            }}
          >
            <Code size={14} /> {tr.projects.code}
          </a>
        </div>
      </div>
    </div>
  );
}


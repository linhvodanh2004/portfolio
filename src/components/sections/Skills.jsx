import React, { useState } from "react";
import StackIcon from "tech-stack-icons";
import { skillsData } from "../../data/skills";
import { useInView } from "../../hooks/useInView";
import { AnimatedSection } from "../common/AnimatedSection";
import { SectionHeader } from "../common/SectionHeader";

export function Skills({ tr }) {
  const [activeCat, setActiveCat] = useState("All");
  const cats = tr.skills.categories;
  const catKeys = ["All", "Frontend", "Backend", "DevOps", "Mobile", "Database"];

  const filtered =
    activeCat === "All" || activeCat === "Tất cả"
      ? skillsData
      : skillsData.filter(
        (s) => s.cat === catKeys[cats.indexOf(activeCat)]
      );

  return (
    <section
      id="skills"
      style={{
        padding: "6rem 2rem",
        background: "var(--bg-tertiary)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeader
          title={tr.skills.title}
          subtitle={tr.skills.subtitle}
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
          {cats.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              style={{
                padding: "0.5rem 1.25rem",
                borderRadius: "20px",
                fontSize: "0.85rem",
                fontWeight: 600,
                border:
                  activeCat === cat
                    ? "none"
                    : "1px solid var(--border-color)",
                background:
                  activeCat === cat
                    ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
                    : "var(--bg-tertiary)",
                color: activeCat === cat ? "#ffffff" : "var(--text-primary)",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(180px, 1fr))",
            gap: "1rem",
          }}
        >
          {filtered.map((skill, i) => (
            <AnimatedSection key={skill.name} delay={i * 0.05} variant="fadeUp">
              <SkillCard skill={skill} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill }) {
  const [hovered, setHovered] = useState(false);
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? "var(--bg-secondary)"
          : "var(--bg-primary)",
        border: `1px solid ${hovered
            ? "var(--border-color-hover)"
            : "var(--border-color)"
          }`,
        borderRadius: "16px",
        padding: "1.25rem",
        transition: "all 0.3s",
        cursor: "default",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      <div
        style={{
          width: "2rem",
          height: "2rem",
          marginBottom: "0.5rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <StackIcon name={skill.icon} />
      </div>
      <div
        style={{
          fontWeight: 700,
          color: "var(--text-primary)",
          fontSize: "0.9rem",
          marginBottom: "0.75rem",
        }}
      >
        {skill.name}
      </div>
      <div
        style={{
          height: "4px",
          borderRadius: "2px",
          background: "var(--border-color)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            borderRadius: "2px",
            background:
              "linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))",
            width: inView ? `${skill.level}%` : "0%",
            transition: "width 1.2s ease 0.3s",
          }}
        />
      </div>
      <div
        style={{
          color: "var(--accent-primary)",
          fontSize: "0.75rem",
          fontWeight: 700,
          marginTop: "0.4rem",
          textAlign: "right",
        }}
      >
        {skill.level}%
      </div>
    </div>
  );
}


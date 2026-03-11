import React, { useState } from "react";
import { services } from "../../data/services";
import { AnimatedSection } from "../common/AnimatedSection";
import { SectionHeader } from "../common/SectionHeader";
import {
  Globe2,
  ServerCog,
  Smartphone,
  Cloud,
  Palette,
  ShieldCheck,
  GraduationCap,
  BrainCircuit,
} from "lucide-react";

export function Services({ lang, tr }) {
  return (
    <section id="services" style={{ padding: "6rem 2rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeader
          title={tr.services.title}
          subtitle={tr.services.subtitle}
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {services.map((svc, i) => (
            <AnimatedSection key={svc.title.en} delay={i * 0.07}>
              <ServiceCard svc={svc} lang={lang} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ svc, lang }) {
  const [hovered, setHovered] = useState(false);

  const iconMap = {
    "Web App Development": Globe2,
    "Backend & API": ServerCog,
    "Mobile App": Smartphone,
    "DevOps & Cloud": Cloud,
    "UI/UX Design": Palette,
    "Code Review & Audit": ShieldCheck,
    "Mentoring & Training": GraduationCap,
    "AI Integration": BrainCircuit,
  };

  const Icon = iconMap[svc.title.en] ?? Globe2;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(236,72,153,0.08))"
          : "rgba(255,255,255,0.03)",
        border: `1px solid ${
          hovered
            ? "rgba(167,139,250,0.3)"
            : "rgba(255,255,255,0.06)"
        }`,
        borderRadius: "20px",
        padding: "2rem",
        transition: "all 0.3s",
        cursor: "default",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      <div style={{ marginBottom: "1rem", color: "#a78bfa" }}>
        <Icon size={28} />
      </div>
      <h3
        style={{
          fontWeight: 800,
          color: "white",
          fontSize: "1rem",
          marginBottom: "0.5rem",
        }}
      >
        {svc.title[lang]}
      </h3>
      <p
        style={{
          color: "rgba(255,255,255,0.6)",
          fontSize: "0.85rem",
          lineHeight: 1.7,
          marginBottom: "1.25rem",
        }}
      >
        {svc.desc[lang]}
      </p>
      <div
        style={{
          color: "#a78bfa",
          fontWeight: 800,
          fontSize: "0.9rem",
        }}
      >
        {svc.price[lang]}
      </div>
    </div>
  );
}


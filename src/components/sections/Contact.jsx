import React, { useState } from "react";
import { AnimatedSection } from "../common/AnimatedSection";
import { SectionHeader } from "../common/SectionHeader";
import {
  MapPin,
  Mail,
  Smartphone,
  Globe,
  Github,
  Linkedin,
  Facebook,
  Copy,
  Check,
  Send,
} from "lucide-react";
import { contactInfo, socialLinks } from "../../data/social";

const SOCIAL_ICONS = { github: Github, linkedin: Linkedin, facebook: Facebook };

export function Contact({ lang, tr }) {
  const c = tr.contact;
  const [copied, setCopied] = useState(null);

  const copy = async (key, value) => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // Trình duyệt chặn clipboard API (http, quyền bị từ chối) -> fallback execCommand
      const el = document.createElement("textarea");
      el.value = value;
      el.style.position = "fixed";
      el.style.opacity = "0";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(key);
    setTimeout(() => setCopied((k) => (k === key ? null : k)), 1800);
  };

  const items = [
    {
      key: "location",
      icon: <MapPin size={19} />,
      label: c.labels.location,
      value: contactInfo.location[lang],
    },
    {
      key: "email",
      icon: <Mail size={19} />,
      label: c.labels.email,
      value: contactInfo.email,
    },
    {
      key: "phone",
      icon: <Smartphone size={19} />,
      label: c.labels.phone,
      value: contactInfo.phone,
    },
    {
      key: "website",
      icon: <Globe size={19} />,
      label: c.labels.website,
      value: contactInfo.website,
    },
  ];

  return (
    <section
      id="contact"
      style={{ padding: "6rem 2rem", background: "var(--bg-tertiary)" }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <SectionHeader title={c.title} subtitle={c.subtitle} />

        <AnimatedSection>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "0.95rem",
              textAlign: "center",
              maxWidth: "560px",
              margin: "0 auto 2.5rem",
              lineHeight: 1.7,
            }}
          >
            {c.intro}
          </p>
        </AnimatedSection>

        <div
          className="contact-cards"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          {items.map((item, i) => (
            <AnimatedSection key={item.key} delay={i * 0.08} variant="fadeUp">
              <ContactCard
                item={item}
                copied={copied === item.key}
                copyLabel={c.copy}
                copiedLabel={c.copied}
                onCopy={() => copy(item.key, item.value)}
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem",
            }}
          >
            <a
              href={`mailto:${contactInfo.email}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.55rem",
                padding: "0.9rem 2rem",
                borderRadius: "14px",
                background:
                  "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                color: "#ffffff",
                textDecoration: "none",
                fontWeight: 800,
                fontSize: "0.95rem",
                boxShadow: "0 0 30px rgba(124,58,237,0.3)",
              }}
            >
              <Send size={18} /> {c.emailCta}
            </a>

            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.85rem",
                margin: 0,
              }}
            >
              {c.or}
            </p>

            <div style={{ display: "flex", gap: "0.75rem" }}>
              {socialLinks.map((s) => {
                const Icon = SOCIAL_ICONS[s.icon];
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    title={s.name}
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: "var(--bg-secondary)",
                      border: "1px solid var(--border-color)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--text-primary)",
                      textDecoration: "none",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "var(--bg-primary)";
                      e.currentTarget.style.borderColor =
                        "var(--border-color-hover)";
                      e.currentTarget.style.color = "var(--accent-primary)";
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "var(--bg-secondary)";
                      e.currentTarget.style.borderColor = "var(--border-color)";
                      e.currentTarget.style.color = "var(--text-primary)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function ContactCard({ item, copied, copyLabel, copiedLabel, onCopy }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onCopy}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      title={copied ? copiedLabel : copyLabel}
      style={{
        width: "100%",
        height: "100%",
        textAlign: "left",
        display: "flex",
        alignItems: "center",
        gap: "0.9rem",
        padding: "1.1rem",
        background: "var(--bg-secondary)",
        border: `1px solid ${
          copied
            ? "#10b981"
            : hovered
              ? "var(--border-color-hover)"
              : "var(--border-color)"
        }`,
        borderRadius: "14px",
        cursor: "pointer",
        fontFamily: "inherit",
        transition: "all 0.2s",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
      }}
    >
      <span
        style={{
          flexShrink: 0,
          width: 40,
          height: 40,
          borderRadius: "11px",
          background: "var(--bg-tertiary)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: copied ? "#10b981" : "var(--accent-primary)",
        }}
      >
        {item.icon}
      </span>

      <span style={{ flex: 1, minWidth: 0 }}>
        <span
          style={{
            display: "block",
            fontSize: "0.68rem",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            color: "var(--text-muted)",
            fontWeight: 700,
            marginBottom: "0.15rem",
          }}
        >
          {item.label}
        </span>
        <span
          style={{
            display: "block",
            fontSize: "0.85rem",
            color: "var(--text-primary)",
            fontWeight: 600,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {item.value}
        </span>
      </span>

      <span
        style={{
          flexShrink: 0,
          color: copied ? "#10b981" : "var(--text-muted)",
          display: "flex",
          alignItems: "center",
          transition: "color 0.2s",
        }}
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </span>
    </button>
  );
}

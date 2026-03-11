import React, { useState } from "react";
import { workExp, education, certs } from "../../data/experience";
import { AnimatedSection } from "../common/AnimatedSection";
import { SectionHeader } from "../common/SectionHeader";

export function Experience({ lang, tr, onOpenPdf }) {
  const [tab, setTab] = useState(0);
  const tabs = tr.experience.tabs;

  return (
    <section id="experience" style={{ padding: "6rem 2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <SectionHeader
          title={tr.experience.title}
          subtitle={tr.experience.subtitle}
        />

        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            justifyContent: "center",
            marginBottom: "3rem",
            background: "rgba(255,255,255,0.03)",
            borderRadius: "12px",
            padding: "0.25rem",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {tabs.map((t, i) => (
            <button
              key={t}
              onClick={() => setTab(i)}
              style={{
                flex: 1,
                padding: "0.6rem 1rem",
                borderRadius: "10px",
                fontSize: "0.85rem",
                fontWeight: 600,
                background:
                  tab === i
                    ? "linear-gradient(135deg, #7c3aed, #ec4899)"
                    : "transparent",
                color: "white",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {tab === 0 && (
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                left: "23px",
                top: 0,
                bottom: 0,
                width: "2px",
                background:
                  "linear-gradient(to bottom, #7c3aed, #ec4899, transparent)",
              }}
            />
            {workExp.map((exp, i) => (
              <AnimatedSection key={exp.company} delay={i * 0.15}>
                <div
                  style={{
                    display: "flex",
                    gap: "2rem",
                    marginBottom: "2.5rem",
                  }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      overflow: "hidden",
                      border:
                        "2px solid rgba(167,139,250,0.3)",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      flex: 1,
                      background: "rgba(255,255,255,0.03)",
                      border:
                        "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "16px",
                      padding: "1.5rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "0.5rem",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <div>
                        <h3
                          style={{
                            fontWeight: 800,
                            fontSize: "1.1rem",
                            color: "white",
                          }}
                        >
                          {exp.role[lang]}
                        </h3>
                        <p
                          style={{
                            color: "#a78bfa",
                            fontWeight: 600,
                            fontSize: "0.9rem",
                          }}
                        >
                          {exp.company} · {exp.location}
                        </p>
                      </div>
                      <span
                        style={{
                          background:
                            "rgba(167,139,250,0.1)",
                          border:
                            "1px solid rgba(167,139,250,0.2)",
                          borderRadius: "8px",
                          padding: "0.3rem 0.75rem",
                          color: "#a78bfa",
                          fontSize: "0.8rem",
                          fontWeight: 600,
                          height: "fit-content",
                        }}
                      >
                        {exp.period}
                      </span>
                    </div>
                    <ul
                      style={{
                        color: "rgba(255,255,255,0.65)",
                        lineHeight: 1.7,
                        fontSize: "0.9rem",
                        marginBottom: "1rem",
                        paddingLeft: "1.2rem",
                      }}
                    >
                      {(Array.isArray(exp.desc[lang])
                        ? exp.desc[lang]
                        : [exp.desc[lang]]
                      ).map((item) => (
                        <li
                          key={item}
                          style={{ marginBottom: "0.4rem" }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.4rem",
                      }}
                    >
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            background:
                              "rgba(124,58,237,0.15)",
                            border:
                              "1px solid rgba(124,58,237,0.2)",
                            borderRadius: "6px",
                            padding: "0.2rem 0.6rem",
                            fontSize: "0.75rem",
                            color: "#c4b5fd",
                            fontWeight: 600,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        )}

        {tab === 1 && (
          <div>
            {education.map((edu, i) => (
              <AnimatedSection
                key={edu.school.en}
                delay={i * 0.15}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "1.5rem",
                    marginBottom: "1.5rem",
                    background: "rgba(255,255,255,0.03)",
                    border:
                      "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "16px",
                    padding: "1.5rem",
                  }}
                >
                  <img
                    src={edu.logo}
                    alt={edu.school[lang]}
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "0.5rem",
                      }}
                    >
                      <div>
                        <h3
                          style={{
                            fontWeight: 800,
                            color: "white",
                            fontSize: "1rem",
                          }}
                        >
                          {edu.degree[lang]}
                        </h3>
                        <p
                          style={{
                            color: "#a78bfa",
                            fontSize: "0.9rem",
                            fontWeight: 600,
                          }}
                        >
                          {edu.school[lang]}
                        </p>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <span
                          style={{
                            background:
                              "rgba(167,139,250,0.1)",
                            border:
                              "1px solid rgba(167,139,250,0.2)",
                            borderRadius: "8px",
                            padding: "0.3rem 0.75rem",
                            color: "#a78bfa",
                            fontSize: "0.8rem",
                            fontWeight: 600,
                          }}
                        >
                          {edu.period}
                        </span>
                        {edu.gpa && (
                          <p
                            style={{
                              color: "#10b981",
                              fontSize: "0.8rem",
                              marginTop: "0.25rem",
                              fontWeight: 600,
                            }}
                          >
                            GPA: {edu.gpa}
                          </p>
                        )}
                      </div>
                    </div>
                    <ul
                      style={{
                        color: "rgba(255,255,255,0.65)",
                        fontSize: "0.9rem",
                        lineHeight: 1.7,
                        marginTop: "0.5rem",
                        paddingLeft: "1.2rem",
                      }}
                    >
                      {(Array.isArray(edu.desc[lang])
                        ? edu.desc[lang]
                        : [edu.desc[lang]]
                      ).map((item) => (
                        <li
                          key={item}
                          style={{ marginBottom: "0.4rem" }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        )}

        {tab === 2 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "1rem",
            }}
          >
            {certs.map((cert, i) => (
              <AnimatedSection
                key={cert.name}
                delay={i * 0.1}
              >
                <div
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border:
                      "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "16px",
                    padding: "1.25rem",
                    textAlign: "center",
                    transition: "all 0.3s",
                    cursor: cert.pdf ? "pointer" : "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(167,139,250,0.3)";
                    e.currentTarget.style.transform =
                      "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.06)";
                    e.currentTarget.style.transform =
                      "translateY(0)";
                  }}
                  onClick={() =>
                    cert.pdf &&
                    onOpenPdf(cert.pdf, cert.name)
                  }
                >
                  <img
                    src={cert.badge}
                    alt={cert.name}
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "12px",
                      marginBottom: "0.75rem",
                    }}
                  />
                  <h4
                    style={{
                      color: "white",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.25rem",
                      minHeight: "4rem",
                    }}
                  >
                    {cert.name}
                  </h4>
                  <p
                    style={{
                      color: "#a78bfa",
                      fontSize: "0.78rem",
                    }}
                  >
                    {cert.issuer}
                  </p>
                  <p
                    style={{
                      color: "rgb(236, 72, 153)",
                      fontSize: "0.7rem",
                      border:
                        "1px solid rgba(236, 72, 153, 0.6)",
                      borderRadius: "8px",
                      padding: "0.3rem 0.75rem",
                      marginTop: "0.5rem",
                    }}
                  >
                    {cert.year}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}


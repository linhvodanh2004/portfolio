import React, { useEffect, useState } from "react";
import { testimonials } from "../../data/testimonials";
import { AnimatedSection } from "../common/AnimatedSection";
import { SectionHeader } from "../common/SectionHeader";
import { Quote, Star } from "lucide-react";

export function Testimonials({ lang, tr }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setActive((prev) => (prev + 1) % testimonials.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  const angle = 360 / testimonials.length;
  const carouselRotation = -active * angle;

  return (
    <section
      id="testimonials"
      style={{
        padding: "6rem 2rem",
        background: "var(--bg-tertiary)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <SectionHeader
          title={tr.testimonials.title}
          subtitle={tr.testimonials.subtitle}
        />

        <AnimatedSection variant="scale">
          <div
            style={{
              perspective: "1000px",
              position: "relative",
              height: "400px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "2rem",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "500px",
                height: "100%",
                position: "absolute",
                transformStyle: "preserve-3d",
                transform: `translateZ(-350px) rotateY(${carouselRotation}deg)`,
                transition:
                  "transform 1s cubic-bezier(0.2, 0.8, 0.2, 1)",
              }}
            >
              {testimonials.map((test, i) => {
                const itemAngle = i * angle;
                const isActive = i === active;

                return (
                  <div
                    key={test.name.en}
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      left: 0,
                      top: 0,
                      transform: `rotateY(${itemAngle}deg) translateZ(350px)`,
                      opacity: isActive ? 1 : 0.4,
                      filter: isActive ? "none" : "blur(2px)",
                      transition: "opacity 0.6s, filter 0.6s",
                      pointerEvents: isActive ? "auto" : "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        background: "var(--bg-secondary)",
                        border:
                          "1px solid var(--border-color)",
                        borderRadius: "24px",
                        padding: "2.5rem",
                        textAlign: "left",
                        width: "100%",
                        backdropFilter: "blur(10px)",
                        boxShadow: isActive
                          ? "0 20px 40px rgba(0,0,0,0.3), inset 0 0 0 1px var(--border-color-hover)"
                          : "none",
                        transition: "all 0.5s",
                      }}
                    >
                      <div
                        style={{
                          color: "var(--accent-primary)",
                          marginBottom: "1.5rem",
                        }}
                      >
                        <Quote size={32} fill="currentColor" />
                      </div>

                      <p
                        style={{
                          color: "var(--text-primary)",
                          fontSize: "1.05rem",
                          lineHeight: 1.8,
                          fontStyle: "italic",
                          marginBottom: "2rem",
                          fontWeight: 500,
                          minHeight: "100px",
                        }}
                      >
                        "{test.text[lang]}"
                      </p>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                          paddingTop: "1.25rem",
                          borderTop:
                            "1px solid var(--border-color)",
                        }}
                      >
                        <img
                          src={test.avatar}
                          alt={test.name[lang]}
                          style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "50%",
                            border:
                              "2px solid rgba(167,139,250,0.5)",
                            background:
                              "linear-gradient(135deg, #7c3aed, #ec4899)",
                            objectFit: "cover",
                          }}
                        />
                        <div>
                          <div
                            style={{
                              color: "var(--text-primary)",
                              fontWeight: 700,
                              fontSize: "1rem",
                            }}
                          >
                            {test.name[lang]}
                          </div>
                          <div
                            style={{
                              color: "var(--text-secondary)",
                              fontSize: "0.85rem",
                              fontWeight: 600,
                            }}
                          >
                            {test.role[lang]}
                          </div>
                        </div>
                        <div
                          style={{
                            marginLeft: "auto",
                            display: "flex",
                            gap: "0.15rem",
                          }}
                        >
                          {Array.from({ length: test.rating }).map(
                            (_, j) => (
                              <Star
                                key={j}
                                size={16}
                                color="#fbbf24"
                                fill="#fbbf24"
                              />
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.75rem",
            marginTop: "3rem",
          }}
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: i === active ? "32px" : "10px",
                height: "10px",
                borderRadius: "5px",
                background:
                  i === active
                    ? "linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))"
                    : "var(--border-color-hover)",
                border: "none",
                cursor: "pointer",
                transition:
                  "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


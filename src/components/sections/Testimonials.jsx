import React, { useEffect, useState } from "react";
import { testimonials } from "../../data/testimonials";
import { AnimatedSection } from "../common/AnimatedSection";
import { SectionHeader } from "../common/SectionHeader";

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
        background: "rgba(139,92,246,0.03)",
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

        <AnimatedSection>
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
                        background: "rgba(255,255,255,0.03)",
                        border:
                          "1px solid rgba(255,255,255,0.06)",
                        borderRadius: "24px",
                        padding: "2.5rem",
                        textAlign: "left",
                        width: "100%",
                        backdropFilter: "blur(10px)",
                        boxShadow: isActive
                          ? "0 20px 40px rgba(0,0,0,0.3), inset 0 0 0 1px rgba(167,139,250,0.4)"
                          : "none",
                        transition: "all 0.5s",
                      }}
                    >
                      <div
                        style={{
                          color: "rgba(167,139,250,0.8)",
                          marginBottom: "1.5rem",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          style={{
                            width: "2rem",
                            height: "2rem",
                          }}
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>

                      <p
                        style={{
                          color: "rgba(255,255,255,0.9)",
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
                            "1px solid rgba(255,255,255,0.1)",
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
                              color: "white",
                              fontWeight: 700,
                              fontSize: "1rem",
                            }}
                          >
                            {test.name[lang]}
                          </div>
                          <div
                            style={{
                              color: "#a78bfa",
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
                              <svg
                                key={j}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                style={{
                                  width: "1rem",
                                  height: "1rem",
                                  color: "#fbbf24",
                                }}
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                              </svg>
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
                    ? "linear-gradient(90deg, #7c3aed, #ec4899)"
                    : "rgba(255,255,255,0.2)",
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


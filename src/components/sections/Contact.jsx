import React, { useState } from "react";
import { AnimatedSection } from "../common/AnimatedSection";
import { SectionHeader } from "../common/SectionHeader";

export function Contact({ tr }) {
  const c = tr.contact;
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handle = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section
      id="contact"
      style={{ padding: "6rem 2rem", background: "rgba(139,92,246,0.03)" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionHeader title={c.title} subtitle={c.subtitle} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: "4rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          <AnimatedSection>
            <h3
              style={{
                color: "white",
                fontWeight: 800,
                fontSize: "1.3rem",
                marginBottom: "1rem",
              }}
            >
              {c.info}
            </h3>
            {[
              { icon: "📍", label: "Hanoi, Vietnam" },
              { icon: "📧", label: "dev@example.com" },
              { icon: "📱", label: "+84 901 234 567" },
              { icon: "🌐", label: "www.nguyendev.com" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1rem",
                  background: "rgba(255,255,255,0.03)",
                  border:
                    "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "12px",
                  marginBottom: "0.75rem",
                }}
              >
                <span style={{ fontSize: "1.3rem" }}>
                  {item.icon}
                </span>
                <span
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "0.9rem",
                  }}
                >
                  {item.label}
                </span>
              </div>
            ))}

            <p
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "0.85rem",
                marginTop: "1.5rem",
                marginBottom: "1rem",
              }}
            >
              {c.or}
            </p>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {[
                { n: "GitHub", i: "⟨/⟩" },
                { n: "LinkedIn", i: "in" },
                { n: "Twitter", i: "𝕏" },
                { n: "YouTube", i: "▶" },
              ].map((s) => (
                <a
                  key={s.n}
                  href="#"
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background:
                      "rgba(255,255,255,0.05)",
                    border:
                      "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    textDecoration: "none",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "rgba(167,139,250,0.15)";
                    e.currentTarget.style.borderColor =
                      "#a78bfa";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "rgba(255,255,255,0.05)";
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.1)";
                  }}
                >
                  {s.i}
                </a>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border:
                  "1px solid rgba(255,255,255,0.06)",
                borderRadius: "20px",
                padding: "2rem",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                  marginBottom: "1rem",
                }}
              >
                {[
                  { key: "name", label: c.name },
                  { key: "email", label: c.email },
                ].map((f) => (
                  <div key={f.key}>
                    <label
                      style={{
                        display: "block",
                        color: "rgba(255,255,255,0.6)",
                        fontSize: "0.8rem",
                        marginBottom: "0.4rem",
                        fontWeight: 600,
                      }}
                    >
                      {f.label}
                    </label>
                    <input
                      type={f.key === "email" ? "email" : "text"}
                      value={form[f.key]}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          [f.key]: e.target.value,
                        })
                      }
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        background:
                          "rgba(255,255,255,0.05)",
                        border:
                          "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "10px",
                        color: "white",
                        fontSize: "0.9rem",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                ))}
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label
                  style={{
                    display: "block",
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "0.8rem",
                    marginBottom: "0.4rem",
                    fontWeight: 600,
                  }}
                >
                  {c.subject}
                </label>
                <input
                  value={form.subject}
                  onChange={(e) =>
                    setForm({ ...form, subject: e.target.value })
                  }
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    background:
                      "rgba(255,255,255,0.05)",
                    border:
                      "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "10px",
                    color: "white",
                    fontSize: "0.9rem",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>
              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  style={{
                    display: "block",
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "0.8rem",
                    marginBottom: "0.4rem",
                    fontWeight: 600,
                  }}
                >
                  {c.message}
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  rows={5}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    background:
                      "rgba(255,255,255,0.05)",
                    border:
                      "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "10px",
                    color: "white",
                    fontSize: "0.9rem",
                    outline: "none",
                    resize: "vertical",
                    boxSizing: "border-box",
                  }}
                />
              </div>
              <button
                onClick={handle}
                style={{
                  width: "100%",
                  padding: "0.9rem",
                  borderRadius: "12px",
                  fontWeight: 800,
                  fontSize: "1rem",
                  background: sent
                    ? "linear-gradient(135deg, #10b981, #059669)"
                    : "linear-gradient(135deg, #7c3aed, #ec4899)",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  boxShadow:
                    "0 0 30px rgba(124,58,237,0.3)",
                }}
              >
                {sent ? "✓ Sent!" : `✉ ${c.send}`}
              </button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}


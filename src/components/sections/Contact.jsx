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
  Twitter,
  Youtube,
  Send,
  CheckCircle2,
} from "lucide-react";

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
      style={{ padding: "6rem 2rem", background: "var(--bg-tertiary)" }}
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
                color: "var(--text-primary)",
                fontWeight: 800,
                fontSize: "1.3rem",
                marginBottom: "1rem",
                fontFamily: "'Be Vietnam Pro', sans-serif"

              }}
            >
              {c.info}
            </h3>
            {[
              { icon: <MapPin size={20} />, label: "Hanoi, Vietnam" },
              { icon: <Mail size={20} />, label: "linhvodanh2004@gmail.com" },
              { icon: <Smartphone size={20} />, label: "+84 984 350 255" },
              { icon: <Globe size={20} />, label: "www.linhphung.io.vn" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1rem",
                  background: "var(--bg-secondary)",
                  border:
                    "1px solid var(--border-color)",
                  borderRadius: "12px",
                  marginBottom: "0.75rem",
                }}
              >
                <span style={{ fontSize: "1.3rem" }}>
                  {item.icon}
                </span>
                <span
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.9rem",
                  }}
                >
                  {item.label}
                </span>
              </div>
            ))}

            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.85rem",
                marginTop: "1.5rem",
                marginBottom: "1rem",
              }}
            >
              {c.or}
            </p>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {[
                { n: "GitHub", i: <Github size={18} /> },
                { n: "LinkedIn", i: <Linkedin size={18} /> },
                { n: "Twitter", i: <Twitter size={18} /> },
                { n: "YouTube", i: <Youtube size={18} /> },
              ].map((s) => (
                <a
                  key={s.n}
                  href="#"
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background:
                      "var(--bg-secondary)",
                    border:
                      "1px solid var(--border-color)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-primary)",
                    textDecoration: "none",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "var(--bg-primary)";
                    e.currentTarget.style.borderColor =
                      "var(--border-color-hover)";
                    e.currentTarget.style.color = "var(--accent-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "var(--bg-secondary)";
                    e.currentTarget.style.borderColor =
                      "var(--border-color)";
                    e.currentTarget.style.color = "var(--text-primary)";
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
                background: "var(--bg-secondary)",
                border:
                  "1px solid var(--border-color)",
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
                        color: "var(--text-secondary)",
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
                          "var(--bg-tertiary)",
                        border:
                          "1px solid var(--border-color)",
                        borderRadius: "10px",
                        color: "var(--text-primary)",
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
                    color: "var(--text-secondary)",
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
                      "var(--bg-tertiary)",
                    border:
                      "1px solid var(--border-color)",
                    borderRadius: "10px",
                    color: "var(--text-primary)",
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
                    color: "var(--text-secondary)",
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
                      "var(--bg-tertiary)",
                    border:
                      "1px solid var(--border-color)",
                    borderRadius: "10px",
                    color: "var(--text-primary)",
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
                    : "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  boxShadow:
                    "0 0 30px rgba(124,58,237,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  fontFamily: "'Be Vietnam Pro', sans-serif"

                }}
              >
                {sent ? <><CheckCircle2 size={18} /> Sent!</> : <><Send size={18} /> {c.send}</>}
              </button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}


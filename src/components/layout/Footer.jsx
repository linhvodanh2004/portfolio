import React from "react";
import { Copyright } from "lucide-react";

export function Footer({ tr }) {
  return (
    <footer
      style={{
        padding: "3rem 2rem",
        borderTop: "1px solid var(--border-color)",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 900,
          fontSize: "1.5rem",
          background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "1rem",
        }}
      >
        &lt;LinhPN /&gt;
      </div>
      <p
        style={{
          color: "var(--text-muted)",
          fontSize: "0.85rem",
          marginBottom: "0.5rem",
          fontWeight: "bolder"
        }}
      >
        {tr.footer.built}
      </p>
      <span
        style={{
          color: "var(--text-muted)",
          fontSize: "0.8rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          fontWeight: "bolder"
        }}
      >
        {/* use copy right icon instead of hard-corded inline icon */}
        <Copyright size={16} /> 2026 Linh Phung. {tr.footer.rights}.
      </span>
    </footer>
  );
}


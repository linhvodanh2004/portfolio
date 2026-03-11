import React from "react";

export function Footer({ tr }) {
  return (
    <footer
      style={{
        padding: "3rem 2rem",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 900,
          fontSize: "1.5rem",
          background: "linear-gradient(135deg, #a78bfa, #ec4899)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "1rem",
        }}
      >
        &lt;LinhPN /&gt;
      </div>
      <p
        style={{
          color: "rgba(255,255,255,0.4)",
          fontSize: "0.85rem",
          marginBottom: "0.5rem",
        }}
      >
        {tr.footer.built}
      </p>
      <p
        style={{
          color: "rgba(255,255,255,0.3)",
          fontSize: "0.8rem",
        }}
      >
        © 2024 Nguyen Dev. {tr.footer.rights}.
      </p>
    </footer>
  );
}


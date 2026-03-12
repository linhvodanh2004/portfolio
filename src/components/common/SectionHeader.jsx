import React from "react";

export function SectionHeader({ title, subtitle }) {
  return (
    <div className="text-center" style={{ marginBottom: "2rem" }}>
      <p
        className="text-sm font-bold tracking-widest uppercase"
        style={{ color: "var(--accent-primary)", marginBottom: "1rem" }}
      >
        {subtitle}
      </p>
      <h2
        className="text-4xl md:text-5xl font-black"
        style={{ 
          marginBottom: "1rem", 
          color: "var(--text-primary)",
          fontFamily: "'Be Vietnam Pro', sans-serif"
        }}
      >
        {title}
      </h2>
      <div className="flex items-center justify-center gap-2">
        <div className="h-px w-16" style={{ background: "linear-gradient(to right, transparent, var(--accent-primary))" }} />
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--accent-primary)" }} />
        <div className="h-px w-16" style={{ background: "linear-gradient(to left, transparent, var(--accent-primary))" }} />
      </div>
    </div>
  );
}


import React from "react";

export function SectionHeader({ title, subtitle }) {
  return (
    <div className="text-center" style={{ marginBottom: "2rem" }}>
      <p
        className="text-sm font-bold tracking-widest uppercase"
        style={{ color: "#a78bfa", marginBottom: "1rem" }}
      >
        {subtitle}
      </p>
      <h2
        className="text-4xl md:text-5xl font-black text-white"
        style={{ marginBottom: "1rem" }}
      >
        {title}
      </h2>
      <div className="flex items-center justify-center gap-2">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-violet-500" />
        <div className="w-2 h-2 rounded-full bg-violet-400" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-violet-500" />
      </div>
    </div>
  );
}


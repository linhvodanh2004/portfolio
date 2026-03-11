import React, { useState } from "react";
import { blogPosts } from "../../data/blogPosts";
import { AnimatedSection } from "../common/AnimatedSection";
import { SectionHeader } from "../common/SectionHeader";

export function Blog({ lang, tr }) {
  return (
    <section id="blog" style={{ padding: "6rem 2rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeader
          title={tr.blog.title}
          subtitle={tr.blog.subtitle}
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {blogPosts.map((post, i) => (
            <AnimatedSection key={post.title.en} delay={i * 0.1}>
              <BlogCard post={post} lang={lang} tr={tr} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogCard({ post, lang, tr }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: `1px solid ${
          hovered
            ? "rgba(167,139,250,0.3)"
            : "rgba(255,255,255,0.06)"
        }`,
        borderRadius: "20px",
        overflow: "hidden",
        transition: "all 0.3s",
        cursor: "pointer",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      <div style={{ aspectRatio: "16/9", overflow: "hidden" }}>
        <img
          src={post.image}
          alt={post.title[lang]}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s",
            transform: hovered ? "scale(1.05)" : "scale(1)",
          }}
        />
      </div>
      <div style={{ padding: "1.5rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "0.75rem",
          }}
        >
          <span
            style={{
              background: "rgba(167,139,250,0.1)",
              border:
                "1px solid rgba(167,139,250,0.2)",
              borderRadius: "6px",
              padding: "0.2rem 0.6rem",
              fontSize: "0.72rem",
              color: "#a78bfa",
              fontWeight: 700,
            }}
          >
            {post.cat}
          </span>
          <span
            style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: "0.78rem",
            }}
          >
            {post.date} · {post.readTime} {tr.blog.minRead}
          </span>
        </div>
        <h3
          style={{
            fontWeight: 800,
            color: "white",
            fontSize: "0.95rem",
            lineHeight: 1.5,
            marginBottom: "0.6rem",
          }}
        >
          {post.title[lang]}
        </h3>
        <p
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: "0.83rem",
            lineHeight: 1.6,
            marginBottom: "1rem",
          }}
        >
          {post.excerpt[lang]}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "0.35rem",
              flexWrap: "wrap",
            }}
          >
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                style={{
                  background: "rgba(124,58,237,0.1)",
                  borderRadius: "4px",
                  padding: "0.15rem 0.4rem",
                  fontSize: "0.7rem",
                  color: "#c4b5fd",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <span
            style={{
              color: "#a78bfa",
              fontSize: "0.83rem",
              fontWeight: 700,
            }}
          >
            {tr.blog.readMore} →
          </span>
        </div>
      </div>
    </div>
  );
}


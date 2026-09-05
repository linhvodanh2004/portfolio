import React, { useState } from "react";
import StackIcon from "tech-stack-icons";
import { projects as projectsData } from "../../data/projects";
import { AnimatedSection } from "../common/AnimatedSection";
import { SectionHeader } from "../common/SectionHeader";
import {
  Star,
  Users,
  ExternalLink,
  Code,
  ChevronDown,
  UserRound,
  Calendar,
  Maximize2,
} from "lucide-react";
import { ImageLightbox } from "../common/ImageLightbox";

// filters[0] là "Tất cả"/"All" -> không lọc; các mục sau khớp trực tiếp với `cats`.
const FILTER_KEYS = [null, "Backend", "Frontend", "Mobile"];

/** "Làm một mình" / "3 thành viên" / "Làm nhóm" khi chưa rõ số lượng. */
function teamLabel(teamSize, tr) {
  if (teamSize === 1) return tr.projects.solo;
  if (!teamSize) return tr.projects.team;
  return `${teamSize} ${tr.projects.members}`;
}

export function Projects({ lang, tr }) {
  const [filter, setFilter] = useState(0);
  const filters = tr.projects.filters;

  const activeKey = FILTER_KEYS[filter];
  const filtered = activeKey
    ? projectsData.filter((p) => p.cats.includes(activeKey))
    : projectsData;

  return (
    <section
      id="projects"
      style={{ padding: "6rem 2rem", background: "var(--bg-tertiary)" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeader
          title={tr.projects.title}
          subtitle={tr.projects.subtitle}
        />

        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "3rem",
          }}
        >
          {filters.map((f, i) => (
            <button
              key={f}
              onClick={() => setFilter(i)}
              style={{
                padding: "0.5rem 1.25rem",
                borderRadius: "20px",
                fontSize: "0.85rem",
                fontWeight: 600,
                border:
                  filter === i ? "none" : "1px solid var(--border-color)",
                background:
                  filter === i
                    ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
                    : "var(--bg-tertiary)",
                color: filter === i ? "#ffffff" : "var(--text-primary)",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {f}
            </button>
          ))}
        </div>

        <div
          className="projects-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
            gap: "1.5rem",
            alignItems: "start",
          }}
        >
          {filtered.map((proj, i) => (
            <AnimatedSection key={proj.id} delay={i * 0.1} variant="scale">
              <ProjectCard proj={proj} lang={lang} tr={tr} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Bìa dự án: ưu tiên ảnh chụp màn hình thật; dự án chưa có ảnh thì rơi về
 * bìa sinh từ code (gradient theo accent + monogram + icon stack chính).
 */
function ProjectCover({ proj, hovered, tr, onPreview }) {
  const iconNames = proj.stack
    .filter((s) => s.icon)
    .map((s) => s.icon)
    .filter((name, idx, arr) => arr.indexOf(name) === idx)
    .slice(0, 5);

  return (
    <div
      style={{
        position: "relative",
        aspectRatio: "16/9",
        overflow: "hidden",
        background: `linear-gradient(135deg, ${proj.accent[0]}, ${proj.accent[1]})`,
      }}
    >
      {proj.image ? (
        <img
          src={proj.image}
          alt={proj.title}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: proj.imageFit || "cover",
            // ảnh web crop từ đỉnh cho thấy header; ảnh dọc (contain) thì canh giữa
            objectPosition: proj.imageFit === "contain" ? "center" : "top center",
            transition: "transform 0.5s",
            transform: hovered ? "scale(1.04)" : "scale(1)",
          }}
        />
      ) : (
        <>
          {/* lớp hoạ tiết lưới cho bớt phẳng */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              opacity: 0.6,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 78% 22%, rgba(255,255,255,0.28), transparent 55%)",
            }}
          />

          <span
            style={{
              position: "absolute",
              left: "1.1rem",
              top: "50%",
              transform: "translateY(-50%)",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 900,
              fontSize: "3.4rem",
              lineHeight: 1,
              color: "rgba(255,255,255,0.9)",
              letterSpacing: "-0.04em",
              textShadow: "0 4px 24px rgba(0,0,0,0.25)",
            }}
          >
            {proj.monogram}
          </span>

          <div
            style={{
              position: "absolute",
              right: "1rem",
              bottom: "1rem",
              display: "flex",
              gap: "0.4rem",
              transition: "transform 0.4s",
              transform: hovered ? "translateY(-4px)" : "translateY(0)",
            }}
          >
            {iconNames.map((name) => (
              <span
                key={name}
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: "9px",
                  background: "rgba(255,255,255,0.92)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.18)",
                }}
              >
                <StackIcon name={name} style={{ width: 20, height: 20 }} />
              </span>
            ))}
          </div>
        </>
      )}

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(5,5,15,0.75) 0%, transparent 55%)",
          pointerEvents: "none",
        }}
      />

      {proj.image && (
        <button
          onClick={onPreview}
          aria-label={tr.projects.viewImage}
          title={tr.projects.viewImage}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            width: 34,
            height: 34,
            borderRadius: "9px",
            background: "rgba(5,5,15,0.5)",
            border: "1px solid rgba(255,255,255,0.25)",
            backdropFilter: "blur(10px)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "zoom-in",
            opacity: hovered ? 1 : 0.65,
            transition: "opacity 0.25s",
          }}
        >
          <Maximize2 size={15} />
        </button>
      )}

      <div
        style={{
          position: "absolute",
          top: "1rem",
          left: "1rem",
          display: "flex",
          gap: "0.5rem",
          flexWrap: "wrap",
        }}
      >
        {proj.cats.map((cat) => (
          <span
            key={cat}
            style={{
              background: "rgba(5,5,15,0.45)",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: "6px",
              padding: "0.2rem 0.6rem",
              fontSize: "0.72rem",
              color: "#ffffff",
              fontWeight: 600,
              backdropFilter: "blur(10px)",
            }}
          >
            {cat}
          </span>
        ))}
        {proj.featured && (
          <span
            style={{
              background: "rgba(251,191,36,0.22)",
              border: "1px solid rgba(251,191,36,0.45)",
              borderRadius: "6px",
              padding: "0.2rem 0.6rem",
              fontSize: "0.72rem",
              color: "#fde68a",
              fontWeight: 600,
              backdropFilter: "blur(10px)",
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
            }}
          >
            <Star size={12} fill="currentColor" /> Featured
          </span>
        )}
      </div>

      <div style={{ position: "absolute", bottom: "1rem", left: "1rem" }}>
        <span
          style={{
            color: "#a7f3d0",
            fontWeight: 700,
            fontSize: "0.8rem",
            display: "flex",
            alignItems: "center",
            gap: "0.3rem",
          }}
        >
          <Users size={14} /> {teamLabel(proj.teamSize, tr)}
        </span>
      </div>
    </div>
  );
}

function ProjectCard({ proj, lang, tr }) {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [previewing, setPreviewing] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--bg-secondary)",
        border: `1px solid ${
          hovered ? "var(--border-color-hover)" : "var(--border-color)"
        }`,
        borderRadius: "20px",
        overflow: "hidden",
        transition: "all 0.3s",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? "0 20px 60px rgba(124,58,237,0.15)" : "none",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ProjectCover
        proj={proj}
        hovered={hovered}
        tr={tr}
        onPreview={() => setPreviewing(true)}
      />
      <ImageLightbox
        isOpen={previewing}
        src={proj.image}
        alt={proj.title}
        onClose={() => setPreviewing(false)}
      />

      <div
        style={{
          padding: "1.25rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.85rem",
        }}
      >
        <div>
          <h3
            style={{
              fontWeight: 800,
              fontSize: "1.05rem",
              color: "var(--text-primary)",
              marginBottom: "0.5rem",
              lineHeight: 1.35,
            }}
          >
            {proj.title}
          </h3>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              fontSize: "0.75rem",
              color: "var(--text-secondary)",
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.3rem",
                background: "var(--bg-tertiary)",
                border: "1px solid var(--border-color)",
                borderRadius: "6px",
                padding: "0.2rem 0.55rem",
                fontWeight: 600,
              }}
            >
              <UserRound size={12} /> {proj.role[lang]}
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.3rem",
                background: "var(--bg-tertiary)",
                border: "1px solid var(--border-color)",
                borderRadius: "6px",
                padding: "0.2rem 0.55rem",
                fontWeight: 600,
              }}
            >
              <Calendar size={12} /> {proj.period}
            </span>
          </div>
        </div>

        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "0.85rem",
            lineHeight: 1.65,
          }}
        >
          {proj.desc[lang]}
        </p>

        <div
          style={{
            background: "var(--bg-tertiary)",
            border: "1px solid var(--border-color)",
            borderRadius: "10px",
            padding: "0.65rem 0.8rem",
          }}
        >
          <div
            style={{
              fontSize: "0.68rem",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: "var(--text-muted)",
              fontWeight: 700,
              marginBottom: "0.25rem",
            }}
          >
            {tr.projects.scopeLabel}
          </div>
          <div
            style={{
              fontSize: "0.82rem",
              color: "var(--text-primary)",
              fontWeight: 600,
              lineHeight: 1.5,
            }}
          >
            {proj.scope[lang]}
          </div>
        </div>

        <div>
          <button
            onClick={() => setExpanded((v) => !v)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              background: "transparent",
              border: "none",
              padding: 0,
              cursor: "pointer",
              color: "var(--accent-primary)",
              fontSize: "0.8rem",
              fontWeight: 700,
              fontFamily: "inherit",
            }}
            aria-expanded={expanded}
          >
            {expanded ? tr.projects.showLess : tr.projects.showMore}
            <ChevronDown
              size={15}
              style={{
                transition: "transform 0.25s",
                transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </button>

          {expanded && (
            <>
              <div
                style={{
                  fontSize: "0.68rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "var(--text-muted)",
                  fontWeight: 700,
                  margin: "0.85rem 0 0",
                }}
              >
                {tr.projects.highlightsLabel}
              </div>
              <ul
                style={{
                  listStyle: "none",
                  margin: "0.5rem 0 0",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
              >
                {proj.highlights.map((h, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: "flex",
                      gap: "0.55rem",
                      fontSize: "0.82rem",
                      lineHeight: 1.65,
                      color: "var(--text-secondary)",
                    }}
                  >
                    <span
                      style={{
                        flexShrink: 0,
                        marginTop: "0.5rem",
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background:
                          "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                      }}
                    />
                    <span>{h[lang]}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        <div>
          <div
            style={{
              fontSize: "0.68rem",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: "var(--text-muted)",
              fontWeight: 700,
              marginBottom: "0.5rem",
            }}
          >
            {tr.projects.stackLabel}
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.35rem",
            }}
          >
            {proj.stack.map((tech) => (
              <span
                key={tech.name}
                style={{
                  background: "var(--bg-tertiary)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "6px",
                  padding: "0.2rem 0.5rem",
                  fontSize: "0.72rem",
                  color: "var(--accent-primary)",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                }}
              >
                {tech.icon && (
                  <StackIcon
                    name={tech.icon}
                    style={{ width: 13, height: 13 }}
                  />
                )}
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
            marginTop: "auto",
          }}
        >
          {proj.links.map((link) => {
            const isDemo = link.kind === "demo";
            return (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={link.url}
                style={{
                  flex: "1 1 120px",
                  textAlign: "center",
                  padding: "0.55rem",
                  borderRadius: "10px",
                  background: isDemo
                    ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
                    : "var(--bg-secondary)",
                  border: isDemo ? "none" : "1px solid var(--border-color)",
                  color: isDemo ? "#ffffff" : "var(--text-primary)",
                  textDecoration: "none",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.35rem",
                }}
              >
                {isDemo ? <ExternalLink size={14} /> : <Code size={14} />}
                {link.label || tr.projects.demo}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import avatar from "../../assets/linhphung_avatar.png";
import chatGptLogo from "../../assets/ai-logo/chatgpt-seeklogo.png";
import claudeLogo from "../../assets/ai-logo/claude-seeklogo.png";
import geminiLogo from "../../assets/ai-logo/google-gemini-icon-seeklogo.png";
import grokLogo from "../../assets/ai-logo/grok-seeklogo.png";
import { useTypewriter } from "../../hooks/useTypewriter";
import { Github, Linkedin, Twitter, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Sparkles } from "@react-three/drei";

function Hero3DObject() {
  const meshRef1 = React.useRef();
  const meshRef2 = React.useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef1.current) {
      meshRef1.current.rotation.x = t * 0.2;
      meshRef1.current.rotation.y = t * 0.3;
    }
    if (meshRef2.current) {
      meshRef2.current.rotation.x = t * 0.15;
      meshRef2.current.rotation.y = t * 0.25;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <group position={[1.8, 1.5, 0]}>
        <mesh ref={meshRef1}>
          <icosahedronGeometry args={[0.6, 0]} />
          <meshPhysicalMaterial
            color="#a78bfa"
            emissive="#7c3aed"
            emissiveIntensity={0.2}
            wireframe={true}
            transparent={true}
            opacity={0.8}
          />
        </mesh>
      </group>
      <group position={[-1.8, -1.0, 0]}>
        <mesh ref={meshRef2}>
          <octahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial
            color="#ec4899"
            roughness={0.1}
            metalness={0.8}
            transparent={true}
            opacity={0.6}
          />
        </mesh>
      </group>
    </Float>
  );
}

export function Hero({ lang, tr }) {
  const typed = useTypewriter(tr.hero.titles, 80);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "100px 2rem 4rem",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "5%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
            filter: "blur(40px)",
            animation: "pulse 6s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            right: "10%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
            animation: "pulse 8s ease-in-out infinite 2s",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "800px",
            height: "800px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(139,92,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}
        className="hero-grid"
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(16,185,129,0.1)",
              border: "1px solid rgba(16,185,129,0.3)",
              borderRadius: "20px",
              padding: "0.4rem 1rem",
              marginBottom: "1.5rem",
              opacity: mounted ? 1 : 0,
              transform: mounted
                ? "translateY(0)"
                : "translateY(20px)",
              transition: "all 0.6s ease 0.1s",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#10b981",
                animation: "pulse 2s infinite",
              }}
            />
            <span
              style={{
                fontSize: "0.8rem",
                color: "#10b981",
                fontWeight: 600,
              }}
            >
              {tr.hero.available}
            </span>
          </div>

          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "1.2rem",
              marginBottom: "0.5rem",
              opacity: mounted ? 1 : 0,
              transition: "all 0.6s ease 0.2s",
              transform: mounted
                ? "translateY(0)"
                : "translateY(20px)",
            }}
          >
            {tr.hero.greeting}
          </p>

          <h1
            style={{
              fontFamily: "'Be Vietnam Pro', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 900,
              lineHeight: 1.2,
              marginBottom: "0.75rem",
              opacity: mounted ? 1 : 0,
              transition: "all 0.6s ease 0.3s",
              transform: mounted
                ? "translateY(0)"
                : "translateY(20px)",
              color: "var(--text-primary)",
            }}
          >
            {tr.hero.name}
          </h1>

          <div
            style={{
              height: "3rem",
              marginBottom: "1.5rem",
              opacity: mounted ? 1 : 0,
              transition: "all 0.6s ease 0.4s",
            }}
          >
            <span
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
                fontWeight: 700,
                background:
                  "linear-gradient(135deg, #a78bfa, #ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {typed}
              <span
                style={{
                  WebkitTextFillColor: "#a78bfa",
                  animation: "blink 1s infinite",
                }}
              >
                |
              </span>
            </span>
          </div>

          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "2rem",
              maxWidth: "480px",
              opacity: mounted ? 1 : 0,
              transition: "all 0.6s ease 0.5s",
              transform: mounted
                ? "translateY(0)"
                : "translateY(20px)",
            }}
          >
            {tr.hero.desc}
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              opacity: mounted ? 1 : 0,
              transition: "all 0.6s ease 0.6s",
              transform: mounted
                ? "translateY(0)"
                : "translateY(20px)",
            }}
          >
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                padding: "0.85rem 2rem",
                borderRadius: "12px",
                fontWeight: 700,
                fontSize: "0.95rem",
                background:
                  "linear-gradient(135deg, #7c3aed, #ec4899)",
                color: "white",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s",
                boxShadow: "0 0 30px rgba(124,58,237,0.4)",
              }}
              onMouseEnter={(e) =>
              (e.target.style.transform =
                "translateY(-2px)")
              }
              onMouseLeave={(e) =>
              (e.target.style.transform =
                "translateY(0)")
              }
            >
              {tr.hero.cta1} →
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                padding: "0.85rem 2rem",
                borderRadius: "12px",
                fontWeight: 700,
                fontSize: "0.95rem",
                background: "transparent",
                color: "var(--text-primary)",
                border:
                  "1px solid var(--border-color)",
                cursor: "pointer",
                transition: "all 0.3s",
                backdropFilter: "blur(10px)",
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = "var(--border-color-hover)";
                e.target.style.color = "var(--accent-primary)";
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor =
                  "var(--border-color)";
                e.target.style.color = "var(--text-primary)";
              }}
            >
              {tr.hero.cta2}
            </button>
          </div>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              marginTop: "2rem",
              opacity: mounted ? 1 : 0,
              transition: "all 0.6s ease 0.7s",
            }}
          >
            {[
              { Icon: Github, label: "GitHub", href: "#" },
              { Icon: Linkedin, label: "LinkedIn", href: "#" },
              { Icon: Twitter, label: "Twitter", href: "#" },
              { Icon: Youtube, label: "YouTube", href: "#" },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "var(--bg-tertiary)",
                  border:
                    "1px solid var(--border-color)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "var(--bg-secondary)";
                  e.currentTarget.style.borderColor =
                    "var(--border-color-hover)";
                  e.currentTarget.style.color = "var(--accent-primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "var(--bg-tertiary)";
                  e.currentTarget.style.borderColor =
                    "var(--border-color)";
                  e.currentTarget.style.color =
                    "var(--text-secondary)";
                }}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <motion.div
          style={{ display: "flex", justifyContent: "center" }}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={
            mounted
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 40, scale: 0.95 }
          }
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <motion.div
            style={{ position: "relative", width: "280px", height: "280px" }}
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: "-20px",
                borderRadius: "50%",
                border:
                  "1px dashed rgba(167,139,250,0.3)",
                animation: "spin 20s linear infinite",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: "-40px",
                borderRadius: "50%",
                border:
                  "1px dashed rgba(236,72,153,0.2)",
                animation:
                  "spin 30s linear infinite reverse",
              }}
            />
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "hidden",
                border: "3px solid rgba(167,139,250,0.4)",
                boxShadow: "0 0 60px rgba(124,58,237,0.3)",
                position: "relative",
                zIndex: 2,
              }}
            >
              <img
                src={avatar}
                alt="avatar"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.1), rgba(236,72,153,0.1))",
                }}
              />
            </div>
            <div
              style={{
                width: "200%",
                height: "200%",
                position: "absolute",
                top: "-50%",
                left: "-50%",
                zIndex: 10,
                pointerEvents: "none",
              }}
            >
              <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <Hero3DObject />
                <Sparkles
                  count={50}
                  scale={4}
                  size={2}
                  speed={0.4}
                  color="#fbbf24"
                />
                <Environment preset="city" />
              </Canvas>
            </div>
            <div
              style={{
                position: "absolute",
                top: "-10px",
                right: "-20px",
                background: "#ffffff",
                border:
                  "2px solid rgba(16,163,127,0.5)",
                borderRadius: "12px",
                padding: "0.5rem 0.75rem",
                backdropFilter: "blur(10px)",
                animation: "float 3s ease-in-out infinite",
                zIndex: 20,
              }}
            >
              <div
                style={{
                  color: "#10A37F",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                <img
                  src={chatGptLogo}
                  alt="ChatGPT"
                  style={{ width: "16px", height: "16px" }}
                />{" "}
                ChatGPT
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "10px",
                left: "-30px",
                background: "#ffffff",
                border:
                  "2px solid rgba(167,139,250,0.5)",
                borderRadius: "12px",
                padding: "0.5rem 0.75rem",
                backdropFilter: "blur(10px)",
                animation:
                  "float 3s ease-in-out infinite 1.5s",
                zIndex: 20,
              }}
            >
              <div
                style={{
                  color: "#000000",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                <img
                  src={geminiLogo}
                  alt="Gemini"
                  style={{ width: "16px", height: "16px" }}
                />{" "}
                Gemini
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                top: "40%",
                left: "-60px",
                background: "#ffffff",
                border:
                  "2px solid rgba(217,119,87,0.5)",
                borderRadius: "12px",
                padding: "0.5rem 0.75rem",
                backdropFilter: "blur(10px)",
                animation:
                  "float 3s ease-in-out infinite 0.8s",
                zIndex: 20,
              }}
            >
              <div
                style={{
                  color: "#D97757",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                <img
                  src={claudeLogo}
                  alt="Claude"
                  style={{ width: "16px", height: "16px" }}
                />{" "}
                Claude
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                top: "60%",
                right: "-60px",
                background: "#ffffff",
                border:
                  "2px solid rgba(239,68,68,0.5)",
                borderRadius: "12px",
                padding: "0.5rem 0.75rem",
                backdropFilter: "blur(10px)",
                animation:
                  "float 3s ease-in-out infinite 2s",
                zIndex: 20,
              }}
            >
              <div
                style={{
                  color: "#000000",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                <img
                  src={grokLogo}
                  alt="Grok"
                  style={{ width: "16px", height: "16px" }}
                />{" "}
                Grok
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          color: "var(--text-muted)",
          fontSize: "0.75rem",
        }}
      >
        <span>{tr.hero.scroll}</span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background:
              "linear-gradient(to bottom, var(--accent-primary), transparent)",
            animation: "pulse 2s infinite",
          }}
        />
      </div>
    </section>
  );
}


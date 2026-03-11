import React from "react";
import resumePdf from "../../assets/resume/resume.pdf";

export function PdfViewerModal({ isOpen, onClose, pdfUrl, title, tr }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        background: "rgba(0,0,0,0.8)",
        backdropFilter: "blur(5px)",
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1000px",
          height: "90vh",
          background: "#111",
          borderRadius: "16px",
          overflow: "hidden",
          border: "1px solid rgba(167,139,250,0.3)",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 25px 50px -12px rgba(124,58,237,0.5)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem 1.5rem",
            background: "rgba(255,255,255,0.05)",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <h3
            style={{
              margin: 0,
              color: "white",
              fontSize: "1.2rem",
              fontWeight: 700,
            }}
          >
            {title || tr.about.cvTitle}
          </h3>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <a
              href={pdfUrl || resumePdf}
              download="Document.pdf"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.5rem 1rem",
                background: "linear-gradient(135deg, #7c3aed, #ec4899)",
                color: "white",
                textDecoration: "none",
                borderRadius: "8px",
                fontWeight: 600,
                fontSize: "0.9rem",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              {tr.about.downloadPdf}
            </a>
            <button
              onClick={onClose}
              style={{
                background: "transparent",
                border: "none",
                color: "rgba(255,255,255,0.7)",
                fontSize: "1.8rem",
                cursor: "pointer",
                lineHeight: 1,
                padding: "0 0.5rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "white")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.7)")
              }
            >
              &times;
            </button>
          </div>
        </div>
        <div style={{ flex: 1, position: "relative", background: "white" }}>
          <iframe
            src={pdfUrl || resumePdf}
            style={{ width: "100%", height: "100%", border: "none" }}
            title="PDF Viewer"
          />
        </div>
      </div>
    </div>
  );
}


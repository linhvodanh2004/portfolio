import React from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { useModalOverlay } from "../../hooks/useModalOverlay";

/** Xem ảnh dự án ở kích thước đầy đủ. Đóng bằng Esc, click nền hoặc nút X. */
export function ImageLightbox({ isOpen, src, alt, onClose }) {
  useModalOverlay(isOpen, onClose);

  if (!isOpen) return null;

  // portal ra body: phải nằm ngoài #app-shell (đang bị inert) mới bấm được
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(5,5,15,0.92)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem 1.5rem",
        cursor: "zoom-out",
      }}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        style={{
          position: "absolute",
          top: "1.25rem",
          right: "1.25rem",
          width: "42px",
          height: "42px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.2)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <X size={20} />
      </button>

      <figure
        onClick={(e) => e.stopPropagation()}
        style={{
          margin: 0,
          maxWidth: "100%",
          maxHeight: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.9rem",
          cursor: "default",
        }}
      >
        <img
          src={src}
          alt={alt}
          style={{
            maxWidth: "100%",
            maxHeight: "80vh",
            objectFit: "contain",
            borderRadius: "14px",
            boxShadow: "0 24px 80px rgba(0,0,0,0.55)",
          }}
        />
        <figcaption
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: "0.85rem",
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          {alt}
        </figcaption>
      </figure>
    </div>,
    document.body
  );
}

import { useEffect, useRef } from "react";

/**
 * Dùng chung cho mọi modal có lớp phủ (lightbox ảnh, PDF viewer):
 *  - Esc để đóng
 *  - khoá cuộn nền, bù chiều rộng thanh cuộn để trang không giật ngang
 *  - đặt `inert` lên #app-shell => nền không thể click/tab/focus khi modal mở
 *
 * Modal PHẢI được portal ra ngoài #app-shell, nếu không chính nó cũng bị inert.
 * Đếm số modal đang mở để modal chồng nhau không mở khoá sớm.
 */
let openCount = 0;
let prevOverflow = "";
let prevPaddingRight = "";

function lock() {
  if (openCount === 0) {
    const gap = window.innerWidth - document.documentElement.clientWidth;
    prevOverflow = document.body.style.overflow;
    prevPaddingRight = document.body.style.paddingRight;
    document.body.style.overflow = "hidden";
    if (gap > 0) document.body.style.paddingRight = `${gap}px`;

    const shell = document.getElementById("app-shell");
    if (shell) {
      shell.inert = true;
      shell.setAttribute("aria-hidden", "true");
    }
  }
  openCount += 1;
}

function unlock() {
  openCount = Math.max(0, openCount - 1);
  if (openCount === 0) {
    document.body.style.overflow = prevOverflow;
    document.body.style.paddingRight = prevPaddingRight;

    const shell = document.getElementById("app-shell");
    if (shell) {
      shell.inert = false;
      shell.removeAttribute("aria-hidden");
    }
  }
}

export function useModalOverlay(isOpen, onClose) {
  // giữ onClose trong ref để effect chỉ phụ thuộc isOpen —
  // tránh khoá/mở khoá lặp lại khi cha truyền arrow function mới mỗi lần render
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e) => {
      if (e.key === "Escape") onCloseRef.current?.();
    };
    window.addEventListener("keydown", onKey);
    lock();

    return () => {
      window.removeEventListener("keydown", onKey);
      unlock();
    };
  }, [isOpen]);
}

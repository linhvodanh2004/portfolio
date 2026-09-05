import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const STORAGE_KEY = "portfolio-theme";

/**
 * Mặc định là dark. Lựa chọn đã lưu được đọc ngay khi khởi tạo state
 * (không qua useEffect) để trang không nháy sai theme một nhịp lúc load.
 */
function readInitialTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "dark" || saved === "light") return saved;
  } catch {
    // trình duyệt chặn localStorage (private mode) -> dùng mặc định
  }
  return "dark";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(readInitialTheme);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // không lưu được thì vẫn đổi theme cho phiên hiện tại
      }
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`theme-${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);

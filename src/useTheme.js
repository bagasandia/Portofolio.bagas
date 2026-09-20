import { useCallback, useState } from "react";

// Tema awal sudah ditentukan oleh script kecil di index.html,
// jadi di sini cukup membaca class yang sedang aktif.
export function useTheme() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  const toggle = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* penyimpanan tidak tersedia, abaikan */
    }
    setTheme(next);
  }, [theme]);

  return { theme, toggle };
}
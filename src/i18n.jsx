import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

// ─────────────────────────────────────────────────────────────
//  Teks antarmuka (label, tombol, judul bagian) dalam dua bahasa.
//  Konten portofolio (pengalaman, proyek, dll.) ada di data.js.
// ─────────────────────────────────────────────────────────────
const dictionary = {
  id: {
    title: "Bagas Andi Aprilianto · Telecommunications Engineer",
    skip: "Lompat ke konten",
    themeToLight: "Ganti ke mode terang",
    themeToDark: "Ganti ke mode gelap",
    langGroup: "Bahasa",
    langHint: "Geser atau ketuk untuk mengganti bahasa",
    downloadCv: "Unduh CV",
    sections: {
      experience: "Pengalaman",
      education: "Pendidikan",
      projects: "Proyek",
      certifications: "Sertifikasi",
      photos: "Foto",
      contact: "Kontak",
    },
    at: "di",
    status: { soon: "Segera hadir", live: "Sudah rilis" },
    projectOpen: (title) => `${title}, lihat detail proyek`,
    close: "Tutup",
    prevImage: "Gambar sebelumnya",
    nextImage: "Gambar berikutnya",
    viewImage: (n) => `Lihat gambar ${n}`,
    imageCount: (i, n) => `${i} dari ${n}`,
    role: "Peran",
    year: "Tahun",
    stack: "Teknologi",
    openProject: "Buka proyek",
    viewCertificate: "Lihat sertifikat",
    credentialId: "ID",
    photoHint: "Arahkan kursor ke tumpukan untuk melebarkannya.",
    contactBefore: "Punya proyek atau sekadar ingin menyapa? Kirim email ke ",
    contactAfter: ".",
    copyEmail: "Salin email",
    copied: "Email tersalin",
    footer: (year, name) => `© ${year} ${name}. Dibuat dengan React dan Tailwind CSS.`,
  },
  en: {
    title: "Bagas Andi Aprilianto · Telecommunications Engineer",
    skip: "Skip to content",
    themeToLight: "Switch to light mode",
    themeToDark: "Switch to dark mode",
    langGroup: "Language",
    langHint: "Swipe or tap to change language",
    downloadCv: "Download CV",
    sections: {
      experience: "Experience",
      education: "Education",
      projects: "Projects",
      certifications: "Certifications",
      photos: "Photos",
      contact: "Contact",
    },
    at: "at",
    status: { soon: "Coming soon", live: "Released" },
    projectOpen: (title) => `${title}, view project details`,
    close: "Close",
    prevImage: "Previous image",
    nextImage: "Next image",
    viewImage: (n) => `View image ${n}`,
    imageCount: (i, n) => `${i} of ${n}`,
    role: "Role",
    year: "Year",
    stack: "Tech",
    openProject: "Open project",
    viewCertificate: "View certificate",
    credentialId: "ID",
    photoHint: "Hover over the stack to spread it out.",
    contactBefore: "Have a project in mind or just want to say hi? Email me at ",
    contactAfter: ".",
    copyEmail: "Copy email",
    copied: "Email copied",
    footer: (year, name) => `© ${year} ${name}. Built with React and Tailwind CSS.`,
  },
};

export const LANGUAGES = ["id", "en"];

// Bahasa awal: pilihan tersimpan → bahasa browser → Inggris
function detectLanguage() {
  try {
    const saved = localStorage.getItem("lang");
    if (LANGUAGES.includes(saved)) return saved;
  } catch {
    /* penyimpanan tidak tersedia, abaikan */
  }
  const browser = (typeof navigator !== "undefined" && navigator.language) || "";
  return browser.toLowerCase().startsWith("id") ? "id" : "en";
}

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectLanguage);

  const setLang = useCallback((next) => {
    if (!LANGUAGES.includes(next)) return;
    setLangState(next);
    try {
      localStorage.setItem("lang", next);
    } catch {
      /* abaikan */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = dictionary[lang].title;
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      ui: dictionary[lang],
      // Ambil teks sesuai bahasa. Nilai bisa berupa string biasa
      // (sama di kedua bahasa) atau objek { id: "...", en: "..." }.
      t: (value) =>
        value && typeof value === "object" && !Array.isArray(value) ? value[lang] : value,
    }),
    [lang, setLang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang harus dipakai di dalam <LanguageProvider>");
  return ctx;
}
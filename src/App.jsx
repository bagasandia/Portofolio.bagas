import { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import Nav, { TABS } from "./components/Nav";
import Story from "./components/Story";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Footer, { Contact } from "./components/Footer";
import { useLang } from "./i18n";

// Ambil tab dari URL hash (mis. "#proyek" -> "projects").
// Kalau hash-nya tidak dikenal atau kosong, jatuh ke tab pertama.
function tabFromHash() {
  const hash = typeof window !== "undefined" ? window.location.hash.replace("#", "") : "";
  return TABS.includes(hash) ? hash : TABS[0];
}

export default function App() {
  const { ui } = useLang();
  const [activeTab, setActiveTab] = useState(tabFromHash);

  // Menu berubah kalau pengguna menekan tombol back/forward di browser.
  useEffect(() => {
    function handleHashChange() {
      setActiveTab(tabFromHash());
    }
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const changeTab = useCallback((tab) => {
    setActiveTab(tab);
    window.location.hash = tab;
    // Setiap pindah menu, halaman kembali ke atas.
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Tautan "lompat ke konten" tidak boleh memakai href="#main" karena
  // hash dipakai untuk menyimpan menu yang sedang aktif (mis. "#proyek").
  const skipToContent = useCallback((e) => {
    e.preventDefault();
    document.getElementById("main")?.focus();
  }, []);

  return (
    <div className="mx-auto max-w-[680px] px-6 pb-16 pt-8 sm:pt-12">
      <a
        href="#main"
        onClick={skipToContent}
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-lg focus:bg-chip focus:px-3 focus:py-2"
      >
        {ui.skip}
      </a>

      <Header />
      <Nav active={activeTab} onChange={changeTab} />

      <main id="main" tabIndex={-1}>
        {activeTab === "story" && <Story />}
        {activeTab === "projects" && <Projects />}
        {activeTab === "certifications" && <Certifications />}
        {activeTab === "contact" && <Contact />}
      </main>

      <Footer />
    </div>
  );
}

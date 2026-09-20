import Header from "./components/Header";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Footer, { Contact } from "./components/Footer";
import { useLang } from "./i18n";

export default function App() {
  const { ui } = useLang();

  return (
    <div className="mx-auto max-w-[680px] px-6 pb-16 pt-8 sm:pt-12">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-lg focus:bg-chip focus:px-3 focus:py-2"
      >
        {ui.skip}
      </a>

      <Header />

      <main id="main">
        <Intro />
        <Experience />
        <Education />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
import { profile } from "../data";
import { useTheme } from "../useTheme";
import { useLang } from "../i18n";
import LanguageSwitch from "./LanguageSwitch";

function SunIcon() {
  return (
    <svg viewBox="0 0 20 20" className="size-[18px]" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
      <circle cx="10" cy="10" r="3.6" />
      <path d="M10 2.5v1.6M10 15.9v1.6M2.5 10h1.6M15.9 10h1.6M4.7 4.7l1.1 1.1M14.2 14.2l1.1 1.1M15.3 4.7l-1.1 1.1M5.8 14.2l-1.1 1.1" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 20 20" className="size-[18px]" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16.5 11.6A6.6 6.6 0 0 1 8.4 3.5a6.6 6.6 0 1 0 8.1 8.1Z" />
    </svg>
  );
}

export default function Header() {
  const { theme, toggle } = useTheme();
  const { t, ui } = useLang();
  const isDark = theme === "dark";

  return (
    <header className="flex items-center justify-between">
      <a href="#" className="flex items-center gap-3">
        <img
          src={profile.avatar}
          alt=""
          width="36"
          height="36"
          className="size-9 rounded-full bg-chip"
        />
        <span className="leading-tight">
          <span className="block font-medium">{profile.name}</span>
          <span className="block text-[13px] text-mute">{t(profile.location)}</span>
        </span>
      </a>

      <div className="flex items-center gap-1.5">
        <LanguageSwitch />
        <button
          type="button"
          onClick={toggle}
          aria-label={isDark ? ui.themeToLight : ui.themeToDark}
          className="grid size-9 place-items-center rounded-full text-mute transition-colors hover:bg-chip hover:text-ink"
        >
          {isDark ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </header>
  );
}
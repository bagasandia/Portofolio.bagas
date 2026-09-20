import { useEffect, useState } from "react";
import { profile, socials } from "../data";
import { useLang } from "../i18n";
import Section from "./Section";

export function Contact() {
  const { ui } = useLang();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <Section id="kontak" title={ui.sections.contact}>
      <p className="max-w-[46ch] text-pretty">
        {ui.contactBefore}
        <a
          href={`mailto:${profile.email}`}
          className="font-medium underline decoration-line decoration-1 underline-offset-4 transition-colors hover:decoration-ink"
        >
          {profile.email}
        </a>
        {ui.contactAfter}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
        <button
          type="button"
          onClick={copyEmail}
          className="rounded-lg bg-chip px-3 py-1.5 font-medium transition-colors hover:bg-chip-hover"
        >
          <span aria-live="polite">{copied ? ui.copied : ui.copyEmail}</span>
        </button>

        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-mute">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-ink"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default function Footer() {
  const { ui } = useLang();

  return (
    <footer className="mt-20 border-t border-line pt-6 text-[13px] text-mute">
      {ui.footer(new Date().getFullYear(), profile.name)}
    </footer>
  );
}
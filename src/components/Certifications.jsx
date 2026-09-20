import { certifications } from "../data";
import { useLang } from "../i18n";
import Section from "./Section";

export default function Certifications() {
  const { t, ui } = useLang();

  return (
    <Section id="sertifikasi" title={ui.sections.certifications}>
      <ul>
        {certifications.map((c, i) => (
          <li
            key={i}
            className="grid grid-cols-[7.5rem_1fr] gap-x-4 border-t border-line py-4 sm:grid-cols-[8.5rem_1fr]"
          >
            <span className="text-mute tabular-nums">{t(c.date)}</span>

            <div>
              <p className="font-medium text-pretty">{t(c.title)}</p>

              <p className="mt-1 flex flex-wrap items-center gap-x-2 text-mute">
                <span className="inline-flex items-center gap-1.5">
                  <span
                    aria-hidden="true"
                    className="grid size-4 place-items-center rounded-[4px] text-[9px] font-semibold leading-none text-white"
                    style={{ backgroundColor: c.color }}
                  >
                    {c.initial}
                  </span>
                  {c.issuer}
                </span>
                {c.credentialId && (
                  <span className="text-[13px] tabular-nums">
                    {ui.credentialId} {c.credentialId}
                  </span>
                )}
              </p>

              {c.href && (
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block underline decoration-line decoration-1 underline-offset-4 transition-colors hover:decoration-ink"
                >
                  {ui.viewCertificate}
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
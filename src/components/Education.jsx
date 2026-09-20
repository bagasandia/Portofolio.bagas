import { education } from "../data";
import { useLang } from "../i18n";
import Section from "./Section";

export default function Education() {
  const { t, ui } = useLang();

  return (
    <Section id="pendidikan" title={ui.sections.education}>
      <ol>
        {education.map((item, i) => (
          <li
            key={`${item.school}-${i}`}
            className="grid grid-cols-[7.5rem_1fr] gap-x-4 border-t border-line py-4 sm:grid-cols-[8.5rem_1fr]"
          >
            <span className="text-mute tabular-nums">{t(item.period)}</span>
            <div>
              <p className="font-medium text-pretty">{t(item.degree)}</p>
              <p className="mt-0.5 text-mute">
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-line decoration-1 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
                  >
                    {item.school}
                  </a>
                ) : (
                  item.school
                )}
              </p>
              {item.note && <p className="mt-2 max-w-[52ch] text-mute text-pretty">{t(item.note)}</p>}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
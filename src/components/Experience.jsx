import { experience } from "../data";
import { useLang } from "../i18n";
import Section from "./Section";

export default function Experience() {
  const { t, ui } = useLang();

  return (
    <Section id="pengalaman" title={ui.sections.experience}>
      <ol>
        {experience.map((item, i) => (
          <li
            key={`${item.company}-${i}`}
            className="grid grid-cols-[7.5rem_1fr] gap-x-4 border-t border-line py-4 sm:grid-cols-[8.5rem_1fr]"
          >
            <span className="text-mute tabular-nums">{t(item.period)}</span>
            <div>
              <p className="font-medium">
                {t(item.role)}
                <span className="font-normal text-mute"> {ui.at} </span>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-line decoration-1 underline-offset-4 transition-colors hover:decoration-ink"
                  >
                    {item.company}
                  </a>
                ) : (
                  item.company
                )}
              </p>
              <p className="mt-1 max-w-[52ch] text-mute">{t(item.note)}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
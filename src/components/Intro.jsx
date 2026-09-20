import { intro, profile } from "../data";
import { useLang } from "../i18n";
import Chip from "./Chip";

function DownloadIcon() {
  return (
    <svg viewBox="0 0 20 20" className="size-[17px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 3.5v9M6.2 9.2 10 13l3.8-3.8M4 16.5h12" />
    </svg>
  );
}

// Tanda baca yang mengikuti chip (misalnya "," atau ".") ditempelkan ke chip
// supaya tidak turun sendirian ke baris berikutnya.
function renderSentence(sentence, muted) {
  const nodes = [];
  for (let j = 0; j < sentence.length; j++) {
    const part = sentence[j];

    if (part.chip) {
      const chip = (
        <Chip key={j} href={part.href} color={part.color} initial={part.initial} icon={part.icon}>
          {part.chip}
        </Chip>
      );
      const next = sentence[j + 1];
      const punct = next?.text?.match(/^[.,;:!?]+/)?.[0];

      if (punct) {
        nodes.push(
          <span key={j} className="whitespace-nowrap">
            {chip}
            <span className={muted ? "text-mute" : ""}>{punct}</span>
          </span>
        );
        // sisa teks setelah tanda baca tetap ditampilkan pada iterasi berikutnya
        sentence = [...sentence];
        sentence[j + 1] = { text: next.text.slice(punct.length) };
      } else {
        nodes.push(chip);
      }
    } else if (part.text) {
      nodes.push(
        <span key={j} className={muted ? "text-mute" : ""}>
          {part.text}
        </span>
      );
    }
  }
  return nodes;
}

export default function Intro() {
  const { lang, t, ui } = useLang();

  return (
    <section aria-label="Intro" className="mt-16 sm:mt-24">
      <div className="space-y-4 text-[21px] font-medium leading-[1.55] tracking-[-0.015em] text-pretty sm:text-[24px]">
        {intro[lang].map((sentence, i) => (
          <p key={i}>{renderSentence(sentence, i !== 0)}</p>
        ))}
      </div>

      {/* CV mengikuti bahasa yang sedang aktif */}
      <a
        href={t(profile.cv)}
        download
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink py-2 pl-3.5 pr-4 font-medium text-paper transition-opacity hover:opacity-85"
      >
        <DownloadIcon />
        {ui.downloadCv}
      </a>
    </section>
  );
}
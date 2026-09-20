import { useRef, useState } from "react";
import { useLang } from "../i18n";

const OPTIONS = [
  { code: "id", label: "ID", name: "Bahasa Indonesia" },
  { code: "en", label: "EN", name: "English" },
];

// Saklar bahasa: bisa diketuk, atau digeser (swipe) dengan jari/kursor.
// Saat digeser, penanda mengikuti jari dan menempel ke sisi terdekat saat dilepas.
export default function LanguageSwitch() {
  const { lang, setLang, ui } = useLang();
  const track = useRef(null);
  const drag = useRef(null);
  const skipClick = useRef(false);
  const [ratio, setRatio] = useState(null); // posisi penanda saat digeser: 0 (ID) sampai 1 (EN)

  const active = lang === "en" ? 1 : 0;
  const shown = ratio === null ? active : ratio > 0.5 ? 1 : 0;

  function onPointerDown(e) {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    const max = track.current.offsetWidth / 2;
    drag.current = { startX: e.clientX, base: active * max, max, moved: false, ratio: active };
  }

  function onPointerMove(e) {
    const d = drag.current;
    if (!d) return;
    const dx = e.clientX - d.startX;
    if (!d.moved) {
      if (Math.abs(dx) < 5) return; // masih dianggap ketukan biasa
      d.moved = true;
      e.currentTarget.setPointerCapture(e.pointerId);
    }
    d.ratio = Math.min(1, Math.max(0, (d.base + dx) / d.max));
    setRatio(d.ratio);
  }

  function onPointerUp() {
    const d = drag.current;
    drag.current = null;
    if (!d?.moved) return;

    // Cegah "klik" susulan setelah menggeser
    skipClick.current = true;
    setTimeout(() => (skipClick.current = false), 0);

    setLang(d.ratio > 0.5 ? "en" : "id");
    setRatio(null);
  }

  function onPointerCancel() {
    drag.current = null;
    setRatio(null);
  }

  return (
    <div
      role="group"
      aria-label={ui.langGroup}
      title={ui.langHint}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
      className="touch-pan-y select-none rounded-full bg-chip p-0.5"
    >
      <div ref={track} className="relative grid grid-cols-2">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-1/2 rounded-full bg-paper shadow-[0_1px_3px_rgb(0_0_0/0.14)] ring-1 ring-line transition-transform duration-300 ease-[cubic-bezier(0.2,0.9,0.25,1)]"
          style={{
            transform: `translateX(${(ratio ?? active) * 100}%)`,
            transition: ratio === null ? undefined : "none",
          }}
        />

        {OPTIONS.map((opt, i) => (
          <button
            key={opt.code}
            type="button"
            lang={opt.code}
            aria-label={opt.name}
            aria-pressed={lang === opt.code}
            onClick={() => {
              if (!skipClick.current) setLang(opt.code);
            }}
            className={`relative z-10 h-7 w-10 cursor-pointer rounded-full text-[13px] font-medium transition-colors ${
              shown === i ? "text-ink" : "text-mute hover:text-ink"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
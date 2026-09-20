import { useEffect, useRef, useState } from "react";
import { photos } from "../data";
import { useLang } from "../i18n";
import Section from "./Section";

// Sudut kemiringan tiap foto saat sudah "mengipas".
const ROTATIONS = [-9, -4, 2, 6, 11];

export default function PhotoStack() {
  const { t, ui } = useLang();
  const ref = useRef(null);
  const [fanned, setFanned] = useState(false);

  // Foto menumpuk dulu, lalu mengipas sekali saat bagian ini terlihat.
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setFanned(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFanned(true);
          io.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const mid = (photos.length - 1) / 2;

  return (
    <Section id="foto" title={ui.sections.photos}>
      <div
        ref={ref}
        className="relative h-60 [--spread:1] [--step:46px] sm:h-72 sm:[--step:58px] sm:hover:[--spread:1.35]"
      >
        {photos.map((photo, i) => {
          const offset = i - mid;
          return (
            <img
              key={photo.src}
              src={photo.src}
              alt={t(photo.alt)}
              loading="lazy"
              draggable="false"
              className="absolute left-1/2 top-1/2 -ml-[60px] -mt-[75px] aspect-[4/5] w-[120px] rounded-xl bg-chip object-cover shadow-[0_6px_20px_-6px_rgb(0_0_0/0.3)] ring-4 ring-paper transition-[translate,rotate] duration-[900ms] ease-[cubic-bezier(0.2,0.9,0.25,1)] sm:-ml-[80px] sm:-mt-[100px] sm:w-[160px]"
              style={{
                zIndex: 10 - Math.abs(Math.round(offset)),
                translate: fanned
                  ? `calc(${offset} * var(--step) * var(--spread)) 0`
                  : "0 0",
                rotate: fanned ? `${ROTATIONS[i % ROTATIONS.length]}deg` : "0deg",
                transitionDelay: fanned ? `${Math.abs(offset) * 70}ms` : "0ms",
              }}
            />
          );
        })}
      </div>
      <p className="mt-2 hidden text-[13px] text-mute sm:block">{ui.photoHint}</p>
    </Section>
  );
}
import { useEffect, useRef, useState } from "react";
import { useLang } from "../i18n";

function Icon({ d }) {
  return (
    <svg viewBox="0 0 20 20" className="size-[18px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

const ICON_CLOSE = "M5 5l10 10M15 5L5 15";
const ICON_PREV = "M12 4l-6 6 6 6";
const ICON_NEXT = "M8 4l6 6-6 6";

const roundBtn =
  "grid size-9 place-items-center rounded-full bg-paper/85 text-ink shadow-sm backdrop-blur transition-colors hover:bg-paper";

// Isi popup. Diberi key = slug proyek, jadi galeri selalu mulai dari gambar pertama.
function Content({ project, onClose }) {
  const { t, ui } = useLang();
  const [index, setIndex] = useState(0);
  const total = project.images.length;
  const current = project.images[index];

  const go = (step) => setIndex((i) => (i + step + total) % total);

  function onKeyDown(e) {
    if (total < 2) return;
    if (e.key === "ArrowLeft") go(-1);
    if (e.key === "ArrowRight") go(1);
  }

  return (
    <div onKeyDown={onKeyDown}>
      {/* Galeri */}
      <div className="relative aspect-[16/10] overflow-hidden bg-chip sm:aspect-[2/1]">
        <img
          key={current.src}
          src={current.src}
          alt={t(current.alt)}
          className="modal-image size-full object-cover"
        />

        <button
          type="button"
          onClick={onClose}
          aria-label={ui.close}
          className={`${roundBtn} absolute right-3 top-3`}
        >
          <Icon d={ICON_CLOSE} />
        </button>

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label={ui.prevImage}
              className={`${roundBtn} absolute left-3 top-1/2 -translate-y-1/2`}
            >
              <Icon d={ICON_PREV} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label={ui.nextImage}
              className={`${roundBtn} absolute right-3 top-1/2 -translate-y-1/2`}
            >
              <Icon d={ICON_NEXT} />
            </button>
            <p
              aria-live="polite"
              className="absolute bottom-3 right-3 rounded-full bg-paper/85 px-2.5 py-0.5 text-[13px] tabular-nums backdrop-blur"
            >
              {ui.imageCount(index + 1, total)}
            </p>
          </>
        )}
      </div>

      {total > 1 && (
        <ul className="flex gap-2 px-6 pt-4 sm:px-8">
          {project.images.map((img, i) => (
            <li key={img.src}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={ui.viewImage(i + 1)}
                aria-current={i === index}
                className={`block overflow-hidden rounded-lg ring-2 ring-offset-2 ring-offset-paper transition-[opacity,box-shadow] ${
                  i === index ? "ring-ink" : "opacity-60 ring-transparent hover:opacity-100"
                }`}
              >
                <img src={img.src} alt="" className="aspect-[16/10] w-16 object-cover sm:w-20" />
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Keterangan */}
      <div className="px-6 pb-8 pt-6 sm:px-8">
        <div className="flex items-baseline justify-between gap-4">
          <h2 id="modal-judul" className="text-2xl font-medium tracking-[-0.015em]">
            {project.title}
          </h2>
          <span className="inline-flex shrink-0 items-center gap-1.5 text-[13px] text-mute">
            {project.status === "live" && (
              <span aria-hidden="true" className="size-1.5 rounded-full bg-emerald-500" />
            )}
            {ui.status[project.status]}
          </span>
        </div>

        <div className="mt-4 max-w-[62ch] space-y-3 text-pretty">
          {t(project.details).map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <dl className="mt-6 grid grid-cols-[6rem_1fr] gap-x-4 gap-y-2 border-t border-line pt-5">
          <dt className="text-mute">{ui.role}</dt>
          <dd>{t(project.role)}</dd>

          <dt className="text-mute">{ui.year}</dt>
          <dd className="tabular-nums">{project.year}</dd>

          <dt className="text-mute">{ui.stack}</dt>
          <dd>
            <ul className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <li key={tech} className="rounded-md bg-chip px-2 py-0.5 text-[13px]">
                  {tech}
                </li>
              ))}
            </ul>
          </dd>
        </dl>

        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-block rounded-lg bg-ink px-4 py-2 font-medium text-paper transition-opacity hover:opacity-85"
          >
            {ui.openProject}
          </a>
        )}
      </div>
    </div>
  );
}

export default function ProjectModal({ project, onClose }) {
  const ref = useRef(null);

  // Buka/tutup <dialog> bawaan browser mengikuti state "project".
  // Dialog bawaan sudah menangani tombol Esc, fokus keyboard, dan
  // mengembalikan fokus ke tombol yang membukanya.
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    if (project) {
      if (!dialog.open) dialog.showModal();
      dialog.scrollTop = 0;
      document.documentElement.style.overflow = "hidden";
    } else if (dialog.open) {
      dialog.close();
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [project]);

  return (
    <dialog
      ref={ref}
      aria-labelledby="modal-judul"
      onClose={onClose}
      onClick={(e) => {
        // Klik di area gelap (backdrop) menutup popup
        if (e.target === e.currentTarget) onClose();
      }}
      className="modal m-auto max-h-[calc(100dvh-1.5rem)] w-[calc(100%-1.5rem)] max-w-[760px] overflow-y-auto overscroll-contain rounded-3xl border-0 bg-paper p-0 text-ink shadow-2xl backdrop:bg-black/50 backdrop:backdrop-blur-[3px] sm:max-h-[calc(100dvh-3rem)]"
    >
      {project && <Content key={project.slug} project={project} onClose={onClose} />}
    </dialog>
  );
}
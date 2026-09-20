import { useState } from "react";
import { projects } from "../data";
import { useLang } from "../i18n";
import Section from "./Section";
import ProjectModal from "./ProjectModal";

function Status({ label, live }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 text-[13px] text-mute">
      {live && <span aria-hidden="true" className="size-1.5 rounded-full bg-emerald-500" />}
      {label}
    </span>
  );
}

export default function Projects() {
  const { t, ui } = useLang();
  const [selected, setSelected] = useState(null);

  return (
    <Section id="proyek" title={ui.sections.projects}>
      <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2">
        {projects.map((p) => (
          <article key={p.slug} className="group relative">
            <div className="overflow-hidden rounded-2xl bg-chip ring-1 ring-inset ring-black/5 dark:ring-white/5">
              <img
                src={p.images[0].src}
                alt=""
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>

            <div className="mt-3 flex items-baseline justify-between gap-3">
              <h3 className="font-medium">
                {/* Tombol ini membentang menutupi seluruh kartu (after:inset-0) */}
                <button
                  type="button"
                  onClick={() => setSelected(p)}
                  aria-haspopup="dialog"
                  aria-label={ui.projectOpen(p.title)}
                  className="cursor-pointer text-left after:absolute after:inset-0 after:content-[''] group-hover:underline group-hover:decoration-line group-hover:underline-offset-4"
                >
                  {p.title}
                </button>
              </h3>
              <Status label={ui.status[p.status]} live={p.status === "live"} />
            </div>
            <p className="mt-1 text-mute text-pretty">{t(p.description)}</p>
          </article>
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}
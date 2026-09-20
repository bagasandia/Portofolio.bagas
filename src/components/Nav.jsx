import { useLang } from "../i18n";

// Daftar tab menu. Urutan di sini menentukan urutan tampilan tombolnya.
export const TABS = ["story", "projects", "certifications", "contact"];

export default function Nav({ active, onChange }) {
  const { ui } = useLang();

  return (
    <nav aria-label={ui.nav.story} className="mt-8 border-b border-line sm:mt-10">
      <ul className="-mb-px flex flex-wrap gap-x-1">
        {TABS.map((tab) => {
          const isActive = tab === active;
          return (
            <li key={tab}>
              <button
                type="button"
                onClick={() => onChange(tab)}
                aria-current={isActive ? "page" : undefined}
                className={[
                  "relative -mb-px inline-block rounded-t-lg px-3.5 py-2.5 font-medium transition-colors",
                  isActive
                    ? "text-ink"
                    : "text-mute hover:text-ink",
                ].join(" ")}
              >
                {ui.nav[tab]}
                <span
                  aria-hidden="true"
                  className={[
                    "absolute inset-x-3 -bottom-px h-[2px] rounded-full transition-colors",
                    isActive ? "bg-ink" : "bg-transparent",
                  ].join(" ")}
                />
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

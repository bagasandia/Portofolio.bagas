// Tautan kecil di dalam kalimat, dengan logo mungil di depannya.
function CameraIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-[11px]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 5.5A1.5 1.5 0 0 1 3.5 4h1.2l.8-1.2h5L11.3 4h1.2A1.5 1.5 0 0 1 14 5.5v6a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11.5v-6Z" />
      <circle cx="8" cy="8.5" r="2.1" />
    </svg>
  );
}

export default function Chip({ href, color, initial, icon, children }) {
  const external = href?.startsWith("http");

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="ml-0.5 inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg bg-chip py-px pl-1.5 pr-1.5 align-baseline font-medium text-ink transition-colors hover:bg-chip-hover"
    >
      <span
        aria-hidden="true"
        className="grid size-[18px] place-items-center rounded-[5px] text-[10px] font-semibold leading-none text-white"
        style={
          icon
            ? { backgroundColor: "var(--ink)", color: "var(--paper)" }
            : { backgroundColor: color }
        }
      >
        {icon === "camera" ? <CameraIcon /> : initial}
      </span>
      {children}
    </a>
  );
}
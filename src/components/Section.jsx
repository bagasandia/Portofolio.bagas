export default function Section({ id, title, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-judul`} className="mt-20 scroll-mt-10 sm:mt-28">
      <h2 id={`${id}-judul`} className="mb-6 font-medium text-mute">
        {title}
      </h2>
      {children}
    </section>
  );
}
import { Link } from "@tanstack/react-router";

export function PageHero({ eyebrow, title, crumb }: { eyebrow: string; title: string; crumb: string }) {
  return (
    <section className="bg-brand-deep text-brand-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] opacity-75">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-sm opacity-80">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <span className="px-2">/</span>
          <span>{crumb}</span>
        </p>
      </div>
    </section>
  );
}

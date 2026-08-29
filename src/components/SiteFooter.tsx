import { Link } from "@tanstack/react-router";
import { company, services } from "@/lib/company";

export function SiteFooter() {
  return (
    <footer className="bg-brand text-brand-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-3xl font-bold tracking-tight">{company.name}</p>
          <p className="mt-1 text-[10px] tracking-[0.35em] opacity-80">FACADE SYSTEMS</p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed opacity-85">
            Facade specialists delivering ACP cladding, structural glazing, aluminium doors and
            windows across Maharashtra.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest">Services</h3>
          <ul className="mt-5 space-y-2 text-sm opacity-85">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to="/services" hash={s.slug} className="hover:opacity-100">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest">Reach Us</h3>
          <ul className="mt-5 space-y-3 text-sm opacity-85">
            <li>
              <a href={company.mapsUrl} target="_blank" rel="noreferrer">
                {company.addressLines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </a>
            </li>
            <li>
              <a href={company.phoneHref}>{company.phone}</a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="break-all">
                {company.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest">Business Hours</h3>
          <ul className="mt-5 space-y-3 text-sm opacity-85">
            {company.hours.map((h) => (
              <li key={h.d}>
                <span className="block">{h.d}</span>
                <span className="block opacity-70">{h.t}</span>
              </li>
            ))}
          </ul>
          <Link
            to="/contact-us"
            className="mt-6 inline-flex bg-brand-deep px-6 py-3 text-xs font-semibold uppercase tracking-widest transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Request a Quote
          </Link>
        </div>
      </div>
      <div className="border-t border-brand-line px-6 py-5 text-center text-xs opacity-70">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  );
}

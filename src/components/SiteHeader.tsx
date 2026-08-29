import { Link } from "@tanstack/react-router";
import { Mail, MapPin, PhoneCall, Menu, X } from "lucide-react";
import { useState } from "react";
import { company } from "@/lib/company";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact-us", label: "Contact Us" },
];

function TopItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-brand-tint">
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </span>
      <span className="leading-tight">
        <span className="block text-xs opacity-75">{label}</span>
        <span className="block text-sm">{value}</span>
      </span>
    </div>
  );
  return (
    <div className="flex items-center border-l border-brand-line px-5 py-3">
      {href ? (
        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand text-brand-foreground">
      <div className="hidden items-stretch justify-between lg:flex">
        <Link to="/" className="flex items-center gap-3 px-6 py-3">
          <span className="flex h-11 w-11 items-center justify-center border border-brand-line text-lg font-bold">
            G
          </span>
          <span className="leading-none">
            <span className="block text-2xl font-bold tracking-tight">{company.name}</span>
            <span className="block text-[10px] tracking-[0.35em] opacity-80">FACADE SYSTEMS</span>
          </span>
        </Link>
        <div className="flex flex-1 justify-end">
          <TopItem icon={PhoneCall} label="Call Us" value={company.phone} href={company.phoneHref} />
          <TopItem icon={Mail} label="Email Us" value={company.email} href={`mailto:${company.email}`} />
          <TopItem icon={MapPin} label="Find Us" value={company.addressShort} href={company.mapsUrl} />
        </div>
      </div>

      <div className="flex items-stretch justify-between border-t border-brand-line">
        <span className="hidden items-center px-6 text-sm font-semibold tracking-[0.2em] lg:flex">
          {company.tagline}
        </span>
        <Link to="/" className="flex items-center gap-2 px-5 py-4 text-xl font-bold lg:hidden">
          {company.name}
        </Link>
        <nav className="hidden flex-1 items-center justify-center gap-8 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="text-sm font-medium uppercase tracking-wide opacity-90 transition-opacity hover:opacity-100 [&.active]:opacity-100 [&.active]:underline [&.active]:underline-offset-8"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact-us"
          className="hidden items-center bg-brand-deep px-10 text-sm font-semibold uppercase tracking-wide transition-colors hover:bg-accent hover:text-accent-foreground lg:flex"
        >
          Request a Quote
        </Link>
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="px-5 lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-brand-line lg:hidden">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="border-b border-brand-line px-6 py-3 text-sm uppercase tracking-wide"
            >
              {n.label}
            </Link>
          ))}
          <a href={company.phoneHref} className="bg-brand-deep px-6 py-4 text-sm font-semibold uppercase">
            Call {company.phone}
          </a>
        </nav>
      )}
    </header>
  );
}

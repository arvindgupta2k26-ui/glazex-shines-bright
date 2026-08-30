import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/company";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import cladding from "@/assets/svc-cladding.jpg";
import glazing from "@/assets/svc-glazing.jpg";
import doors from "@/assets/svc-doors.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Facade Services | ACP Cladding, Glazing & Aluminium — GLAZEX" },
      {
        name: "description",
        content:
          "ACP cladding, structural glazing and curtain walls, aluminium doors and windows, louvers, skylights, domes, canopies and glass railings from GLAZEX.",
      },
      { property: "og:title", content: "GLAZEX Facade Services" },
      {
        property: "og:description",
        content: "Six facade service lines covering the complete building envelope.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

const imgs = [cladding, glazing, doors, cladding, glazing, doors];

function Services() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <PageHero
        eyebrow="Our Services"
        title="Complete Building Envelope Solutions"
        crumb="Services"
      />

      <section className="mx-auto max-w-7xl space-y-16 px-6 py-20">
        {services.map((s, i) => (
          <Reveal
            as="article"
            key={s.slug}
            id={s.slug}
            className={`grid scroll-mt-40 items-center gap-10 lg:grid-cols-2 ${
              i % 2 ? "lg:[&>img]:order-2" : ""
            }`}
          >
            <img
              src={imgs[i]}
              alt={s.title}
              loading="lazy"
              width={900}
              height={600}
              className="h-72 w-full object-cover shadow-elegant"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                0{i + 1}
              </p>
              <h2 className="mt-3 text-2xl font-bold md:text-3xl">{s.title}</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{s.short}</p>
              <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
              <Link
                to="/contact-us"
                className="mt-6 inline-flex items-center gap-3 bg-gradient-brand px-7 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-brand-deep"
              >
                Enquire <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        ))}
      </section>

      <SiteFooter />
    </div>
  );
}

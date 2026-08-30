import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/lib/company";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import cladding from "@/assets/svc-cladding.jpg";
import glazing from "@/assets/svc-glazing.jpg";
import doors from "@/assets/svc-doors.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | Facade & Glazing Work by GLAZEX" },
      {
        name: "description",
        content:
          "Curtain walls, ACP cladding, skylights and railings delivered by GLAZEX across Kopargaon, Shirdi, Nashik, Pune and Ahmednagar.",
      },
      { property: "og:title", content: "GLAZEX Projects" },
      {
        property: "og:description",
        content: "A selection of facade projects delivered across Maharashtra.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projects,
});

const imgs = [glazing, cladding, doors, glazing, cladding, doors];

function Projects() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <PageHero eyebrow="Our Projects" title="Landmarks We Have Wrapped" crumb="Projects" />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 90} as="article" className="group card-lift bg-secondary">
              <div className="overflow-hidden">
                <img
                  src={imgs[i]}
                  alt={p.name}
                  loading="lazy"
                  width={900}
                  height={600}
                  className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  {p.place}
                </p>
                <h2 className="mt-3 text-lg font-bold">{p.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.scope}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 bg-gradient-brand px-8 py-12 text-brand-foreground shadow-elegant">
          <h2 className="text-2xl font-bold md:text-3xl">Have a project on the drawing board?</h2>
          <Link
            to="/contact-us"
            className="bg-gradient-gold animate-shine px-9 py-4 text-sm font-semibold uppercase tracking-wide text-accent-foreground"
          >
            Talk to Us
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

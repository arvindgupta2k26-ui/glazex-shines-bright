import { createFileRoute } from "@tanstack/react-router";
import { company, stats } from "@/lib/company";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import cladding from "@/assets/svc-cladding.jpg";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About GLAZEX | Facade Engineering & Installation Team" },
      {
        name: "description",
        content:
          "GLAZEX is a Kopargaon-based facade contractor delivering engineered ACP cladding, curtain walls and aluminium systems with in-house design and installation teams.",
      },
      { property: "og:title", content: "About GLAZEX" },
      {
        property: "og:description",
        content: "Facade engineering, fabrication and installation by the GLAZEX team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const values = [
  { t: "Engineering First", d: "Every system is checked for wind load, thermal movement and water-tightness before fabrication." },
  { t: "Certified Materials", d: "Fire-rated ACP, toughened and laminated glass and branded hardware from trusted mills." },
  { t: "Safe Sites", d: "Trained installation crews, height-work protocols and daily site supervision." },
  { t: "On-Time Handover", d: "Planned shop drawings and staged deliveries keep the envelope off your critical path." },
];

function About() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <PageHero eyebrow="About Us" title="Facade Specialists Who Build What They Draw" crumb="About Us" />

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2">
        <img
          src={cladding}
          alt="Aluminium composite panel facade"
          loading="lazy"
          width={900}
          height={600}
          className="h-full w-full object-cover shadow-elegant"
        />
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">{company.legal}</h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            {company.name} designs, fabricates and installs complete building envelopes. What began
            as an aluminium doors and windows workshop has grown into a full facade practice serving
            architects, developers and industrial clients across Maharashtra.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Our in-house team handles shop drawings, structural calculations, fabrication, glazing
            and installation — so responsibility for the envelope stays with one accountable partner
            from concept to handover.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-px bg-border">
            {stats.map((s) => (
              <div key={s.label} className="card-lift bg-background p-6">
                <p className="text-3xl font-bold text-primary">{s.value}</p>
                <p className="mt-2 text-sm font-semibold">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold md:text-4xl">How We Work</h2>
          <div className="mt-10 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 100} className="card-lift bg-background p-8">
                <h3 className="text-lg font-bold">{v.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

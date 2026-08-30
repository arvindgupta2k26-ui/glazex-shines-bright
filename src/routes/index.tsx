import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Users2 } from "lucide-react";
import heroImg from "@/assets/hero-facade.jpg";
import cladding from "@/assets/svc-cladding.jpg";
import glazing from "@/assets/svc-glazing.jpg";
import doors from "@/assets/svc-doors.jpg";
import { company, services, stats } from "@/lib/company";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GLAZEX | Facade, ACP Cladding & Structural Glazing, Kopargaon" },
      {
        name: "description",
        content:
          "GLAZEX designs and installs ACP cladding, structural glazing, aluminium doors and windows, louvers, skylights and glass railings across Maharashtra.",
      },
      { property: "og:title", content: "GLAZEX | Facade & Glazing Specialists" },
      {
        property: "og:description",
        content:
          "ACP cladding, curtain walls, aluminium doors and windows, skylights and railings — engineered and installed by GLAZEX.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const cardImgs = [cladding, glazing, doors];
const cards = services.slice(0, 3).map((s, i) => ({ img: cardImgs[i]!, s }));


function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="relative isolate">
        <img
          src={heroImg}
          alt="Glass curtain wall facade of a modern tower"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 text-brand-foreground md:py-40">
          <h1 className="reveal is-visible max-w-3xl text-4xl font-bold leading-[1.1] md:text-6xl">
            Building Better Facades for a Changing Skyline
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed opacity-90 md:text-lg">
            From aluminium windows to complete building envelopes, {company.name} delivers
            world-class ACP cladding, structural glazing and architectural solutions.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/services"
              className="inline-flex items-center gap-6 bg-brand px-8 py-4 text-sm font-semibold uppercase tracking-wide transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              View All Services <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-6 border border-brand-foreground/50 px-8 py-4 text-sm font-semibold uppercase tracking-wide transition-colors hover:bg-brand-foreground hover:text-brand"
            >
              Our Projects <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
              {company.legal}
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Our Commitment to Innovation & Excellence
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              The facade industry is evolving rapidly — from energy-efficient glazing systems to
              fire-safe cladding regulations and sustainable materials. At {company.name} we don't
              just adapt to change, we lead it. Across residential towers, commercial parks,
              healthcare institutions and industrial facilities, we turn architectural visions into
              tangible landmarks.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { icon: ShieldCheck, t: "Expertise-Driven Execution" },
                { icon: CheckCircle2, t: "Quality Over Speed" },
                { icon: Users2, t: "Collaborative Partnership" },
              ].map(({ icon: Icon, t }) => (
                <div key={t} className="flex items-center gap-4 border-l-2 border-primary bg-secondary px-5 py-4">
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="font-semibold">{t}</span>
                </div>
              ))}
            </div>
            <Link
              to="/about-us"
              className="mt-8 inline-flex items-center gap-4 bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-brand-deep"
            >
              More About Us <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <Reveal className="grid grid-cols-2 gap-px self-start bg-border shadow-elegant">
            {stats.map((s) => (
              <div key={s.label} className="card-lift bg-background p-8">
                <p className="text-4xl font-bold text-primary">{s.value}</p>
                <p className="mt-3 font-semibold">{s.label}</p>
                <p className="text-sm text-muted-foreground">{s.sub}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-gradient-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="reveal is-visible max-w-2xl text-3xl font-bold md:text-4xl">
            Comprehensive Facade & Architectural Solutions
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {cards.map(({ img, s }, i) => (
              <Reveal key={s.slug} delay={i * 120}>
              <article className="card-lift overflow-hidden bg-background">
                <img
                  src={img}
                  alt={s.title}
                  loading="lazy"
                  width={900}
                  height={600}
                  className="h-56 w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="p-7">
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                  <Link
                    to="/services"
                    hash={s.slug}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary"
                  >
                    Read more <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 grid gap-px bg-border md:grid-cols-3">
            {services.slice(3).map((s, i) => (
              <Reveal key={s.slug} delay={i * 100} className="card-lift bg-background p-7">
                <h3 className="text-base font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-brand text-brand-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-14">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Planning a facade project?</h2>
            <p className="mt-2 opacity-85">
              Talk to our team on {company.phone} or write to {company.email}.
            </p>
          </div>
          <Link
            to="/contact-us"
            className="bg-gradient-gold animate-shine px-9 py-4 text-sm font-semibold uppercase tracking-wide text-accent-foreground shadow-elegant"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

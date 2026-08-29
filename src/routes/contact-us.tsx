import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, PhoneCall } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { company, services } from "@/lib/company";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      { title: "Contact GLAZEX | Facade Enquiries, Kopargaon 423601" },
      {
        name: "description",
        content:
          "Contact GLAZEX for facade, ACP cladding and glazing enquiries. Call 9822342045, email cfaarvindgupta108@gmail.com or visit us in Kopargaon 423601.",
      },
      { property: "og:title", content: "Contact GLAZEX" },
      {
        property: "og:description",
        content: "Phone, email, address and enquiry form for GLAZEX facade systems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [accepted, setAccepted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (!accepted) {
      toast.error("Please accept the terms and conditions.");
      return;
    }
    const body = [
      `Name: ${f.get("name")}`,
      `Phone: ${f.get("phone")}`,
      `Email: ${f.get("email")}`,
      `Service: ${f.get("service")}`,
      "",
      String(f.get("message") ?? ""),
    ].join("\n");
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      `Facade enquiry from ${f.get("name")}`,
    )}&body=${encodeURIComponent(body)}`;
    toast.success("Opening your email app to send the enquiry.");
  }

  const field =
    "w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary";

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <PageHero
        eyebrow="Contact Us"
        title="We Are Always Ready To Help You And Answer Your Questions"
        crumb="Contact Us"
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-3">
          {[
            {
              icon: MapPin,
              title: "Address",
              lines: company.addressLines,
              href: company.mapsUrl,
            },
            {
              icon: PhoneCall,
              title: "Phone & Email",
              lines: [company.phone, company.email],
              href: company.phoneHref,
            },
            {
              icon: Clock,
              title: "Business Hours",
              lines: company.hours.map((h) => `${h.d}: ${h.t}`),
            },
          ].map(({ icon: Icon, title, lines, href }) => (
            <div key={title} className="border-t-2 border-primary bg-secondary p-8">
              <Icon className="h-6 w-6 text-primary" />
              <h2 className="mt-4 text-sm font-bold uppercase tracking-widest">{title}</h2>
              <div className="mt-3 space-y-1 text-sm text-muted-foreground">
                {lines.map((l) => (
                  <p key={l} className="break-words">
                    {href ? (
                      <a href={href} target="_blank" rel="noreferrer" className="hover:text-primary">
                        {l}
                      </a>
                    ) : (
                      l
                    )}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Let's Talk About Your Facade Project</h2>
            <p className="mt-4 text-muted-foreground">
              Send us a message to have all your questions answered about our services.
            </p>
            <form onSubmit={onSubmit} className="mt-8 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input name="name" required placeholder="Your name" className={field} />
                <input name="phone" required placeholder="Phone number" className={field} />
              </div>
              <input name="email" type="email" required placeholder="Email address" className={field} />
              <select name="service" required defaultValue="" className={field}>
                <option value="" disabled>
                  Select your facade service need
                </option>
                {services.map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Complete Facade Consultation">Complete Facade Consultation</option>
              </select>
              <textarea name="message" rows={5} placeholder="Tell us about your project" className={field} />
              <label className="flex items-center gap-3 text-sm text-muted-foreground">
                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  className="h-4 w-4 accent-[oklch(0.35_0.075_160)]"
                />
                Accept terms and conditions
              </label>
              <button
                type="submit"
                className="bg-primary px-9 py-4 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-brand-deep"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="flex flex-col">
            <a
              href={company.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground"
            >
              <MapPin className="h-4 w-4" /> Open in Maps
            </a>
            <iframe
              title="GLAZEX location map"
              className="mt-4 h-[420px] w-full border border-border lg:flex-1"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Shingi%20Shinde%20Nagar%2C%20Saicity%2C%20Kopargaon%20423601&output=embed"
            />
            <a
              href={`mailto:${company.email}`}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              <Mail className="h-4 w-4" /> {company.email}
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

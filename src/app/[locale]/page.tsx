import type { ContactSectionProps } from "@/components";
import {
  AboutSection,
  AnimatedSection,
  ContactSection,
  EstimateSection,
  FAQSection,
  Footer,
  Header,
  HeroSection,
  MobileContactBar,
  ProcessSection,
  ProjectsSection,
  ServicesSection,
} from "@/components";
import { getTranslations } from "next-intl/server";

const LINKEDIN_URL = "https://www.linkedin.com/in/patryk-niedbalski/";

const TECHNOLOGIES = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "NestJS",
  "Express",
  "PostgreSQL",
  "MySQL",
  "Docker",
  "GCP",
  "Git",
];

export default async function Home() {
  const t = await getTranslations();

  const projectsData = {
    heading: t("projects.heading"),
    headingAccent: t("projects.headingAccent"),
    description: t("projects.description"),
    visitSiteLabel: t("projects.visitSite"),
    projects: [
      {
        id: "parkiza",
        name: t("projects.items.parkiza.name"),
        kind: t("projects.items.parkiza.kind"),
        summary: t("projects.items.parkiza.summary"),
        role: t("projects.items.parkiza.role"),
        tags: ["Node.js", "NestJS", "React", "MySQL", "TypeScript"],
        previewImage: "/parkiza.webp",
        links: [
          { href: "https://www.parkiza.com/pl", label: t("projects.links.website") },
          { href: "https://apps.apple.com/pl/app/parkiza/id1628817206?l=pl", label: t("projects.links.appStore") },
          { href: "https://play.google.com/store/apps/details?id=io.signalos.parking&hl=pl", label: t("projects.links.googlePlay") },
        ],
        media: [
          { type: "image" as const, src: "/parkiza.webp" },
          { type: "video" as const, src: "/parkiza.mp4", poster: "/parkiza-poster.webp" },
          { type: "image" as const, src: "/parkiza2.webp" },
        ],
      },
      {
        id: "signalos",
        name: t("projects.items.signalos.name"),
        kind: t("projects.items.signalos.kind"),
        summary: t("projects.items.signalos.summary"),
        role: t("projects.items.signalos.role"),
        tags: ["Next.js", "React", "Node.js", "TypeScript", "Enterprise"],
        previewImage: "/signalos.webp",
        links: [
          { href: "https://www.signalos.io/", label: t("projects.links.website") },
        ],
      },
      {
        id: "skinscartel",
        name: t("projects.items.skinscartel.name"),
        kind: t("projects.items.skinscartel.kind"),
        summary: t("projects.items.skinscartel.summary"),
        role: t("projects.items.skinscartel.role"),
        tags: ["Next.js", "React", "TypeScript", "E-commerce", "Node.js"],
        previewImage: "/skinscartel.webp",
        links: [
          { href: "https://skinscartel.com/", label: t("projects.links.website") },
        ],
        media: [
          { type: "image" as const, src: "/skinscartel.webp" },
          { type: "image" as const, src: "/skinscartel2.webp" },
          { type: "image" as const, src: "/skinscartel3.webp" },
          { type: "image" as const, src: "/skinscartel4.webp" },
        ],
      },
      {
        id: "areoactive",
        name: t("projects.items.areoactive.name"),
        kind: t("projects.items.areoactive.kind"),
        summary: t("projects.items.areoactive.summary"),
        role: t("projects.items.areoactive.role"),
        tags: ["Next.js", "React", "Responsive Design"],
        previewImage: "/areoactive-1.webp",
        links: [
          { href: "https://www.areoactive.com/", label: t("projects.links.website") },
        ],
        media: [
          { type: "image" as const, src: "/areoactive-1.webp" },
          { type: "image" as const, src: "/areoactive2.webp" },
          { type: "image" as const, src: "/areoactive3.webp" },
        ],
      },
    ],
  };

  const aboutData = {
    heading: t("about.heading"),
    name: t("about.name"),
    role: t("about.role"),
    bio: [
      t("about.bio.paragraph1"),
      t("about.bio.paragraph2"),
      t("about.bio.paragraph3"),
    ],
    availability: t("about.bio.availability"),
    roles: ["Full-Stack Developer", "Tech Lead", "Project Leader", "Backend Developer"],
    technologies: TECHNOLOGIES,
    primaryCTA: { label: t("about.cta"), href: "#contact" },
    secondaryCTA: { label: t("about.linkedinCTA"), href: LINKEDIN_URL },
  };

  const faqData = {
    heading: t("faq.heading"),
    subheading: t("faq.description"),
    allowMultiple: true,
    items: [
      { id: "services", question: t("faq.items.services.question"), answer: t("faq.items.services.answer") },
      { id: "pricing", question: t("faq.items.pricing.question"), answer: t("faq.items.pricing.answer") },
      { id: "timeline", question: t("faq.items.timeline.question"), answer: t("faq.items.timeline.answer") },
      { id: "collaboration", question: t("faq.items.collaboration.question"), answer: t("faq.items.collaboration.answer") },
      { id: "hiring", question: t("faq.items.hiring.question"), answer: t("faq.items.hiring.answer") },
      { id: "get-started", question: t("faq.items.start.question"), answer: t("faq.items.start.answer") },
    ],
  };

  const contactData: ContactSectionProps = {
    heading: t("contact.heading"),
    subheading: t("contact.description"),
    infoItems: [
      { label: t("contact.info.email"), value: "patrykitpapi@gmail.com", href: "mailto:patrykitpapi@gmail.com" },
      { label: t("contact.info.phone"), value: "+48 507 486 286", href: "tel:+48507486286" },
      { label: t("contact.info.linkedin"), value: "linkedin.com/in/patryk-niedbalski", href: LINKEDIN_URL },
    ],
    fields: [
      { id: "fullName", label: t("contact.form.name"), placeholder: t("contact.form.namePlaceholder"), required: true },
      { id: "email", label: t("contact.form.email"), placeholder: t("contact.form.emailPlaceholder"), required: true },
      { id: "phone", label: t("contact.form.phone"), placeholder: t("contact.form.phonePlaceholder") },
      { id: "subject", label: t("contact.form.subject"), placeholder: t("contact.form.subjectPlaceholder") },
      { id: "message", label: t("contact.form.message"), placeholder: t("contact.form.messagePlaceholder"), multiline: true, rows: 5, required: true },
    ],
    submitLabel: t("contact.form.submit"),
    formAction: "/api/contact",
    formMethod: "POST" as const,
  };

  const footerData = {
    name: "Patryk Niedbalski",
    socialLinks: [
      { id: "github", label: "GitHub", href: "https://github.com/NiedbalskiPatryk" },
      { id: "linkedin", label: "LinkedIn", href: LINKEDIN_URL },
    ],
    contactHeading: t("footer.contactHeading"),
    navHeading: t("footer.navHeading"),
    navItems: [
      { id: "services", label: t("nav.services"), href: "#services" },
      { id: "projects", label: t("nav.projects"), href: "#projects" },
      { id: "process", label: t("nav.process"), href: "#process" },
      { id: "pricing", label: t("nav.pricing"), href: "#pricing" },
      { id: "about", label: t("nav.about"), href: "#about" },
      { id: "faqs", label: t("nav.faq"), href: "#faqs" },
    ],
    contactItems: [
      { id: "email", label: t("contact.info.email"), value: "patrykitpapi@gmail.com", href: "mailto:patrykitpapi@gmail.com" },
      { id: "phone", label: t("contact.info.phone"), value: "+48 507 486 286", href: "tel:+48507486286" },
      { id: "address", label: t("contact.info.address"), value: t("contact.info.addressValue") },
    ],
    copyright: `© 2026 Patryk Niedbalski. ${t("footer.copyright")}`,
  };

  return (
    <>
      <Header />
      <main>
        <HeroSection />

        <AnimatedSection direction="up">
          <ServicesSection />
        </AnimatedSection>

        <AnimatedSection direction="up">
          <ProjectsSection {...projectsData} />
        </AnimatedSection>

        <AnimatedSection direction="up">
          <ProcessSection />
        </AnimatedSection>

        <AnimatedSection direction="up">
          <EstimateSection />
        </AnimatedSection>

        <AnimatedSection direction="up">
          <AboutSection {...aboutData} />
        </AnimatedSection>

        <AnimatedSection direction="up">
          <FAQSection {...faqData} />
        </AnimatedSection>

        <AnimatedSection direction="up">
          <ContactSection {...contactData} />
        </AnimatedSection>
      </main>

      <Footer {...footerData} taxId="1132813373" />
      <MobileContactBar />
    </>
  );
}

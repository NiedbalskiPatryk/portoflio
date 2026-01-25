import type { ContactSectionProps } from "@/components";
import {
  AboutSection,
  AnimatedSection,
  ColorWash,
  ContactSection,
  FAQSection,
  Footer,
  HeroSection,
  PortfolioLayout,
  ProjectsSection,
  ScrollProgressBar,
  ServicesSection,
} from "@/components";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import FlashOnOutlinedIcon from "@mui/icons-material/FlashOnOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import { getLocale, getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations();
  const locale = await getLocale();

  const heroData = {
    location: t("hero.location"),
    name: t("hero.greeting"),
    role: t("hero.role"),
    description: t("hero.description"),
    techLabel: t("hero.techLabel"),
    primaryCTA: {
      label: t("hero.primaryCTA"),
      href: "#about",
      color: "light" as const,
    },
    secondaryCTA: {
      label: t("showRoom.navButton"),
      href: `/${locale}/showroom`,
    },
    technologies: [
      "JavaScript",
      "React",
      "Node",
      "Express",
      "Next.js",
      "TypeScript",
      "NestJS",
      "MySQL",
      "Git",
      "PostgreSQL",
      "Docker",
      "GCP",
    ],
    snippets: {
      leftTop: t.raw("hero.snippets.leftTop"),
      leftMid: t.raw("hero.snippets.leftMid"),
      rightTop: t.raw("hero.snippets.rightTop"),
      rightMid: t.raw("hero.snippets.rightMid"),
    },
  };

  const servicesData = {
    heading: t("services.heading"),
    description: t("services.description"),
    services: [
      {
        icon: <ComputerOutlinedIcon />,
        title: t("services.items.frontend.title"),
        description: t("services.items.frontend.description"),
      },
      {
        icon: <StorageOutlinedIcon />,
        title: t("services.items.backend.title"),
        description: t("services.items.backend.description"),
      },
      {
        icon: <BrushOutlinedIcon />,
        title: t("services.items.automation.title"),
        description: t("services.items.automation.description"),
      },
      {
        icon: <FlashOnOutlinedIcon />,
        title: t("services.items.performance.title"),
        description: t("services.items.performance.description"),
      },
    ],
  };

  const projectsData = {
    heading: t("projects.heading"),
    description: t("projects.description"),
    projects: [
      {
        id: "parkiza",
        name: t("projects.items.parkiza.name"),
        summary: t("projects.items.parkiza.summary"),
        tags: ["Node.js", "NestJS", "React", "MySQL", "TypeScript"],
        previewImage: "/parkiza.png",
      },
      {
        id: "signalos",
        name: t("projects.items.signalos.name"),
        summary: t("projects.items.signalos.summary"),
        tags: ["Next.js", "React", "Node.js", "TypeScript", "Enterprise"],
        previewImage: "/signalos.png",
      },
      {
        id: "areoactive",
        name: t("projects.items.areoactive.name"),
        summary: t("projects.items.areoactive.summary"),
        tags: ["Next.js", "React", "Responsive Design"],
        previewImage: "/areoactive.png",
      },
    ],
  };

  const aboutData = {
    heading: t("about.heading"),
    profileImage: {
      src: "/foto.jpeg",
      alt: t("about.profileImageAlt"),
    },
    name: t("about.name"),
    role: t("about.role"),
    bio: [
      t("about.bio.paragraph1"),
      t("about.bio.paragraph2"),
      t("about.bio.paragraph3"),
    ],
    primaryCTA: {
      label: t("about.primaryCTA"),
      href: "/PatrykNiedbalskiCV.pdf",
    },
    secondaryCTA: {
      label: t("about.secondaryCTA"),
      href: "#contact",
    },
  };

  const faqData = {
    heading: t("faq.heading"),
    subheading: t("faq.description"),
    allowMultiple: true,
    items: [
      {
        id: "services",
        question: t("faq.items.services.question"),
        answer: t("faq.items.services.answer"),
      },
      {
        id: "teams",
        question: t("faq.items.teams.question"),
        answer: t("faq.items.teams.answer"),
      },
      {
        id: "timeline",
        question: t("faq.items.timeline.question"),
        answer: t("faq.items.timeline.answer"),
      },
      {
        id: "collaboration",
        question: t("faq.items.collaboration.question"),
        answer: t("faq.items.collaboration.answer"),
      },
      {
        id: "get-started",
        question: t("faq.items.start.question"),
        answer: t("faq.items.start.answer"),
      },
    ],
  };

  const contactData: ContactSectionProps = {
    heading: t("contact.heading"),
    subheading: t("contact.description"),
    infoItems: [
      { label: t("contact.info.email"), value: "patrykitpapi@gmail.com" },
      { label: t("contact.info.phone"), value: "+48 507 486 286" },
      {
        label: t("contact.info.address"),
        value: t("contact.info.addressValue"),
      },
    ],
    fields: [
      {
        id: "fullName",
        label: t("contact.form.name"),
        placeholder: t("contact.form.namePlaceholder"),
      },
      {
        id: "email",
        label: t("contact.form.email"),
        placeholder: t("contact.form.emailPlaceholder"),
      },
      {
        id: "phone",
        label: t("contact.form.phone"),
        placeholder: t("contact.form.phonePlaceholder"),
      },
      {
        id: "subject",
        label: t("contact.form.subject"),
        placeholder: t("contact.form.subjectPlaceholder"),
      },
      {
        id: "message",
        label: t("contact.form.message"),
        placeholder: t("contact.form.messagePlaceholder"),
        multiline: true,
        rows: 5,
      },
    ],
    submitLabel: t("contact.form.submit"),
    formAction: "https://formspree.io/f/xbddgboz",
    formMethod: "POST" as const,
  };

  const footerData = {
    name: "Patryk Niedbalski",
    socialLinks: [
      {
        id: "github",
        label: "GitHub",
        href: "https://github.com/NiedbalskiPatryk",
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/patryk-niedbalski/",
      },
    ],
    contactHeading: t("footer.contactHeading"),
    navHeading: t("footer.navHeading"),
    navItems: [
      { id: "home", label: t("nav.home"), href: "#home" },
      { id: "services", label: t("nav.services"), href: "#services" },
      { id: "projects", label: t("nav.projects"), href: "#projects" },
      { id: "about", label: t("nav.about"), href: "#about" },
      { id: "faqs", label: t("nav.faq"), href: "#faqs" },
    ],
    contactItems: [
      {
        id: "email",
        label: t("contact.info.email"),
        value: "patrykitpapi@gmail.com",
        href: "mailto:patrykitpapi@gmail.com",
      },
      {
        id: "phone",
        label: t("contact.info.phone"),
        value: "+48 507 486 286",
        href: "tel:+48507486286",
      },
      {
        id: "address",
        label: t("contact.info.address"),
        value: t("contact.info.addressValue"),
      },
    ],
    copyright: `© 2026 Patryk Niedbalski. ${t("footer.copyright")}`,
  };

  return (
    <>
      <PortfolioLayout>
        <ColorWash>
            <HeroSection {...heroData} />

            <AnimatedSection direction="up" delay={0}>
              <AboutSection {...aboutData} />
            </AnimatedSection>

            <AnimatedSection direction="up" delay={100}>
              <ServicesSection {...servicesData} />
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0}>
              <ProjectsSection {...projectsData} />
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0}>
              <FAQSection {...faqData} />
            </AnimatedSection>

            <AnimatedSection direction="up" delay={100}>
              <ContactSection {...contactData} />
            </AnimatedSection>
        </ColorWash>
      </PortfolioLayout>

      <Footer {...footerData} />
      <ScrollProgressBar />
    </>
  );
}

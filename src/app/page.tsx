import {
  AboutSection,
  ContactSection,
  FAQSection,
  Footer,
  HeroSection,
  PortfolioLayout,
  ProjectsSection,
  ServicesSection,
} from "@/components";
import type { ContactSectionProps } from "@/components";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import FlashOnOutlinedIcon from "@mui/icons-material/FlashOnOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";

const heroData = {
  location: "Warsaw, Poland",
  name: "I'm Patryk",
  role: "Software Engineer",
  description:
    "Passionate about crafting efficient and scalable web applications. Let's build something amazing together!",
  primaryCTA: {
    label: "Get yours now",
    href: "#contact",
  },
  secondaryCTA: {
    label: "See my works",
    href: "#projects",
  },
  technologies: [
    "JavaScript",
    "React",
    "Node",
    "Express",
    "Next.js",
    "TypeScript",
    "nestJS",
    "MySQL",
    "Git",
    "PostgreSQL",
    "Docker",
    "GCP",
  ],
};

const servicesData = {
  heading: "Skills & services",
  description: "Things I can help you with",
  services: [
    {
      icon: <ComputerOutlinedIcon />,
      title: "Frontend development",
      description:
        "Bringing designs to life with clean, efficient, and optimized code. I build responsive, interactive, and user-friendly web applications using the latest front-end technologies like React.",
    },
    {
      icon: <StorageOutlinedIcon />,
      title: "Backend development",
      description:
        "I develop robust server-side applications that power dynamic and data-driven websites. From API creation to database management, I ensure your web apps run smoothly and efficiently.",
    },
    {
      icon: <BrushOutlinedIcon />,
      title: "Automation & Tooling",
      description:
        "I help streamline business processes through smart automation. From workflow optimization to building internal tools and admin panels, I create solutions that save time and reduce manual work.",
    },
    {
      icon: <FlashOnOutlinedIcon />,
      title: "Performance Optimization",
      description:
        "Slow websites lose visitors! I enhance website performance with code optimization, caching strategies, and SEO improvements, ensuring fast load time and a smooth user experience.",
    },
  ],
};

const projectsData = {
  heading: "Projects I've created for my clients",
  description: "Selected work across product, commerce, and brand experiences.",
  projects: [
    {
      id: "parkiza",
      name: "Parkiza",
      summary:
        "Enterprise parking reservation system with admin panel and booking interface. Built with Node.js, NestJS, TypeScript, MySQL on backend and React on frontend.",
      tags: ["Node.js", "NestJS", "React", "MySQL", "TypeScript"],
      previewImage: "/parkiza.svg",
    },
    {
      id: "signalos",
      name: "SignalOS",
      summary:
        "Building management operating system with multiple integrated applications. Full-stack solution leveraging modern JavaScript, React, Node.js, and cloud technologies.",
      tags: ["Next.js", "React", "Node.js", "TypeScript", "Enterprise"],
      previewImage: "/signal.png",
    },
    {
      id: "areoactive",
      name: "Areoactive",
      summary:
        "High-performance landing page built according to client specifications. Responsive design with modern UI/UX principles.",
      tags: ["Next.js", "React", "Responsive Design"],
      previewImage: "/areoactive.webp",
    },
  ],
};

const aboutData = {
  profileImage: {
    src: "/foto.jpeg",
    alt: "Portrait of Patryk",
  },
  name: "Patryk Niedbalski",
  role: "Software Engineer",
  bio: [
    "I build modern web experiences focused on clarity, speed, and thoughtful interaction. My work blends clean architecture with UI craft, helping teams ship products that feel intentional.",
    "Over the last several years, I've led frontend delivery across startups and agencies, collaborating closely with designers and product teams to bring ambitious ideas to life.",
    "Outside of client work, I explore design systems, animation, and performance tooling to keep my stack sharp and my interfaces delightful.",
  ],
  primaryCTA: {
    label: "Download Resume",
    href: "/cv.pdf",
  },
  secondaryCTA: {
    label: "Hire Me",
    href: "#contact",
  },
};

const faqData = {
  heading: "FAQs",
  subheading: "Answers to common questions about collaboration and delivery.",
  allowMultiple: true,
  items: [
    {
      id: "services",
      question: "What services do you specialize in?",
      answer:
        "I focus on frontend engineering, design systems, and performance optimization for modern web apps.",
    },
    {
      id: "teams",
      question: "Do you work with startups or only established teams?",
      answer:
        "Both. I adapt to early-stage needs and also scale design systems for larger orgs.",
    },
    {
      id: "timeline",
      question: "What is your typical project timeline?",
      answer:
        "Most engagements run 4-12 weeks depending on scope and feedback cycles.",
    },
    {
      id: "collaboration",
      question: "Can you collaborate with in-house designers or developers?",
      answer:
        "Yes, I slot into existing teams and workflows, using shared tools and standards.",
    },
    {
      id: "get-started",
      question: "How do we get started?",
      answer:
        "Share a brief, timeline, and goals. I will respond with next steps and availability.",
    },
  ],
};

const contactData: ContactSectionProps = {
  heading: "Contact",
  subheading: "Share a few details and I will get back to you soon.",
  infoItems: [
    { label: "Email", value: "hello@portfolio.dev" },
    { label: "Phone", value: "+48 555 123 456" },
    { label: "Address", value: "Warsaw, Poland" },
  ],
  fields: [
    { id: "fullName", label: "Full name", placeholder: "Jane Doe" },
    { id: "email", label: "Email", placeholder: "jane@email.com" },
    { id: "phone", label: "Phone", placeholder: "+48 555 123 456" },
    { id: "subject", label: "Subject", placeholder: "Project inquiry" },
    {
      id: "message",
      label: "Message",
      placeholder: "Tell me about your project.",
      multiline: true,
      rows: 5,
    },
  ],
  submitLabel: "Send Message",
  formAction: "https://formspree.io/f/mdaakbnb",
  formMethod: "POST" as const,
};

const footerData = {
  name: "Patryk Niedbalski",
  description:
    "Frontend developer crafting clean interfaces and fast, accessible experiences.",
  socialLinks: [
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/",
    },
  ],
  contactHeading: "Contact me",
  navHeading: "Menu",
  navItems: [
    { id: "home", label: "Home", href: "#home" },
    { id: "services", label: "Services", href: "#services" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "about", label: "About", href: "#about" },
    { id: "faqs", label: "FAQ", href: "#faqs" },
    // { id: "contact", label: "Contact", href: "#contact" },
  ],
  contactItems: [
    {
      id: "email",
      label: "Email",
      value: "hello@portfolio.dev",
      href: "mailto:hello@portfolio.dev",
    },
    {
      id: "phone",
      label: "Phone",
      value: "+48 555 123 456",
      href: "tel:+48555123456",
    },
    { id: "address", label: "Address", value: "Warsaw, Poland" },
  ],
  copyright: "© 2026 Patryk Niedbalski. All rights reserved.",
};

export default function Home() {
  return (
    <>
      <PortfolioLayout>
        <HeroSection {...heroData} />

        <ServicesSection {...servicesData} />

        <ProjectsSection {...projectsData} />

        <AboutSection {...aboutData} />

        <FAQSection {...faqData} />

        <ContactSection {...contactData} />
      </PortfolioLayout>

      <Footer {...footerData} />
    </>
  );
}

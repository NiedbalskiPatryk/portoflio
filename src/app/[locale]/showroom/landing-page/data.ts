// Mock data for CloudSync landing page demo

export const heroData = {
  title: "CloudSync",
  subtitle: "Sync everything, everywhere",
  description:
    "Keep your files synchronized across all devices. Fast, secure, and effortless.",
  cta: {
    primary: "Start Free Trial",
    secondary: "See How It Works",
  },
};

export const features = [
  {
    id: "realtime",
    icon: "sync",
    title: "Real-time Sync",
    description:
      "Changes sync instantly across all your devices. No delays, no conflicts.",
  },
  {
    id: "security",
    icon: "lock",
    title: "End-to-End Encryption",
    description:
      "Your files are encrypted before they leave your device. Only you have the keys.",
  },
  {
    id: "crossplatform",
    icon: "devices",
    title: "Cross-Platform",
    description:
      "Works seamlessly on Windows, Mac, Linux, iOS, and Android.",
  },
  {
    id: "collaboration",
    icon: "group",
    title: "Team Collaboration",
    description:
      "Share folders, set permissions, and work together in real-time.",
  },
];

export const pricingPlans = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    period: "forever",
    description: "For personal use",
    features: ["5 GB storage", "1 user", "Basic support", "Mobile apps"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: "$9",
    period: "/month",
    description: "For professionals",
    features: [
      "100 GB storage",
      "5 users",
      "Priority support",
      "Advanced sharing",
      "Version history",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large teams",
    features: [
      "Unlimited storage",
      "Unlimited users",
      "24/7 support",
      "SSO & SAML",
      "Admin console",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export const ctaData = {
  title: "Ready to sync?",
  subtitle: "Join thousands of users who trust CloudSync with their files.",
  cta: "Start Your Free Trial",
};

import { ThemeRegistry } from "@/theme";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Patryk - Software Engineer",
  description:
    "Full stack software engineer specializing in modern web applications",
};

// Inline script to prevent flash of wrong theme
const themeScript = `
(function() {
  try {
    var mode = localStorage.getItem('theme-mode');
    var isDark = mode !== 'light';
    document.documentElement.style.backgroundColor = isDark ? '#0a0a0a' : '#ffffff';
    document.body.style.backgroundColor = isDark ? '#0a0a0a' : '#ffffff';
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={jetbrainsMono.variable}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}

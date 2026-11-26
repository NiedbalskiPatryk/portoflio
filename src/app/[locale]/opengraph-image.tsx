import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import BrandMark from "@/components/atoms/BrandMark/BrandMark";

export const alt = "ITPapi - Patryk Niedbalski";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const TAGLINE: Record<string, string> = {
  pl: "Strony, aplikacje i systemy dla firm",
  en: "Websites, web apps & business systems",
};

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const tagline = TAGLINE[locale] ?? TAGLINE.pl;

  const fontsDir = join(process.cwd(), "src/app/fonts");
  const [extraBold, regular] = await Promise.all([
    readFile(join(fontsDir, "JetBrainsMono-ExtraBold.ttf")),
    readFile(join(fontsDir, "JetBrainsMono-Regular.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 96,
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 12% 8%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 50%)",
          color: "#f7f7f7",
          fontFamily: "JetBrains Mono",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
          <BrandMark size={150} tile="#f7f7f7" ink="#0a0a0a" />
          <div style={{ display: "flex", fontSize: 120, fontWeight: 800, letterSpacing: -4 }}>
            <span style={{ color: "#8a8a8a" }}>IT</span>
            <span>Papi</span>
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 40, marginTop: 48, color: "#d2d2d2" }}>
          {tagline}
        </div>
        <div style={{ display: "flex", fontSize: 28, marginTop: 20, color: "#8a8a8a" }}>
          itpapi.pl · Patryk Niedbalski
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "JetBrains Mono", data: extraBold, weight: 800, style: "normal" },
        { name: "JetBrains Mono", data: regular, weight: 400, style: "normal" },
      ],
    },
  );
}

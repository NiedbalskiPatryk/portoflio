import { ImageResponse } from "next/og";

export const alt = "Patryk Niedbalski - Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0a0a0a",
          color: "#fafafa",
          fontFamily: "monospace",
        }}
      >
        <div style={{ fontSize: 84, fontWeight: 700, display: "flex" }}>
          Patryk Niedbalski
        </div>
        <div style={{ fontSize: 36, marginTop: 24, color: "#a3a3a3", display: "flex" }}>
          Full-Stack Developer · React · Next.js · Node.js
        </div>
        <div style={{ fontSize: 28, marginTop: 80, color: "#737373", display: "flex" }}>
          itpapi.pl
        </div>
      </div>
    ),
    size,
  );
}

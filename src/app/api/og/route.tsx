import { ImageResponse } from "next/og";
import { SITE } from "@/config/site";

/**
 * Dynamic Open Graph cards, same palette as the site.
 * Try it: /api/og?title=Hello&kind=Note
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title")?.slice(0, 120) ?? SITE.tagline;
  const kind = searchParams.get("kind") ?? SITE.name;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span
            style={{
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#59708e",
            }}
          >
            {kind}
          </span>
          <span style={{ fontSize: 22, fontWeight: 700, color: "#06182e" }}>
            {SITE.name}
          </span>
        </div>

        <div
          style={{
            fontSize: title.length > 60 ? 56 : 72,
            fontWeight: 700,
            letterSpacing: -2,
            lineHeight: 1.05,
            color: "#06182e",
            maxWidth: 940,
            display: "flex",
          }}
        >
          {title}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ height: 2, width: 560, background: "#d6e1f2" }} />
          <div style={{ height: 18, width: 18, background: "#1550e0" }} />
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
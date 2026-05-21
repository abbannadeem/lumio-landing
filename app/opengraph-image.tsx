import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

// Generated at build time → a real 1200×630 PNG ships with the static export.
export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Lumio — AI-powered analytics that turns raw data into automated decisions";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #4f46e5 0%, #7c3aed 55%, #8b5cf6 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand mark */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "rgba(255,255,255,0.18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontWeight: 800,
            }}
          >
            L
          </div>
          <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: -1 }}>
            {siteConfig.name}
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 980,
            }}
          >
            Turn raw data into decisions — automatically
          </div>
          <div
            style={{ fontSize: 32, color: "rgba(255,255,255,0.85)", maxWidth: 900 }}
          >
            AI-powered analytics for teams that decide with data.
          </div>
        </div>

        {/* Footer URL */}
        <div style={{ fontSize: 28, color: "rgba(255,255,255,0.8)" }}>
          lumio-landing.pages.dev
        </div>
      </div>
    ),
    { ...size }
  );
}

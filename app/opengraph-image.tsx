import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Briefly - AI-Powered Note Summarization";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "linear-gradient(to right, #ff5e00, #99cb34)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: "bold",
          fontFamily: "system-ui",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "64px", marginBottom: "20px" }}>Briefly</div>
          <div style={{ fontSize: "32px", fontWeight: "normal" }}>
            AI-Powered Note Summarization
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

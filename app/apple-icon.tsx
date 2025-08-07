import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
    width: 180,
    height: 180,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 72,
                    background:
                        "linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    borderRadius: "20px",
                }}
            >
                📖
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    );
}

import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

// Route segment config
export const runtime = "edge";

// Image generation
export default function Icon(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const size = searchParams.get("size");
    
    // Default to 32x32, but allow custom sizes for PWA icons
    const iconSize = size ? parseInt(size) : 32;
    const svgSize = Math.max(iconSize * 0.6, 16); // Scale SVG appropriately
    
    return new ImageResponse(
        (
            <div
                style={{
                    background:
                        "linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    borderRadius: iconSize >= 180 ? "20px" : "6px",
                }}
            >
                <svg
                    width={svgSize}
                    height={svgSize}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Book cover */}
                    <path
                        d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6Z"
                        fill="white"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    {/* Book spine */}
                    <path
                        d="M8 4V20"
                        stroke="#14b8a6"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                    {/* Pages/lines */}
                    <path
                        d="M11 8H16M11 10H16M11 12H16M11 14H14"
                        stroke="#14b8a6"
                        strokeWidth="1"
                        strokeLinecap="round"
                    />
                    {/* Book bookmark */}
                    <path
                        d="M6 4V8L7 7L8 8V4"
                        fill="#06b6d4"
                        stroke="#06b6d4"
                        strokeWidth="0.5"
                    />
                </svg>
            </div>
        ),
        // ImageResponse options
        {
            width: iconSize,
            height: iconSize,
        }
    );
}

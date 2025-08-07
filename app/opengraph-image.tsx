import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "LWNRA Daily Devotionals";
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
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#14b8a6",
                    backgroundImage:
                        "linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 40,
                    }}
                >
                    <div
                        style={{
                            fontSize: 120,
                            marginRight: 30,
                        }}
                    >
                        📖
                    </div>
                    <div
                        style={{
                            fontSize: 72,
                            fontWeight: "bold",
                            color: "white",
                            textAlign: "center",
                        }}
                    >
                        LWNRA
                    </div>
                </div>
                <div
                    style={{
                        fontSize: 48,
                        fontWeight: "bold",
                        color: "white",
                        textAlign: "center",
                        marginBottom: 20,
                    }}
                >
                    Daily Devotionals
                </div>
                <div
                    style={{
                        fontSize: 32,
                        color: "#e6fffa",
                        textAlign: "center",
                    }}
                >
                    Daily spiritual guidance from Living Word NRA
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}

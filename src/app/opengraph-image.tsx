export const dynamic = "force-static";
export const revalidate = false;

import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OGImage() {
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
          backgroundColor: "#f4f9f9",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          <svg
            width="120"
            height="120"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="40" height="40" rx="8" fill="#B2842A" />
            <path
              d="M12 20C12 14.477 16.477 10 22 10V30C16.477 30 12 25.523 12 20Z"
              fill="#FFFFFF"
            />
            <path
              d="M28 20C28 25.523 23.523 30 18 30V10C23.523 10 28 14.477 28 20Z"
              fill="#B4B4B4"
            />
            <path
              d="M14 20C14 15.582 17.582 12 22 12V28C17.582 28 14 24.418 14 20Z"
              fill="#FFFFFF"
            />
          </svg>
          <div
            style={{
              marginLeft: 20,
              fontSize: 80,
              fontWeight: "bold",
              color: "#B2842A",
            }}
          >
            UltraMed
          </div>
        </div>
        <div
          style={{
            fontSize: 40,
            fontWeight: "medium",
            color: "#08354d",
            textAlign: "center",
            maxWidth: "70%",
          }}
        >
          Healthcare for the Better
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#444",
            marginTop: 20,
            textAlign: "center",
            maxWidth: "80%",
          }}
        >
          Comprehensive healthcare provider in Garki, Abuja
        </div>
      </div>
    ),
    { ...size }
  );
}

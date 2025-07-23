import { ImageResponse } from "next/og";
import * as React from "react";

export default async function OpengraphImage() {
  return new ImageResponse(
    React.createElement(
      "div",
      {
        style: {
          fontSize: 72,
          background: "#ffcb05",
          color: "#2a75bb",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      },
      "Pokédex OG",
    ),
    { width: 1200, height: 630 },
  );
}

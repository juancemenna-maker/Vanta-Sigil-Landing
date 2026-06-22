"use client";

import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const dot = document.querySelector(".cursor-dot") as HTMLElement;
    const outline = document.querySelector(".cursor-outline") as HTMLElement;

    function moveCursor(e: MouseEvent) {
      const x = e.clientX;
      const y = e.clientY;

      if (dot) {
        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;
      }

      if (outline) {
        outline.animate(
          {
            left: `${x - 20}px`,
            top: `${y - 20}px`,
          },
          {
            duration: 80,
            fill: "forwards",
          }
        );
      }
    }

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" />
      <div className="cursor-outline" />
    </>
  );
}
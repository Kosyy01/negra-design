"use client";

import { useEffect, useState } from "react";
import { Point } from "@/types";

export function useMousePosition(): Point {
  const [position, setPosition] = useState<Point>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return position;
}

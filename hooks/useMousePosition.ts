"use client";

import { useEffect, useRef, useState } from "react";
import { Point } from "@/types";

export function useMousePosition(): Point {
  const [position, setPosition] = useState<Point>({ x: 0, y: 0 });
  const frame = useRef<number | null>(null);

  useEffect(() => {
    // Na urządzeniach dotykowych nie ma sensu nasłuchiwać ruchu myszy — oszczędza to
    // pracy głównego wątku na telefonach/tabletach.
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    const handleMove = (e: MouseEvent) => {
      if (frame.current !== null) return;
      // Ograniczamy aktualizacje stanu do jednej na klatkę animacji (requestAnimationFrame),
      // zamiast re-renderować komponent przy każdym zdarzeniu mousemove.
      frame.current = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        frame.current = null;
      });
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, []);

  return position;
}

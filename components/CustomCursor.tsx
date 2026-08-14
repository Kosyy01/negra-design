"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isFinePointer, setIsFinePointer] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { damping: 30, stiffness: 400, mass: 0.4 });
  const springY = useSpring(cursorY, { damping: 30, stiffness: 400, mass: 0.4 });

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setIsFinePointer(mq.matches);
    if (!mq.matches) return;

    document.body.classList.add("has-custom-cursor");

    const handleMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHoveringInteractive(!!target.closest("a, button, [data-cursor-hover]"));
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
    };
  }, [cursorX, cursorY]);

  if (!isFinePointer) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[70] -translate-x-1/2 -translate-y-1/2"
      style={{ x: springX, y: springY }}
      aria-hidden="true"
    >
      <motion.div
        animate={{
          scale: isHoveringInteractive ? 1.8 : 1,
          rotate: isHoveringInteractive ? 45 : 0,
        }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="relative h-6 w-6"
      >
        {/* crosshair, jak punkt pomiarowy na rysunku technicznym */}
        <span className="absolute left-1/2 top-0 h-2 w-px -translate-x-1/2 bg-copper" />
        <span className="absolute left-1/2 bottom-0 h-2 w-px -translate-x-1/2 bg-copper" />
        <span className="absolute top-1/2 left-0 w-2 h-px -translate-y-1/2 bg-copper" />
        <span className="absolute top-1/2 right-0 w-2 h-px -translate-y-1/2 bg-copper" />
        <span className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-copper" />
      </motion.div>
    </motion.div>
  );
}

"use client";

import { useLenisScroll } from "@/hooks/useLenisScroll";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useLenisScroll();
  return <>{children}</>;
}

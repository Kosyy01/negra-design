import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CustomCursor from "@/components/CustomCursor";
import NoiseOverlay from "@/components/NoiseOverlay";

const sora = Sora({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sora",
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0D0D0D",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://negradesign.pl"),
  title: "NEGRA DESIGN — Pracownia Architektoniczna",
  description:
    "NEGRA DESIGN to pracownia architektoniczna specjalizująca się w projektowaniu, wizualizacjach 3D, modelowaniu, projektowaniu wnętrz oraz kompleksowej obsłudze inwestycji.",
  openGraph: {
    title: "NEGRA DESIGN — Pracownia Architektoniczna",
    description:
      "Projektowanie architektoniczne, wizualizacje 3D i wnętrza klasy premium.",
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEGRA DESIGN — Pracownia Architektoniczna",
    description:
      "Projektowanie architektoniczne, wizualizacje 3D i wnętrza klasy premium.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={sora.variable}>
      <body className="font-sora">
        <SmoothScrollProvider>
          <CustomCursor />
          <NoiseOverlay />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

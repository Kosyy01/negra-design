"use client";

import { useState } from "react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import ONas from "@/sections/ONas";
import Opinie from "@/sections/Opinie";
import Kontakt from "@/sections/Kontakt";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}
      <Navbar />
      <main>
        <Hero />
        <ONas />
        {/* Kolejne sekcje (Usługi, Realizacje, FAQ)
            dołączymy w kolejnych etapach. */}
        <Opinie />
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}

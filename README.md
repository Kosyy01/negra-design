# NEGRA DESIGN — Etap 1: Landing Page

## Uruchomienie

```bash
npm install
npm run dev
```

Strona będzie dostępna pod `http://localhost:3000`.

## Co zawiera ten etap

- Pełny szkielet projektu (Next.js 15 / App Router, TypeScript, Tailwind, Framer Motion, Lenis, Lucide)
- Loader powitalny z animacją tekstu i motywem "linii pionu"
- Navbar glassmorphism (sticky, zmienny przy scrollu, hamburger na mobile)
- Sekcja Hero: tło z parallaksą (scroll + mysz), animowany nagłówek, 2 CTA, wskaźnik scrollowania
- Custom cursor (desktop), noise overlay, magnetic buttons
- Podstawowe SEO (metadata, Open Graph, Twitter Card)

## Do zrobienia w kolejnych etapach

- Sekcje: O nas, Usługi, Dlaczego my, Proces współpracy, Realizacje (z lightboxem),
  Opinie klientów, FAQ, Kontakt, Footer
- Panel audio (odtwarzacz muzyki)
- Pełne i18n (PL / DE / EN-US / EN-GB) + przełącznik w navbarze
- robots.txt, sitemap.xml, manifest, favicon
- Formularz kontaktowy z walidacją

## Uwaga dot. obrazów

Tło Hero korzysta chwilowo ze zdjęcia z Unsplash (`images.unsplash.com`,
skonfigurowane w `next.config.mjs`). Podmień na docelowe zdjęcia w
`public/images` kiedy będą gotowe — wystarczy zmienić `src` w
`sections/Hero.tsx`.

export interface NavLink {
  label: string;
  href: string;
}

/** Obsługiwane języki: polski, angielski (UK/US) i niemiecki. */
export type Locale = "pl" | "en-GB" | "en-US" | "de";

export interface NavItem {
  key: "start" | "oNas" | "uslugi" | "realizacje" | "faq" | "kontakt";
  href: string;
}

export interface Point {
  x: number;
  y: number;
}

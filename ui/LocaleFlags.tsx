import { Locale } from "@/types";

const commonProps = {
  viewBox: "0 0 24 16",
  xmlns: "http://www.w3.org/2000/svg",
};

function FlagPL({ className }: { className?: string }) {
  return (
    <svg {...commonProps} className={className} role="img" aria-hidden="true">
      <rect width="24" height="16" fill="#EDE8E1" />
      <rect width="24" height="8" y="8" fill="#B8763E" />
    </svg>
  );
}

function FlagGB({ className }: { className?: string }) {
  return (
    <svg {...commonProps} className={className} role="img" aria-hidden="true">
      <rect width="24" height="16" fill="#1A2B4C" />
      <path d="M0 0L24 16M24 0L0 16" stroke="#EDE8E1" strokeWidth="2.4" />
      <path d="M0 0L24 16M24 0L0 16" stroke="#B8763E" strokeWidth="0.9" />
      <path d="M12 0V16M0 8H24" stroke="#EDE8E1" strokeWidth="4" />
      <path d="M12 0V16M0 8H24" stroke="#B8763E" strokeWidth="1.6" />
    </svg>
  );
}

function FlagUS({ className }: { className?: string }) {
  return (
    <svg {...commonProps} className={className} role="img" aria-hidden="true">
      <rect width="24" height="16" fill="#EDE8E1" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect key={i} x="0" y={i * (16 / 13) * 2} width="24" height={16 / 13} fill="#8C2C2C" />
      ))}
      <rect width="11" height="8.5" fill="#1A2B4C" />
    </svg>
  );
}

function FlagDE({ className }: { className?: string }) {
  return (
    <svg {...commonProps} className={className} role="img" aria-hidden="true">
      <rect width="24" height="16" fill="#1a1a1a" />
      <rect width="24" height="10.6" fill="#B8763E" />
      <rect width="24" height="5.3" fill="#C9A54A" />
    </svg>
  );
}

export function LocaleFlag({ locale, className }: { locale: Locale; className?: string }) {
  switch (locale) {
    case "pl":
      return <FlagPL className={className} />;
    case "en-GB":
      return <FlagGB className={className} />;
    case "en-US":
      return <FlagUS className={className} />;
    case "de":
      return <FlagDE className={className} />;
  }
}

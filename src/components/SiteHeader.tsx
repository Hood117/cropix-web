import { Mark } from "./Mark";
import { site } from "../config";

const links = [
  { href: "#preview", label: "Preview" },
  { href: "#features", label: "Features" },
  { href: "#download", label: "Download" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-5 py-3 sm:flex sm:h-14 sm:items-center sm:justify-between sm:px-8 sm:py-0">
        <a href="#top" className="flex items-center gap-2.5">
          <Mark className="size-7 shrink-0 rounded-md" />
          <span className="text-[1.05rem] font-semibold tracking-tight">{site.name}</span>
        </a>
        <nav aria-label="Page" className="mt-3 flex items-center gap-5 text-sm sm:mt-0 sm:gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

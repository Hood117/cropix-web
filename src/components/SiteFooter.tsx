import { releasesUrl, site } from "../config";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-8 text-sm text-muted-foreground sm:px-8">
        <span>{site.name}</span>
        <a href={releasesUrl} className="transition-colors hover:text-foreground">
          Releases
        </a>
      </div>
    </footer>
  );
}

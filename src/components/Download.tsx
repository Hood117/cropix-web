import { compatibility, releasesUrl, requirementsNote } from "../config";
import { useReleaseVersion } from "../useReleaseVersion";
import { DownloadLink } from "./DownloadLink";

export function Download() {
  const version = useReleaseVersion();

  return (
    <section
      id="download"
      aria-labelledby="download-title"
      className="scroll-mt-24 border-t border-border/80 sm:scroll-mt-16"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-2xl rounded-2xl border border-border/70 bg-card px-6 py-10 text-center shadow-[0_24px_80px_rgb(0_0_0_/_0.28)] sm:px-10">
          <h2 id="download-title" className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Download
          </h2>
          <p className="mt-3 text-muted-foreground">
            Version {version}, {compatibility}
          </p>
          <div className="mt-8 w-full min-w-0">
            <DownloadLink className="flex w-full min-w-0 items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground shadow-[0_0_28px_rgb(45_212_191_/_0.22)] transition-colors hover:bg-accent/90 sm:mx-auto sm:w-auto sm:min-w-[13.5rem] sm:px-7" />
          </div>
          <p className="mx-auto mt-6 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
            {requirementsNote}
          </p>
          <p className="mt-4 text-sm">
            <a
              href={releasesUrl}
              className="text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground"
            >
              All releases
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

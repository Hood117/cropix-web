import { compatibility, site } from "../config";
import { useReleaseVersion } from "../useReleaseVersion";
import { DownloadLink } from "./DownloadLink";
import { Mark } from "./Mark";

export function Hero() {
  const version = useReleaseVersion();

  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-title">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_18%,rgb(45_212_191_/_0.16),transparent_68%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_15%_85%,rgb(45_212_191_/_0.07),transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 65% 55% at 50% 42%, black, transparent)",
          }}
        />
      </div>

      <div className="relative mx-auto flex w-full min-w-0 max-w-3xl flex-col items-center px-5 pb-20 pt-20 text-center sm:px-8 sm:pb-28 sm:pt-28">
        <div className="cropix-fade-up">
          <Mark className="mx-auto size-14 rounded-2xl shadow-[0_0_40px_rgb(45_212_191_/_0.18)]" />
        </div>
        <h1
          id="hero-title"
          className="cropix-fade-up cropix-fade-up--delay-1 mt-6 text-5xl font-semibold tracking-tight sm:text-6xl"
        >
          {site.name}
        </h1>
        <p className="cropix-fade-up cropix-fade-up--delay-1 mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Lightweight image cropping for Windows. Drop a photo, crop it, and export PNG or JPEG.
          Everything stays on your machine.
        </p>
        <div className="cropix-fade-up cropix-fade-up--delay-2 mt-8 w-full min-w-0 self-stretch sm:w-auto sm:self-center">
          <DownloadLink className="flex w-full min-w-0 items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground shadow-[0_0_28px_rgb(45_212_191_/_0.22)] transition-colors hover:bg-accent/90 sm:min-w-[13.5rem] sm:px-7" />
        </div>
        <p className="cropix-fade-up cropix-fade-up--delay-2 mt-4 max-w-full text-balance text-sm text-muted-foreground">
          Version {version}, {compatibility}
        </p>
      </div>
    </section>
  );
}

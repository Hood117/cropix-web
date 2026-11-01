import { useState } from "react";
import { screenshots } from "../config";

export function Preview() {
  return (
    <section
      id="preview"
      aria-labelledby="preview-title"
      className="scroll-mt-24 border-t border-border/80 sm:scroll-mt-16"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <h2 id="preview-title" className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Preview
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Open an image, adjust the crop, and export. Cropix stays on the desktop.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {screenshots.map((shot) => (
            <ScreenshotFrame key={shot.src} shot={shot} />
          ))}
        </div>
      </div>
    </section>
  );
}

type Shot = (typeof screenshots)[number];

function ScreenshotFrame({ shot }: { shot: Shot }) {
  const [missing, setMissing] = useState(false);

  return (
    <figure className="overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[0_24px_80px_rgb(0_0_0_/_0.35)]">
      <div className="relative aspect-[16/10] bg-[#10131a]">
        {missing ? (
          <EmptyFrame label={shot.alt} />
        ) : (
          <img
            src={shot.src}
            alt={shot.alt}
            className="h-full w-full object-cover object-top"
            onError={() => setMissing(true)}
          />
        )}
      </div>
      <figcaption className="border-t border-border/80 px-4 py-3 text-sm text-muted-foreground">
        {shot.caption}
      </figcaption>
    </figure>
  );
}

function EmptyFrame({ label }: { label: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="sr-only">{label}. Screenshot not added yet.</span>
      <div className="relative h-[58%] w-[64%] rounded-[2px] border-2 border-accent/80">
        <span className="absolute left-0 top-0 size-2 -translate-x-1/2 -translate-y-1/2 rounded-[2px] bg-white" />
        <span className="absolute right-0 top-0 size-2 translate-x-1/2 -translate-y-1/2 rounded-[2px] bg-white" />
        <span className="absolute bottom-0 left-0 size-2 -translate-x-1/2 translate-y-1/2 rounded-[2px] bg-white" />
        <span className="absolute bottom-0 right-0 size-2 translate-x-1/2 translate-y-1/2 rounded-[2px] bg-white" />
      </div>
    </div>
  );
}

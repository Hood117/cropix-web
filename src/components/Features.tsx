import { features } from "../config";

export function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="scroll-mt-24 border-t border-border/80 sm:scroll-mt-16"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <h2 id="features-title" className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Features
        </h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {features.map((feature) => (
            <li
              key={feature.title}
              className="rounded-2xl border border-border/70 bg-card px-6 py-6"
            >
              <h3 className="text-lg font-semibold tracking-tight">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

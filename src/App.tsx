import { useEffect } from "react";
import { Download } from "./components/Download";
import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
import { Preview } from "./components/Preview";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

export function App() {
  useEffect(() => {
    const id = window.location.hash.replace(/^#/, "");
    if (!id) return;
    document.getElementById(id)?.scrollIntoView();
  }, []);

  return (
    <div id="top" className="min-h-svh overflow-x-clip">
      <SiteHeader />
      <main>
        <Hero />
        <Preview />
        <Features />
        <Download />
      </main>
      <SiteFooter />
    </div>
  );
}

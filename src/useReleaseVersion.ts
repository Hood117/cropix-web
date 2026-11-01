import { useEffect, useState } from "react";
import { latestReleaseApi, site } from "./config";

let pending: Promise<string | null> | null = null;

function loadLatestVersion(): Promise<string | null> {
  if (!pending) {
    pending = fetch(latestReleaseApi)
      .then((response) => (response.ok ? response.json() : null))
      .then((data: unknown) => {
        if (
          !data ||
          typeof data !== "object" ||
          !("tag_name" in data) ||
          typeof data.tag_name !== "string"
        ) {
          return null;
        }
        const tag = data.tag_name.replace(/^v/i, "").trim();
        return tag.length > 0 ? tag : null;
      })
      .catch(() => null);
  }
  return pending;
}

export function useReleaseVersion(): string {
  const [version, setVersion] = useState<string>(site.version);

  useEffect(() => {
    let active = true;
    loadLatestVersion().then((tag) => {
      if (active && tag) {
        setVersion(tag);
      }
    });
    return () => {
      active = false;
    };
  }, []);

  return version;
}

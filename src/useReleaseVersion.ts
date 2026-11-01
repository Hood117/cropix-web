import { useEffect, useState } from "react";
import { downloadUrl, latestReleaseApi, site } from "./config";

type LatestRelease = {
  version: string | null;
  installerUrl: string | null;
};

let pending: Promise<LatestRelease> | null = null;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function installerFromRelease(data: Record<string, unknown>): string | null {
  if (!Array.isArray(data.assets)) return null;
  const exe = data.assets.find((asset) => {
    if (!isRecord(asset) || typeof asset.name !== "string") return false;
    return asset.name.toLowerCase().endsWith(".exe");
  });
  if (!isRecord(exe) || typeof exe.browser_download_url !== "string") return null;
  return exe.browser_download_url;
}

function loadLatestRelease(): Promise<LatestRelease> {
  if (!pending) {
    pending = fetch(latestReleaseApi)
      .then((response) => (response.ok ? response.json() : null))
      .then((data: unknown) => {
        if (!isRecord(data)) return { version: null, installerUrl: null };
        const version =
          typeof data.tag_name === "string"
            ? data.tag_name.replace(/^v/i, "").trim()
            : "";
        return {
          version: version.length > 0 ? version : null,
          installerUrl: installerFromRelease(data),
        };
      })
      .catch(() => ({ version: null, installerUrl: null }));
  }
  return pending;
}

export function useReleaseVersion(): string {
  const [version, setVersion] = useState<string>(site.version);

  useEffect(() => {
    let active = true;
    loadLatestRelease().then((release) => {
      if (active && release.version) setVersion(release.version);
    });
    return () => {
      active = false;
    };
  }, []);

  return version;
}

export function useInstallerUrl(): string {
  const [installerUrl, setInstallerUrl] = useState(downloadUrl);

  useEffect(() => {
    let active = true;
    loadLatestRelease().then((release) => {
      if (active && release.installerUrl) setInstallerUrl(release.installerUrl);
    });
    return () => {
      active = false;
    };
  }, []);

  return installerUrl;
}

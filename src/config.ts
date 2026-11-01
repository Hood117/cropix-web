export const site = {
  name: "Cropix",
  version: "0.1.0",
  githubOwner: "Hood117",
  githubRepo: "cropix-web",
  assetName: "Cropix_0.1.0_x64-setup.exe",
} as const;

export const downloadUrl = `https://github.com/${site.githubOwner}/${site.githubRepo}/releases/latest/download/${site.assetName}`;

export const releasesUrl = `https://github.com/${site.githubOwner}/${site.githubRepo}/releases`;

export const latestReleaseApi = `https://api.github.com/repos/${site.githubOwner}/${site.githubRepo}/releases/latest`;

export const compatibility = "Windows 10/11, 64-bit";

export const requirementsNote =
  "Per-user install for Windows 10 and 11 (64-bit). WebView2 is already included on current Windows.";

export const screenshots = [
  {
    src: "/screenshots/welcome.png",
    alt: "Cropix welcome screen, ready to open or drop an image",
    caption: "Drop an image to open it",
  },
  {
    src: "/screenshots/crop.png",
    alt: "Cropix crop canvas with a free-form selection and live preview",
    caption: "Crop freely, with a live preview",
  },
  {
    src: "/screenshots/export.png",
    alt: "Cropix export controls for PNG and JPEG",
    caption: "Export PNG or JPEG",
  },
] as const;

export const features = [
  {
    title: "Drag and drop",
    body: "Drop an image on the window to open it. PNG, JPEG, WebP, GIF, and BMP.",
  },
  {
    title: "Free-form cropping",
    body: "Move and resize the selection without a locked frame.",
  },
  {
    title: "Live preview",
    body: "The crop updates as you drag, so you can judge the result before saving.",
  },
  {
    title: "PNG and JPEG export",
    body: "Save the cropped image as PNG or JPEG, on your PC.",
  },
] as const;

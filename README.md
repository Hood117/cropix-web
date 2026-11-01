# Cropix

Public product site for Cropix, a lightweight Windows desktop image cropper. This repository is the website and the place where Windows installers are published. The application source stays in a private repository.

The site is static. It has no backend, database, or authentication.

## Develop

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

## Screenshots

Place real Cropix screenshots at these paths. Until the files exist, the preview section shows an empty frame.

- `public/screenshots/welcome.png` — drop or open an image
- `public/screenshots/crop.png` — free-form crop and live preview
- `public/screenshots/export.png` — PNG or JPEG export

## Download link

The download button points at a stable release asset:

`https://github.com/Hood117/cropix-web/releases/latest/download/Cropix_0.1.0_x64-setup.exe`

The private app build produces `Cropix_0.1.0_x64-setup.exe`. Upload that file to this repository’s Release. The button uses that address immediately, then switches to the `.exe` attached to the latest release when the page can read it.

## Publish an installer

In the private Cropix app:

```bash
npm run tauri build
```

Installer output:

`src-tauri/target/release/bundle/nsis/Cropix_0.1.0_x64-setup.exe`

Upload it to this public repository:

```bash
gh release create v0.1.0 Cropix_0.1.0_x64-setup.exe --repo Hood117/cropix-web --title "Cropix 0.1.0"
```

Upload the built installer with its filename:

```bash
gh release upload v0.1.0 "src-tauri/target/release/bundle/nsis/Cropix_0.1.0_x64-setup.exe" --repo Hood117/cropix-web --clobber
```

If the displayed fallback version changes, update `version` in `src/config.ts` and push. Vercel redeploys from that commit. The download URL stays the same.

## Deploy on Vercel

1. Import the GitHub repository `Hood117/cropix-web`.
2. Framework preset: Vite.
3. Output directory: `dist`.
4. Production branch: `main`.
5. No environment variables.

Build command: `npm run build`.

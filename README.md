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

`https://github.com/Hood117/cropix-web/releases/latest/download/Cropix-Setup-x64.exe`

GitHub resolves `/releases/latest/download/` only when the asset filename does not change between versions. The private app build produces a versioned installer, `Cropix_0.1.0_x64-setup.exe`. When you publish, upload that file to this repository’s Release under the stable name `Cropix-Setup-x64.exe`.

The page shows version `0.1.0` from `src/config.ts`. If a release exists, the visible version is replaced with that release’s tag. The button address does not depend on the request.

## Publish an installer

In the private Cropix app:

```bash
npm run tauri build
```

Installer output:

`src-tauri/target/release/bundle/nsis/Cropix_0.1.0_x64-setup.exe`

Upload it to this public repository:

```bash
gh release create v0.1.0 Cropix-Setup-x64.exe --repo Hood117/cropix-web --title "Cropix 0.1.0"
```

Rename the built installer to `Cropix-Setup-x64.exe` before uploading, or pass the built path with that destination name:

```bash
gh release upload v0.1.0 "src-tauri/target/release/bundle/nsis/Cropix_0.1.0_x64-setup.exe#Cropix-Setup-x64.exe" --repo Hood117/cropix-web --clobber
```

If the displayed fallback version changes, update `version` in `src/config.ts` and push. Vercel redeploys from that commit. The download URL stays the same.

## Deploy on Vercel

1. Import the GitHub repository `Hood117/cropix-web`.
2. Framework preset: Vite.
3. Output directory: `dist`.
4. Production branch: `main`.
5. No environment variables.

Build command: `npm run build`.

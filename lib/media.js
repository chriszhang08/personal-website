// Resolve a media path. With NEXT_PUBLIC_MEDIA_URL unset (local dev fallback),
// returns "/<path>" so files in /public/ still work. With it set, returns the
// fully-qualified CDN URL — same path shape on either side, so swapping
// providers (Vercel Blob → R2 → S3) is a one env-var change.
const BASE = (process.env.NEXT_PUBLIC_MEDIA_URL || "").replace(/\/+$/, "");

export function media(path) {
  const clean = String(path).replace(/^\/+/, "");
  return BASE ? `${BASE}/${clean}` : `/${clean}`;
}

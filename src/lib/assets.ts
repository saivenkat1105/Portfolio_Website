/**
 * Returns the correct public asset path for the current deployment environment.
 *
 * On GitHub Pages (project page), assets live under a subdirectory like
 * /Portfolio_Website/projects/image.png. NEXT_PUBLIC_BASE_PATH is injected
 * at build time from the GitHub Actions workflow.
 *
 * Usage: <img src={asset("/projects/image.png")} />
 */
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  // Ensure path always starts with /
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE}${normalized}`;
}

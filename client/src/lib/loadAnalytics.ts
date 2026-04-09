/**
 * Loads Umami analytics only when both env vars are set (no build-time HTML placeholders).
 */
export function loadAnalytics(): void {
  const endpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT?.trim();
  const websiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID?.trim();
  if (!endpoint || !websiteId) return;

  const base = endpoint.replace(/\/$/, "");
  const src = `${base}/umami`;

  if (document.querySelector(`script[data-website-id="${websiteId}"][src="${src}"]`)) {
    return;
  }

  const script = document.createElement("script");
  script.defer = true;
  script.src = src;
  script.setAttribute("data-website-id", websiteId);
  document.body.appendChild(script);
}

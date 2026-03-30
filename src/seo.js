/**
 * SEO Manager Module
 * Dynamically updates document head meta tags, OpenGraph data, and JSON-LD schema
 * based on the currently active route (Hub or Micro-App).
 */

const BASE_URL = 'https://app.ui.pe';
const DEFAULT_TITLE = 'app.ui.pe — Developer Micro-App Hub';
const DEFAULT_DESC = 'A growing constellation of beautiful, focused micro-apps and developer tools. Fast, free, and aesthetically pleasing.';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`; // Fallback image

/**
 * Updates all relevant SEO meta tags for a given app.
 * Pass `null` to reset to the Hub/Default SEO.
 * @param {Object} appConfig - The app configuration object from apps-registry
 */
export function updateSEO(appConfig = null) {
  const isHub = !appConfig;
  
  const title = isHub ? DEFAULT_TITLE : `${appConfig.name} — app.ui.pe Tools`;
  const desc = isHub ? DEFAULT_DESC : appConfig.description;
  const url = isHub ? `${BASE_URL}/` : `${BASE_URL}/#/${appConfig.id}`;
  // Micro-apps can have their own OG image in the future, falling back to default
  const image = appConfig?.ogImage ? `${BASE_URL}${appConfig.ogImage}` : DEFAULT_IMAGE;

  // 1. Basic Meta Tags
  document.title = title;
  updateTag('meta[name="title"]', 'content', title);
  updateTag('meta[name="description"]', 'content', desc);
  
  // 2. Canonical
  updateTag('#canonical-url', 'href', url);

  // 3. OpenGraph
  updateTag('#og-title', 'content', title);
  updateTag('#og-description', 'content', desc);
  updateTag('#og-url', 'content', url);
  updateTag('#og-image', 'content', image);

  // 4. Twitter
  updateTag('#twitter-title', 'content', title);
  updateTag('#twitter-description', 'content', desc);
  updateTag('#twitter-url', 'content', url);
  updateTag('#twitter-image', 'content', image);

  // 5. JSON-LD Schema
  let schemaData;
  if (isHub) {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": url,
      "name": "app.ui.pe",
      "description": desc,
      "publisher": {
        "@type": "Organization",
        "name": "app.ui.pe"
      }
    };
  } else {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": appConfig.name,
      "description": appConfig.description,
      "url": url,
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "WebBrowser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    };
  }
  
  const schemaScript = document.getElementById('schema-markup');
  if (schemaScript) {
    schemaScript.textContent = JSON.stringify(schemaData, null, 2);
  }
}

/**
 * Helper to safely update a DOM element's attribute.
 */
function updateTag(selector, attribute, value) {
  const el = document.querySelector(selector);
  if (el) {
    el.setAttribute(attribute, value);
  }
}

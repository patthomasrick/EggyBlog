// See https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/lib/gtag.js

import getConfig from "next/config";

export const GA4_ID = process.env.GA4_MEASUREMENT_ID;

/**
 * Get the client-side GA4 measurement ID.
 *
 * @export
 * @return {?string} The GA4 measurement ID.
 */
export function clientGA4MeasurementID() {
  const { publicRuntimeConfig } = getConfig();
  const ga4_id = publicRuntimeConfig.GA4_MEASUREMENT_ID ?? null;
  return ga4_id;
}

/**
 * Send a page view to Google Analytics.
 *
 * See https://developers.google.com/analytics/devguides/collection/gtagjs/pages.
 *
 * @export
 * @param {string} url
 */
export function onPageView(url) {
  if (process.env.NODE_ENV === "development") {
    console.log("GA4 page view:", url);
  }
  const GA4_ID = clientGA4MeasurementID();
  if (GA4_ID && window.gtag) {
    window.gtag("config", GA4_ID, {
      page_path: url,
    });
  }
}

/**
 * Send an event to Google Analytics.
 *
 * See https://developers.google.com/analytics/devguides/collection/gtagjs/events.
 *
 * @export
 * @param {*} { action, category, label, value }
 */
export function event({ action, category, label, value }) {
  if (process.env.NODE_ENV === "development") {
    console.log("GA4 event fired:", action, category, label, value);
  }
  const GA4_ID = clientGA4MeasurementID();
  if (GA4_ID && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

import { config } from "@fortawesome/fontawesome-svg-core";
import "../styles/global.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { clientGA4MeasurementID, onPageView } from "../utils/gtag";

// Tell Font Awesome to skip adding the CSS automatically since it's being imported above
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  const router = useRouter();

  if (clientGA4MeasurementID()) {
    // Hook Google Analytics to router page changes.
    useEffect(() => {
      function handleRouteChange(url, { shallow }) {
        onPageView(url);
      }
      router.events.on("routeChangeComplete", handleRouteChange);
      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }, []);
  }

  // Add effect to scroll to top of page on route change.
  useEffect(() => {
    router.events.on("routeChangeComplete", (url, { shallow }) => {
      document.getElementById("title").scrollIntoView();
    });
  }, []);

  return <Component {...pageProps} />;
}

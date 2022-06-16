import "../styles/global.scss";

// Font Awesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

// Tell Font Awesome to skip adding the CSS automatically since it's being imported above
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

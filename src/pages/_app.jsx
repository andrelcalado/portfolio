import "../styles/globals.css";
import StyledComponentsRegistry from "../lib/registry";

export default function App({ Component, pageProps }) {
  return (
    <StyledComponentsRegistry>
      <Component {...pageProps} />
    </StyledComponentsRegistry>
  );
}

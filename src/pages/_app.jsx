import "../styles/globals.css";
import StyledComponentsRegistry from "../lib/registry";
import { Inter } from "next/font/google";

const roboto = Inter({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <StyledComponentsRegistry>
      <div className={roboto.className}>
        <Component {...pageProps} />
      </div>
    </StyledComponentsRegistry>
  );
}

import { geist } from "@/fonts/geist";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={geist.className}>
      <Component {...pageProps} />;
    </main>
  );
}

import { BASEPATH, PAGE_TITLE } from "@/constants";
import { ThemeProvider } from "@/context/theme";
import { geist } from "@/fonts/geist";
import config from "@/shared/config";
import "@/styles/globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{PAGE_TITLE}</title>
        <link rel="icon" href={`${BASEPATH}/favicon.ico`} />
      </Head>
      <ThemeProvider>
        <main className={geist.className}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
      {config.gtmId && <GoogleTagManager gtmId={config.gtmId} />}
    </>
  );
}

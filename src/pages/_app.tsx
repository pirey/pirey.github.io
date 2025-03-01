import { BASEPATH, PAGE_TITLE } from "@/constants";
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
        {config.gtmId && <GoogleTagManager gtmId={config.gtmId} />}
      </Head>
      <main className={geist.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

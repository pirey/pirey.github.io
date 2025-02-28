import { Header } from "@/components/header";
import { PAGE_TITLE } from "@/constants";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>{PAGE_TITLE}</title>
      </Head>
      <Header />
    </>
  );
}

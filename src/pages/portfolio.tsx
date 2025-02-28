import { Header } from "@/components/header";
import { PAGE_TITLE } from "@/constants";
import Head from "next/head";

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>Portfolio | {PAGE_TITLE}</title>
      </Head>
      <Header />
    </>
  );
}

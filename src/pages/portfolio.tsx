import { Content } from "@/components/content";
import { Header } from "@/components/header";
import { PAGE_TITLE } from "@/constants";
import Head from "next/head";

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>{`Portfolio | ${PAGE_TITLE}`}</title>
      </Head>
      <Header />
      <Content>
        <h2 className="text-2xl font-black">Portfolio</h2>
        <div className="py-10">Coming soon.</div>
      </Content>
    </>
  );
}

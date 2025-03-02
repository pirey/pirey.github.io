import { Content } from "@/components/content";
import { TopNavBar } from "@/components/navbar";
import { PAGE_TITLE } from "@/constants";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>{PAGE_TITLE}</title>
      </Head>
      <TopNavBar />
      <Content>
        <h2 className="text-2xl font-black">Teal</h2>
        <div className="py-10">
          Not blue, nor green, but something in between.
        </div>
      </Content>
    </>
  );
}

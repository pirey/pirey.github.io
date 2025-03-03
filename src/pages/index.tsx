import { Content } from "@/components/content";
import { Heading } from "@/components/heading";
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
        <Heading>Teal</Heading>
        <div className="py-10">
          Not blue, nor green, but something in between.
        </div>
      </Content>
    </>
  );
}

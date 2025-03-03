import { Content } from "@/components/content";
import { Heading } from "@/components/heading";
import { TopNavBar } from "@/components/navbar";
import { PAGE_TITLE } from "@/constants";
import Head from "next/head";

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>{`Projects | ${PAGE_TITLE}`}</title>
      </Head>
      <TopNavBar />
      <Content>
        <Heading>Projects</Heading>
        <div className="py-10">Coming soon.</div>
      </Content>
    </>
  );
}

import { Content } from "@/components/content";
import { Footer } from "@/components/footer";
import { PageLayout } from "@/components/layout";
import { TopNavBar } from "@/components/navbar";
import { PAGE_TITLE } from "@/constants";
import Head from "next/head";

export default function HomePage() {
  return (
    <PageLayout>
      <Head>
        <title>{PAGE_TITLE}</title>
      </Head>
      <TopNavBar />
      <Content className="flex flex-col items-center justify-center">
        <h2 className="text-center text-5xl font-black">Yeri Pratama</h2>
        <p className="pt-2 pb-10">Personal website and weblogs</p>
      </Content>
      <Footer />
    </PageLayout>
  );
}

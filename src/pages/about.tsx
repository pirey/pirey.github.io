import { Content } from "@/components/content";
import { TopNavBar } from "@/components/navbar";
import { PAGE_TITLE } from "@/constants";
import Head from "next/head";
import Image from "next/image";
import pp from "@/assets/pp.jpg";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>{PAGE_TITLE}</title>
      </Head>
      <TopNavBar />
      <Content>
        <h2 className="text-2xl font-black">About Me</h2>
        <div className="py-10">
          <div className="flex flex-col items-center gap-x-10 sm:flex-row sm:items-start">
            <Image src={pp} alt="Me" className="mb-8 h-32 w-32 rounded-full" />
            <div>
              <p className="mb-8">
                I&apos;m a software developer with a strong focus on web app
                development. With years of experience building and optimizing
                applications, I enjoy crafting clean, efficient, and
                user-friendly solutions for seamless digital experiences.
              </p>

              <p className="mb-8">
                I&apos;m always exploring new technologies, refining my skills,
                and tackling interesting challenges. If you&apos;re looking for
                someone passionate about building great web applications, feel
                free to reach out!
              </p>

              <ul className="list-inside list-disc">
                <li>
                  <Link href="https://github.com/pirey" className="underline">
                    Github
                  </Link>
                </li>
                <li className="col">
                  <Link
                    href="https://www.linkedin.com/in/yeri-pratama/"
                    className="underline"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li className="col">
                  <Link href="https://twitter.com/_pirey" className="underline">
                    Twitter
                  </Link>
                </li>
                <li className="col">
                  <Link
                    href="mailto:mail@yeripratama.com?subject=Hello"
                    className="underline"
                  >
                    Email
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}

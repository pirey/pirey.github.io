import { Content } from "@/components/content";
import { TopNavBar } from "@/components/navbar";
import { PAGE_TITLE } from "@/constants";
import Head from "next/head";
import Image from "next/image";
import pp from "@/assets/pp.jpg";
import Link from "next/link";
import { Envelope, Github, LinkedIn, Twitter } from "@/components/icons";
import { Heading } from "@/components/heading";
import { LabelBadge } from "@/components/badge";

function ContactIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-700/40 text-gray-700">
      {children}
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>{PAGE_TITLE}</title>
      </Head>
      <TopNavBar />
      <Content>
        <Heading>About Me</Heading>
        <div className="py-10">
          <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-start">
            <div className="flex flex-col">
              <Image
                src={pp}
                alt="Me"
                className="mb-8 h-32 w-32 rounded-full"
              />
              <ul className="flex gap-2">
                <li>
                  <Link href="https://github.com/pirey">
                    <ContactIcon>
                      <Github />
                    </ContactIcon>
                  </Link>
                </li>
                <li className="col">
                  <Link href="https://www.linkedin.com/in/yeri-pratama/">
                    <ContactIcon>
                      <LinkedIn />
                    </ContactIcon>
                  </Link>
                </li>
                <li className="col">
                  <Link href="https://twitter.com/_pirey">
                    <ContactIcon>
                      <Twitter />
                    </ContactIcon>
                  </Link>
                </li>
                <li className="col">
                  <Link href="mailto:mail@yeripratama.com?subject=Hello">
                    <ContactIcon>
                      <Envelope />
                    </ContactIcon>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-6">
                I&apos;m a software developer with a strong focus on web app
                development.
              </p>

              <div className="mb-6">
                <p>I am comfortable to work on projects using:</p>

                <div className="flex flex-wrap gap-x-2 gap-y-1 pt-2">
                  <LabelBadge>JavaScript / TypeScript / NextJS</LabelBadge>
                  <LabelBadge>Python / Flask</LabelBadge>
                  <LabelBadge>PHP / Laravel</LabelBadge>
                  <LabelBadge>SQL</LabelBadge>
                  <LabelBadge>React</LabelBadge>
                  <LabelBadge>TailwindCSS</LabelBadge>
                </div>
              </div>

              <div className="mb-6">
                <p>I have previously work using the following tech:</p>

                <div className="flex flex-wrap gap-x-2 gap-y-1 pt-2">
                  <LabelBadge>Go</LabelBadge>
                  <LabelBadge>Ruby</LabelBadge>
                  <LabelBadge>React Native</LabelBadge>
                  <LabelBadge>AngularJS</LabelBadge>
                  <LabelBadge>Ionic Framework</LabelBadge>
                  <LabelBadge>ElasticSearch</LabelBadge>
                  <LabelBadge>Redis</LabelBadge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}

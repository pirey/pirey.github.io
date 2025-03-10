import { Content } from "@/components/content";
import { TopNavBar } from "@/components/navbar";
import { PAGE_TITLE } from "@/constants";
import Head from "next/head";
import Image from "next/image";
import pp from "@/assets/pp.jpg";
import { Envelope, Github, LinkedIn, Twitter } from "@/components/icons";
import { Heading } from "@/components/heading";
import { LabelBadge, LabelBadgeList } from "@/components/badge";

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
            <section id="info">
              <div className="flex flex-col">
                <Image
                  src={pp}
                  alt="Me"
                  className="mb-8 h-32 w-32 rounded-full"
                />
                <ul className="flex gap-2">
                  <li>
                    <a
                      href="https://github.com/pirey"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ContactIcon>
                        <Github />
                      </ContactIcon>
                    </a>
                  </li>
                  <li className="col">
                    <a href="https://www.linkedin.com/in/yeri-pratama/">
                      <ContactIcon>
                        <LinkedIn />
                      </ContactIcon>
                    </a>
                  </li>
                  <li className="col">
                    <a
                      href="https://twitter.com/_pirey"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ContactIcon>
                        <Twitter />
                      </ContactIcon>
                    </a>
                  </li>
                  <li className="col">
                    <a
                      href="mailto:mail@yeripratama.com?subject=Hello"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ContactIcon>
                        <Envelope />
                      </ContactIcon>
                    </a>
                  </li>
                </ul>
              </div>
            </section>
            <section id="content">
              <p className="mb-6">
                I&apos;m a software developer with a strong focus on web app
                development.
              </p>

              <article>
                <h3 className="mb-4 font-bold">Tech Stack</h3>

                <div className="mb-6">
                  <p>I am comfortable to work on projects using:</p>

                  <LabelBadgeList>
                    <LabelBadge>JavaScript / TypeScript / NextJS</LabelBadge>
                    <LabelBadge>Python / Flask</LabelBadge>
                    <LabelBadge>PHP / Laravel</LabelBadge>
                    <LabelBadge>SQL</LabelBadge>
                    <LabelBadge>React</LabelBadge>
                    <LabelBadge>TailwindCSS</LabelBadge>
                  </LabelBadgeList>
                </div>

                <div className="mb-6">
                  <p>I have previously work using the following tech:</p>

                  <LabelBadgeList>
                    <LabelBadge>Go</LabelBadge>
                    <LabelBadge>Ruby</LabelBadge>
                    <LabelBadge>React Native</LabelBadge>
                    <LabelBadge>AngularJS</LabelBadge>
                    <LabelBadge>Ionic Framework</LabelBadge>
                    <LabelBadge>ElasticSearch</LabelBadge>
                    <LabelBadge>Redis</LabelBadge>
                  </LabelBadgeList>
                </div>
              </article>

              <article>
                <h3 className="mb-4 font-bold">Work</h3>
                <ul className="list-inside list-disc">
                  <li>2014-2018 IDwebhost</li>
                  <li>2018-2019 WhatsHalal</li>
                  <li>2019-2021 Pener ID</li>
                  <li>2021-2024 AccelByte</li>
                </ul>

                <p className="pt-4">
                  I&apos;m also available for freelance work on a project-based
                  contract.
                </p>
              </article>
            </section>
          </div>
        </div>
      </Content>
    </>
  );
}

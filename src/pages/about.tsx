import { Content } from "@/components/content";
import { TopNavBar } from "@/components/navbar";
import { PAGE_TITLE } from "@/constants";
import Head from "next/head";
import Image from "next/image";
import pp from "@/assets/pp.jpg";
import { Envelope, Github, LinkedIn, Twitter } from "@/components/icons";
import { Heading } from "@/components/heading";
import { BadgeList, LabelBadge, TechBadge } from "@/components/badge";
import { PageLayout } from "@/components/layout";
import { Footer } from "@/components/footer";

function ContactIcon({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`
        border-fg-light/40 flex h-8 w-8 items-center justify-center rounded-md
        border
        dark:border-fg-dark/40
      `}
    >
      {children}
    </div>
  );
}

export default function AboutPage() {
  return (
    <PageLayout>
      <Head>
        <title>{PAGE_TITLE}</title>
      </Head>
      <TopNavBar />
      <Content>
        <Heading>About Me</Heading>
        <div className="py-10">
          <div
            className={`
              flex flex-col items-center gap-10
              sm:items-start
            `}
          >
            <section id="info">
              <article className="flex flex-col items-center">
                <Image
                  src={pp}
                  alt="Me"
                  className="h-40 w-40 rounded-md shadow-sm"
                />
                <h2 className={`
                  pt-8 font-medium
                  sm:self-start
                `}>Available at:</h2>
                <ul className="flex gap-2 pt-2">
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
              </article>
            </section>
            <section id="content">
              <p>
                I&apos;m a software developer with a strong focus on web app
                development.
              </p>

              <article className="hidden pt-10">
                <h3 className="font-bold">Tech Stack</h3>

                <div className="pt-4">
                  <p>I am comfortable to work on projects using:</p>

                  <BadgeList>
                    <TechBadge tech="JavaScript" />
                    <TechBadge tech="TypeScript" />
                    <TechBadge tech="NodeJS" />
                    <TechBadge tech="Express" />
                    <TechBadge tech="NextJS" />
                    <TechBadge tech="ReactJS" />
                    <TechBadge tech="Python" />
                    <TechBadge tech="Flask" />
                    <TechBadge tech="PHP" />
                    <TechBadge tech="Laravel" />
                    <TechBadge tech="PostgreSQL" />
                    <TechBadge tech="MySQL" />
                    <TechBadge tech="TailwindCSS" />
                  </BadgeList>
                </div>

                <div className="pt-4">
                  <p>I have previously work using:</p>

                  <BadgeList>
                    <TechBadge tech="Go" />
                    <TechBadge tech="Ruby" />
                    <TechBadge tech="React Native" />
                    <TechBadge tech="AngularJS" />
                    <TechBadge tech="Ionic Framework" />
                    <TechBadge tech="ElasticSearch" />
                    <TechBadge tech="Redis" />
                    <TechBadge tech="MaterialUI" />
                    <TechBadge tech="Bootstrap" />
                    <TechBadge tech="AntDesign" />
                    <TechBadge tech="socket.io" />
                    <TechBadge tech="CodeIgniter" />
                  </BadgeList>
                </div>
              </article>

              <article className="pt-6">
                <h3 className="font-bold">Work</h3>

                <p className="pt-4">I have worked professionally at:</p>

                <ul className="list-inside list-disc pt-4">
                  <li>2014-2018 IDwebhost</li>
                  <li>2018-2019 WhatsHalal</li>
                  <li>2019-2021 Pener ID</li>
                  <li>2021-2024 AccelByte</li>
                  <li>2025-Now Self-Employed</li>
                </ul>

                <div className="pt-4">
                  <LabelBadge>I&apos;m <strong>available for hire</strong></LabelBadge>
                </div>
              </article>
            </section>
          </div>
        </div>
      </Content>
      <Footer />
    </PageLayout>
  );
}

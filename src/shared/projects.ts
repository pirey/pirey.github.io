import chatonomyWidget from "@/assets/projects/chatonomy/chat-widget.png";
import chatonomy from "@/assets/projects/chatonomy/chatonomy.png";
import dashing from "@/assets/projects/dashing/dashing.png";
import distributor from "@/assets/projects/distributor/distributor.png";
import inibakatkuFrontpage from "@/assets/projects/inibakatku/frontpage.png";
import inibakatkuRegistration from "@/assets/projects/inibakatku/registration.png";
import inibakatkuTestInstruction from "@/assets/projects/inibakatku/test-instruction.png";
import inibakatkuTestmain from "@/assets/projects/inibakatku/test-main.png";
import inibakatkuTest from "@/assets/projects/inibakatku/test.png";
import jejualanFb from "@/assets/projects/jejualan-fb/jejualan-fb.png";
import jejualanMobile2 from "@/assets/projects/jejualan-mobile/jejualan-mobile-2.png";
import jejualanMobile from "@/assets/projects/jejualan-mobile/jejualan-mobile.png";
import oliviaBot from "@/assets/projects/olivia/olivia-bot.png";
import oliviaWebDashboard from "@/assets/projects/olivia/web-dashboard.png";
import ongkirku2 from "@/assets/projects/ongkirku/ongkirku-2.png";
import ongkirku from "@/assets/projects/ongkirku/ongkirku.png";
import uruglasses from "@/assets/projects/uruglasses/uruglasses.png";
import whConsumerWeb from "@/assets/projects/wh-consumer-web/whatshalal-consumer-web.jpg";
import whICODashboard from "@/assets/projects/wh-tsp/wh-ico-dashboard.png";
import whICO from "@/assets/projects/wh-tsp/wh-ico.png";
import { StaticImageData } from "next/image";

export type Project = {
  title: string;
  slug: string;
  description: string;
  year: string;
  tags: string[];
  role: string;
  roleDescription: string;
  images: {
    orientation: "landscape" | "portrait";
    alt: string;
    src: StaticImageData;
  }[];
  links?: { label: string; url: string }[];
};

const projects: Project[] = [
  {
    title: "Chatonomy",
    role: "Fullstack Developer",
    tags: [
      "NodeJS",
      "Express",
      "socket.io",
      "Elasticsearch",
      "MySQL",
      "AngularJS",
    ],
    description:
      "A chat platform that lets you provide realtime chat support for your customers. This project includes a pluggable chat widget for customers, and web dashboard for internal users.",
    images: [
      {
        orientation: "landscape",
        alt: "Chat Dashboard",
        src: chatonomy,
      },
      {
        orientation: "landscape",
        alt: "Chat Widget",
        src: chatonomyWidget,
      },
    ],
    links: [
      {
        label: "IDwebhost",
        url: "https://idwebhost.com",
      },
    ],
    roleDescription: "",
    slug: "chatonomy",
    year: "2017",
  },
  {
    title: "Jejualan Statistic Dashboard",
    role: "Fullstack Developer",
    tags: ["Ruby", "dashing.io", "CoffeeScript"],
    description:
      "Internal dashboard for monitoring Jejualan's statistics. The data is provided by Jejualan database.",
    images: [
      {
        orientation: "landscape",
        alt: "Statistic Dashboard",
        src: dashing,
      },
    ],
    roleDescription: "",
    slug: "jejualan-dashing",
    year: "2017",
  },
  {
    title: "Distributor POS",
    role: "Fullstack Developer",
    tags: ["CodeIgniter", "PHP", "MySQL"],
    description:
      "A dashboard app for a distributor to manage their products and sales.",
    images: [
      {
        orientation: "landscape",
        alt: "Dashboard",
        src: distributor,
      },
    ],
    roleDescription: "",
    slug: "distributor-pos",
    year: "2016",
  },
  {
    title: "Inibakatku",
    role: "Fullstack Developer",
    tags: ["Laravel", "PHP", "JavaScript", "jQuery", "MySQL", "Bootstrap"],
    description:
      "A decision support system for high school students that helps them choose which majors to take.",
    images: [
      {
        orientation: "landscape",
        alt: "Front Page",
        src: inibakatkuFrontpage,
      },
      {
        orientation: "landscape",
        alt: "Registration",
        src: inibakatkuRegistration,
      },
      {
        orientation: "landscape",
        alt: "Test Instruction",
        src: inibakatkuTestInstruction,
      },
      {
        orientation: "landscape",
        alt: "Test Main Page",
        src: inibakatkuTestmain,
      },
      {
        orientation: "landscape",
        alt: "Test Page",
        src: inibakatkuTest,
      },
    ],
    roleDescription: "",
    slug: "inibakatku",
    year: "2016",
  },
  {
    title: "Jejualan Facebook Market",
    role: "Fullstack Developer",
    tags: ["Facebook App", "PHP", "MySQL"],
    description:
      "A custom facebook app built specifically for Jejualan e-commerce platform that lets the merchant to sell their products from Jejualan in facebook page.",
    images: [
      {
        orientation: "landscape",
        alt: "App within FB Page",
        src: jejualanFb,
      },
    ],
    roleDescription: "",
    slug: "jejualan-fb-market",
    year: "2016",
  },
  {
    title: "Jejualan App",
    role: "Fullstack Developer",
    tags: ["Ionic Framework", "JavaScript", "AngularJS", "Android", "iOS"],
    description: "Mobile app for Jejualan platform.",
    images: [
      {
        orientation: "portrait",
        alt: "Main Page",
        src: jejualanMobile,
      },
      {
        orientation: "portrait",
        alt: "Shopping Cart",
        src: jejualanMobile2,
      },
    ],
    roleDescription: "",
    slug: "jejualan-app",
    year: "2016",
  },
  {
    title: "Ongkirku App",
    role: "Fullstack Developer",
    tags: ["Ionic Framework", "JavaScript", "AngularJS", "Android", "iOS"],
    description: "Mobile app for tracking shipping cost for various vendors.",
    images: [
      {
        orientation: "portrait",
        alt: "Track Shipping Cost",
        src: ongkirku,
      },
      {
        orientation: "portrait",
        alt: "Shipping Cost List",
        src: ongkirku2,
      },
    ],
    roleDescription: "",
    slug: "ongkirku-app",
    year: "2017",
  },
  {
    title: "WhatsHalal Token ICO",
    role: "Frontend Developer",
    tags: ["JavaScript", "ReactJS"],
    description:
      "Dashboard to buy and monitor their WhatsHalal Tokens ICO (Initial Coin Offering), a virtual cryptocurrency from WhatsHalal.",
    images: [
      {
        orientation: "landscape",
        alt: "Signup Page",
        src: whICO,
      },
      {
        orientation: "landscape",
        alt: "Dashboard Page",
        src: whICODashboard,
      },
    ],
    roleDescription: "",
    slug: "wh-token",
    year: "2019",
  },
  {
    title: "WhatsHalal Food Delivery Service",
    role: "Frontend Developer",
    tags: ["JavaScript", "ReactJS"],
    description: "Front page for WhatsHalal food delivery service.",
    images: [
      {
        orientation: "portrait",
        alt: "Home Page",
        src: whConsumerWeb,
      },
    ],
    roleDescription: "",
    slug: "wh-food-delivery",
    year: "2018",
  },
  {
    title: "Uruglasses",
    role: "Fullstack Developer",
    tags: ["JavaScript", "ReactJS", "Instagram API", "Firebase"],
    description: "An online shop to sell products from instagram posts.",
    images: [
      {
        orientation: "landscape",
        alt: "Main Page",
        src: uruglasses,
      },
    ],
    roleDescription: "",
    slug: "uruglasses",
    year: "2019",
  },
  {
    title: "SingaporeJobsParttimeSG",
    role: "Fullstack Developer",
    tags: ["Python", "Telegram Bot API", "ReactJS", "PostgreSQL"],
    description:
      "Platform for employers to submit job openings which can be monitored by job seekers via a Telegram channel.",
    links: [
      {
        label: "Bot",
        url: "https://web.telegram.org/#/im?p=@JobSGBot",
      },
      {
        label: "Channel",
        url: "https://web.telegram.org/#/im?p=@SingaporeJobsParttimeSG",
      },
    ],
    images: [
      {
        orientation: "landscape",
        alt: "Olivia Bot",
        src: oliviaBot,
      },
      {
        orientation: "landscape",
        alt: "Web Dashboard",
        src: oliviaWebDashboard,
      },
    ],
    roleDescription:
      "Design and analyze system requirements. Build telegram bot for employer to submit job vacancies, and pay fees with telegram payment API. Build web dashboard to manage job submissions.",
    slug: "job-board",
    year: "2020",
  },
];
export const sortedProjects = projects.sort(
  (a, b) => Number(b.year) - Number(a.year),
);

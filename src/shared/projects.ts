import chatonomyWidget from "@/assets/projects/chatonomy/chat-widget.webp";
import chatonomy from "@/assets/projects/chatonomy/chatonomy.webp";
import dashing from "@/assets/projects/dashing/dashing.webp";
import distributor from "@/assets/projects/distributor/distributor.webp";
import inibakatkuFrontpage from "@/assets/projects/inibakatku/frontpage.webp";
import inibakatkuRegistration from "@/assets/projects/inibakatku/registration.webp";
import inibakatkuTestInstruction from "@/assets/projects/inibakatku/test-instruction.webp";
import inibakatkuTestmain from "@/assets/projects/inibakatku/test-main.webp";
import inibakatkuTest from "@/assets/projects/inibakatku/test.webp";
import jejualanFb from "@/assets/projects/jejualan-fb/jejualan-fb.webp";
import jejualanMobile2 from "@/assets/projects/jejualan-mobile/jejualan-mobile-2.webp";
import jejualanMobile from "@/assets/projects/jejualan-mobile/jejualan-mobile.webp";
import oliviaBot from "@/assets/projects/olivia/olivia-bot.webp";
import oliviaWebDashboard from "@/assets/projects/olivia/web-dashboard.webp";
import ongkirku2 from "@/assets/projects/ongkirku/ongkirku-2.webp";
import ongkirku from "@/assets/projects/ongkirku/ongkirku.webp";
import uruglasses from "@/assets/projects/uruglasses/uruglasses.webp";
import whConsumerWeb from "@/assets/projects/wh-consumer-web/whatshalal-consumer-web.webp";
import whICODashboard from "@/assets/projects/wh-tsp/wh-ico-dashboard.webp";
import whICO from "@/assets/projects/wh-tsp/wh-ico.webp";
import komoditasHome from "@/assets/projects/komoditas-pasar/homepage.webp";
import komoditasStatistic from "@/assets/projects/komoditas-pasar/statistic.webp";
import maviapulsa from "@/assets/projects/maviapulsa/landing.webp";
import mgHome from "@/assets/projects/mitragamers/mg-home.webp";
import mgTopup from "@/assets/projects/mitragamers/mg-topup.webp";
import mgJoki from "@/assets/projects/mitragamers/mg-joki.webp";
import mgAkun from "@/assets/projects/mitragamers/mg-akun.webp";
import mgLogin from "@/assets/projects/mitragamers/mg-login.webp";
import mgDashboard from "@/assets/projects/mitragamers/mg-dashboard.webp";
import mgCustomTheme from "@/assets/projects/mitragamers/mg-custom-theme.webp";
import sureProjectList from "@/assets/projects/project-management/sure-project-list.webp";
import surePlanDetail from "@/assets/projects/project-management/sure-plan-detail.webp";
import surePlanList from "@/assets/projects/project-management/sure-plan-list.webp";
import sureProjectSetting from "@/assets/projects/project-management/sure-project-setting.webp";
import sureUserManagement from "@/assets/projects/project-management/sure-user-management.webp";
import vpChatPage from "@/assets/projects/viapulsa-chat/vp-chat-page.webp";
import vpChatFilter from "@/assets/projects/viapulsa-chat/vp-chat-filter.webp";
import vpChatShortcuts from "@/assets/projects/viapulsa-chat/vp-chat-shortcuts.webp";
import vpChatLogin from "@/assets/projects/viapulsa-chat/vp-chat-login.webp";
import { StaticImageData } from "next/image";

export type ProjectClient = {
  name: string;
  url?: string;
};

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
  client?: ProjectClient;
};

const projects: Project[] = [
  {
    title: "Viapulsa Customer Chat Panel",
    description:
      "Chat panel for Viapulsa agents to handle customer realtime chats",
    tags: ["ReactJS", "Material UI"],
    role: "Frontend Developer",
    roleDescription:
      "The chat panel allowed Viapulsa agents to manage and respond to customer inquiries efficiently, streamlining communication and support.",
    images: [
      {
        orientation: "landscape",
        alt: "Chat Page",
        src: vpChatPage,
      },
      {
        orientation: "landscape",
        alt: "Chat Page",
        src: vpChatFilter,
      },
      {
        orientation: "landscape",
        alt: "Chat Shortcuts",
        src: vpChatShortcuts,
      },
      {
        orientation: "landscape",
        alt: "Login",
        src: vpChatLogin,
      },
    ],
    slug: "viapulsa-customer-chat-panel",
    year: "2025",
    links: [
      {
        label: "viapulsa",
        url: "https://chat.viapulsa.id",
      },
    ],
    client: {
      name: "Viapulsa",
      url: "https://viapulsa.co.id",
    },
  },
  {
    title: "Construction Project Management",
    description: "A collaborative tool for planning construction projects",
    tags: ["Laravel", "TailwindCSS", "MySQL", "ReactJS"],
    role: "Fullstack Developer",
    roleDescription: "",
    images: [
      {
        orientation: "landscape",
        alt: "Plan Detail",
        src: surePlanDetail,
      },
      {
        orientation: "landscape",
        alt: "Plan List",
        src: surePlanList,
      },
      {
        orientation: "landscape",
        alt: "Project List",
        src: sureProjectList,
      },
      {
        orientation: "landscape",
        alt: "Project Setting",
        src: sureProjectSetting,
      },
      {
        orientation: "landscape",
        alt: "User Management",
        src: sureUserManagement,
      },
    ],
    slug: "project-management",
    year: "2023",
    client: {
      name: "PT. Sinergi Inti Teknovasi",
      url: "https://sintitek.co.id",
    },
  },
  {
    title: "MitraGamers Client Website",
    description:
      "Platform which enable clients to sell various game topup service.",
    tags: ["NextJS", "TailwindCSS"],
    role: "Frontend Developer",
    roleDescription: "Build a customizable website for MitraGamers clients.",
    images: [
      {
        orientation: "portrait",
        alt: "Homepage",
        src: mgHome,
      },
      {
        orientation: "portrait",
        alt: "Topup",
        src: mgTopup,
      },
      {
        orientation: "portrait",
        alt: "Joki Mobile Legends",
        src: mgJoki,
      },
      {
        orientation: "portrait",
        alt: "Buy Game Account",
        src: mgAkun,
      },
      {
        orientation: "landscape",
        alt: "Login",
        src: mgLogin,
      },
      {
        orientation: "portrait",
        src: mgDashboard,
        alt: "Dashboard",
      },
      {
        orientation: "portrait",
        src: mgCustomTheme,
        alt: "Custom Theme",
      },
    ],
    slug: "mitragamers",
    year: "2025",
    links: [
      {
        label: "mitragamers",
        url: "https://demo.mitragamers.com",
      },
    ],
    client: {
      name: "Mitragamers",
      url: "https://mitragamers.com",
    },
  },
  {
    title: "Maviapulsa",
    description: "Platform to convert phone credit (pulsa) into cash.",
    tags: ["NextJS", "TailwindCSS"],
    role: "Fullstack Developer",
    roleDescription:
      "Responsible for translating UI mockup into fully functioning web pages along with the backend task to provide the data.",
    images: [
      {
        orientation: "portrait",
        alt: "Homepage",
        src: maviapulsa,
      },
    ],
    slug: "maviapulsa",
    year: "2024",
    links: [
      {
        label: "maviapulsa",
        url: "https://maviapulsa.com",
      },
    ],
    client: {
      name: "Maviapulsa",
      url: "https://maviapulsa.com",
    },
  },
  {
    title: "Komoditas Pasar Madiun",
    description:
      "Web portal for monitoring commodity prices in Madiun regency.",
    tags: ["Laravel", "MySQL", "TailwindCSS"],
    role: "Fullstack Developer",
    roleDescription:
      "Responsible for translating UI mockup into fully functioning web pages along with the backend task to provide the data.",
    images: [
      {
        orientation: "portrait",
        alt: "Homepage",
        src: komoditasHome,
      },
      {
        orientation: "portrait",
        alt: "Statistic",
        src: komoditasStatistic,
      },
    ],
    slug: "komoditas-pasar-madiun",
    year: "2024",
  },
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
      "A chat platform that lets you provide realtime chat support for your customers.",
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
    roleDescription:
      "I built chat dashboard for agents to handle incoming chats from end users using NodeJS—Express with socket.io for duplex communication, Elasticsearch for fast message searching, and MySQL as persistent storage. I also built the embeddable chat widget using AngularJS.",
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
      "I designed and analyzed the system requirements. I built the telegram bot for employer to submit job vacancies, and pay fees with telegram payment API. I also built the web dashboard to manage job submissions.",
    slug: "job-board",
    year: "2020",
    client: {
      name: "NEXT3LABS PTE. LTD.",
      url: "https://recordowl.com/company/next3labs-pte-ltd",
    },
  },
];
export const sortedProjects = projects.sort(
  (a, b) => Number(b.year) - Number(a.year),
);

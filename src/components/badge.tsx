import {
  AngularJS,
  AntDesign,
  Bootstrap,
  CodeIgniter,
  CoffeeScript,
  ElasticSearch,
  Express,
  Firebase,
  Flask,
  Golang,
  IonicFramework,
  JavaScript,
  JQuery,
  Laravel,
  MaterialUI,
  MySQL,
  NextJS,
  NodeJSIcon,
  Php,
  PostgreSQL,
  Python,
  ReactJS,
  Redis,
  Ruby,
  SocketIO,
  TailwindCSS,
  TypeScript,
} from "@/components/icons";
export function LabelBadge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`
        border-accent/20 inline-flex items-center justify-between gap-x-2
        rounded-full border px-3 text-sm
        dark:border-accent
        ${className}
      `}
    >
      {children}
    </span>
  );
}

export function BadgeList({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-wrap gap-x-2 gap-y-2 pt-2">{children}</div>;
}

export function TechIcon({ tech }: { tech: string }) {
  switch (tech.toLowerCase()) {
    case "tailwindcss":
      return <TailwindCSS className="size-4" />;
    case "materialui":
      return <MaterialUI />;
    case "reactjs":
    case "react native":
      return <ReactJS className="size-4" />;
    case "nextjs":
      return <NextJS className="dark:text-fg-dark" />;
    case "javascript":
      return <JavaScript />;
    case "socket.io":
      return <SocketIO className="dark:stroke-fg-dark" />;
    case "express":
      return <Express className="dark:fill-fg-dark" />;
    case "nodejs":
      return <NodeJSIcon />;
    case "typescript":
      return <TypeScript />;
    case "python":
      return <Python />;
    case "flask":
      return <Flask />;
    case "php":
      return <Php />;
    case "laravel":
      return <Laravel />;
    case "codeigniter":
      return <CodeIgniter />;
    case "postgresql":
      return <PostgreSQL />;
    case "mysql":
      return <MySQL />;
    case "go":
      return <Golang />;
    case "ruby":
      return <Ruby />;
    case "angularjs":
      return <AngularJS />;
    case "ionic framework":
      return <IonicFramework />;
    case "elasticsearch":
      return <ElasticSearch />;
    case "redis":
      return <Redis />;
    case "jquery":
      return <JQuery />;
    case "firebase":
      return <Firebase />;
    case "coffeescript":
      return <CoffeeScript />;
    case "bootstrap":
      return <Bootstrap />;
    case "antdesign":
      return <AntDesign />;
    default:
      return null;
  }
}

export function TechBadge({ tech }: { tech: string }) {
  return (
    <LabelBadge>
      <TechIcon tech={tech} /> <span>{tech}</span>
    </LabelBadge>
  );
}

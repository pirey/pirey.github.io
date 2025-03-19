import { patternBgImage } from "@/constants";

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`
        bg-bg-light text-fg-light flex min-h-screen flex-col
        dark:bg-bg-dark dark:text-fg-dark
      `}
      style={{
        backgroundImage: patternBgImage,
      }}
    >
      {children}
    </div>
  );
}

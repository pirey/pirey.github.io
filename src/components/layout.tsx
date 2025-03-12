export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-bg-light dark:bg-bg-dark text-fg-light dark:text-fg-dark flex min-h-screen flex-col">
      {children}
    </div>
  );
}

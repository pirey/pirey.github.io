export function LabelBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-accent dark:bg-accent-dark inline-block rounded-full px-3 text-sm text-white">
      {children}
    </span>
  );
}

export function LabelBadgeList({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-wrap gap-x-2 gap-y-1 pt-2">{children}</div>;
}

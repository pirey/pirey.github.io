export function LabelBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-sm bg-gray-500 px-2 text-sm text-white">
      {children}
    </span>
  );
}

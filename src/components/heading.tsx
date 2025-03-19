export function Heading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2 className={`
      text-center text-2xl font-black
      sm:text-left
      ${className}
    `}>
      {children}
    </h2>
  );
}

export function Content(props: { children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-3xl px-4 pt-4">{props.children}</section>
  );
}

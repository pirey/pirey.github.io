export function Content(props: { children: React.ReactNode }) {
  return (
    <section className="mx-auto w-full max-w-3xl flex-1 px-4 pt-4">
      {props.children}
    </section>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="">
      <section className={`
        mx-auto flex max-w-3xl items-center justify-center px-4 py-4 text-xs
        font-medium
        sm:justify-start
      `}>
        &copy; 2016-{year} Yeri Pratama
      </section>
    </footer>
  );
}

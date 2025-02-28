import Image from "next/image";
import Link from "next/link";
import teal from "@/assets/teal.jpeg";
import React from "react";
import { Bars2 } from "@/components/icons";

export function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const background =
    menuOpen || scrolled ? "bg-white/80 backdrop-blur-sm" : "bg-white";
  const shadow = scrolled ? "shadow-sm" : "";
  const headerClass = `${background} ${shadow}`;

  const handleWindowScroll = () => {
    const treshold = 50;
    const offset = window.scrollY;
    if (offset > treshold) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`${headerClass} header fixed top-0 right-0 left-0 z-50 h-16`}
      >
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4">
          <Link href="/" className="flex gap-x-4">
            <Image
              priority
              src={teal}
              width={32}
              height={32}
              alt="Teal"
              className="rounded-full"
            />
            <h2 className="text-xl font-bold" aria-label="Yeri Pratama">
              <span aria-hidden className="hidden sm:inline">
                Yeri Pratama
              </span>
              <span aria-hidden className="inline sm:hidden">
                YP
              </span>
            </h2>
          </Link>
          <span
            role="button"
            aria-label="Menu"
            className="cursor-pointer sm:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Bars2 />
          </span>
          <Menu open={menuOpen} scrolled={scrolled} />
        </div>
      </header>
      <div className="h-16"></div>
    </>
  );
}

function Menu({ open, scrolled }: { open: boolean; scrolled: boolean }) {
  const background =
    open || scrolled ? "bg-white/80 backdrop-blur-sm" : "bg-white";
  const shadow = scrolled ? "shadow-sm" : "";
  const display = open ? "flex flex-col" : "hidden";
  const menuClass = `${background} ${shadow} ${display}`;
  return (
    <ul
      className={`${menuClass} absolute top-full left-0 z-10 w-full gap-x-6 gap-y-6 p-4 sm:static sm:flex sm:w-auto sm:bg-transparent sm:p-0 sm:shadow-none`}
    >
      <li>
        <Link href="/blog">Blog</Link>
      </li>
      <li>
        <Link href="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
    </ul>
  );
}

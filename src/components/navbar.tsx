import teal from "@/assets/teal.jpeg";
import { Bars2 } from "@/components/icons";
import { PAGE_TITLE } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function TopNavBar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const background =
    menuOpen || scrolled ? "bg-white/80 backdrop-blur-sm" : "bg-white";
  const shadow = menuOpen || scrolled ? "shadow-sm" : "";
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
        className={`${headerClass} header fixed top-0 right-0 left-0 z-50`}
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
            <h2 className="text-xl font-bold" aria-label={PAGE_TITLE}>
              <span aria-hidden className="">
                {PAGE_TITLE}
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
          <Menu />
        </div>
        {menuOpen && <MenuMobile />}
      </header>
      <div className="h-16"></div>
    </>
  );
}

function Menu() {
  return (
    <ul className="hidden gap-x-6 p-0 sm:flex">
      <li>
        <Link href="/blog">Blog</Link>
      </li>
      <li>
        <Link href="/projects">Projects</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
    </ul>
  );
}

function MenuMobile() {
  return (
    <ul className="flex flex-col gap-y-6 p-4 sm:p-0">
      <li>
        <Link href="/blog">Blog</Link>
      </li>
      <li>
        <Link href="/projects">Projects</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
    </ul>
  );
}

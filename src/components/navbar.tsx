import teal from "@/assets/teal.jpeg";
import { Bars2, Moon, Sun } from "@/components/icons";
import { PAGE_TITLE, patternBgImage } from "@/constants";
import { useTheme } from "@/context/theme";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export function TopNavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const shouldShowPageTitle = pathname !== "/";

  const background =
    menuOpen || scrolled
      ? "bg-bg-light/80 dark:bg-bg-dark/80 backdrop-blur-sm"
      : `bg-bg-light dark:bg-bg-dark`;
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
        className={`
          ${headerClass}
          header fixed top-0 right-0 left-0 z-50
        `}
        style={{
          backgroundImage: menuOpen || scrolled ? "none" : patternBgImage,
        }}
      >
        <div
          className={`
            mx-auto flex h-16 max-w-3xl items-center justify-between px-4
          `}
        >
          <Link href="/" className="flex gap-x-4">
            <Image
              priority
              src={teal}
              width={32}
              height={32}
              alt={PAGE_TITLE}
              className="rounded-full"
            />
            {shouldShowPageTitle && (
              <h2
                className={`
                  hidden text-xl font-bold
                  sm:block
                `}
                aria-label={PAGE_TITLE}
              >
                {PAGE_TITLE}
              </h2>
            )}
          </Link>
          <MobileMenu onToggleMenu={() => setMenuOpen(!menuOpen)} />
          <Menu />
        </div>
        {menuOpen && <MobileDropdownMenu />}
      </header>
      <div className="h-16"></div>
    </>
  );
}

function Menu() {
  return (
    <ul
      className={`
        hidden gap-x-6 p-0
        sm:flex
      `}
    >
      <li>
        <Link href="/blog">Blog</Link>
      </li>
      <li>
        <Link href="/projects">Works</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <DarkModeToggle
          className={`
            hidden
            sm:inline-block
          `}
        />
      </li>
    </ul>
  );
}

function MobileMenu({ onToggleMenu }: { onToggleMenu: () => void }) {
  return (
    <ul
      className={`
        flex gap-x-4 p-0
        sm:hidden
      `}
    >
      <li>
        <DarkModeToggle className="sm:hidden" />
      </li>
      <li>
        <MobileMenuToggle onClick={onToggleMenu} />
      </li>
    </ul>
  );
}

function MobileMenuToggle({ onClick }: { onClick: () => void }) {
  return (
    <span
      role="button"
      aria-label="Menu"
      className={`
        cursor-pointer
        sm:hidden
      `}
      onClick={onClick}
    >
      <Bars2 />
    </span>
  );
}

function MobileDropdownMenu() {
  return (
    <ul
      className={`
        flex flex-col gap-y-6 p-4
        sm:p-0
      `}
    >
      <li>
        <Link href="/blog">Blog</Link>
      </li>
      <li>
        <Link href="/projects">Works</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
    </ul>
  );
}

function DarkModeToggle({ className }: { className?: string }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div
      role="button"
      aria-label="Toggle Dark Mode"
      onClick={toggleTheme}
      className={`
        group relative size-6 cursor-pointer
        ${className}
      `}
    >
      <div
        className={`
          group-hover:text-fg-dark
          dark:group-hover:text-fg-light
          absolute inset-0 z-20
        `}
      >
        {isDark ? <Sun /> : <Moon />}
      </div>
      <div
        className={`
          transition-scale absolute inset-0 scale-150 rounded-full duration-200
          group-hover:bg-bg-dark group-hover:scale-200
          dark:group-hover:bg-bg-light
        `}
      ></div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import teal from "@/assets/teal.jpeg";

export function Header() {
  return (
    <header className="header">
      <div className="container px-4 mx-auto flex justify-between items-center h-16">
        <Link href="/" className="flex space-x-4">
          <Image
            priority
            src={teal}
            width={32}
            height={32}
            alt="Teal"
            className="rounded-full"
          />
          <h2 className="text-xl font-bold">Yeri Pratama</h2>
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

import Image from "next/image";
import Link from "next/link";
import teal from "@/assets/teal.jpeg";

export function Header() {
  return (
    <header className="header">
      <div className="container mx-auto flex justify-between items-center h-16">
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
        <ul className="flex space-x-2">
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

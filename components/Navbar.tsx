"use client";
import Link from "next/link";
import { FaBug } from "react-icons/fa";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/users", value: "Users" },
    { href: "/issues", value: "Issues" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href={"/"}>
        <FaBug />
      </Link>
      <ul className={"flex space-x-6"}>
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={clsx(
                "hover:text-zinc-800 transition-colors",
                pathname === link.href ? "text-zinc-900" : "text-zinc-500",
              )}
            >
              {link.value}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

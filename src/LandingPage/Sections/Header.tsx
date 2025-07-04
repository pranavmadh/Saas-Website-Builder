"use client";
import Image from "next/image";
import Link from "next/link";
import icon from "@/public/icon_primary.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "FAQ", href: "/faqs" },
  { name: "Contact", href: "/contactus" },
];
export default function Header() {
  const [menu, setMenu] = useState<Boolean>(false);

  const toggleMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setMenu(!menu);
  };
  return (
    <section className={`w-full fixed top-0  h-20 z-50 ${menu && "bg-black"}`}>
      <div className="flex items-center w-full h-full px-10 sm:px-20 justify-between relative">
        <div className="flex gap-3 justify-center items-center">
          <Image width="34" height="34" src={icon} alt="gemini-ai" />
          <h1 className="text-2xl font-bold">Lumio</h1>
        </div>
        <nav className="hidden sm:flex justify-center items-center gap-6">
          {navLinks.map((nav) => (
            <Link
              href={nav.href}
              className="hover:text-primary text-neutral-200 hover:font-semibold"
              key={nav.name}
            >
              {nav.name}
            </Link>
          ))}
        </nav>
        <div className="flex">
          <Link
            href={"/agency/sign-in"}
            className="border p-3 sm:block hidden rounded-md text-white font-semibold border-primary border/20 px-6"
          >
            Login
          </Link>
        </div>
        <div
          className="text-white md:hidden cursor-pointer"
          onClick={toggleMenu}
        >
          {!menu ? <Menu /> : <X />}
        </div>
        {menu && (
          <div className="sm:hidden absolute top-0 right-0 w-screen mt-20  flex flex-col bg-black gap-2 z-50 items-center py-5 rounded-b-2xl shadow">
            {navLinks.map((nav) => (
              <Link
                href={nav.href}
                className="hover:text-primary text-neutral-200 hover:font-semibold"
                key={nav.name}
              >
                {nav.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

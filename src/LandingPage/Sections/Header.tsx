import Image from "next/image";
import Link from "next/link";
import icon from "@/public/icon_primary.png";
import ModeToggle from "@/components/myUi/modeToggle";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "FAQ", href: "/faqa" },
  { name: "Contact", href: "/contactus" },
];
export default function Header() {
  return (
    <section className="w-full fixed top-0  h-20 z-50">
      <div className="flex items-center w-full h-full px-20 justify-between">
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
            href={"/contactus"}
            className="border p-3 sm:block hidden rounded-md text-white font-semibold border-primary border/20"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

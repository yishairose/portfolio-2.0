"use client";
import ThemeToggle from "./theme-toggle";
import Link from "next/link";
import { Edu_AU_VIC_WA_NT_Hand } from "next/font/google";
import { useContact } from "@/app/context/ContactContext";

const edu = Edu_AU_VIC_WA_NT_Hand({
  subsets: ["latin"],
  variable: "--font-edu",
});
function Header() {
  const { setOpen } = useContact();
  return (
    <div className="fixed top-0 z-50 w-screen bg-white/50 filter backdrop-blur dark:bg-black/50">
      <div className="container flex items-center justify-between py-6">
        <div className="">
          <Link
            href="/"
            className={`${edu.variable} font-edu font-extrabold text-yellow-600`}
          >
            JR
          </Link>
        </div>
        <nav>
          <ul className="flex gap-6 space-x-4">
            <li>
              <Link href="/cv">CV</Link>
            </li>
            {/* <li>
            <Link href="/projects">Projects</Link>
          </li> */}
            <li>
              <button onClick={() => setOpen((prev) => !prev)}>Contact</button>
            </li>
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Header;

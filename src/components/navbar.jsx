"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";


function Navbar() {

  const pathname = usePathname()


  const navLinks = [

    { name: "Project", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Education", path: "/education" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];


  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className=" text-[#16f2b3] text-3xl font-bold">
            Qamar Ashfaq
          </Link>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">

          {navLinks.map(({ name, path }) => (
            <li key={name}>
              <Link href={path} className={`block px-4 py-2 no-underline outline-none hover:no-underline text-sm transition-colors duration-100 hover:text-pink-600 ${path === pathname ? "text-pink-600" : "text-white"}`}>
                {name}
              </Link>
            </li>
          ))

          }


        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
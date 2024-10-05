"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-32[px] text-blue-600" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-16 mb-24 text-center text-2xl">
          {/* <Link href="/">
            <h1 className="text-4xl font-semibold">
              Siddharth<span className="text-blue-600">.</span>
            </h1>
          </Link> */}
        </div>
        {/* nav */}
        <SheetClose asChild>
          <nav className="flex flex-col justify-center items-center gap-4">
            {links.map((link, index) => {
              return (
                <SheetClose asChild key={index}>
                  <Link
                    href={link.path}
                    className={` ${
                      link.path === pathname &&
                      "text-blue-600 border-b-2 border-blue-600"
                    }
                  text-xl capitalize hover:text-blue-600 transition-all`}
                  >
                    {link.name}
                  </Link>
                </SheetClose>
              );
            })}
          </nav>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <nav className="h-14 bg-light-gray">
      <div className="h-full flex w-full justify-between items-center max-w-6xl mx-auto">
        <div className="flex gap-10 items-center">
          <Image
            src="/logo.png"
            alt="Logo - cat"
            className=""
            width={39}
            height={44}
            priority
          />
          <Link href="/">Recent articles</Link>
          <Link href="/">About</Link>
        </div>
        <button
          onClick={() => console.log("clicked")}
          className="text-primary flex gap-2 items-center"
        >
          Log in
          <ArrowRightIcon className="w-4" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

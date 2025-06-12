"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Header() {
  const pathname = usePathname();

  const paths = [
    { name: "Home", href: "/" },
    { name: "Our Team", href: "/team" },
    { name: "Events", href: "/events" },
  ];

  return (
    <header className="w-full bg-white shadow-md fixed top-0 z-50">
      {/* application hyper link */}
      <div className="w-full bg-red-700 text-white text-center py-2 overflow-hidden">
        <div className="mx-auto w-fit animate-marquee whitespace-nowrap">
          Applications now open!{" "}
          <Link 
            href="https://docs.google.com/forms/d/e/1FAIpQLSc-FsaWJ_zOGuIUvZyRXGB22FxA33xigO5-HViY4kETdYDIDg/viewform?usp=sf_link"  
            target="_blank" 
            className="underline">
            Click here to apply to UMTA.
          </Link>
        </div>
      </div>

      {/* logo and title */}
      <div className="w-full border-b py-3 px-4 flex items-center justify-between">
        <div className="flex-shrink-0 pl-12">
          <Image src={logo} alt="Logo" width={40} height={40} />
        </div>
        <div className="flex-1 flex justify-center">
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-black text-center">
            Undergraduate Mock Trial Association
          </h1>
        </div>
        <div className="w-[32px]" /> 
      </div>

      {/* nav links */}
      <nav className="w-full border-b py-2 flex justify-center gap-6 text-gray-700 text-sm sm:text-base">
        {paths.map(({ name, href }) => (
          <Link
            href={href}
            key={name}
            legacyBehavior
            passHref
            aria-label={`Navigate to ${name}`}
          >
            <a
              className={`hover:text-gray-700 hover:cursor-pointer transition ${
                pathname === href ? "text-primary font-semibold" : ""
              }`}
            >
              {name}
            </a>
          </Link>
        ))}
      </nav>
    </header>
  );
}

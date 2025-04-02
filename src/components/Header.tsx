"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    const paths = [
        { name: "Home", href: "/" },
        { name: "Our Team", href: "/team" },
        { name: "Events", href: "/events" },
    ];

    return (
        <header className="w-full bg-white shadow-md fixed top-0 z-50">
            <div className="w-full bg-red-700 text-white text-center py-2 whitespace-nowrap overflow-hidden">
                <div className="mx-auto w-fit animate-marquee">
                    Applications now open!{" "}
                    <Link href="/apply" className="underline font-semibold">
                        Click here to apply to UMTA.
                    </Link>
                </div>
            </div>

            {/* 🧭 Nav Bar */}
            <div className="mx-4 md:mx-20 xl:mx-52 flex items-center justify-between py-4">
                {/* Logo Placeholder */}
                <Link href="/" aria-label="Back to home" className="flex-shrink-0">
                    <span className="text-xl font-bold tracking-wide">UMTA</span>
                </Link>

                {/* Navigation Links */}
                <nav className="flex space-x-6 text-gray-700">
                    {paths.map(({ name, href }) => (
                        <Link
                            key={name}
                            href={href}
                            className={`hover:text-[#0E5791] transition ${
                                pathname === href ? "text-[#0E5791] font-semibold" : ""
                            }`}
                        >
                            {name}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}

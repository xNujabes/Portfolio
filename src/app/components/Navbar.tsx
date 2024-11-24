"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavLink from "@/app/components/NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import BurgerMenu from "@/app/components/BurgerMenu";

const navLinks = [
    {
        title: "A propos",
        path: "#apropos",
    },
    {
        title: "Projets",
        path: "#projets",
    },
    {
        title: "Contact",
        path: "#contact",
    },
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 z-50">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link
                    href={"/"}
                    className="text-2xl md:text-5xl text-white font-semibold"
                >
                    <Image src="/img/jellyfish.png"
                           alt="logo"
                           width={50}
                           height={50}
                    ></Image>
                </Link>
                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                        <button
                            onClick={() => setNavbarOpen(true)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                        >
                            <Bars3Icon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button
                            onClick={() => setNavbarOpen(false)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                        >
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    )}
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen ? <BurgerMenu links={navLinks} /> : null}
        </nav>
    );
};

export default Navbar;
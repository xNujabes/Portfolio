import React from "react";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
            <div className="container p-12 flex">
                <div className="flex items-center">
                    <Image src="/img/jellyfish.png"
                           alt="logo"
                           width={25}
                           height={50}
                           className="mr-2"
                    ></Image>
                    <span>KORI</span>
                </div>
                <p className="text-slate-600 ml-auto">
                    @2024 William Pinel.
                    All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
"use client"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet" 
import { usePathname } from "next/navigation"
import Link from "next/link"
import { CiMenuFries } from "react-icons/ci"
import React, { useState } from "react";

const links = [
    {
        name: "resume",
        path: "/resume"
    },
    {
        name: "reviews",
        path: "/reviews" 
    },
    {
        name: "contact",
        path: "/contact" 
    },
]
export const MobileNav = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => {
        setIsOpen(false);
      };
    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <SheetTitle></SheetTitle>
                <div className="mt-32 mb-40 text-center text-2xl">
                    <nav className="flex flex-col justify-center items-center gap-8 font-header">
                        {links.map((link, index) => {
                            return <Link href={link.path} key={index} onClick={handleClose}
                            className={`${link.path === pathname && "text-accent border-b-2 border-accent"} uppercase 
                        font-medium hover:text-accent`}>
                                {link.name}
                            </Link>
                        })}
                    </nav>
                </div>
            </SheetContent>
        </Sheet>
    )
}

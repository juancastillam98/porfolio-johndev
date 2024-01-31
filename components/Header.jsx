"use client"
import {useState, useEffect} from "react";

import {usePathname} from "next/navigation";

import {ThemeToggler} from "./ThemeToggler";
import {Logo} from "./Logo";
import {Nav} from "./Nav";
import {MobileNav} from "./MobileNav";

export const Header = () => {

    const [header, setHeader]=useState(false)
    const [nuevasClases, setNuevasClases]=useState(true)
    const pathname = usePathname();
    console.log(pathname)
    useEffect(()=>{
        const scrollYPos = window.addEventListener("scroll", ()=>{
            window.scrollY > 50 ? setHeader(true) : setHeader(false);
            window.scrollY >850 ? setNuevasClases(false) : setNuevasClases(true);
        })
        return ()=>window.removeEventListener("scroll", scrollYPos)
    },[])
    const headerClasses = `
    
    ${header 
        ? "py-4 bg-background shadow-lg dark:bg-background" 
        : "py-6 dark:bg-transparent"} sticky top-0 z-30 transition-all
    ${pathname === "/" && nuevasClases
        ? "bg-cyan-100 dark:gradient-dark"
        : " dark:bg-transparent"
        }        
    `;

    return (
        <header
            className={headerClasses }>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <Logo/>
                    <div className={"flex items-center gap-x-6"}>
                        <Nav
                            containerStyles={"hidden xl:flex gap-x-8 items-center"}
                            linkStyles={"relative hover:text-primary transition-all"}
                            underlineStyles={"absolute left-0 top-full h-[2px] bg-primary w-full"}
                        />
                        <ThemeToggler/>
                        {/**Mobile*/}
                        <div className={"xl:hidden"}>
                            <MobileNav/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
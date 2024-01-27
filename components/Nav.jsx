import Link from 'next/link'
import {usePathname} from "next/navigation";
import {motion} from "framer-motion";

const links = [
    {path: "/", name: "home"},
    {path: "/projects", name: "my projects"},
    {path: "/contact", name: "contact"}
]
export const Nav = ({containerStyles, linkStyles, underlineStyles}) => {
    const currentPath = usePathname();
    return (
        <nav className={`${containerStyles}`}>
            {links.map((link, index)=>{
                return (
                    <Link
                        key={index}
                        href={link.path}
                        className={`capitalize ${linkStyles}`}
                    >
                        {link.path === currentPath && (
                            <motion.span
                                initial={{y: "-100%"}}
                                animate={{y: 0}}
                                transition={{type: "tween"}}
                                layoutId="underline"
                                className={`${underlineStyles}`}
                            />
                        )}
                        {link.name}
                    </Link>
                )
            })}
        </nav>
    )
}
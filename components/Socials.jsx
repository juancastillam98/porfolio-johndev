import {RiYoutubeFill, RiLinkedinFill, RiGithubFill, RiInstagramFill} from "react-icons/ri";
import Link from "next/link";

const icons = [
    {
        path: "https://www.linkedin.com/in/juan-castilla-mariscal/",
        name: <RiLinkedinFill/>
    },
    {
        path: "https://github.com/juancastillam98",
        name: <RiGithubFill/>
    }
]
export const Socials = ({containerStyles, inconsStyles}) => {
    return (
        <div className={`${containerStyles}`}>
            {icons.map((icon, index) =>(
                <Link
                    key={index}
                    href={icon.path}>
                    <div className={`${inconsStyles}`} aria-label={`${icon.name}`}>
                        {icon.name}
                    </div>
                </Link>
            ))}
        </div>
    )
}
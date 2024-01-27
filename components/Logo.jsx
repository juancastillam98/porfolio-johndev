import Link from "next/link"
import Image from "next/image";
export const Logo = () => {
    return (
        <div>
            <Link href={"/"}>
                <Image src={"/logo/logo.avif"} alt={"Logo"} width={54} height={54} priority/>
            </Link>
        </div>

    )
}
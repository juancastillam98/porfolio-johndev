import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {AlignJustify} from "lucide-react";
import {Nav} from "@/components/Nav";
import {Logo} from "@/components/Logo";
import {Socials} from "@/components/Socials";
import { HamburgerMenuIcon} from "@radix-ui/react-icons"
export const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger asChild  aria-label="Menu">
                <HamburgerMenuIcon aria-label="Display menu options" className={"cursor-pointer h-[1.6rem] w-[1.6rem]"} />
            </SheetTrigger>
            <SheetContent>
                <div className={"flex flex-col items-center justify-between h-full py-8"}>
                    <div className={"flex flex-col items-center gap-y-32"}>
                        <Logo/>
                        <Nav containerStyles={"flex flex-col items-center gap-y-6"} linkStyles={"text-2xl"}/>
                    </div>
                        <Socials containerStyles={"flex gap-x-4"} inconsStyles={"text-2xl"}/>
                </div>
            </SheetContent>
        </Sheet>
    )
}
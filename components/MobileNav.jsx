import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {AlignJustify} from "lucide-react";
import {Nav} from "@/components/Nav";
import {Logo} from "@/components/Logo";
import {Socials} from "@/components/Socials";
export const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <AlignJustify className={"cursor-pointer"}/>
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
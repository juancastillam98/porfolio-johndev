import {Socials} from "@/components/Socials";
export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={"bg-secondary/40 py-12"}>
            <div className={"container mx-auto"}>
                <div className={"flex flex-col items-center justify-between"}>
                    <Socials
                        containerStyles={"flex gap-x-6 mx-auto xl:mx-0 mb-4"}
                        inconsStyles={"text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all"}
                    />
                    <div className={"text-muted-foreground"}>
                        Copyright &copy; Juan Castilla {currentYear}
                    </div>
                </div>
            </div>
        </footer>
    )
}
import Link from "next/link"
import {Button} from "@/components/ui/button";
import {Download, Send} from "lucide-react";

import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine
} from "react-icons/ri";

import {DevImg} from "@/components/DevImg";
import {Socials} from "@/components/Socials";
import {Badge} from "@/components/Badge";
export const Hero = () => {
    return (
        <>
            <section className={"py-12 xl:py-24 h-[84vh] xl:pt-28 bg-gradient-to-b from-cyan-100 to-violet-400 dark:bg-none"}>
                <div className="container mx-auto">
                    <div className={"flex justify-between gap-x-8"}>
                        <div className={"flex max-w-[520px] lg:max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left"}>
                            <div className={"text-sm uppercase font-semibold mb-4 tracking-[4px] text-primary"}>Web Developer</div>
                            <h1 className={"h1 mb-4 color"}>Hello, my name is Juan Castilla</h1>
                            <p className={" break-words subtitle max-w-[490px] mx-auto xl:mx-0"}>Frontend web developer with +3 years of experience. I have knowledge in digital
                                marketing, seo, specialized in React, PHP and flexible profile to learn and adapt to
                                new technologies. Noted for creating sites that exceed expectations. Perseverance
                                and flexibility as main qualities.</p>
                            <div className={"flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12"}>
                                <Link href={"/contact"}>
                                    <Button className={"flex gap-x-2"}>
                                        Contact me <Send size={18}/>
                                    </Button>
                                </Link>
                                <Button variant={"secondary"} className={"flex gap-x-2"}>
                                    <Link
                                        href={"/files/CV_Juan_Castilla_Frontend_Developer.pdf"} target={"_blank"} download={"CV_Juan_Castilla_Frontend_Developer.pdf"}
                                        className={"flex gap-x-2"} aria-label={"Download CV"}
                                    >
                                        Download CV <Download size={18}/>
                                    </Link>
                                </Button>
                            </div>
                            {/*Social icons*/}
                            <Socials
                                containerStyles={"flex gap-x-6 mx-auto xl:mx-0"}
                                inconsStyles={"text-foreground text-[22px] hover:text-primary transition-all"}
                            />
                        </div>
                        <div className={"hidden xl:flex relative"}>
                            <Badge
                                containerStyles={"absolute top-[30%] -left-[32rem]"}
                                icon={<RiBriefcase4Fill />}
                                endCountNum={3}
                                badgeText="Years of experience"
                            />
                            <Badge
                                containerStyles={"absolute top-[80%] -left-[7rem]"}
                                icon={<RiTodoFill />}
                                endCountNum={26}
                                endCountText={""}
                                badgeText="Finished Projects"
                            />
                            <Badge
                                containerStyles={"absolute top-[59%] right-[14rem]"}
                                icon={<RiTeamFill />}
                                endCountNum={14}
                                endCountText={""}
                                badgeText="Happy Clients"
                            />
                            <div className={"bg-cover bg-profilfe_image w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-[4rem]"}>
                                {/*<DevImg
                                containerStyles={"w-full h-full bg-no-repeat relative bg-bottom scale-75"}
                                imgSrc={"/about/profile.avif"}
                            />*/}
                            </div>
                        </div>
                    </div>
                    <div className={"hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce"}>
                        <RiArrowDownSLine className={"text-3xl text-primary"}/>
                    </div>
                </div>
            </section>
            <section className={"separator"}>
                <div className="wave bg-[#ac9bfb] dark:bg-transparent before:content-[''] after:content-[''] dark:after:bg-background dark:before:bg-background"></div>
            </section>
        </>
    )
}
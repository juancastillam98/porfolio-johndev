import {DevImg} from "@/components/DevImg";
import Image from "next/image"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "../components/ui/tabs"

import {User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase} from "lucide-react";
import {data} from "autoprefixer";

const infoData = [
    {
        icon: <User2 size={20}/>,
        text: "Juan Castilla"
    },
    {
        icon: <MailIcon size={20}/>,
        text: "contact@johndev.dev",
    },
    {
        icon: <Calendar size={20}/>,
        text: "Born in 1998"
    },
]
const qualificaionData=[
    {
        title: "Education",
        data: [
            {
                center: "Cenec Málaga",
                qualification: "Profesional Education in App Development",
                years: "2021-2023"
            },
            {
                center: "I.E.S Oretaina",
                qualification: "Profesional Cisco Networkingt",
                years: "2019-2021"
            }
        ]
    },
    {
        title: "Experience",
        data: [
            {
                company: "Prodigia Consultores S.L",
                role: "Web Developer",
                years: "March-2023 - January 2024"
            },
            {
                company: "Freelancer",
                role: "Web Developer",
                years: "August 2018 - March-2023",
            }
        ]
    }
]
const skillData= [
    {
        title: "Skills",
        data: [
            {name: "HTML-CSS"},
            {name: "JS"},
            {name: "React"},
            {name: "Next"},
            {name: "Node"},
            {name: "Php"},
            {name: "Laravel"},
            {name: "Drupal"},
        ]
    },
    {
        title: "Tools",
        data: [
            {imgPath: "/about/vscode.svg", name: "vscode"},
            {imgPath: "/about/phpStorm.svg", name: "phpStorm"},
            {imgPath: "/about/wordpress.svg", name: "wordpress"},
            {imgPath: "/about/nextjs.svg", name: "nextjs"},
            {imgPath: "/about/macOS.svg", name: "mac OS"},
        ]
    }
]

//Include soft-skills

export const About = () => {
    const getData=(list, title)=>{
        return list.find((item)=> item.title === title)
    }

    return (
        <section className={"mb:h-[860px] pb-12 mb:py-24"}>
            <div className={"container mx-auto"}>
                <h2 className={"section-title mb-8 mb:mb-16 text-center mx-auto"}>About Me</h2>
                <div className={"flex flex-col md:flex-row gap-x-5"}>
                    {/**/}
                    {/*<div className={"hidden mb:flex flex-1 relative"}>
                        <DevImg containerStyles={"bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"} imgSrc="/about/profile.avif"/>
                    </div>*/}
                    {/*Tabs*/}
                    <div className={"flex-1"}>
                        <Tabs defaultValue={"personal"}>
                            <TabsList className={"w-full flex flex-col lg:flex-row justify-around mb:mx-w-[520px] mb:border dark:border-none"}>
                                <TabsTrigger className={"w-[162px] mb:w-auto"} value={"personal"}>Personal Info</TabsTrigger>
                                <TabsTrigger className={"w-[162px] mb:w-auto"} value={"qualifications"}>Qualifications</TabsTrigger>
                                <TabsTrigger className={"w-[162px] mb:w-auto"} value={"skills"}>Skills</TabsTrigger>
                            </TabsList>
                            {/*tab content*/}
                            <div className={"text-lg mt-12 mb:mt-8"}>
                                <TabsContent value={"personal"}>
                                    <div className={"text-center mb:text-left"}>
                                        <h3 className={"h3 mb-4"}>Unmatched Service Quality for Over 10 Years</h3>
                                        <p className={"subtitle max-w-xl mx-auto mb:mx-0"}>I specialize in cratfing intuitive websites with cutting-edge technology,</p>
                                    </div>
                                    {/*Icons*/}
                                    <div className={"grid mb:grid-cols-2 gap-4 mb-12"}>
                                        {infoData.map((item, index)=>(
                                            <div
                                                key={index}
                                                className={"flex items-center gap-x-4 mx-auto mb:mx-0"}
                                            >
                                                <div className={"text-primary"}>{item.icon}</div>
                                                <div>{item.text}</div>
                                                <div>{item?.description}</div>
                                            </div>
                                        ))}
                                    </div>
                                    {/*Language Skill*/}
                                    <div className={"flex flex-col gap-y-2"}>
                                        <div className={"text-primary"}>Language Skill</div>
                                        <div className={"border-b border-border"}></div>
                                        <div>Spanish, English</div>
                                    </div>
                                </TabsContent>
                                {/*Qualifications*/}
                                <TabsContent value={"qualifications"}>
                                    <div>
                                        <h3 className={"h3 mb-8 text-center mb::text-left"}>My Awesome Journey</h3>
                                        <div className={"grid md:grid-cols-2 gap-y-8"}>
                                            {/*Experience*/}
                                            <div className={"flex flex-col gap-y-6"}>
                                                <div className={"flex gap-x-4 items-center text-[22px] text-primary"}>
                                                    <Briefcase/>
                                                    <h4 className={"capitalize font-medium"}>
                                                        {getData(qualificaionData,"Experience").title}
                                                    </h4>
                                                </div>
                                                {/*list*/}
                                                <div className={"flex flex-col gap-y-8"}>
                                                    {getData(qualificaionData, "Experience").data.map((item, index)=> {
                                                        const {company, role, years}=item;
                                                        return(
                                                            <div
                                                                key={index}
                                                                className={"flex gap-x-8 group"}
                                                            >
                                                                <div className={"h-[84px] w-[1px] bg-border relative ml-2"}>
                                                                    <div className={"w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"}></div>
                                                                </div>
                                                                <div className={""}>
                                                                    <div className={"font-semibold text-xl leading-none mb-2"}>{company}</div>
                                                                    <div className={"text-lg leading-none text-muted-foreground mb-4"}>{role}</div>
                                                                    <div className={"text-base font-medium"}>{years}</div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                            {/*Education*/}
                                            <div className={"flex flex-col gap-y-6"}>
                                                <div className={"flex gap-x-4 items-center text-[22px] text-primary"}>
                                                    <GraduationCap size={28}/>
                                                    <h4 className={"capitalize font-medium"}>
                                                        {getData(qualificaionData,"Education").title}
                                                    </h4>
                                                </div>
                                                {/*list*/}
                                                <div className={"flex flex-col gap-y-8"}>
                                                    {getData(qualificaionData, "Education").data.map((item, index)=> {
                                                        const {center, qualification, years}=item;
                                                        return(
                                                            <div
                                                                key={index}
                                                                className={"flex gap-x-8 group"}
                                                            >
                                                                <div className={"h-[84px] w-[1px] bg-border relative ml-2"}>
                                                                    <div className={"w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"}></div>
                                                                </div>
                                                                <div className={""}>
                                                                    <div className={"font-semibold text-xl leading-none mb-2"}>{center}</div>
                                                                    <div className={"text-lg leading-none text-muted-foreground mb-4"}>{qualification}</div>
                                                                    <div className={"text-base font-medium"}>{years}</div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value={"skills"}>
                                    <div className={"text-center mb:text-left"}>
                                        <h3 className={"h3 mb-8"}>Tools I Use EveryDay</h3>
                                        {/*Skills*/}
                                        <div className={"mb-16"}>
                                            <h4 className={"text-xk font-semibold mb-2"}>Skills</h4>
                                            <div className={"border-b border-border mb-4"}></div>
                                            <div className={"flex"}>
                                                {getData(skillData, "Skills").data.map((item, index)=>{
                                                    const {name}=item;
                                                    return (
                                                        <div
                                                            key={index}
                                                            className={"2-2/4 text-center mb:text-left mx-auto mb:mx-0"}
                                                        >
                                                            <div className={"font-medium"}>{name}</div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        {/*tools*/}
                                        <div>
                                            <h4 className={"text-xl font-semibold mb-2 mb:text-left"}>Tools</h4>
                                        </div>
                                        <div className={"border-b border-border mb-4"}>
                                            <div className={"flex gap-x-8 justify-center mb:justify-start mb-5"}>
                                                {getData(skillData, "Tools").data.map((item, index)=>{
                                                    const {imgPath, name}=item;
                                                    return (
                                                        <div
                                                            key={index}
                                                        >
                                                            <Image src={imgPath} alt={`${name} icon`} width={48} height={48} priority/>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )
}
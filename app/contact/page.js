import {MailIcon, Linkedin} from "lucide-react";
import {Form} from "@/components/Form";
export default function Contact(){
    return (
        <section>
            <div className="container mx-auto">
                <div className={"grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24"}>
                    {/*Columna izq*/}
                    <div>
                        <div className={"flex flex-col justify-center"}>
                            <div className={"flex items-center gap-x-4 text-primary text-lg mb-4"}>
                                <span className={"w-[30px] h-[2px] bg-primary"}></span>
                                Say Hello 👋🏻
                            </div>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <h1 className={"h1 max-w-lg mb-8"}>Let's Work Together</h1>
                            <p className={"subtile max-w-[400px]"}>
                                Contact with me to discuss the details of your idea or any other dude.
                            </p>
                        </div>

                        <div className={"flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg"}>
                            <div className={"flex items-center gap-x-8"}>
                                <MailIcon size={18} className={"text-primary"}/>
                                <p>contact@johndev.dev</p>
                            </div>
                            <div className={"flex items-center gap-x-8"}>
                                <Linkedin size={18} className={"text-primary"}/>
                                <p>linkdein@email</p>
                            </div>
                        </div>
                    </div>


                    {/*Columna der*/}
                    <div>

                        <Form/>
                    </div>
                </div>
            </div>

        </section>
    )
}
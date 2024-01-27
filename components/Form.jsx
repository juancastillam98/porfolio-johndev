"use client"
import {useState} from "react";
import {useProyectoContext} from "@/hooks/useProvider";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {User2, MailIcon, Text, Send, MessageSquare} from "lucide-react";
import axiosi from "axios";
import {sendEmail} from "@/app/api/send/route";
export const Form = () => {

    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [subject, setSubject]=useState("")
    const [message, setMessage]=useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        const infoUser = {
            name,
            email,
            subject,
            message,
        }
        /*try {
            const {data} = await axiosi.post("/api/send", infoUser)
            console.log(data)
        } catch (error) {
            console.error(error)
        }*/
        console.log(infoUser)
        await sendEmail(infoUser)
    }


    return (
        <form
            className={"flex flex-col gap-y-4"}
            onSubmit={handleSubmit}
        >
            <div className={"relative flex items-center"}>
                <Input
                    type={"name"}
                    id={"name"}
                    placeholder={"Your name"}
                    onChange={(e)=>setName(e.target.value)}
                    required
                />
                <User2 className={"absolute right-6"} size={20}/>
            </div>
            <div className={"relative flex items-center"}>
                <Input
                    type={"email"}
                    id={"email"}
                    placeholder={"Your email"}
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                />
                <Text className={"absolute right-6"} size={20}/>
            </div>
            <div className={"relative flex items-center"}>
                <Input
                    type={"text"}
                    id={"subject"}
                    placeholder={"Subject"}
                    onChange={(e)=>setSubject(e.target.value)}
                    required
                />
                <MailIcon className={"absolute right-6"} size={20}/>
            </div>
            <div className={"relative flex items-center"}>
                <Textarea
                    placeholder={"Your text here"}
                    onChange={(e)=>setMessage(e.target.value)}
                    required
                />
                <MessageSquare className={"absolute right-6 top-4"} size={20}/>
            </div>
            <Button
                type={"submit"}
                className={"flex items-center w-full gap-x-1 rounded-lg"}>
                <Send size={20}/>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Let's talk
            </Button>
        </form>
    )
}
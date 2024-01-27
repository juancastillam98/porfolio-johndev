"use client"
import {useProyectoContext} from "@/hooks/useProvider";
export const EmailTemplate = () => {
    const {emailInfo}=useProyectoContext();
    const {name, email, subject, message} = emailInfo
    return (
        <>
            <h1>You have a new email</h1>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Subject: {subject}</p>
            <p>Message: {message}</p>
        </>
    )
}
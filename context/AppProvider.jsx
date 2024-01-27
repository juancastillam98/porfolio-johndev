"use client"
import {createContext} from "react";
export const ProyectoContext = createContext({})
export default  function AppProvider({children}){
    const emailInfo=(data)=>{

    }

    return (
        <ProyectoContext.Provider
            value={{
                emailInfo
            }}
        >
            {children}
        </ProyectoContext.Provider>
    )
}
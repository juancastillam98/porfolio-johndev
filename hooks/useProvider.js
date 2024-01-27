"use client"
import {useContext} from "react";
import {ProyectoContext} from "../context/AppProvider"

export const useProyectoContext =()=>{
    return useContext(ProyectoContext)
}
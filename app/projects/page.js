"use client"
import {useState} from "react";
import {projectData} from "@/data/works";
import {Tabs, TabsList, TabsContent, TabsTrigger} from "@/components/ui/tabs";
import {ProjectCard} from "@/components/ProjectCard";

//remove categories duplicates
console.log(projectData.map((item) =>item.category))
const uniqueCategories =[//I've add a new category called "all projects"
    "all projects",
    ...new Set(projectData.map((item) =>item.category))
]
console.log(uniqueCategories)

export default function Projects(){
    const [categories, setCategories] =useState(uniqueCategories)
    const [category, setCategory] = useState("all projects")
    const filterdProjects = projectData.filter((project)=>(
        category==="all projects" ? project : project.category === category
    ))
    return (
        <section className={"min-h-screen pt-12"}>
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">My Projects</h2>
                <Tabs defaultValue={category} className={"mb-24 xl:mb-48"}>
                    <TabsList className={"w-full grid h-full md:grid-cols-4 lg:max-w-[640px] md-12 mx-auto md:border dark:border-none "}>
                        {categories.map((category, index)=>(
                            <TabsTrigger
                                key={index}
                                value={category}
                                className={"capitalize w-[162px] md:w-auto"}
                                onClick={()=>setCategory(category)}
                            >
                                {category}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    <div className={"text-lg xl:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"}>
                        {filterdProjects.map((project, index)=>(
                            <TabsContent
                                key={index}
                                value={category}
                            >
                                <ProjectCard project={project}/>
                            </TabsContent>
                        ))}
                    </div>
                </Tabs>
            </div>
        </section>
    )
}
import Link from "next/link";
import Image from "next/image";
import {Card, CardHeader} from "./ui/card"
import {Github, Link2Icon} from "lucide-react";
import {Badge} from "./ui/badge"
export const ProjectCard = ({project}) => {
    const imageStyle = {
        maxWidh: '90%',
        width: '100%',
        maxHeigh: '90%',
        height: '100%',
    }

    return (
        <Card className={"group overflow-hidden relative"}>
            <CardHeader className={"p-0"}>
                <div className={"relative max-w-[90%] w-full my-3 mx-auto rounded-lg  h-[190px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:work_project_bg_dark xl:bg-[110%] overflow-hidden xl:bg-no-repeat"}>
                    <Image
                        src={project.image}
                        fill
                        alt={` ${project.name} project's image`}
                        priority
                        className={"absolute bottom-0 shadow-2xl"}
                    />
                    <div className={"flex gap-x-4"}>
                        <Link
                            href={project.link}
                            className={"bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"}
                        >
                            <Link2Icon className={"text-white"}/>
                        </Link>
                        <Link
                            href={project.github}
                            className={"bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"}
                        >
                            <Github className={"text-white"}/>
                        </Link>
                    </div>
                </div>
            </CardHeader>
            <div className={"h-full px-8 py-6"}>
                <Badge className={"uppercase text-sm font-medium mb-2 absolute top-4 left-5"}>
                    {project.category}
                </Badge>
                <h4 className={"h4"}>{project.name}</h4>
                <p className={"text-muted-foreground text-lg"}>{project.description}</p>
            </div>
        </Card>
    )
}
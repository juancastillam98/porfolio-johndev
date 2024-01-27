"use client"
import Link from"next/link";
import {projectData} from "../data/works";
import {ProjectCard} from "./ProjectCard"
import {Button} from "@/components/ui/button";
// swiper styles
import {Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";


export const Work = () => {


    return (
        <section className={"relative mb-12 xl:mb-48"}>
            <div className={"container mx-auto"}>
                <div className={"max-w-[400px] mx-auto xl:mx-0 text-center xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start"}>
                    <h2 className={"section-title mb-4"}>Latest Projects</h2>
                    <p className={"subtitle mb-8"}>Lorem ipasldfjadls ñfjñasdl kfjasdlñkfjasdñlk fjñasdfs</p>
                    <Link href={"/projects"}>
                        <Button>See All Projects</Button>
                    </Link>
                </div>
                <div className={"xl:max-w-[1000px] xl:absolute right-0 top-0"}>
                    <Swiper
                        className={"h-[480px]"}
                        slidesPerView={1}
                        breakpoints={{
                            640:{
                                slidesPerView: 2
                            }
                        }}
                        spaceBetween={30}
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                    >
                        {/*List only 4 first projects*/}
                        {projectData.slice(0, 4).map((project, index)=>(
                            <SwiperSlide
                                key={index}
                            >
                                <ProjectCard project={project}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>

    )
}
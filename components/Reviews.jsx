"use client"
import Image from "next/image"
import {reviewsData} from "@/data/reviews";
import {CardTitle, Card, CardDescription, CardHeader} from "@/components/ui/card";
// swiper styles
import {Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
export const Reviews = () => {
    return (
        <section className={"mb-12 xl:mb-32"}>
            <div className={"container mx-auto"}>
                <h2 className={"section-title mb-12 text-center mx-auto"}>Reviews</h2>
                {/*Slider*/}
                <Swiper
                    slidesPerView={1}
                    breakpoints={{
                        640: {slidesPerView: 2},
                        1400: {slidesPerView: 3},
                    }}
                    spaceBetween={30}
                    modules={[Pagination]}
                    pagination={{
                        clickable: true
                    }}
                    className="h-[350px]"
                >
                    {reviewsData.map((person, index )=>(
                        <SwiperSlide
                            key={index}
                        >
                            <Card className={"bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]"}>
                            Lorem ipsum dolor sit amet, consectetur adip incididunt a ddfes aliquet et just lorem10 fjasldfja ñsdfjasdlkf jasdkf asfasjfsfj dicasosqwe asdfasdf io a
                                <CardHeader className={"p-0 mb-10"}>
                                    <div className={"flex items-center gap-x-4"}>
                                        <Image
                                            src={person.avatar}
                                            alt={`Image ${person.name}`}
                                            width={70}
                                            height={70}
                                        />
                                        <div className={"flex flex-col"}>
                                            <CardTitle>{person.name}</CardTitle>
                                            <p>{person.ocupation}</p>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardDescription className={"text-lg text-muted-foreground"}>{person.review} </CardDescription>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
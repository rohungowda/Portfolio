"use client";

import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react"
import { BsGithub } from "react-icons/bs";

import SlideWoker from "./SlideWorker";
import Link from "next/link";
import "swiper/css"
import Image from "next/image";


const projects = [
    { num: "OrbitStore", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        stack: [{name:"C++"},{name:"Boost.Asio"},{name:"MultiThreading"}],
        image:"/OS.jpg",
        github:"https://github.com/rohungowda/OrbitStore"
     },
     { num: "HybridFacialNet", description: "ed do eiusmod tempor incididunt ut labore et dolore",
        stack: [{name:"C++"},{name:"Boost.Asio"},{name:"MultiThreading"}],
        image:"/FR.jpg",
        github:"https://github.com/rohungowda/FaceRecognition"
     },
     { num: "FullStackChat", description: "ed do eiusmod tempor incididunt ut labore et dolore",
        stack: [{name:"C++"},{name:"Boost.Asio"},{name:"MultiThreading"}],
        image:"/CS.jpg",
        github:"https://github.com/rohungowda/message_app"
     },
  ];


const Projects = () => {
    const [proj, setProj] = useState(projects[0])

    const handleSlideChange = (swiper) => {
        setProj(projects[swiper.activeIndex])
      };
    return (
    <div className="min-h-[80vh] flex flex-col justify-center py-12 xl:px:0">
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                <div className="w-full xl:w-[50%] flex flex-col xl:justify-start order-2 xl:order-none">

                    <div className="flex flex-row justify-between text-4xl text-accent leading-none font-extrabold">
                        {proj.num}
                        <Link target="_blank" rel="noopener noreferrer" 
                    className=""
                    href={proj.github}><BsGithub className="text-white text-5xl border-4 border-accent rounded-full"/></Link>
                    </div>
                    <p className="mt-2 text-white border-b">{proj.description}</p>

                    <div className="flex flex-row gap-4 mt-8">
                    {proj.stack.map((item,index) => {
                        return (<li key={index}
                        className="inline-block px-3 py-1 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-dark transition"
                        >{item.name}</li>)
                    })}
                    </div>


                </div>
                <div className="w-full w-full mx-auto lg:w-[75%] xl:w-[50%]">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        className="xl:h-520px mb-12"
                        onSlideChange={handleSlideChange}
                    >
                        {projects.map((pro,ind) => {
                            return (<SwiperSlide key={ind}>
                                <div className="h-[420px] relative group flex justify-center items-center bg-pink-50/20">
                                    <div className="relative w-full h-full">
                                    <Image
                                        src={pro.image}
                                        fill
                                        className="object-fit"
                                        alt=""
                                        />

                                    </div>

                                </div>
                            </SwiperSlide>)
                        })}
                        <SlideWoker/>
                    </Swiper>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Projects
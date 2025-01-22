"use client";

import Image from "next/image";

const Photo = () => {
    return (<div className="w-full h-full relative">
        <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten">
        <Image
            src="/headshot.jpg"
            priority
            quality={100}
            width={500}
            height={500}
            alt=""
            className="object-contain"

        />
        </div>

        
    </div>);
};

export default Photo;
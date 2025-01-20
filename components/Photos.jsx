"use client";

import Image from "next/image";

const Photo = () => {
    return (<div className="w-full h-full relative">
            <div className="w-[320px] h-[320px] ">
                <Image
                    src="/headshot.jpg"
                    priority
                    quality={100}
                    fill
                    alt=""
                    className="relative w-64 h-72 rounded-xl border-[2px] 
                    border-gray-300 bg-gray-100 shadow-md overflow-hidden"

                />
            </div>
        
        
    </div>);
};

export default Photo;
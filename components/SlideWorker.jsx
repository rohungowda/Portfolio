"use client";

import { useSwiper } from "swiper/react";
import {PiCaretLeftBold, PiCaretRightBold} from "react-icons/pi"
import { Button } from "./ui/button";

const SlideWoker = () => {
    const swiper = useSwiper();
    return (<div className="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 
    z-20 w-full justify-between xl:w-max xl:justify-none">
        <Button className="bg-accent" onClick = {() => swiper.slidePrev()}>
            <PiCaretLeftBold/>
        </Button>

        <Button className="bg-accent" onClick = {() => swiper.slideNext()}>
            <PiCaretRightBold/>
        </Button>
    </div>)
}

export default SlideWoker;
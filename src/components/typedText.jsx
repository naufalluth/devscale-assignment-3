"use client"

import React from "react";
import Typed from "typed.js";
import { pinyon } from "@/app/fonts";


export const DiaryText = () => {
    const element = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(element.current, {
            strings: ["Capture your day, one word at a time...", "Turning moments into timeless stories...", "Every day is a page waiting to be written...", "Paint your life with words..."], typeSpeed: 100, loop: true
        })
        return () => {
            typed.destroy();
        };
    })
    return (
        <div className="my-6 text-white text-lg">
            <h1 className="title">Dear Diary</h1>
            <span className="italic text-lg" ref={element} />
        </div>
    )
}

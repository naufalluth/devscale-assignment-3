'use client'

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export const CreateDiary = () => {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [date, setDate] = useState("");

    async function handlerCreateEntry() {
        await fetch("https://v1.appbackend.io/v1/rows/XOKrMmLCjewE", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify([{
                title, content, date
            }]),
        });
        router.refresh()
    }
    return (
        <div>
            <input type="date" onChange={(e) => setDate(e.target.value)} />
            <input type="text" onChange={(e) => setTitle(e.target.value)} />
            <textarea onChange={(e) => setContent(e.target.value)}></textarea>

            <button onClick={handlerCreateEntry}>Save Diary</button>
        </div>
    )
}

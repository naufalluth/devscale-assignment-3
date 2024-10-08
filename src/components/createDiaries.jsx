'use client'

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export const CreateDiary = () => {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [date, setDate] = useState("");
    const [error, setError] = useState("");

    function formValidation() {
        if (!title.trim() || !content.trim() || !date.trim()) {
            document.querySelectorAll(".form").classList.add("form-danger");
            setError("Semua field harus diisi.");
            return false;
        }
        setError("");
        return true;
    }


    async function handlerCreateEntry() {
        if (!formValidation()) {
            return;
        }
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
        <div className="flex flex-col space-y-4 items-center text-center mt-43 ">
            {error && <p className="text-red-500">{error}</p>}
            <input type="date" onChange={(e) => setDate(e.target.value)} className="form " />
            <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Ada apa hari ini?" className="form " />
            <textarea onChange={(e) => setContent(e.target.value)} placeholder="Ceritakan Hari kamu disini" className="form h-48 items-center"></textarea>
            <button onClick={handlerCreateEntry} className="btn hover:bg-rose-600 py-3">Save Diary</button>
        </div>
    )
}

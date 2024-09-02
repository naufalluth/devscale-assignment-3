
import { CreateDiary } from "@/components/createDiaries";

async function getDiary() {
    try {
        const res = await fetch("https://v1.appbackend.io/v1/rows/XOKrMmLCjewE", {
            cache: "no-store"
        });
        const data = await res.json();
        return data;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}

export default async function Diary() {
    const { data } = await getDiary();
    console.log({ data });

    return (
        <div>
            <div className="space-y-4">
                <div>
                    <h1>Diary</h1>
                </div>
                {data.map((diary) => {
                    return (
                        <div key={diary._id} className="w-fit border border-blue-500 p-4">
                            <h4>{diary.date}</h4>
                            <h3>{diary.title}</h3>
                            <p>{diary.content}</p>
                        </div>
                    )
                })}
            </div>
            <CreateDiary />
        </div>
    )
}


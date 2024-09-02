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

export const CardDiary = async () => {
    const { data } = await getDiary();
    console.log({ data });

    return (
        <div className="grid grid-cols-3 gap-4 justify-center items-center   ">
            {data.map((diary) => {
                return (
                    <div key={diary._id} className="card space-y-4">
                        <h4>{diary.date}</h4>
                        <h3 className="font-semibold text-lg">{diary.title}</h3>
                        <p>{diary.content}</p>
                    </div>
                )
            })
            }
        </div>
    )
}
async function getDiary() {
    try {
        const res = await fetch("https://v1.appbackend.io/v1/rows/XOKrMmLCjewE", {
            cache: "no-cache"
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


    return (
        <div className="grid lg:grid-cols-3 gap-4 place-content-center md:grid-cols-2 md:gap-3 sm:grid-cols-1 py-4">
            {data.map((diary) => {
                return (
                    <div key={diary._id} className="card space-y-4 p-3">
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
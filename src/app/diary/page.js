
import { CardDiary } from "@/components/cardDiary"
import { Header } from "@/components/header"


export default async function Diary() {

    return (
        <div className="flex flex-col space-y-4 place-items-center h-[100vh]">
            <Header />
            <h1 className="title">Dear Diary</h1>
            <CardDiary />
        </div>
    )
}


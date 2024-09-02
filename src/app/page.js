
import { CreateDiary } from "@/components/createDiaries";
import { CardDiary } from "@/components/cardDiary"
import { Header } from "@/components/header"


export default function Diary() {


    return (
        <div className="flex flex-col space-y-4 place-items-center">
            <Header />
            <h1 className="title">Dear Diary</h1>
            <CreateDiary />
        </div>
    )
}


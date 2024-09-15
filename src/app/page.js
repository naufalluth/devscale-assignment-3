
import { CreateDiary } from "@/components/createDiaries";
import { Header } from "@/components/header"


export default function Page() {
    return (
        <div className="flex flex-col space-y-4 place-items-center">
            <CreateDiary />
        </div>
    )
}


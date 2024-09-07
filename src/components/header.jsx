import { Link } from 'next/link'

export const Header = () => {
    return (
        <header className="bg-rose-50 w-80 h-10 text-rose-900 font-bold rounded-3xl mt-4">
            <nav className="flex justify-evenly items-center text-center py-2 font-lg">
                <Link href="/" className="nav-hover">Write</Link>
                <span className="text-xl font-mono font-semibold italic nav-hover"><Link href="/">DearDiary</Link></span>
                <a href="/diary" className="nav-hover">MyDiary</a>
            </nav>
        </header >
    )
}
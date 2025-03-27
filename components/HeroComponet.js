import Link from "next/link"

export default function Hero() {
    return (
        <div className="flex justify-center h-screen items-center bg-gradient-to-br from-indigo-100 to-red-100">
        <div className="flex flex-col items-center justify-center sm:w-1/2 w-3/4 text-center gap-8">
            <Link className="flex items-center gap-2 justify-center" href="/">
            <img src="/drip.svg" className="w-32"/>
            </Link>
            <h1 className="text-6xl font-bold">What if asking for what you want... <span className="text-primary">didn&apos;t</span> feel like asking?</h1>
            <p className="text-xl text-secondary">Drip is a private space for couples to connect without saying a word. Question by question, drip by drip, relationships become deeper, hotter, and way more fun.</p>
            <Link href="/signup" className="bg-primary text-white h-12 w-42 rounded-lg hover:scale-110 flex items-center justify-center transition-transform duration-300">Start</Link>
        </div>
        </div>
    )
}
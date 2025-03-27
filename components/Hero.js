export default function Hero() {
    return (
        <div className="flex justify-center h-screen items-center bg-gradient-to-br from-indigo-100 to-red-100">
        <div className="flex flex-col items-center justify-center w-1/2 text-center gap-8">
            <a className="flex items-center gap-2 justify-center" href="/">
            <img src="/drip.svg" className="w-32"/>
            </a>
            <h1 className="text-6xl font-bold">What if asking for what you want... <span className="text-primary">didn't</span> feel like asking?</h1>
            <p className="text-xl text-secondary">Drip is a private space for couples to connect without saying a word. Question by question, drip by drip, relationships become deeper, hotter, and way more fun.</p>
            <a href="/signup" className="bg-primary text-white h-12 w-42 rounded-lg hover:scale-110 flex items-center justify-center transition-transform duration-300">Start</a>
        </div>
        </div>
    )
}
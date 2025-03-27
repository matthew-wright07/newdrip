"use client"

import { useActionState, useState } from "react"

export default function SignUp() {
    const [sent,setSent] = useState(false)
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    function handleNameChange(event){
        setName(event.target.value)
    }
    function handleEmailChange(event){
        setEmail(event.target.value)
    }
    async function handleSubmit(event){
        event.preventDefault()
        const response = await fetch("/api/signup",{
            method: "POST",
            body: JSON.stringify({
                name: name,
                email: email,
            }),
        })
        setEmail("")
        setName("")
        setSent(true)
        const data = await response.json()
    }
    return (
        <div className="flex flex-col justify-center h-screen items-center gap-8 ">
            <a className="flex items-center gap-2 justify-center" href="/">
            <img src="/drip.svg" className="w-32"/>
            </a>
            <form onSubmit={handleSubmit} className="w-132 flex flex-col gap-8 border border-black px-8 pb-12 pt-10 rounded-lg">
            <h1 className="text-2xl text-center">Sign Up</h1>
            <div className="flex flex-col gap-2 w-full">
            <label htmlFor="name" className="text-xl text-black">Name</label>
            <input value={name} onChange={handleNameChange} className="border border-black rounded-lg w-full h-12 px-4 text-lg" id="name"/>
            </div>
            <div className="flex flex-col gap-2 w-full">
            <label htmlFor="email" className="text-xl text-black">Email</label>
            <input value={email} onChange={handleEmailChange} className="border border-black rounded-lg w-full h-12 px-4 text-lg" id="email"/>
            </div>
            <div className="flex flex-col gap-2 w-full items-center">
            <button type="submit" className="bg-primary text-white h-12 w-full rounded-lg hover:scale-110 flex items-center justify-center transition-transform duration-300 hover:cursor-pointer">Submit</button>
            </div>
            </form>
            {sent?<p className="text-xl text-primary text-center">Thank you! Check your email to find your link.</p>:null}
        </div>
    )
}
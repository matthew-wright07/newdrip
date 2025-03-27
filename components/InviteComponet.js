"use client"

import { useState } from "react"
import { usePathname } from 'next/navigation';
import Link from "next/link";

export default function SignUp() {
    const pathName= usePathname()
    const splited = pathName.split("/")
    let partner
    if (splited[2]){
        console.log(splited[2])
        partner = splited[2]
    }
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
        const response = await fetch("/api/invite",{
            method: "POST",
            body: JSON.stringify({
                name: name,
                email: email,
                partner:partner,

            }),
        })
        setEmail("")
        setName("")
        setSent(true)
        const data = await response.json()
    }
    return (
        <div className="flex flex-col justify-center h-screen items-center gap-8 ">
            <Link className="flex items-center gap-2 justify-center" href="/">
            <img src="/drip.svg" className="w-32"/>
            </Link>
            <form onSubmit={handleSubmit} className="md:w-132 w-120 flex flex-col gap-8 border border-black px-8 pb-12 pt-10 rounded-lg">
            <h1 className="text-2xl text-center">Invite</h1>
            <div className="flex flex-col gap-2 w-full">
            <label htmlFor="name" className="text-xl text-black">Partners Name</label>
            <input value={name} onChange={handleNameChange} className="border border-black rounded-lg w-full h-12 px-4 text-lg" id="name"/>
            </div>
            <div className="flex flex-col gap-2 w-full">
            <label htmlFor="email" className="text-xl text-black">Partners Email</label>
            <input value={email} onChange={handleEmailChange} className="border border-black rounded-lg w-full h-12 px-4 text-lg" id="email"/>
            </div>
            <div className="flex flex-col gap-2 w-full items-center">
            <button type="submit" className="bg-primary text-white h-12 w-full rounded-lg hover:scale-110 flex items-center justify-center transition-transform duration-300 hover:cursor-pointer">Submit</button>
            </div>
            </form>
            {sent?<p className="text-xl text-primary text-center">Thank you! Make sure they check their email to find their link.</p>:null}
        </div>
    )
}
"use client"

import { useState } from "react";
import Questions from "@/components/Questions";
import { usePathname } from "next/navigation";

export default function questions(){
    const pathName= usePathname()
    const splited = pathName.split("/")
    let partner
    if (splited[2]){
        console.log(splited[2])
        partner = splited[2]
    }
    const [questionNumber,setQuestionNumber] = useState(1)
    function add(){
        setQuestionNumber(questionNumber+1)
    }
    function subtract(){
        setQuestionNumber(questionNumber-1)
    }
    return (
        <div className="flex flex-col justify-center items-center h-screen gap-8">
        {questionNumber===1?<Questions questions={[{type:"checkbox",name:"More play and laughter"},{type:"checkbox",name:"More affection and cuddles"},{type:"checkbox",name:"Deeper conversations"},{type:"checkbox",name:"A little more heat 😏"}]} questionnumber={1} question={"What kind of connection are you craving more of lately? (choose all that apply)"}/>:null}
        {questionNumber===2?<Questions questions={[{type:"checkbox",name:"We get too busy"},{type:"checkbox",name:"We're not always on the same page"},{type:"checkbox",name:"We don't always make time"},{type:"checkbox",name:"It's hard to start those kinds of conversations"}]} questionnumber={2} question={"What tends to get in the way? (choose all that apply)"}/>:null}
        {questionNumber===3?<Questions questions={[{type:"radio",name:"What's the greatest day of your life so far? 🙂"},{type:"radio",name:"Name something extra cool about your partner 🙂"}]} questionnumber={3} question={"Choose one to answer:"}/>:null}
        {questionNumber===4?<h1 className="text-4xl font-bold w-1/3 text-center text-primary">You Have Reached Your Daily Limit. Invite Your Partner! Trust Me It's Only Fun If Both Of You Join.</h1>:null}
        <div className="flex justify-center gap-4">
            {questionNumber!==4 && questionNumber!==1?<button className="bg-primary text-white h-12 w-48 rounded-lg hover:scale-110 flex items-center justify-center transition-transform duration-300 hover:cursor-pointer" onClick={subtract}>Back</button>:null}  
            {questionNumber!==4?<button className="bg-primary text-white h-12 w-48 rounded-lg hover:scale-110 flex items-center justify-center transition-transform duration-300 hover:cursor-pointer" onClick={add}>Next</button>:null}
            {questionNumber===4?<a className="bg-primary text-white h-12 w-48 rounded-lg hover:scale-110 flex items-center justify-center transition-transform duration-300 hover:cursor-pointer" href={`/invite/${partner}`}>Invite</a>:null}
        </div>
        </div>
    )
}
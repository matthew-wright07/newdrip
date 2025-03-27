"use client"

import { useState } from "react";

export default function Questions({ questions, questionnumber, question }) {
    const [clicked,setClicked] = useState(false)
    function handleClick(){
        setClicked(true)
    }
    return (
        <div className="flex flex-col justify-center items-center w-1/3 text-center gap-8">
            <h1 className="text-4xl font-bold text-primary">Question {questionnumber}</h1>
            <h2 className="text-2xl">{question}</h2>
            <form className="flex flex-col gap-2">
            {
                questions.map((question, index) => (
                    <div key={index}>
                    <input onClick={handleClick} className="border border-primary mx-2" type={question.type} id={question.name} name={questionnumber}/>
                    <label htmlFor={question.name}>{question.name}</label>
                    </div>
                ))
            }
            {clicked===true && questions[0].type==="radio"?<input className="border border-black rounded-lg w-full h-12 px-4 text-lg"></input>:null}
            </form>
        </div>
    )
}
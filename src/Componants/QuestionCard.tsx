import React, { useState } from 'react';

import { questionPropsType } from './../Types/Quiz_types'



const QuestionCard: React.FC<questionPropsType> = ({ questions, options, callback }) => {
   // console.log(questions, options);

   let [selectedAns, setSelectedAns]= useState("");


   const handleSelection=(ev:any)=>{
           // console.log(ev.target.value)
            setSelectedAns(ev.target.value);
   }
    return (

        <div className="question_container">
            <div className="question">
                {questions}
            </div>

            <form className="question_form" onSubmit={(e: React.FormEvent<EventTarget>)=>callback(e,selectedAns)}>

                {options.map((opt: string, ind: number) => {
                    return (
                        <div key={ind}>
                            <label className="radio"> <input type="radio" name="opt" required value={opt} onChange={handleSelection} checked={selectedAns===opt} /> {opt} </label>
                        </div>
                    )
                })}

                <input type="submit" className="submit"/>
            </form>
        </div>
    )
}

export default QuestionCard

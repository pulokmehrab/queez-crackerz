import React from 'react';
import { toast } from 'react-toastify';

const Question = ({questionsData}) => {
    const{question,options, id,  correctAnswer}=questionsData;
    console.log(question);
    const handleSubmit = (answer) =>{
        if(answer === correctAnswer){
            toast.info("Your answer is correct!")
        }else{
            toast.error("You're answer is wrong!")
        }
        console.log(answer)
    }
        return (
        <div>
            <p> question: {questionsData.question}</p>
            
                {
                    options?.map((option, i) => <div> <input onClick={()=>handleSubmit(option)} type='radio' id={option} value={option} name={id}/> {option} <br /></div>)
                }
                
           <p><button type="submit"></button> {options}</p>
            
        </div>
    );
};

export default Question;
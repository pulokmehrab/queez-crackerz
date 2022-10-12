import React from 'react';
import { toast } from 'react-toastify';
import './Question.css'
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

    const showAnswer=()=>{
        toast.info(`Correct answer is : ${correctAnswer}`);
    }
        return (
            <div className='question-area'>
            <p> question: {questionsData.question}</p>
            <p className='eye' onClick={()=>showAnswer()}>👁</p>
            
                {
                    options?.map((option, i) => <div className='options'> <input onClick={()=>handleSubmit(option)} type='radio' id={option} value={option} name={id}/> {option} <br /></div>)
                }
                
            
        </div>
    );
};

export default Question;
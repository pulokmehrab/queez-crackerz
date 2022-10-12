import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../questionbox/Question';

const Topics = () => {
 const questionsDatas= useLoaderData().data.questions;
 console.log(questionsDatas);

    return (
        <div>{
        
            questionsDatas?.map(questionsData=>
            <Question
             key ={questionsData.id}
             questionsData={questionsData}
            >

            </Question>)
        
        
        }
          
            
        </div>
    );
};

export default Topics;
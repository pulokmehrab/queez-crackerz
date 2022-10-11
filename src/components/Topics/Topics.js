import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Topics = () => {
 const questionsData= useLoaderData().data.questions;
 console.log(questionsData);

    return (
        <div>
            <h1>question:{questionsData.question} </h1>
            
        </div>
    );
};

export default Topics;
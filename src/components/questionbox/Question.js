import React from 'react';

const Question = ({questionsData}) => {
    const{question,options}=questionsData
    return (
        <div>
            <p> question: {questionsData.question }</p>
            <p><button type="submit"></button> {questionsData.options}</p>
            
        </div>
    );
};

export default Question;
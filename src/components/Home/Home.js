import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizbox from '../Quizbox/Quizbox';

const Home = () => {
    
    const quizes =useLoaderData();
    const allQuizes = quizes.data;
    console.log(allQuizes);
    console.log(quizes);
    return (
        <div>
            {
                allQuizes.map(quiz =><Quizbox
                key={quiz.id}
                quiz={quiz}
                ></Quizbox>)
            }
        </div>
    );
};

export default Home;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizbox from '../Quizbox/Quizbox';

const Home = () => {
    
    const quizes =useLoaderData().data
    console.log(quizes);
    return (
        <div>
            {
                quizes.map(quiz =><Quizbox
                key={quiz.id}
                quiz={quiz}
                ></Quizbox>)
            }
        </div>
    );
};

export default Home;
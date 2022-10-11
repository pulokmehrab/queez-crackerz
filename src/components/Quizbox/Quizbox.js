import React from 'react';
import'./Quizbox.css
const Quizbox = ({quiz}) => {
   const {total,logo,name}=quiz;
    return (
        <div>
            <div>
               <img src={logo}></img>
            </div>
          <div>
          <h1>name: {name} </h1>  
          <p>total Quizzes: {total}</p>
          <button>Start</button>
          </div>
        </div>
    );
};

export default Quizbox;
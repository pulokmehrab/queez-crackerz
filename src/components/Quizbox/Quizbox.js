import React from 'react';
import './Quizbox.css'
const Quizbox = ({quiz}) => {
   const {total,logo,name}=quiz;
    return (
       <div>
        <div className='header'>
        
        </div>
         <div className='img-sec'>
            <div>
               <img src={logo}></img>
            </div>
          <div className='details'>
          <h1> {name} </h1>  
          <p>total Quizzes: {total}</p>
          <button>Start</button>
          </div>
        </div>
       </div>
    );
};

export default Quizbox;
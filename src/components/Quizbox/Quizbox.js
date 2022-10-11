import React from 'react';
import { Link } from 'react-router-dom';
import './Quizbox.css'
const Quizbox = ({quiz}) => {
   const {id,total,logo,name}=quiz;
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
          <button><Link to={`/topics/${id}`}> start</Link></button>
          </div>
        </div>
       </div>
    );
};

export default Quizbox;
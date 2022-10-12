import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import image from './istockphot.jpg';
const Header = () => {
    return (
      <div>
         <div className='nav-color'>
        <div>
           <h1>Quiz Ranker </h1>
        </div>
         <nav className='header'>
          <Link to='/'>Home</Link>   
          {/* /pulok */}
          <Link to='/statistics'>Statistics</Link> 
          <Link to='/blogs'>Blog</Link>
          {/* <Link to='/topics'>Topics</Link> */}

        </nav>
        
       </div>
        <div className='header-back'>
        <div>
        <img src={image}>
         </img>
        </div>
         <div className='para'>
         <h2>There is no cramming
             for a test of character.
              It always comes as a pop quiz
              </h2>
         </div>
        </div>
      </div>
    );
};

export default Header;
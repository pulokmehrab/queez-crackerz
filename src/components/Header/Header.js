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
          <Link to='/statistics'>Statistics</Link> 
          <Link to='/blog'>Blog</Link> 
        </nav>
        
       </div>
        <div className='header-back'>
         <img src={image}>
         </img>
        </div>
      </div>
    );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
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
    );
};

export default Header;
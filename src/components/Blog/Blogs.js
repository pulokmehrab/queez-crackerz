import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h3>Q1:what is the purpose of react router?</h3>
            <p>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            <hr></hr>
        <h3>Q2:How does context API works?</h3>
        <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
        <hr></hr>
        <h3>What is useref in react?</h3>
        <p>Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with  , React will set its .current property to the corresponding DOM node whenever that node changes.</p>
        
        </div>
    );
};

export default Blogs;
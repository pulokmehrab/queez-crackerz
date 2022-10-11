import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Main from './Layout/Main';
import Topics from './components/Topics/Topics';

function App() {
  const router =createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        loader:()=>fetch('quizz.json'),
        element:<Home></Home>
        
      },
      {
        path:'/topics/:questionId',
       loader: async({params})=>{
        // console.log(params.questionId);
        return fetch(` https://openapi.programming-hero.com/api/quiz/${params.questionId}`)
       },
        element:<Topics></Topics>
      }
     
    ]
  },
  {
    path:'*',
    element: <div>This route not found</div>
  }
  ])
  return (
    <div className="App">
      
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;

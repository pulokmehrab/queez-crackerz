import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Main from './Layout/Main';
import Topics from './components/Topics/Topics';
import Blogs from './components/Blog/Blogs';
import Statistics from './components/Statistics/Statistics';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const router =createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
        element:<Home></Home>
        
      },
      {
        path:'/topics/:questionId',
       loader: async({params})=>{
        // console.log(params.questionId);
        return fetch(` https://openapi.programming-hero.com/api/quiz/${params.questionId}`)
       },
        element:<Topics></Topics>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path:'/blogs',
        element: <Blogs></Blogs>
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
      <ToastContainer />
    </div>
  );
}

export default App;

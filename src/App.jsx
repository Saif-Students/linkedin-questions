import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { Layout } from './components/';
import {HomePage, AllQuestions, AskQuestion,
  //  Login
  
  } from './pages/';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Use Layout as the root component
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/ask-question',
        element: <AskQuestion />, // Replace this with the actual "About" page
      },
      {
        path: '/all-questions',
        element: <AllQuestions />, // Replace this with the actual "About" page
      },
      // {
      //   path: '/login',
      //   element: <Login />, // Replace this with the actual "About" page
      // },
      
    ],
  },
]);
function App() {
  return (
    <div 
      className='main min-h-screen w-full 
      px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[96px] 
      py-8 sm:py-12 md:py-16 lg:py-24 xl:py-[96px]'
    >
    <RouterProvider router={router}>

    </RouterProvider>
    </div>
  );
}

export default App;

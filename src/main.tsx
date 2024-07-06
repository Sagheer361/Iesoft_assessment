import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Pages/Login1.tsx';
import DataDisplay from './Pages/DataDisplay.tsx';
import Signup from './Pages/SignUp1.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
   {
    path: "/login",
    element: <Login />,
  },
   {
    path: "/data",
    element: <DataDisplay />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>,
)

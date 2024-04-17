import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home';
import App from './App.jsx'

import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/placeOrder/PlaceOrder';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[

       {
      path: "/",
      element: <Home/>
    },
    {
      path: "/cart",
      element: <Cart/>,
    },
    {
      path: "/order",
      element: <PlaceOrder/>,
    },
      
    ]
  },
 
   

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
 
)

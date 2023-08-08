import React from 'react';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Home'
import Product from './components/Product';
import Cart from './pages/Cart';
import { productsData } from './api/Api';

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from 'react-router-dom';

const Layout = () => {
  return(
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: productsData,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    
      {
        path: "/cart",
        element: <Cart />,
      },

      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
])

function App() {
  return (
    <div className='font-bodyFont'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;

import { useState } from "react";
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements  } from "react-router-dom";
import Home from "./components/Home";
import Product1 from "./components/Product1";
import { Layout } from "./pages/Layout";
import  Login  from "./pages/Login";


export const App = () => {


  const router = createBrowserRouter(


    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>} />
        <Route path="/product-ahem" element={<Product1 />} />
        <Route path='/login' element={<Login/>} />
      </Route>
    )
  );

  return (
   
    <RouterProvider router={router}/>

  );
};



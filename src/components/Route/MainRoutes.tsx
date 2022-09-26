import React from "react";
import { Route, Routes } from "react-router-dom";
import Categories from "../pages/Categories";
import Details from "../pages/Details";
import Fevorites from "../pages/Fevorites";
import Form from "../pages/Form";
import Home from "../pages/Home";


const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/fevorites" element={<Fevorites/>} />
        <Route path="/products/:id" element={<Details />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:type" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;

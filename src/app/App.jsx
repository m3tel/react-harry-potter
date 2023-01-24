import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom"; 
import { Home } from "../pages/Home/Home";
import { Liked } from "../pages/Liked/Liked";


export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/liked" element={<Liked></Liked>}></Route>
      </Routes>
    </>
  );
}

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Bollywood from "./Components/Pages/Bolly";
import Fitness from "./Components/Pages/Fit";
import Food from "./Components/Pages/Food";
import Home from "./Components/Pages/Home";
import SingleBlogPage from "./Components/Pages/Sbg";
import Technology from "./Components/Pages/Tec";
import Hollywood from "./Components/Pages/Tour";

import './style.css'

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/bollywood" element = {<Bollywood/>} />
        <Route path="/hollywood" element = {<Hollywood/>} />
        <Route path="/technology" element = {<Technology/>} />
        <Route path="/fitness" element = {<Fitness/>} />
        <Route path="/food" element = {<Food/>} />
        <Route path=":category/:articleid" element = {<SingleBlogPage/>}/>
      </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;

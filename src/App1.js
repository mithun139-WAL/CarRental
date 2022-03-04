import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./About";
import './App.css';
import Contact from "./Contact";
import Employees from "./Employees";
import Home from "./Home";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">Cars Rental</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link to="/home" class="nav-item nav-link active">Home</Link>
              <Link to="/employees" class="nav-item nav-link">Employees</Link>
              <Link to="/contact" class="nav-item nav-link">Contact</Link>
              <Link to="/about" class="nav-item nav-link">About</Link>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/employees" element={<Employees />}></Route>
          <Route path="/home" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

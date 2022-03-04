import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./About";
import './App.css';
import Contact from "./Contact";
import Employees from "./Employees";
import Home from "./Home";
import LOS_ANGELES_CENTER from './la_center';
import Marker from './Marker';

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

const App = () => {
    const [places, setPlaces] = useState([])
    const [empdata, setEmpdata] = useState([])
    const fetchPlaces = async () => {
        fetch('places.json')
            .then((response) => response.json())
            .then((data) => setPlaces(data.results))
    }
    useEffect(() => {
        fetchPlaces();

    }, [])

    if (!places || places.length === 0) {
        return null;
    }
    return (
        <Wrapper class="demo-wrap">
            <img
                class="demo-bg"
                src="https://www.acuant.com/wp-content/uploads/2016/01/holiday-car-rental-1030x564-1.jpg"
                alt=""
            ></img>
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
                    <Route path="/about" element={<About />}></Route>
                </Routes>
            </BrowserRouter>
            {/* <div className='mx-auto' style={{ height: '30vh', width: '30%' }}>
                <GoogleMapReact
                    defaultZoom={10}
                    defaultCenter={LOS_ANGELES_CENTER}
                >
                    {places.map((place) => (
                        <Marker
                            key={place.id}
                            text={place.name}
                            lat={place.geometry.location.lat}
                            lng={place.geometry.location.lng}
                        />
                    ))}
                </GoogleMapReact>
            </div> */}
        </Wrapper>
    )
}

export default App
import React from "react";
import NavBar from "../components/NavBar";
import HomeContainer from "../components/HomeContainer";
import AboutUs from "../components/AboutUs";
import Collaborations from "../components/Collaborations";
import Services from "../components/services";
import CProducts from "../components/CProducts";
import Contact from "../components/Contact";
import "./home.css"

const Home = () => {
  return (
    <div>
      <body>
        <NavBar />
        <HomeContainer />
        <AboutUs />
        <Services /> 
        <CProducts />
        <Collaborations />
        <Contact />
      </body>
    </div>
  );
};

export default Home;

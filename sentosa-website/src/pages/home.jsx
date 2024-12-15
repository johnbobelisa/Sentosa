import React from "react";
import NavBar from "../components/NavBar";
import HomeContainer from "../components/HomeContainer";
import AboutUs from "../components/AboutUs";
import "./home.css"

const Home = () => {
  return (
    <div>
      <body>
        <NavBar />
        <HomeContainer />
        <AboutUs />
      </body>
    </div>
  );
};

export default Home;

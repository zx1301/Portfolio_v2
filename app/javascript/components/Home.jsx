import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";
import Particles from "react-particles-js";
import AboutMe from "./AboutMe";
export default () => (
  <>
    <Particles 
      className="particles-canvas"
      params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width: 6,
              color: "#f9ab00"
            }
          }
        }
      }}
    />
    <Navbar />
    <Header />
    <AboutMe />
  </>
);

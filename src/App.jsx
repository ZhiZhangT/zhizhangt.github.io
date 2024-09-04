import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import Experience from "./components/Experience/Experience";
import css from './styles/app.module.scss';
import MDRenderer from "./components/MDRenderer/MDRenderer";
import React, { useEffect } from 'react';
import ReactGA from "react-ga4";

const App = () => {

  useEffect(() => {
    ReactGA.initialize("G-NP2C3XWN1J");
    // Send pageview with a custom path
    ReactGA.send({ hitType: "pageview", page: "/homepage", title: "Home Page" });
    }, [])

  return <div className={`bg-primary ${css.container}`}>
    <Header/>
    <Hero/>
    <Education/>
    <Portfolio/>
    <Experience/>
    <Footer/>
  </div>
};

export default App;

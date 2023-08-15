import Cards from "./components/Cards/Cards";
import Expertise from "./components/Expertise/Expertise";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import Works from "./components/Works/Works";
import css from './styles/app.module.scss';


const App = () => {
  return <div className={`bg-primary ${css.container}`}>
    <Header/>
    <Hero/>
    <Expertise/>
    <Works/>
    <Portfolio/>
    <Cards/>
    <Footer/>
  </div> //using the modular aspect of scss, have to declare the stylesheet in a parent div
};

export default App;

import Cards from "./components/Cards/Cards";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import Experience from "./components/Experience/Experience";
import Flipcard from "./components/Flipcard/Flipcard";
import css from './styles/app.module.scss';



const App = () => {
  return <div className={`bg-primary ${css.container}`}>
    <Header/>
    <Hero/>
    <Education/>
    <Portfolio/>
    <Experience/>
    <Cards/>
    <Footer/>
  </div> //using the modular aspect of scss, have to declare the stylesheet in a parent div
};

export default App;

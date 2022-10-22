import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route } from 'react-router-dom';
import Home from './Component/LandingPage';
import About from './Component/About';
import Contact from './Component/Contact';
import Service from './Component/Service';
import Action from './Component/Service/Action';
import Anotheraction from './Component/Service/Anotheraction';
import Someaction from './Component/Service/Someaction';
import Portfolio from './Component/Portfolio';
import Header from "./Component/Header/index";
import Blog from "./Component/Blog/index";
import Footer from "./Component/Footer/index";

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/services" element={<Service />}/>
        <Route exact path="/services/action" element={<Action />}/>
        <Route exact path="/services/anotheraction" element={<Anotheraction />}/>
        <Route exact path="/services/someaction" element={<Someaction />}/>     
        <Route exact path="/portfolio" element={<Portfolio />}/>
        <Route exact path="/blog" element={<Blog />}/>
        <Route exact path="/contact" element={<Contact />}/>
        <Route path="*" element={<> not found</>} />
    </Routes>
    
    <Footer />
    </>
  );
}

export default App;

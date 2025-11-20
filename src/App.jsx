import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import {setisOpen} from "./navOpen";
import { motion } from 'framer-motion';
import LogoSplash from "./components/logo-splash"
import Navbar from "./reusables/Nav-bar"
import Hero from "./components/hero"
import Services from "./components/Services"
import Bphil from "./components/bphil"
import ChooseUs from "./components/chooseUs"
import Contact from "./reusables/contact"
import Certification from "./components/certifications"

function App() {
  const isOpen = useSelector((state) => state.navState.isOpen);
  const dispatch = useDispatch();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function closeNav () {
    console.log(isOpen);
    dispatch(setisOpen(false));
  }

  return (
    <div id="app" className="flx flx-drc" >
      {/* <LogoSplash /> */}
      <Navbar tag={"app"}/>
      <motion.div initial={{
        opacity : 0 }} whileInView={{
          opacity : 0.8
        }} transition={{
          duration : 0.3
        }} className={`${isOpen && "blur"}`} onClick={closeNav}></motion.div>
      <Hero/>
      <Services/>
      <ChooseUs />       
      <Certification/>    
      <Bphil />
      <Contact/>
    </div>

  );
}

export default App;

import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import {setisOpen} from "./navOpen"
import { motion } from 'framer-motion';
import Navbar from "./reusables/Nav-bar";
import Contact from "./reusables/contact";

function Imports () {

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
        <div id="import" className="flx flx-drc">
            <Navbar tag={"import"}/>
            <motion.div initial={{
                opacity : 0 }} whileInView={{
                    opacity : 0.8
                }} transition={{
                    duration : 0.3
                }} className={`${isOpen && "blur"}`} onClick={closeNav}></motion.div>


            <div className="pattern">
            </div>

            <motion.div initial={{
                    opacity: 0,
                    y: 20
                }} whileInView={{
                    opacity: 1,
                    y: 0
                }} viewport={{
                    once: true
                }} transition={{
                    duration: 0.6
                }}  id="import-process" className="in-flx">
               <div className="bg-img">

               </div>

               <motion.h1 initial={{
                    opacity: 0,
                    x: -30
                }} whileInView={{
                    opacity: 1,
                    x: 0
                }} viewport={{
                    once: false
                }} transition={{
                    duration: 0.8,
                    delay: 0.5
                }}>
                  Nigeria Import <br /> Process Map
               </motion.h1>

               <motion.section initial={{
                    opacity: 0,
                    x: 30
                }} whileInView={{
                    opacity: 1,
                    x: 0
                }} viewport={{
                    once: false
                }} transition={{
                    duration: 0.8,
                    delay: 0.5
                }} className="flx flx-drc">
                  <img alt="import process map" src="\images\Import Process.png"/>

                  <p>
                     [1] Pro Forma Invoice, MSDS*, SON Product Certificate*, Marine Insurance Certificate
                  </p>

                  <p>
                     [2] Commercial Invoice, Packing List, Form C16, Certificate of Chemical Analysis*, SONCAP Certificate*, Carrier Certificate*, Optional Documents
                  </p>
               </motion.section>
            </motion.div>


            <motion.div id="Air-process" className="in-flx">
               <div className="bg-img2">

               </div>
               <motion.h1 initial={{
                    opacity: 0,
                    x: -30
                }} whileInView={{
                    opacity: 1,
                    x: 0
                }} viewport={{
                    once: false
                }} transition={{
                    duration: 0.8,
                    delay: 0.5
                }}>
                  Air Freight Customs <br /> Inwards Clearance Process <br /> Lead Times Matrix
               </motion.h1>

               <motion.section initial={{
                    opacity: 0,
                    x: 30
                }} whileInView={{
                    opacity: 1,
                    x: 0
                }} viewport={{
                    once: false
                }} transition={{
                    duration: 0.8,
                    delay: 0.5
                }}className="flx flx-drc">
                  <img alt="import process map" src="\images\Air process.png"/>
               </motion.section>


            </motion.div>

            <motion.div id="sea-process" className="in-flx">
               <div className="bg-img">

               </div>

               <motion.h1 initial={{
                    opacity: 0,
                    x: -30
                }} whileInView={{
                    opacity: 1,
                    x: 0
                }} viewport={{
                    once: false
                }} transition={{
                    duration: 0.8,
                    delay: 0.5
                }} >
                  Sea Freight Customs <br />Inwards Clearance Process <br /> Lead Times Matrix
               </motion.h1>

               <motion.section initial={{
                    opacity: 0,
                    x: 30
                }} whileInView={{
                    opacity: 1,
                    x: 0
                }} viewport={{
                    once: false
                }} transition={{
                    duration: 0.8,
                    delay: 0.5
                }} className="flx flx-drc">
                  <img alt="import process map" src="\images\Sea process.png"/>
               </motion.section>
            </motion.div>            

            <Contact/>
        </div>
     )
}

export default Imports;
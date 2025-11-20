import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import {setisOpen} from "./navOpen"
import { motion } from 'framer-motion';
import Navbar from "./reusables/Nav-bar";
import Contact from "./reusables/contact";

function Bmodel () {

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
        <motion.div initial={{
                    opacity: 0,
                }} whileInView={{
                    opacity: 1,
                }} viewport={{
                    once: false
                }} transition={{
                    duration: 0.8
                }} id="bmodel" className="flx flx-drc">
            <Navbar tag={"bmodel"}/>
            <motion.div initial={{
                    opacity : 0 
                }} whileInView={{
                    opacity : 0.8
                }} transition={{
                    duration : 0.3
                }}className={`${isOpen && "blur"}`} onClick={closeNav}></motion.div>
            
            
            <motion.div initial={{
                    opacity: 0,
                    y: 20
                }} whileInView={{
                    opacity: 1,
                    y: 0
                }} viewport={{
                    once: false
                }} transition={{
                    duration: 0.6
                }} id="value" className="flx edg-pd">
                <div className="pattern2">

                </div>

                <div className="bg-img">

                </div>
                <motion.section initial={{
                    opacity: 0,
                    x: -30
                }} whileInView={{
                    opacity: 1,
                    x: 0
                }} viewport={{
                    once: false
                }} transition={{
                    duration: 0.8,
                    delay: 0.3
                }} id="value-text" className="flx flx-drc">
                    <h1>
                        The Value <br/>Creation Chain
                    </h1>
                    <p>
                        Our 4-Step approach will ensure that we consistently simplfy your logistics needs and deliver extraordinary value.
                    </p>
                </motion.section>
                <motion.div initial={{
                    opacity: 0,
                    x: 30
                }} whileInView={{
                    opacity: 1,
                    x: 0
                }} viewport={{
                    once: false
                }} transition={{
                    duration: 0.8,
                    delay: 0.3
                }} id="value-chain" className="grd">
                    <img alt="cycle" src="\images\logo5.png" />
                    <img alt="logo" src="\images\Picture18.png" />
                </motion.div>
            </motion.div>

            <Contact />

        </motion.div>


     )
}

export default Bmodel;
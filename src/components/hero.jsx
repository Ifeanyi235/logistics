import React from "react";
import { motion } from 'framer-motion';

function Hero (props) {

    const scrollToSection = () => {
        const element = document.getElementById("services");
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };

    return (
        <motion.div initial={{
                    opacity: 0,
                }} whileInView={{
                    opacity: 1,
                }} viewport={{
                    once: false
                }} transition={{
                    duration: 0.6
                }} id="hero" className="flx edg-pd" onClick={props.setopen}>
            <div id="bg-hero" className="flx">
                <img alt="" src="\images\Pic3-crop1.jpg"></img>
            </div>

            <div id="hero-text" className="flx flx-drc">
                    <img alt="company logo" className="" src="\images\logo.png"></img>
                    {/* <h1>Global Simplified</h1> */}
                    <h2>Fast, reliable, and cost-effective shipping solutions for businesses of all sizes</h2>
                    <motion.button whileHover={{scale: 1.1}} onClick={scrollToSection}>Learn More</motion.button>
            </div>
        </motion.div>
    )
}

export default Hero;
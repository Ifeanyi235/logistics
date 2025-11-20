import React from "react";
import { motion } from "framer-motion";

function Bphil (props) {
    return (
        <motion.div initial= {{
            opacity : 0,
        }} viewport={{
            once : false
        }} whileInView={{
            opacity : 1 
        }} transition={{
            duration : 0.2
        }} id="bphil" className="flx" onClick={props.setopen}>
            <motion.div initial={{
                opacity : 0,
                x : 40
            }} whileInView={{
                opacity : 1,
                x : 0
            }} viewport={{
                once : false
            }} transition={{
                duration : 0.8,
                delay : 0.2
            }} id="bphil-text" className="flx flx-drc edg-pd">
                <h2>Our Business<br/> Philosophy</h2>
                <p>“At NG Logistics we consider every order as a call to service. We will apply our full knowledge, zeal and passion to deliver 
                    on the service metrics particularly suitable to your business needs. We will do the extraordinary to transport each item of 
                    merchandise you entrust to our care safely through the supply value chain in a timely and most ethical manner. Our solution 
                    will give you confidence and peace of mind as we welcome you to rely on us to DELIVER YOUR OWN PROMISE TO YOUR CUSTOMERS .”</p>
                <p>- Founder/CEO</p>
            </motion.div>

            <div id="bphil-bg">

            </div>

            <div id="bphil-img">
                <img src="\images\image 2.png"/>
            </div>

        </motion.div>
    )
}

export default Bphil;
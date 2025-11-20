import React from "react";
import { motion } from 'framer-motion';


function LogoSplash () {
    return (
        <motion.div initial={{
                opacity: 1
            }} 
            animate={{
                opacity: 0,
            }} 
            transition={{
                duration: 1.0,
                delay: 3.0
            }} 
        className="flx " id="logoSplash">

            <motion.div initial={{
                    scale: 0.5,
                    opacity: 0
                }} 
                animate={{
                    scale: 1,
                    opacity: 1
                }} 
                transition={{
                    duration: 0.6
                }} 
            className="text-center" id="logo1">

                <motion.div animate={{
                        x: [0, 20, 0]
                    }} 
                    transition={{
                        duration: 1.5,
                        repeat: 1,
                        ease: 'easeInOut'
                    }} 
                className="mb-4" id="logo2">       
                    {/* <TruckIcon className="" strokeWidth={1.5} /> */}
                </motion.div>

                <motion.h1 initial={{
                        opacity: 0,
                        y: 20
                    }} 
                    animate={{
                        opacity: 1,
                        y: 0
                    }} 
                    transition={{
                        delay: 1.5,
                        duration: 0.6
                    }} className="" id="logo3">
                SwiftMove
                </motion.h1>

                <motion.p initial={{
                        opacity: 0
                    }} 
                    animate={{
                        opacity: 1
                    }} 
                    transition={{
                        delay: 0.6,
                        duration: 0.6
                    }} 
                className="text-white/90 text-lg mt-2" id="logo4">
                Logistics Solutions
                </motion.p>
            </motion.div>
        </motion.div>
    )
};

export default LogoSplash;
import { motion } from "framer-motion";
import { Wallet, Handshake} from "lucide-react"
import React from "react";

function Contact () {
    const currentYear = new Date().getFullYear();

    const elements = [{
        title: "Email",
        icon: Wallet,
        description: "info@nglogistics.org",
        link: "mailto:info@nglogistics.org"
    }, {
        title: "Office",
        icon: Handshake,
        description: "Naija Global Logistics Ltd. First Floor, Gemini Block, Eleganza Plaza; 1 Commercial Road, Apapa Lagos, Nigeria",
        link: "https://maps.app.goo.gl/MMo1kbBCuhQqfovZ6"
    }]

    return (
        <div id="contact" className="flx flx-drc">
            <motion.div initial={{
                    opacity: 0,
                    y: 20
                }} whileInView={{
                    opacity: 1,
                    y: 0
                }} viewport={{
                    once: false
                }} transition={{
                    duration: 1.0
                }} id="contact-text">
                <h1>Get In Touch</h1>
                <h2>Ready to streamline your logistics? Contact us today</h2>
            </motion.div>

            <div className="flx f-width contact-info">
                <div id="contact-element" className="flx flx-drc">
                    {elements.map((element, index) => <motion.div key={index} initial={{
                            opacity: 0,
                            y: 20
                        }} whileInView={{
                            opacity: 1,
                            y: 0
                        }} viewport={{
                            once: false
                        }} transition={{
                            duration: 1.0,
                            delay: 0.2
                        }} className="flx gap">
                            <element.icon id="element-icon" strokeWidth={1.2}/>
                            <section className="flx flx-drc">
                                <h2>{element.title}</h2>
                                <a href={element.link} target="-blank"><p>{element.description}</p></a>
                            </section>
                        
                    </motion.div>)}
                </div>
                
                <motion.form id="contact-form" className="flx flx-drc">
                        <p>
                            <img alt="Logo" src="\images\Picture18.png"/>© {currentYear}  NG Logistics
                        </p>
                </motion.form>
            </div>
        </div>
    )
}

export default Contact;
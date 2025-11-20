import { motion } from "framer-motion";
import { Wallet, ShieldCheck, Handshake} from "lucide-react"
import React, {useRef} from "react";

function Contact () {

    const fnameRef = useRef ();
    const emailRef = useRef ();
    const messageRef = useRef ();

    const elements = [{
        title: "Email",
        icon: Wallet,
        description: ""
    }, {
        title: "Phone",
        icon: ShieldCheck,
        description: ""
    }, {
        title: "Office",
        icon: Handshake,
        description: "Naija Global Logistics Ltd. First Floor, Gemini Block, Eleganza Plaza; 1 Commercial Road, Apapa Lagos, Nigeria"
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
                    {elements.map((element, index) => <motion.div initial={{
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
                                <p>{element.description}</p>
                            </section>
                        
                    </motion.div>)}
                </div>
                
                <motion.form initial={{
                        opacity: 0,
                        y: 20
                    }} whileInView={{
                        opacity: 1,
                        y: 0
                    }} viewport={{
                        once: false
                    }} transition={{
                        duration: 1.0,
                        delay: 0.4
                    }} id="contact-form" className="flx flx-drc">
                        <input name="fname" type="text" placeholder="Your Name" ref={fnameRef} />
                        <input name="email" type="email" placeholder="Your Email" ref={emailRef} />
                        <textarea className="message" name="message" type="text" placeholder="Your Message" ref={messageRef} />
                        <motion.button whileHover={{
                            scale: 1.02
                        }} type="submit" className="rnd-edg">
                            Send Message
                        </motion.button>
                </motion.form>
            </div>
        </div>
    )
}

export default Contact;
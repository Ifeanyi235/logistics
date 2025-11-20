import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import {setisOpen} from "./navOpen"
import Navbar from "./reusables/Nav-bar";
import Contact from "./reusables/contact";
import { motion } from 'framer-motion';
import { Scale, ThumbsUp, Crown, Handshake, BriefcaseBusiness } from "lucide-react"

function OrgPhil () {

    const isOpen = useSelector((state) => state.navState.isOpen);
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const cores = [{
        title: "Ethics and Legal Compliance",
        description: "Our operations shall be guided by the highest standards of legal compliance in all countries and communities where we do business",
        icon: Scale
    }, {
        title: "Customer Promise",
        description: "Our services offerings shall be dictated by the needs, preference and taste of our customers",
        icon: ThumbsUp
    }, {
        title: "Value Creation",
        description: "Our service quality shall be of the highest standard and shall be delivered in the most convinent and the most cost effective manner to our customers",
        icon: Crown
    }, {
        title: "Commitment and Partnership",
        description: "We are committed in partnership to our customers, suppliers, employees and host communities ",
        icon: Handshake
    }, {
        title: "Business stablity",
        description: "In our dealings we live for today and aim for tomorrow",
        icon: BriefcaseBusiness
    }]

    function closeNav () {
        console.log(isOpen);
        dispatch(setisOpen(false));
    }

    return (
        <div id="orgphil" className="flx flx-drc">
            <Navbar tag={"orgphil"}/>
            <motion.div initial={{
                opacity : 0 }} whileInView={{
                opacity : 0.8
                }} transition={{
                duration : 0.3
                }} className={`${isOpen && "blur"}`} onClick={closeNav}></motion.div>

            <div id="core" className="flx flx-drc edg-pd">
                <motion.div initial={{
                        opacity: 0,
                        y: 20
                    }} whileInView={{
                        opacity: 1,
                        y: 0
                    }} viewport={{
                        once: false
                    }} transition={{
                        duration: 1
                    }} id="core-text" className="flx flx-drc">
                        <h1>
                            Our Core Values
                        </h1>
                </motion.div>

                <div id="core-grd" className="grd">
                    {cores.map((Core, index) => <motion.div initial={{
                            opacity: 0,
                            y: 20
                        }} whileInView={{
                            opacity: 1,
                            y: 0
                        }} viewport={{
                            once: false
                        }} transition={{
                            duration: 0.6,
                            delay : 0.3
                        }} className="flx flx-drc gap"> 
                            <motion.div whileHover={{
                                    scale: 1.1,
                                    rotate: 5
                                }}>
                                <Core.icon className="core-icon rnd-edg rnd-shd" strokeWidth={1.2}/> 
                            </motion.div>

                            <h2>
                                {Core.title}
                            </h2>

                            <p>
                                {Core.description}
                            </p>
                    </motion.div>)}
                </div>
                
            </div>

            <div id="quotes" className="flx flx-drc edg-pd">
                <div>
                    <h2>
                        Our Vision
                    </h2>

                    <p>
                        To become an Integrated Logistics Company that leverages its international affiliations and networks to support the competitive flow of goods and services to and from Sub Regional West Africa
                    </p>
                </div>

                <div>
                    <h2>
                        Our Mission
                    </h2>

                    <p>
                        <ul className="flx flx-drc gap">
                            <li>
                                To provide end-to-end customized transport solutions anchored on and driven by full legal compliance and high-level integrity. <br/>
                            </li>

                            <li>
                                To institute an open and competitive pricing philosophy that benefits all stakeholders of the business<br/>
                            </li>
                            <li>
                                To develop and retain high-caliber professionals who will support enhanced Integration within West Africa Sub Region.
                            </li>
                        </ul>



                    </p>
                </div>
            </div>
            <Contact />
        </div>
    )
}

export default OrgPhil;
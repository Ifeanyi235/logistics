import React, {useState} from "react";
import { Plane, ShieldCheck, Factory, Stamp, Speech, Ship} from "lucide-react"
import { motion } from 'framer-motion';

function Services (props) {

    const [flipped, setFlipped] = useState(false);

    function resetflip (index) {
        console.log(flipped);
        console.log(index)
        flipped !== index && setFlipped(index);

    }

    const service = [{
        icon: Ship,
        title: "Ocean Freight",
        Description: "Cost-effective shipping for large volume cargo",
        backCard: "Exports, Imports, Ship Brokerage, Door to Door Logistics Global Freight and Logistics Know-how Strong relationship with Shipping Lines Full Container, Break Bulk, and Heavy Lift Transport Customs Clearance, Customs Bond Temporary Importation and Exportation "
    }, {
        icon: Plane,
        title: "Air Freight",
        Description: "Fast international shipping for time-sensitive cargo",
        backCard: "Exports, Imports, Air Charters, Door to Door Logistics Global Freight and Logistics Know-how Strong relationship with Airlines Out of Gauge and Heavy Lift Transport Customs Clearance, Customs Bond Temporary Importation and Exportation"
    }, {
        icon: Stamp,
        title: "Customs Clearance",
        Description: "Managing import and export documentation and ensuring compliance with regulatory requirements.",
        backCard: "Import and Export Clearance Sea Freight and Air Freight Clearance Temporary Importation and Exportation Form M & PAAR Application Management Dedicated Teams with Own Customs License Door Deliveries throughout Nigeria Customs Bond & Fast Track Clearance Cross-Border Clearance"
    }, {
        icon: Factory,
        title: "Industrial Projects",
        Description: "Managing complex logistics for large-scale operations, including the transport and installation of heavy machinery.",
        backCard: "Strong Suppliers Support HSSE & Risk Management Lifting & Skidding Capabilities Route Surveys and Risk Analysis Global Freight and Logistics Know-how Inland Transportation & Barging Capabilities"
    }, {
        icon: ShieldCheck,
        title: "Cargo Insurance",
        Description: "Cargo insurance provides protection for goods during transport, safeguarding against loss, damage, or theft.",
        backCard: "Covers the cargo during transport, protecting it from unforeseen damages or losses due to accidents, theft, or natural disasters. Offers assistance in filing claims and ensuring timely compensation in case of damage or loss. "
    }, {
        icon: Speech,
        title: "Consultation",
        Description: "Comprehensive protection for your valuable shipments",
        backCard: "Provides expert advice on navigating trade regulations, logistics strategies, and optimizing supply chains. Assistance in navigating customs processes and ensuring compliance with international regulations."
    }]

    return (
        <div id="services" className="flx flx-drc edg-pd" onClick={props.setopen}>

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
                }} id="service-text" className="flx flx-drc">
                <h2 className="">
                    Our Services
                </h2>
                <p className="">
                    Comprehensive logistics solutions tailored to your business needs
                </p>
            </motion.div>

            <div id="service-grid" className="grd">
                {service.map((service, index) => <motion.div key={service.title} whileHover={{
                        y: -10
                    }}
                    viewport={{
                        once: true
                    }} transition={{
                        duration: 0.7,
                        delay: 0.2, 
                    }} animate={{
                        rotateY: index === flipped ? 180 : 0
                    }} onClick={() => {setFlipped(true); resetflip(index)}} 
                    onHoverStart={() => {resetflip(index)}}
                    onHoverEnd={() => {setFlipped(true);}} className="card flx flx-drc rnd-shd rnd-edg">

                    <motion.div animate={{ 
                            opacity: flipped === index ? 0 : 1                            
                        }} transition={{ 
                            duration: 0.5,
                            delay: flipped === index ? 0 : 0.6 
                        }} 
                        className="card-text">

                        <motion.div animate={{
                                rotate: [0, 3, -3, 0]
                            }} transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: index * 0.2
                            }}>
                            <service.icon id="class-icon" strokeWidth={1.5} />
                        </motion.div>

                        <h3 style={{
                         }} className="card-title">
                            {service.title}
                        </h3>

                        <p style={{
                         }} className="text-gray-600">{service.Description}</p>
                    </motion.div>

                    <motion.div initial={{
                            opacity : 0
                        }} animate={{
                            opacity: flipped === index ? 1 : 0,
                            
                        }} transition={{ 
                            duration: 0.5,
                            delay: flipped === index ? 0.8 : 0
                        }}
                    >
                        <h3 style={{transform: 'rotateY(180deg)'
                         }} className="backcard-text">
                            { service.backCard }
                        </h3>

                    </motion.div>

                </motion.div>)}
            </div>
        </div>
    )
}

export default Services
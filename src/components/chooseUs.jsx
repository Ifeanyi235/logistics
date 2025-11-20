import React from "react";
import { Wallet, ShieldCheck, Handshake, HandCoins } from "lucide-react"
import { motion } from 'framer-motion';

function ChooseUs (props) {

    const  features = [{
        icon: Wallet,
        title: 'Finacial Capability',
        description: 'Financially strong and has access to sufficient bank credit to support engagements of any size.'
    }, {
        icon: HandCoins,
        title: 'Cost Savings',
        description: 'Efficient customs clearance, with sea freight processed in 7 days and air freight in 3, while minimizing port storage, demurrage charges, and leveraging export expertise.'
    }, {
        icon: Handshake,
        title: 'Best Industry Lead',
        description: 'Accurate documentation, continuous stakeholder engagement, and strong industry knowledge.'
    }, {
        icon: ShieldCheck,
        title: 'Cargo Security',
        description: 'HSSE policies and culture, with adequate goods-in-transit coverage.'
    }]

    return (
        <div id="feature" className="flx flx-drc edg-pd rnd-shd" onClick={props.setopen}>
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
                }} id="feature-text" className="flx flx-drc">
                    <h1>
                        Why Choose NGLogistics
                    </h1>

                    <h2>
                        Experience the difference with our cutting-edge logistics platform
                    </h2>
            </motion.div>
            
            <div id="feature-grd" className="grd">
                {features.map((feature, index) => <motion.div initial={{
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
                    }} className="flx flx-drc"> 
                        <motion.div whileHover={{
                                scale: 1.1,
                                rotate: 5
                            }}>
                            <feature.icon className="feature-icon rnd-edg rnd-shd" strokeWidth={1.2}/> 
                        </motion.div>

                        <h2>
                            {feature.title}
                        </h2>

                        <p>
                            {feature.description}
                        </p>
                </motion.div>)}
            </div>
        </div>
    )
}

export default ChooseUs;
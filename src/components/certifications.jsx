import React from "react";
import {motion} from "framer-motion"

function Certification (props) {

    const windowWidth = window.innerWidth;

    const certificates = [{
        logo: <img alt="Nipex logo" src="\images\Nipex.png"/>,
        title: "Certification by Nigerian Petroleum Exchange (NiPEX) in process"
    }, {
        logo: <img alt="CRFFN logo" src="\images\CRFFN.png"/>,
        title: "Certified by Council for Regulation of Freight Forwarding in Nigeria (CRFFN)"
    }, {
        logo: <img alt="fiata logo" src="\images\fiata.jpg"/>,
        title: "Individual Member of International Federation of Freight Forwarders Associations (FIATA)"
    }, {
        logo: <img alt="customs logo" src="\images\nigeria customs.png"/>,
        title: "Licensed by Nigerian Customs Service (NCS)"
    }, {
        logo: <img alt="DOP logo" src="\images\department-of-petroleum.png"/>,
        title: "Licensed by Department of Petroleum Resources (DPR)"
    }, {
        logo: <img alt="Export Processing logo" src="\images\Nigeria Export Processing.png"/>,
        title: "Licensed by Nigeria Export Processing Zones Authority (NEPZA)"
    }]

    return (
        <div id="certification" className="flx flx-drc" onClick={props.setopen}>
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
                }} id="certification-text">
                <h1>Certifications</h1>
            </motion.div>

            <div className="grd grd-2">
                <div className="grd slider min-width">
                        {certificates.map((certificate, index) => <motion.div initial={{
                            x : windowWidth > 1024 ? (-windowWidth - 30) : (windowWidth < 641 ? -830 : -1250)
                        }} whileInView={{
                                opacity: 1,
                                y: 0
                            }} animate={{
                                x : [windowWidth > 1024 ? (-windowWidth - 30) : (windowWidth < 641 ? -830 : -1250), windowWidth > 1024 ? (windowWidth) : (windowWidth < 641 ? 800 : 1220)]
                            }} viewport={{
                                once: false
                            }} transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 20,
                                delay: 0
                            }} key={index} id="" className="flx flx-drc certificate-info">
                                <div className="flx">
                                    {certificate.logo} 
                                </div>

                                <p>{certificate.title}</p>
                        </motion.div>)}
                </div>

                <div className="grd slider min-width">
                        {certificates.map((certificate, index) => <motion.div initial={{
                            x : windowWidth > 1024 ? (-(windowWidth * 2) - 30) : (windowWidth < 641 ? -1630 : -2470)
                        }} whileInView={{
                                opacity: 1,
                                y: 0
                            }} animate={{
                                x : [windowWidth > 1024 ? (-(windowWidth * 2) - 30) : (windowWidth < 641 ? -1630 : -2470), 0]
                            }} viewport={{
                                once: false
                            }} transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 20,
                                delay: 10
                            }} id="" className="flx flx-drc certificate-info">
                                <div className="flx">
                                    {certificate.logo} 
                                </div>

                                <p>{certificate.title}</p>
                        </motion.div>)}
                </div>
            </div>


        </div>
    )
}

export default Certification




    
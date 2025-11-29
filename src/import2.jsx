import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import {setisOpen} from "./navOpen";
import {ArrowRight, MoveRight} from "lucide-react";
import Contact from "./reusables/contact";
import Navbar from "./reusables/Nav-bar";
import { motion } from 'framer-motion';

function Import () {
    const importProcesses = [{
        title : "Form M application documentation [1]",
        process : [ "Form applications through local banks", 
                    "Form M approval Call up of shipment",
                    "Export Documentation Cargo shipped onboard" 
                ]
    }, {
        title : "Shipment Documentation [2]",
        process : [ "Document remittance to receiving banks Shipping Pre Alerts",
                    "PAAR application",
                    "Customs duty assessment"
                ]
    }, {
        title : "Customs Duty Payment",
        process : [ "Customs clearance process",
                    "Cargo Delivery",
                    "Exchange control validation, resolution of post clearance issues, invoicing"
                ]
    }]

    const airProcesses = [{
        action: "Shipment and Documents Pre-alerts",
        day: "Pre-Arrival"
    }, {
        action: "Track and Confirm ETA, Terminal Allocation and Entry Rotation Number",
        day: "Pre-Arrival"
    }, {
        action: "Documents Validation",
        day: "Pre-Arrival"
    }, {
        action: "Custom Declaration and Generation of Duty Advice",
        day: "Pre-Arrival"
    }, {
        action: "Customs Duty Payment",
        day: "Pre-Arrival / Day 1"
    }, {
        action: "Trigger of Customs Declaration for Channel of Inspection",
        day: "Day 1"
    }, {
        action: "Payment of FAAN, NAHCO, SAHCOL and Regulatory Charges. Cost Estimations",
        day: "Day 1"
    }, {
        action: "Customs Examination, Scanning, et al",
        day: "Day 2"
    }, {
        action: "Release from Carrier: Master Delivery Order (MDO)",
        day: "Day 2"
    }, {
        action: "Customs Inspection Act / Release / Exit Note",
        day: "Day 2"
    }, {
        action: "Terminal Delivery Order (TDO) & Gate Pass / Loading Order",
        day: "Day 3"
    }, {
        action: "Load Out & Regularization with all Agencies in the Port",
        day: "Day 3"
    }, {
        action: "Validation Of Customs Entry for FX",
        day: "Post-Clearance"
    }, {
        action: "Invoicing and Handling of Post-Clearance issues",
        day: "Post-Clearance"
    }]

    const seaProcesses = [{
        action: "Shipment and Documents Pre-alerts",
        day: "Pre-Arrival"
    }, {
        action: "Track and Confirm ETA, Terminal Allocation and Entry Rotation Number",
        day: "Pre-Arrival"
    }, {
        action: "Documents Validation",
        day: "Pre-Arrival"
    }, {
        action: "Custom Declaration and Generation of Duty Advice",
        day: "Pre-Arrival"
    }, {
        action: "Customs Duty Payment",
        day: "Pre-Arrival / Day 1"
    }, {
        action: "Trigger of Customs Declaration for Channel of Inspection",
        day: "Day 1"
    }, {
        action: "Payment of Shipping, Terminal and Regulatory Charges. Cost Estimations",
        day: "Day 1"
    }, {
        action: "Customs Examination, Scanning, et al",
        day: "Day 1 / Day 2"
    }, {
        action: "Release from Carrier: Master Delivery Order (MDO)",
        day: "Day 2 / Day 3"
    }, {
        action: "Customs Inspection Act / Release / Exit Note",
        day: "Day 3 / Day 4"
    }, {
        action: "Terminal Delivery Order (TDO) & Loading Order",
        day: "Day 4"
    }, {
        action: "Load Out & Regularization with all Agencies in the Port",
        day: "Day 4"
    }, {
        action: "Return of Carrier Containers",
        day: "Day 5"
    },{
        action: "Validation Of Customs Entry for FX",
        day: "Post-Clearance"
    }, {
        action: "Invoicing and Handling of Post-Clearance issues",
        day: "Post-Clearance"
    }]

    const isOpen = useSelector((state) => state.navState.isOpen);
    const dispatch = useDispatch();

    function closeNav () {
        console.log(isOpen);
        dispatch(setisOpen(false));
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div id="import" className="grd">
            <Navbar tag={"import"}/>
            <motion.div initial={{
                opacity : 0 }} whileInView={{
                    opacity : 0.8
                }} transition={{
                    duration : 0.3
                }} className={`${isOpen ? "blur" : "hd"}`} onClick={closeNav}></motion.div>
            <div id="import-process" className="grd">
                <section>
                    <h1>
                        Nigeria Import Process Map
                    </h1>

                    <div></div>
                </section>

                <div id="import-diagram" className="grd">
                    {importProcesses.map((importprocess, index) => <div key={index} className="grd">
                        <div className="importprocesstitle">
                            <p className="">
                                {importprocess.title}
                            </p>
                        </div>

                        <div className="importprocesstext">
                            <p className="">
                                {importprocess.process[0]}
                            </p>
                        </div>

                        <ArrowRight className="arrowicon"/>

                        <div className="importprocesstext">
                            <p className="">
                                {importprocess.process[1]}
                            </p>
                        </div>

                        <ArrowRight className="arrowicon"/>

                        <div className="importprocesstext">
                            <p className="">
                                {importprocess.process[2]}
                            </p>
                        </div>


                    </div>)}
                </div>

                <div id="import-reference" className="grd">
                    <div className="grd">
                        <span>[ 1 ]</span>
                        <p>
                              Pro Forma Invoice, MSDS*, SON Product Certificate*, Marine Insurance Certificate
                        </p>
                    </div>

                    <div className="grd">
                        <span>[ 2 ]</span>
                        <p>
                             Commercial Invoice, Packing List, Form C16, Certificate of Chemical Analysis*, SONCAP Certificate*, Carrier Certificate*, Optional Documents
                        </p>
                    </div>
                </div>
            </div>

            <div id="air-frieght" className="grd">
                <section>
                    <h1>
                        Air Freight Customs Inwards Clearance Process
                    </h1>
                    
                    <h2>
                        Lead Times Matrix
                    </h2>

                    <div></div>
                </section>

                <div id="air-diagram" className="grd">
                    {airProcesses.map((airprocess, index) => <>
                        <div key={index} className="grd info">
                                <p>{airprocess.action}</p>
                                <p>{airprocess.day}</p>
                        </div>
                        {index !== (airProcesses.length -1) && <div className="arrowicon"><MoveRight /></div>}
                    </>)}
                </div>
            </div>

            <div id="sea-frieght" className="grd">
                <section>
                    <h1>
                        Sea Freight Customs Inwards Clearance Process
                    </h1>
                    
                    <h2>
                        Lead Times Matrix
                    </h2>

                    <div></div>
                </section>

                <div id="sea-diagram" className="grd">
                    {seaProcesses.map((seaprocess, index) => <>
                        <div key={index} className="grd info">
                                <p>{seaprocess.action}</p>
                                <p>{seaprocess.day}</p>
                        </div>
                        {index !== (seaProcesses.length -1) && <div className="arrowicon"><MoveRight /></div>}
                    </>)}
                </div>
            </div>

            <Contact />

        </div>
    )
}

export default Import;
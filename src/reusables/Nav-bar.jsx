import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {Menu, X} from "lucide-react";
import {setisOpen} from "../navOpen"


function Navbar (props) {
    const isOpen = useSelector((state) => state.navState.isOpen);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenu, setisMenu] = useState(window.innerWidth < 901);
    const [animateOut, setanimateOut] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const buttons = [{
        title: "Home",
        link: "/",
        page: "hero"
    }, {
        title: "Organizational Philosophy",
        link : "/org-phil",
        page: "orgphil"
    }, {
        title: "Business Model",
        link : "/business-Model",
        page: "bmodel"
    }, {
        title: "Import Process", 
        link : "/Import process",
        page: "import"
    }, {
        title: "Contact",
        link : "contact",
        page: ""
    }]

    useEffect(() => {
        const element = document.getElementById(props.tag);
        const handleScroll = () => {
            const scrollPosition = element.scrollTop;
            setIsScrolled(scrollPosition > 40);
        };
        handleScroll();
        element.addEventListener('scroll', handleScroll);
        return () => element.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const pageWidth =  () => {
            setisMenu(window.innerWidth < 901);
        };

        window.addEventListener("resize", pageWidth);

        return () => window.removeEventListener("resize", pageWidth);
    }, []);
    

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        dispatch(setisOpen(false));
        if (element) { 
            element.scrollIntoView({
                behavior: 'smooth'
            });
            // setIsMobileMenuOpen(false);
        } else {
            navigate(sectionId);
        }
    };

    const setDrop = () => {
        dispatch(setisOpen(!isOpen));
        setanimateOut(false);
    }
    return (
        <div id="navbar" className={`flx edg-pd ${isScrolled && 'bg'}`}>
            <img onClick={() => scrollToSection("/")} alt="logo" src="\images\Logo.png"/>
            {isMenu && <motion.button whileHover={{scale: 1.2}} onClick={setDrop}>
                    <Menu id="menu"/>
            </motion.button>}
                
            <motion.div initial={{
                        x: isMenu ? (window.innerWidth < 641 ? window.innerWidth : 360) : 0,
                        opacity: (!isOpen & isMenu) ? 0 : 1
                    }} animate={{
                        x: isMenu ? ((isOpen) ? 0 : ((!isOpen & animateOut)  ? [0, (window.innerWidth < 641 ? window.innerWidth : 360)] : (window.innerWidth < 641 ? window.innerWidth : 360))) : 0,
                        opacity: (!isOpen & isMenu) ? 0 : 1
                    }} transition={{
                        duration: 0.3,
                        ease: "linear",
                    }} viewport={{
                        once: false
                    }} id="components" className="flx">
                    {isMenu && <div className="flx">
                        <img onClick={() => scrollToSection("/")} alt="logo" src="\images\Logo.png"/>
                        <motion.button whileHover={{scale: 1.2}}
                            onClick={setDrop}>
                                <X />
                        </motion.button>            
                    </div>}
                    {buttons.map ((button, index) => <motion.button key={index} whileHover={{
                        y : -5,
                        color : "var(--primary-green)"
                    }} onClick={() => scrollToSection(button.link)}>
                        {button.title}
                    </motion.button>)}
            </motion.div>
        </div>
    )
}

export default Navbar;
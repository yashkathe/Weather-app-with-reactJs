import React, { useState } from "react";

import classes from "./Menu.module.css";

import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Menu = () => {
    // const [clicked, setIsClicked] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const HmenuHandler = () => {
        setShowModal(!showModal);
    };

    const navBarVarients = {
        initial: {
            x: "-70vw",
            transition: {
                duration: 1,
            },
        },
        animate: {
            x: "0vw",
            transition: {
                duration: 1,
            },
        },
    };

    const backDropVar = {
        initial: {
            opacity: 0,
            transition: {
                duration: 1,
            },
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 1,
            },
        },
    };

    const hamBurger1 = {
        animate: {
            rotate: -45,
            position:"absolute",
            originX: '72%',
            transition: {
                type: "tween",
                duration: 0.5,
                ease:"easeOut"
            },
        },
    };

    const hamBurger1H = {
        animate:{
            rotate:0,
                transition:{
                    type:"tween",
                    duration:0.7
                }
            }
    }

    const hamBurger2 = {
        animate: {
            x: "-50vw",
            opacity:0,
            transition: {
                type: "tween",
                duration: 0.5,
            },
        },
        preState:{
            x:0,
            opacity:1,
            transition: {
                type: "tween",
                duration: 0.5,
            },
        }
    };

    const hamBurger3 = {
        animate: {
            rotate: 45,
            position: "absolute",
            originX: '72%',
            transition: {
                type: "tween",
                duration: 0.5,
                ease:"easeOut"
            }
        },
    };

    return (
        <React.Fragment>
            <AnimatePresence>
                <div onClick={HmenuHandler}>
                    <motion.div
                        className={classes.HMenu}
                        variants={showModal === true ? hamBurger1 : hamBurger1H}
                        animate="animate"
                    ></motion.div>
                    <motion.div
                        className={classes.HMenu}
                        variants={hamBurger2}
                        animate={showModal === true ? "animate" : "preState"}
                    ></motion.div>
                    <motion.div
                        className={classes.HMenu}
                        variants={showModal === true ? hamBurger3 : hamBurger1H}
                        animate="animate"
                    ></motion.div>
                </div>
            </AnimatePresence>
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        className={classes.navBar}
                        variants={navBarVarients}
                        initial='initial'
                        animate='animate'
                        exit='initial'
                    >
                        <NavLink to='/' activeClassName={classes.active} exact>
                            <button>Home</button>
                        </NavLink>
                        <NavLink
                            to='/settings'
                            activeClassName={classes.active}
                        >
                            <button>Settings</button>
                        </NavLink>
                        <a
                            href='https://github.com/yashkathe/Weather-app-with-reactJs'
                            rel='noreferrer noopener'
                            target='_blank'
                        >
                            Source Code
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* backdrop  */}
            <AnimatePresence>
                {showModal === true && (
                    <motion.div
                        className={classes.backDrop}
                        onClick={HmenuHandler}
                        variants={backDropVar}
                        initial='initial'
                        animate='animate'
                        exit='initial'
                    ></motion.div>
                )}
            </AnimatePresence>
        </React.Fragment>
    );
};

export default Menu;

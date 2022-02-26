import React, { useState, useContext } from "react";

import classes from "./Menu.module.css";

import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import VarientsContext from "../Store/VarientsContext";

const Menu = () => {
    const [showModal, setShowModal] = useState(false);

    const HmenuHandler = () => {
        setShowModal(!showModal);
    };

    const ctx = useContext(VarientsContext);

    return (
        <React.Fragment>
            <AnimatePresence>
                {/* hamburger menu  */}

                <div onClick={HmenuHandler}>
                    <motion.div
                        className={classes.HMenu}
                        variants={
                            showModal === true
                                ? ctx.hamBurger1
                                : ctx.hamBurgerPostAnimate
                        }
                        style={showModal === true ? ctx.hamBurgerStyle: ""}
                        animate='animate'
                    ></motion.div>
                    <motion.div
                        className={classes.HMenu}
                        variants={ctx.hamBurger2}
                        animate={showModal === true ? "animate" : "preState"}
                        style={showModal === true ? ctx.hamBurgerStyle: ""}
                    ></motion.div>
                    <motion.div
                        className={classes.HMenu}
                        variants={
                            showModal === true
                                ? ctx.hamBurger3
                                : ctx.hamBurgerPostAnimate
                        }
                        style={showModal === true ? ctx.hamBurgerStyle: ""}
                        animate='animate'
                    ></motion.div>
                </div>
            </AnimatePresence>
            <AnimatePresence>
                {/* modal elements */}

                {showModal && (
                    <motion.div
                        className={classes.navBar}
                        variants={ctx.navBarVarients}
                        initial='initial'
                        animate='animate'
                        exit='initial'
                    >
                        <div className={classes.Menu__element}>
                            <NavLink
                                to='/'
                                activeClassName={classes.active}
                                exact
                            >
                                <button className={classes.Menu__innerElement}>Home</button>
                            </NavLink>
                        </div>

                        <div className={classes.Menu__element}>
                            <NavLink
                                to='/settings'
                                activeClassName={classes.active}
                            >
                                <button className={classes.Menu__innerElement}>Settings</button>
                            </NavLink>
                        </div>

                        <div className={classes.Menu__element}>
                            <a
                                href='https://github.com/yashkathe/Weather-app-with-reactJs'
                                rel='noreferrer noopener'
                                target='_blank'
                                className={classes.Menu__innerElement}
                            >
                                Source Code
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* backdrop  */}
            <AnimatePresence>
                {showModal === true && (
                    <motion.div
                        className={classes.backDrop}
                        onClick={HmenuHandler}
                        variants={ctx.backDropVar}
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

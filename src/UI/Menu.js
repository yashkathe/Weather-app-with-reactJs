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
                <div onClick={HmenuHandler}>
                    <motion.div
                        className={classes.HMenu}
                        variants={
                            showModal === true
                                ? ctx.hamBurger1
                                : ctx.hamBurgerPostAnimate
                        }
                        animate='animate'
                    ></motion.div>
                    <motion.div
                        className={classes.HMenu}
                        variants={ctx.hamBurger2}
                        animate={showModal === true ? "animate" : "preState"}
                    ></motion.div>
                    <motion.div
                        className={classes.HMenu}
                        variants={
                            showModal === true
                                ? ctx.hamBurger3
                                : ctx.hamBurgerPostAnimate
                        }
                        animate='animate'
                    ></motion.div>
                </div>
            </AnimatePresence>
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        className={classes.navBar}
                        variants={ctx.navBarVarients}
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

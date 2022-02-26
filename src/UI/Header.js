import React, { useContext } from "react";

import Menu from "./Menu";

import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

import VarientsContext from "../Store/VarientsContext";
import classes from "./Header.module.css";

const Header = () => {
    const ctx = useContext(VarientsContext);

    return (
        <React.Fragment>
            <div className={classes.header}>
                <div className={classes.div0}>
                    <Menu />
                </div>
                <div className={classes.div1}>
                    <Link to='/'>
                        <button className={classes.title__header}>
                            React Weather
                        </button>
                    </Link>
                </div>
                <div className={classes.div2}>
                    <motion.a
                        href='https://github.com/yashkathe/Weather-app-with-reactJs'
                        whileHover={ctx.hover2}
                        rel='noreferrer noopener'
                        target='_blank'
                        className={classes.link__header}
                    >
                        Source-Code
                    </motion.a>
                    <NavLink to='/settings' activeClassName={classes.active}>
                        <motion.div
                            whileHover={ctx.hover2}
                            className={classes.link__header}
                        >
                            <button>Settings</button>
                        </motion.div>
                    </NavLink>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Header;

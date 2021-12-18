import React from "react";
import classes from "./Header.module.css";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import Menu from "./Menu";

const Header = () => {
    const hover = {
        scale: 1.4,
        borderColor: "rgb(255, 215, 0)",
        color: "rgb(255, 215, 0)",
    };

    return (
        <React.Fragment>
            <div className={classes.header}>
                <div className={classes.div0}>
                    <Menu />
                </div>
                <div className={classes.div1}>
                    <Link to='/'>
                        <motion.button
                            whileHover={{
                                color: "rgb(255, 215, 0)",
                            }}
                        >
                            React Weather
                        </motion.button>
                    </Link>
                </div>
                <div className={classes.div2}>
                    <motion.a
                    href='https://github.com/yashkathe/Weather-app-with-reactJs'
                        whileHover={hover}
                        rel='noreferrer noopener'
                        target='_blank'
                    >
                        Source Code
                    </motion.a>
                    <NavLink to='/settings' activeClassName={classes.active}>
                        <motion.div whileHover={hover}>
                            <button>Settings</button>
                        </motion.div>
                    </NavLink>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Header;

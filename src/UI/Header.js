import React from "react";
import classes from "./Header.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
    const hover = {
        scale: 1.4,
        borderColor: "rgb(255, 215, 0)",
        color: "rgb(255, 215, 0)",
    };

    return (
        <React.Fragment>
            <div className={classes.header}>
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
                        href='https://github.com/yashkathe/Weather-app-with-reactJs/blob/master/src/App.css'
                        whileHover={hover}
                        rel='noreferrer noopener'
                        target='_blank'
                    >
                        Source Code
                    </motion.a>
                    <Link to='/settings'>
                        <motion.div whileHover={hover}>
                            <button>Settings</button>
                        </motion.div>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Header;

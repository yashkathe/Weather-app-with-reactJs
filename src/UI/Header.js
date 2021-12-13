import React from "react";
import classes from "./Header.module.css";
import { motion } from "framer-motion";

const Header = () => {
    const hover = {
        scale: 1.3,
        borderColor: "rgb(255, 215, 0)",
        color: "rgb(255, 215, 0)",
    };

    return (
        <React.Fragment>
            <div className={classes.header}>
                <motion.h4
                    whileHover={{
                        color: "rgb(255, 215, 0)",
                    }}
                >
                    React Weather
                </motion.h4>
                <motion.a href='/' whileHover={hover}>
                    Source Code
                </motion.a>
                <motion.a
                    href='/https://openweathermap.org/'
                    whileHover={hover}
                >
                    Powered by - open weather api
                </motion.a>
            </div>
        </React.Fragment>
    );
};

export default Header;

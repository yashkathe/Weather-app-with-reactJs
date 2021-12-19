import React from "react";

import styles from "./ErrorCondition.module.css";
import { motion } from "framer-motion";

const ErrorCondition = (props) => {
    const hover = {
        scale: 1.4,
        borderColor: "rgb(255, 215, 0)",
        color: "rgb(255, 215, 0)",
    };
    return (
        <React.Fragment>
            <div className={styles.content}>
                <p className={styles.error}>{props.error}</p>
                <motion.a whileHover={hover} href='/' className={styles.aerror}>
                    reload site
                </motion.a>
            </div>
        </React.Fragment>
    );
};

export default ErrorCondition;

import React from "react";

import styles from "./MainForm.module.css";
import { motion } from "framer-motion";

const ErrorCondition = (props) => {
    return (
        <React.Fragment>
                <div className={styles.content}>
                    <p className={styles.error}>{props.error}</p>
                    <motion.a
                        whileHover={props.hover}
                        href='/'
                        className={styles.aerror}
                    >
                        reload site
                    </motion.a>
                </div>
        </React.Fragment>
    );
};

export default ErrorCondition;
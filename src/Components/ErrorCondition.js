import React, {useContext} from "react";

import styles from "./ErrorCondition.module.css";
import { motion } from "framer-motion";
import VarientsContext from "../Store/VarientsContext";

const ErrorCondition = (props) => {
    const ctx = useContext(VarientsContext)

    return (
        <React.Fragment>
            <div className={styles.content}>
                <p className={styles.error}>{props.error}</p>
                <motion.a whileHover={ctx.Hover} href='/' className={styles.aerror}>
                    reload site
                </motion.a>
            </div>
        </React.Fragment>
    );
};

export default ErrorCondition;

import React, {useContext } from "react";

import { motion } from "framer-motion";
import styles from "./NotFound.module.css";
import VarientsContext from "../Store/VarientsContext";

const NotFound = () => {

    const ctx = useContext(VarientsContext)

    return (
        <div className={styles.content}>
            <h5 className={styles.error}>Error 404, page not found</h5>
            <motion.a whileHover={ctx.Hover} href='/' className={styles.aerror}>
                Home
            </motion.a>
        </div>
    );
};

export default NotFound;

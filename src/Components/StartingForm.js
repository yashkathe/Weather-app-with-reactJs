import React from "react";

import styles from "./StartingForm.module.css";
import { motion } from "framer-motion";

const StartingForm = (props) => {
    return (
        <React.Fragment>
            <div className={styles.blur}></div>
            <div className={styles.main}>
                <form className={styles.content} onSubmit={props.handler}>
                    <input
                        placeholder='Your city'
                        ref={props.cityref}
                        className={styles.mainInput}
                    />
                </form>
                <div className={styles.content}>
                    <h1 className={styles.Name2}>Enter the name of your city</h1>
                    <motion.p
                        className={styles.descript}
                        animate={{
                            scale: [1.1, 1, 1.1, 1, 1.1],
                            transition: {
                                duration: 10,
                                repeat: Infinity,
                            },
                        }}
                    >
                        Powered by - open weather api
                    </motion.p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default StartingForm;

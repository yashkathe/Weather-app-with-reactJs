import React from "react";

import styles from "./StartingForm.module.css";
import { motion } from "framer-motion";

import searchIcon from "../Assets/Icons/search-48.png";

const inputVarients = {
    onFocus: {
        scale: 1.18,
        transition: {
            type: "tween",
            stiffness: 300,
            duration: 0.6,
        },
    },
};

const StartingForm = (props) => {
    return (
        <React.Fragment>
            <div className={styles.blur}></div>
            <div className={styles.main}>
                <div className={styles.formDiv}>
                    <form className={styles.content} onSubmit={props.handler}>
                        <motion.input
                            placeholder='Your city'
                            ref={props.cityref}
                            className={styles.mainInput}
                            variants={inputVarients}
                            whileFocus='onFocus'
                        />
                        <button
                            className={styles.searchButton}
                            onClick={props.handler}
                        >
                            <img src={searchIcon} alt='search icon' />
                        </button>
                    </form>
                </div>
                <div className={styles.content}>
                    <h1 className={styles.Name2}>
                        Enter the name of your city
                    </h1>
                    <motion.p className={styles.descript}>
                        Powered by - open weather api
                    </motion.p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default StartingForm;

import React , {useContext} from "react";

import styles from "./StartingForm.module.css";
import { motion } from "framer-motion";

import searchIcon from "../Assets/Icons/search-48.png";
import VarientsContext from "../Store/VarientsContext";

const StartingForm = (props) => {
const ctx = useContext(VarientsContext)

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
                            variants={ctx.inputVarients}
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

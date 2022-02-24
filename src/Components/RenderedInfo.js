import React, {createContext} from "react";

import styles from "./RenderedInfo.module.css";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";
import searchIcon from "../Assets/Icons/search-48.png";
import VarientsContext from "../Store/VarientsContext";

const RenderedInfo = (props) => {
    const isCelsius = useSelector((state) => state.isDCelsius);

    const ctx = createContext(VarientsContext)

    return (
        <React.Fragment>
            <div className={styles.main}>
                <div className={styles.content}>
                    <div className={styles.formDiv}>
                        <form
                            className={styles.content}
                            onSubmit={props.submit}
                        >
                            <motion.input
                                placeholder='Your city'
                                ref={props.cityref}
                                className={styles.mainInput}
                                variants={ctx.inputVarients}
                                whileFocus='onFocus'
                            />
                            <button
                                className={styles.searchButton}
                                onClick={props.submit}
                            >
                                <img src={searchIcon} alt='search icon' />
                            </button>
                        </form>
                    </div>

                    <h1 className={styles.Name}>
                        {props.city}, {props.country}
                    </h1>
                    {isCelsius === true && (
                        <h1 className={styles.MainTemp}>
                            {props.temperature}°
                        </h1>
                    )}
                    {isCelsius === false && (
                        <h1 className={styles.MainTemp}>
                            {props.temperatureF} F
                        </h1>
                    )}
                    <div className={styles.descript}>
                        <h2>{props.description}</h2>
                        {isCelsius === true && (
                            <h5>
                                {props.maxTemp}° / {props.minTemp}°
                            </h5>
                        )}
                        {isCelsius === false && (
                            <h5>
                                {props.maxTempF} F / {props.minTempF} F
                            </h5>
                        )}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default RenderedInfo;

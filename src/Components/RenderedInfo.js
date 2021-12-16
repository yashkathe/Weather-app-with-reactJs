import React from "react";

import styles from "./MainForm.module.css";

import { useSelector } from "react-redux";

const RenderedInfo = (props) => {
    const isCelsius = useSelector((state) => state.isDCelsius);

    return (
        <React.Fragment>
            <div className={styles.main}>
                <div className={styles.content}>
                    <form className={styles.content} onSubmit={props.submit}>
                        <input
                            placeholder='Your city'
                            ref={props.cityref}
                            className={styles.mainInput}
                        />
                    </form>
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

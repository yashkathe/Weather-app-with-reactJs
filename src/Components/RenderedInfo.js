import React from "react";

import styles from "./MainForm.module.css";

const RenderedInfo = (props) => {
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
                    <h1 className={styles.MainTemp}>{props.temperature}°</h1>
                    <div className={styles.descript}>
                        <h2>{props.description}</h2>
                        <h5>
                            {props.maxTemp}°/
                            {props.minTemp}°
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default RenderedInfo;

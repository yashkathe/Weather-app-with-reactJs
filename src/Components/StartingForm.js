import React from "react";

import styles from "./MainForm.module.css";

const StartingForm = (props) => {
    return (
        <React.Fragment>
            <div className={styles.main}>
                <form className={styles.content} onSubmit={props.handler}>
                    <input placeholder='Your city' ref={props.cityref} />
                </form>
                <div className={styles.content}>
                    <h1 className={styles.Name}>Enter the name of your city</h1>
                    <p className={styles.descript}>
                        Powered by open weather api
                    </p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default StartingForm;

import React, { useState } from "react";

import classes from "./Settings.module.css";

const Settings = () => {
    let [isdCelsius, setIsDCelsius] = useState(true);
    let [isFarenhit, setIsFarenhit] = useState(false);

    const degreeChangeHandler = () => {
        setIsDCelsius(true);
        setIsFarenhit(false);
    };

    const farenhitChangeHandler = () => {
        setIsDCelsius(false);
        setIsFarenhit(true);
    };

    const submitHandler = (event) => {
        event.preventDefault();
    };

    console.log(isdCelsius, "celsius");
    console.log(isFarenhit, "farenhite");

    return (
        <React.Fragment>
            {/* background div  */}

            <div className={classes.backgroundd}></div>
            <div className={classes.blur}></div>

            {/* main component  */}

            <div className={classes.main}>
                <div className={classes.title}>
                    <h2 className={classes.header}>Settings </h2> <h2>⚙️</h2>
                </div>

                <h4>Unit for temperature</h4>
                <form className={classes.settingForm} onSubmit={submitHandler}>
                    <div>
                        <label htmlFor='degree'>Degree Celsius</label>
                        <input
                            type='radio'
                            name='tempUnit'
                            checked={isdCelsius}
                            onChange={degreeChangeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor='farenhit'>Farenhit</label>
                        <input
                            type='radio'
                            name='tempUnit'
                            checked={isFarenhit}
                            onChange={farenhitChangeHandler}
                        />
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
};

export default Settings;

import React, { useState } from "react";
import UnitContext from "../Store/UnitContext";

import classes from "./Settings.module.css";

const Settings = () => {
    let [isDCelsius, setIsDCelsius] = useState(true);
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

    return (
        <React.Fragment>
            <UnitContext.Provider value={{ isDCelsius: isDCelsius}}>
                {console.log(isDCelsius)}
                <div className={classes.blur}></div>
                <div className={classes.main}>
                    <h2 className={classes.header}>Settings</h2>
                    <h4>Unit for temperature</h4>
                    <form
                        className={classes.settingForm}
                        onSubmit={submitHandler}
                    >
                        <div>
                            <label htmlFor='degree'>Degree Celsius</label>
                            <input
                                type='radio'
                                name='tempUnit'
                                checked={isDCelsius}
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
            </UnitContext.Provider>
        </React.Fragment>
    );
};

export default Settings;

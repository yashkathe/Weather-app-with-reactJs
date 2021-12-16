import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import classes from "./Settings.module.css";

const Settings = () => {
    //redux requisitives

    const unit = useSelector((state) => state.isDCelsius);
    const dispatch = useDispatch();

    //component level state + redux data

    const [isdCelsius, setIsDCelsius] = useState(unit);
    const [isfarenheit, setIsFarenheit] = useState(!unit);

    //change handlers + redux data

    const degreeChangeHandler = () => {
        setIsDCelsius(true);
        setIsFarenheit(false);
        dispatch({ type: "celsius", unitBool: true });
    };

    const farenhitChangeHandler = () => {
        setIsDCelsius(false);
        setIsFarenheit(true);
        dispatch({ type: "celsius", unitBool: false });
    };

    const submitHandler = (event) => {
        event.preventDefault();
    };

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

                {/* radio form for unit selection  */}

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
                            checked={isfarenheit}
                            onChange={farenhitChangeHandler}
                        />
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
};

export default Settings;

import React, { useRef, useState } from "react";
// import MoreInfo from "./MoreInfo";

import styles from "./MainForm.module.css";

const MainForm = () => {
    const cityInputRef = useRef();

    const [weatherInfo, setWeatherInfo] = useState([])

    async function submitHandler(event){
        event.preventDefault();
        const enteredCity = cityInputRef.current.value;
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${enteredCity}&appid=0b40370de08ecbdf583740beb5183c0b`
        );
        const data = await response.json()

        console.log(data.weather)

    };

    return (
        <React.Fragment>
            <div className={styles.main}>
                <form className={styles.content} onSubmit={submitHandler}>
                    <input placeholder='Your city' ref={cityInputRef} />
                </form>
                <div className={styles.content}>
                    <h1 className={styles.Name}>Mumbai, In</h1>
                    <h1 className={styles.MainTemp}>30°</h1>
                    <div className={styles.descript}>
                        <h2>Humid</h2>
                        <h5>23/29</h5>
                    </div>
                </div>
                {/* <MoreInfo/> */}
            </div>
        </React.Fragment>
    );
};

export default MainForm;

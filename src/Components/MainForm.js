import React, { useRef, useState } from "react";
import Spinner from "../UI/Spinner";
// import MoreInfo from "./MoreInfo";

import styles from "./MainForm.module.css";
import {motion} from "framer-motion";

const MainForm = () => {
    const hover = {
        scale: 1.4,
        borderColor: "rgb(255, 215, 0)",
        color: "rgb(255, 215, 0)",
    };

    const cityInputRef = useRef();

    const [dataReceived, setDataReceived] = useState(false);
    const [loading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const [temperature, setTemperature] = useState([]);
    const [country, setCountry] = useState([]);
    const [description, setDescription] = useState([]);

    async function submitHandler(event) {
        event.preventDefault();

        setIsLoading(true);
        setDataReceived(false);
        setError(null);

        try {
            const enteredCity = cityInputRef.current.value;
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${enteredCity}&appid=0b40370de08ecbdf583740beb5183c0b`
            );
            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    "Something went wrong, make sure you entered the correct name of the city"
                );
            }

            //temperature data

            const tempData = [data.main];

            const APItemperature = tempData.map((indvMain) => {
                return {
                    temperature: indvMain.temp - 273.15,
                    temp_max: indvMain.temp_max - 273.15,
                    temp_min: indvMain.temp_min - 273.15,
                    humidity: indvMain.humidity,
                    pressure: indvMain.pressure,
                };
            });
            setTemperature(APItemperature);

            //country and place data

            const countryData = [data.name, data.sys.country];

            setCountry(countryData);

            //description

            const descriptionData = [data.weather[0].description];

            setDescription(descriptionData);

            setIsLoading(false);
            setDataReceived(true);
        } catch (error) {
            setIsLoading(false);
            setDataReceived(false);
            setError(error.message);
        }
    }

    return (
        <React.Fragment>
            {dataReceived === false && loading === false && error === null && (
                <div className={styles.main}>
                    <form className={styles.content} onSubmit={submitHandler}>
                        <input placeholder='Your city' ref={cityInputRef} />
                    </form>
                    <div className={styles.content}>
                        <h1 className={styles.Name}>
                            Enter the name of your city
                        </h1>
                        <p className={styles.descript}>
                            Powered by open weather api
                        </p>
                    </div>
                </div>
            )}
            {dataReceived === false && loading === true && error === null && (
                <Spinner />
            )}
            {dataReceived === false && loading === false && error && (
                <div className={styles.content}>
                    <p className={styles.error}>{error}</p>
                    <motion.a whileHover={hover} href='/' className={styles.aerror}>
                        reload site
                    </motion.a>
                </div>
            )}
            {dataReceived === true && loading === false && error === null && (
                <div className={styles.main}>
                    <div className={styles.content}>
                        <form
                            className={styles.content}
                            onSubmit={submitHandler}
                        >
                            <input placeholder='Your city' ref={cityInputRef} />
                        </form>
                        <h1 className={styles.Name}>
                            {country[0]}, {country[1]}
                        </h1>
                        <h1 className={styles.MainTemp}>
                            {temperature[0].temperature.toFixed(2)}°
                        </h1>
                        <div className={styles.descript}>
                            <h2>{description[0]}</h2>
                            <h5>
                                {temperature[0].temp_max.toFixed(2)}/
                                {temperature[0].temp_min.toFixed(2)}
                            </h5>
                        </div>
                    </div>
                    {/* <MoreInfo/> */}
                </div>
            )}
        </React.Fragment>
    );
};

export default MainForm;

import React, { useRef, useState } from "react";
import Spinner from "../UI/Spinner";

// import MoreInfo from "./MoreInfo";

import StartingForm from "./StartingForm";
import ErrorCondition from "./ErrorCondition";
import RenderedInfo from "./RenderedInfo";

import styles from "./MainForm.module.css";

const MainForm = () => {
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
                    temperatureC: indvMain.temp - 273.15,
                    temperatureF: (indvMain.temp - 273.15) * 1.8 + 32,
                    temp_maxC: indvMain.temp_max - 273.15,
                    temp_maxF: (indvMain.temp_max - 273.15) * 1.8 + 32,
                    temp_minC: indvMain.temp_min - 273.15,
                    temp_minF: (indvMain.temp_min - 273.15) * 1.8 + 32,
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
            <div className={styles.backgroundd}></div>
            {/* condition one - Home Page*/}

            {dataReceived === false && loading === false && error === null && (
                <StartingForm handler={submitHandler} cityref={cityInputRef} />
            )}

            {/* condition two  - Spinner*/}

            {dataReceived === false && loading === true && error === null && (
                <Spinner />
            )}

            {/* condition 3  - Getting some error*/}

            {dataReceived === false && loading === false && error && (
                <ErrorCondition error={error} />
            )}

            {/* condition 4  - Successfully retrived the data */}

            {dataReceived === true && loading === false && error === null && (
                <RenderedInfo
                    submit={submitHandler}
                    cityref={cityInputRef}
                    city={country[0]}
                    country={country[1]}
                    temperature={temperature[0].temperatureC.toFixed(2)}
                    temperatureF={temperature[0].temperatureF.toFixed(2)}
                    description={description[0]}
                    maxTemp={temperature[0].temp_maxC.toFixed(2)}
                    maxTempF={temperature[0].temp_maxF.toFixed(2)}
                    minTemp={temperature[0].temp_minC.toFixed(2)}
                    minTempF={temperature[0].temp_minF.toFixed(2)}
                />
            )}
        </React.Fragment>
    );
};

export default MainForm;

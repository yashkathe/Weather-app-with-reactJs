import React from "react";
import ReactDOM from "react-dom";

import unitContext from "./Store/Context";

import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <unitContext.Provider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </unitContext.Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

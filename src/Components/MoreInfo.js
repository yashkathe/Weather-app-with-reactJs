import React from "react";

import classes from "./MoreInfo.module.css";

const MoreInfo = () => {
    return (
        <React.Fragment>
            <div className={classes.InfoButton}>
                <button>
                    Load more Info 
                </button>
            </div>
        </React.Fragment>
    );
};

export default MoreInfo;

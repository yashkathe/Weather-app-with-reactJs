import React, { useState } from "react";

import classes from "./Menu.module.css";

import { NavLink } from "react-router-dom";

const Menu = () => {
    const [clicked, setIsClicked] = useState(false);

    const HmenuHandler = () => {
        setIsClicked(!clicked);
    };

    const navBar = clicked === false ? classes.navBar : classes.navBarClicked
    const backDrop = clicked === false ? classes.backDrop : classes.backDropClicked

    return (
        <React.Fragment>
            <div onClick={HmenuHandler}>
                <div className={classes.HMenu}></div>
                <div className={classes.HMenu}></div>
                <div className={classes.HMenu}></div>
            </div>
            <div className={navBar}>
                <NavLink to='/' activeClassName={classes.active} exact>
                    <div>
                        <button>Home</button>
                    </div>
                </NavLink>
                <a
                    href='https://github.com/yashkathe/Weather-app-with-reactJs'
                    rel='noreferrer noopener'
                    target='_blank'
                >
                    Source Code
                </a>
                <NavLink to='/settings' activeClassName={classes.active}>
                    <div>
                        <button>Settings</button>
                    </div>
                </NavLink>
            </div>
            <div className={backDrop} onClick={HmenuHandler}></div>
        </React.Fragment>
    );
};

export default Menu;

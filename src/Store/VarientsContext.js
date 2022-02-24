import React from "react";

const VarientsContext = React.createContext({
    //ErrorCondition.js
    Hover: {
        scale: 1.4,
        borderColor: "rgb(255, 215, 0)",
        color: "rgb(255, 215, 0)",
    },
    InputVarients: {
        onFocus: {
            scale: 1.18,
            transition: {
                type: "tween",
                stiffness: 300,
                duration: 0.6,
            },
        },
    },

    //header.js
    hover2: {
        scale: 1.4,
        borderColor: "rgb(255, 215, 0)",
        color: "rgb(255, 215, 0)",
    },

    //Meni

    navBarVarients: {
        initial: {
            x: "-70vw",
            transition: {
                duration: 1,
            },
        },
        animate: {
            x: "0vw",
            transition: {
                duration: 1,
            },
        },
    },

    backDropVar: {
        initial: {
            opacity: 0,
            transition: {
                duration: 1,
            },
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 1,
            },
        },
    },
    hamBurger1: {
        animate: {
            rotate: -45,
            position: "absolute",
            originX: "72%",
            transition: {
                type: "tween",
                duration: 0.5,
                ease: "easeOut",
            },
        },
    },

    hamBurgerPostAnimate: {
        animate: {
            rotate: 0,
            transition: {
                type: "tween",
                duration: 0.33,
            },
        },
    },

    hamBurger2: {
        animate: {
            x: "-50vw",
            opacity: 0,
            transition: {
                type: "tween",
                duration: 0.5,
            },
        },
        preState: {
            x: 0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: 0.5,
            },
        },
    },

    hamBurger3: {
        animate: {
            rotate: 45,
            position: "absolute",
            originX: "72%",
            transition: {
                type: "tween",
                duration: 0.5,
                ease: "easeOut",
            },
        },
    },
});

export default VarientsContext;

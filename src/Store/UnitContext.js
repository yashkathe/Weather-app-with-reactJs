import { createStore } from "redux";

const unitReducer = (state = { isDCelsius: true }, action) => {
    if (action.type === "celsius") {
        return {
            isDCelsius: (state.isDCelsius = action.unitBool),
        };
    }

    return state;
};

const store = createStore(unitReducer);

export default store;

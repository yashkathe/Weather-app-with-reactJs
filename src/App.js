import Header from "../src/UI/Header";
import MainForm from "./Components/MainForm";

import { Route, Switch } from "react-router-dom";
import Settings from "./Components/Settings";
import NotFound from "./UI/NotFound";

import UnitContext from "./Store/UnitContext";

function App() {
    return (
        <Switch>
            <Route path='/' exact>
                <UnitContext.Provider value={{}}> 
                    <Header />
                </UnitContext.Provider>
                <UnitContext.Provider value={{}}> 
                    <MainForm />
                </UnitContext.Provider>
            </Route>
            <Route path='/settings'>
                <Header />
                <UnitContext.Provider value={{}}> 
                    <Settings />
                </UnitContext.Provider>
            </Route>
            <Route path='*'>
                <NotFound />
            </Route>
        </Switch>
    );
}

export default App;

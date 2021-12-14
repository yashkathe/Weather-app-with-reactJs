import Header from "../src/UI/Header";
import MainForm from "./Components/MainForm";

import { Route, Switch } from "react-router-dom";
import Settings from "./Components/Settings";
import NotFound from "./UI/NotFound";

function App() {
    return (
        <Switch>
            <Route path='/' exact>
                <Header />
                <MainForm />
            </Route>
            <Route path='/settings'>
                <Header/>
                <Settings />
            </Route>
            <Route path='*'> 
              <NotFound/>
            </Route>
        </Switch>
    );
}

export default App;

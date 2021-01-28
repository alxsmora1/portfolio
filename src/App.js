import "./css/styles.css";
import LandingPage from "./layouts/LandingPage";
import { HashRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <div>
                <LandingPage />
              </div>
            );
          }}
        ></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;

import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Favorites from "./pages/Favorites";
import AddLocation from "./pages/AddLocation";
import MainNavigation from "./components/layouts/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/add-location">
          <AddLocation />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

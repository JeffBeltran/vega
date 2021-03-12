import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import Buttons from "./pages/components/Buttons";
import Blank from "./pages/hooks/Blank";

import NextLaunch from "./pages/hooks/NextLaunch";
import RouteLayout from "./RouteLayout";

function App() {
  return (
    <Router>
      <Switch>
        <RouteLayout path="/hooks/next-launch" title="Hooks">
          <NextLaunch />
        </RouteLayout>
        <RouteLayout path="/hooks/foo-bar" title="Foo Bar">
          <Blank />
        </RouteLayout>
        <Route path="/hooks">
          <Redirect to="/hooks/next-launch" />
        </Route>
        <RouteLayout path="/components/buttons" title="Components">
          <Buttons />
        </RouteLayout>
        <Route path="/components">
          <Redirect to="/components/buttons" />
        </Route>
        <Route path="/">
          <Redirect to="/components/buttons" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

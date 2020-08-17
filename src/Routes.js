import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import {
  Home,
  DrugSearch,
  About,
  Settings,
  Checkin,
  Resources,
  Emergency,
} from "./components";

const Routes = () => {
  return (
    <div id="main">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/settings" component={Settings} />
        <Route path="/search" component={DrugSearch} />
        <Route path="/checkin" component={Checkin} />
        <Route path="/resources" component={Resources} />
        <Route path="/emergency" component={Emergency} />
      </Switch>
    </div>
  );
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(Routes);

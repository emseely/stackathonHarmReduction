import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import { Home, DrugSearch, About, Settings } from "./components";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/settings" component={Settings} />
      <Route path="/search" component={DrugSearch} />
    </Switch>
  );
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(Routes);

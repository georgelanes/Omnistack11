import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logon from "./pages/Logon";
import Register from "./pages/Register";
import OngProfile from "./pages/OngProfile";
import NewIncident from "./pages/NewIncident";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Logon} />
        <Route path="/register" component={Register} />
        <Route path="/ong-profile" component={OngProfile} />
        <Route path="/incidents/new" component={NewIncident} />
      </Switch>
    </BrowserRouter>
  );
}

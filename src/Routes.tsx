import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Component404 from "./Component404";
import Home from "./Home";
import Navbar from "./Navbar";
import Orders from "./Orders";
import Success from "./Success";

export default function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/orders" component={Orders} />
        <Route path="/success" component={Success} />
        <Route path="*" component={Component404} />
      </Switch>
    </BrowserRouter>
  );
}

import React from "react";
import App from "./App";
import about from "./about/AboutPage";
import contact from "./Contacts";
import services from "./home/Services";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routing = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/xxwatts" exact component={App} />
          <Route path="/xxwatts/about" exact component={about} />
          <Route path="/xxwatts/contact" exact component={contact} />
          <Route path="/xxwatts/service" exact component={services} />
        </Switch>
      </>
    </Router>
  );
};

export default Routing;

import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Frontpage from "pages/frontpage/frontpage";
import Portfolio from "pages/portfolio/portfolio";
import Contact from "pages/contact/contact";
import NotFound from "pages/not-found/not-found";
import Header from "components/header/header";
import Footer from "components/footer/footer";

const renderTarget = document.querySelector("#render-target");

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Frontpage />
          </Route>
          <Route exact path="/portfolio/:page">
            <Portfolio />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

render(<App />, renderTarget);

import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import StartPages from "./routes/startPage";
import Ordinary from "./routes/Ordinary";
import Cocktails from "./routes/Cocktail";
import drinkDetails from "./components/drinkDetails";
import "./style.css";

function Home() {
  return (
    <HashRouter>
      <Switch>
        <Route exact={true} path="/" component={StartPages} />

        <Route exact={true} path="/ordinary" component={Ordinary} />
        <Route path="/ordinary/:id" component={drinkDetails} />
        {/* To DO <Route exact={true} path="/cocktail" component={Cocktail} /> */}
        <Route exact={true} path="/cocktail" component={Cocktails} />
        <Route path="/cocktail/:id" component={drinkDetails} />
      </Switch>
    </HashRouter>
  );
}

export default Home;

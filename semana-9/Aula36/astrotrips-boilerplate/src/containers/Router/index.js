import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import HomePage from "../HomePage";
import AppForm from "../AppForm";
import ListTripsPage from "../ListTripsPage";

const routes = {
  root: "/",
  login: "/login",
  cadastrar: "/application-form",
  listaviagens: "/trips/list"
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
      <Route path={routes.listaviagens} component={ListTripsPage} />
        <Route path={routes.login} component={LoginPage} />
        <Route path={routes.cadastrar} component={AppForm} />
        <Route path={routes.root} component={HomePage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Repository from "../pages/Repository";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      {" "}
      {/*O switch garante que cada rota seja apresentada de uma vez*/}
      <Route path="/" exact component={Dashboard} />{" "}
      {/*o exact faz com que essa rota só apareça se o endereço chamado for exatamente esse, se tiver qualquer coisa depois da barra ela já não aparece mais.*/}
      <Route path="/repository" component={Repository} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

/*Se tivesse somente uma rota o switch seria desnecessário.*/

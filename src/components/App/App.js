import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Login } from "../Login";
import { Desafios } from "../Desafios";
import { Candidatos } from "../Candidatos";

export function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/criar/candidato">
          <Login />
        </Route>
        <Route path="/criar/empresa">
          <Login />
        </Route>
        <Route path="/desafios">
          <Desafios />
        </Route>
        <Route path="/desafios/criar">
          <Login />
        </Route>
        <Route path="/desafios/:idDesafio">
          <Login />
        </Route>
        <Route path="/desafio/submeter">
          <Login />
        </Route>
        <Route path="/candidatos">
          <Candidatos />
        </Route>
        <Route path="/candidatos/:idCandidato">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

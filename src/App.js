import "./App.scss";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";

function App() {
  return (
    <Router>
      <section id="" className="testesass">
        <h1> Eu sou um App React usando React Router </h1>

        <Link to="/">Home</Link>
        <Link to="/users">Usuários</Link>
        <Link to="/contacts">Contatos</Link>

        <Switch>
          <Route path="/" exact component={Page1} />
          <Route path="/users" component={Page2} />
          <Route path="/contacts" component={Page3} />
        </Switch>

        <div className="container"></div>
      </section>
    </Router>
  );
}

export default App;

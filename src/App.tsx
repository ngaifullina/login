import React from "react";
import { Login } from "./features/login/Login";
import { Account } from "./features/account/Account";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact component={Login} path="/login" />
          <Route exact component={Account} path="/account" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

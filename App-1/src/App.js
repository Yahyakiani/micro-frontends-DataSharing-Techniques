import React from "react";
import { Route, Router } from "react-router-dom";
import { Home } from "./home";
import { createBrowserHistory } from "history";
import { Time } from "./time";
// import UserTable from "./userTable";

const defaultHistory = createBrowserHistory();


function App({ history = defaultHistory }) {
  return (
    <Router history={history}>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/account" component={UserTable} /> */}
      <Route exact path="/time" component={Time} />
    </Router>
  );
}

export default App;
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import UserTable from "./userTable";
import Home from "./home";
import { Time } from "./time";


const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
    <Router history={history}>
    <Route exact path="/" component={Home} />
    <Route exact path="/time" component={Time} />
    <Route exact path="/account" component={UserTable} />
  </Router>
  );
}

export default App;

import Dashboard from "pages/Dashboard";
import Home from "pages/Home";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import DashboardScreen from "./screens/Dashboard/DashboardScreen";
import ConnectScreen from './screens/Connect/ConnectScreen';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/dashboard">
            <DashboardScreen/>
          </Route>

          <Route path="/">
            <ConnectScreen/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


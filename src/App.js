import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { createContext, useState } from 'react';
import Login from './components/Login/Login';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          {/* <Route exact path="/">
         <Dashboard></Dashboard>
          </Route> */}
          <Route path="/login">
         <Login></Login>
          </Route>
          <PrivateRoute exact path="/">
          <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
          <Dashboard></Dashboard>
          </PrivateRoute>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;

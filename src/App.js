import "./App.css";
import { UserForm, UsersData } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={UserForm} />
        <Route exact path="/users" component={UsersData} />
      </Switch>
    </Router>
  );
}

export default App;

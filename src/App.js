import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./container/Dashboard";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

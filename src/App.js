import "./App.css";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import TaskForm from "./components/Task/TaskForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/home-page" component={Home}></Route>
        <Route path="/task-info" component={TaskForm}></Route>
      </Switch>
    </Router>
  );
}

export default App;

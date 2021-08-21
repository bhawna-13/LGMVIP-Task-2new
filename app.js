import Home from "./components/Home/Home";
import Navbar from "./components/navbar/Navbar";
import Users from "./components/getUsers/Users";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Gallery from "./components/Gallery";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/gallery">
              <Gallery />
          </Route>
          <Route path="/" exact>
              <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import Resolve from './components/Resolve';
import Header from './components/Header';
import Menu from './components/Menu';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Health from './components/Health';

function App() {

  return (
    <div className="App">
      <Router>
      <Header />
      <Menu />
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>

          <Route path="/resolvedtime">
             <Resolve />
          </Route>

          <Route exact path="/anchorhealth">
              <Health />
          </Route>


        </Switch>
      </Router>
    </div>
  );
}

export default App;

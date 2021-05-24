import './App.css';
import Home from './components/Home';
import Create from './components/Create';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    
    <div className="App">
      <Nav/>
      <div className="routings">
        <Router>
          <Switch>

            <Route exact path="/">
              <Home/>
            </Route>

            <Route exact path="/create">
              <Create />
            </Route>

          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

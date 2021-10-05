import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Album from './components/album';
import Heroes from './components/heroes';
import Home from './components/home';

function App():JSX.Element {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/heroes" exact component={Heroes} />
          <Route path="/hero" component={Album} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

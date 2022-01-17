import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';
import About from './routes/About';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

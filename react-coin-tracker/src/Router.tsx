import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Coin from './routes/Coin';
import Coins from './routes/Coins';
import GlobalHeader from './components/GlobalHeader';

function Router() {
  return <BrowserRouter>
    <GlobalHeader />
    <Switch>
      <Route path="/playground">
        <Coins />
      </Route>
      <Route path="/:coinId">
        <Coin />
      </Route>
    </Switch>
  </BrowserRouter>
}
export default Router;
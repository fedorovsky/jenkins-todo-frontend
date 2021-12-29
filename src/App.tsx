import * as React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import { LoginLoader, RegisterLoader } from './Auth';
import CounterFirstLoader from 'CounterFirst/components/CounterFirstLoader';
import CounterSecondLoader from 'CounterSecond/components/CounterSecondLoader';

const App: React.FC = () => {
  return (
    <div>
      Navigation:
      <ul>
        <li>
          <NavLink to="/login" activeStyle={{ color: 'red' }}>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/first-module" activeStyle={{ color: 'red' }}>
            First Module
          </NavLink>
        </li>
        <li>
          <NavLink to="/second-module" activeStyle={{ color: 'red' }}>
            Second Module
          </NavLink>
        </li>
      </ul>
      <div>
        <Switch>
          <Route path="/login" component={LoginLoader} />
          <Route path="/register" component={RegisterLoader} />
          <Route path="/first-module" component={CounterFirstLoader} />
          <Route path="/second-module" component={CounterSecondLoader} />
        </Switch>
      </div>
    </div>
  );
};

export default App;

import * as React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import CounterFirstLoader from 'CounterFirst/components/CounterFirstLoader';
import CounterSecondLoader from 'CounterSecond/components/CounterSecondLoader';

const App: React.FC = () => {
  return (
    <div>
      Navigation:
      <div>
        <NavLink to="/first-module" activeStyle={{ color: 'red' }}>
          First Module
        </NavLink>
        <NavLink to="/second-module" activeStyle={{ color: 'red' }}>
          Second Module
        </NavLink>
      </div>
      <div>
        <Switch>
          <Route path="/first-module" component={CounterFirstLoader} />
          <Route path="/second-module" component={CounterSecondLoader} />
        </Switch>
      </div>
    </div>
  );
};

export default App;

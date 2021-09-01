import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import FirstApp from './components/FirstApp';
import SecondApp from './components/SecondApp';

const App = () => {

  return (
    <div className="app">
      <NavLink exact activeClassName="active-link" to="/">
        <li className="nav-item">
          <span className="nav-link" >First App</span>
        </li>
      </NavLink>
      <NavLink exact activeClassName="active-link" to="/secondapp">
        <li className="nav-item">
          <span className="nav-link" >Second App</span>
        </li>
      </NavLink>

      <Switch>
        <Route path="/secondapp" render={() => <SecondApp />}></Route>
        <Route path="/" render={() => <FirstApp />}></Route>
      </Switch>
    </div>
  );
}

export default App;
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from 'react-router-dom';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/products">Produtos</Link>
            </li>
            <li>
              <Link to="/products/new">Adicionar um novo produto</Link>
            </li>
          </ul>
          <Switch>
            <Redirect
              from="/"
              exact={true}
              to="/products"
            />
            <Route
              path="/products"
              exact={true}
              render={() => <p>products</p>}
            />
            <Route
              path="/products/new"
              exact={true}
              render={() => <p>new product</p>}
            />
            <Route render={() => <p>404</p>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

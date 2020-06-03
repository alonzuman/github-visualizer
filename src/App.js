import React, { useState } from 'react';
import Login from './pages/Login';
import ErrorPage from './pages/ErrorPage';
import Results from './pages/Results';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  const [username, setUsername] = useState('');

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact >
            <Login setUsername={setUsername} username={username} />
          </Route>
          <Route path='/user=:username' component={Results} />
          <Route path='/error' component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen/HomeScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';

import { auth } from './firebase';

import './App.css';

const App = () => {
  const user = null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // logged in
        console.log(userAuth);
      } else {
        // logged out
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
};

export default App;

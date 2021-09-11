import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import Login from './login';
import SignUp from './signUp';
import Today from './today';
import Habits from './habits';
import History from './history';
import UserContext from './userContext'


export default function App() {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <Switch>

          <Route path='/' exact>
            <Login setUser={setUser} user={user} />
          </Route>
            
          <Route path='/signUp' exact>
            <SignUp />
          </Route>

          <Route path='/today' exact>
            <Today />
          </Route>

          <Route path='/habits'> 
            <Habits />
          </Route>

          <Route path='/history'>
            <History />
          </Route>
        </Switch>
        
    
      </BrowserRouter>
    </UserContext.Provider>
    
    
  );
}


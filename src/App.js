import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { useState } from 'react';
import Login from './login';
import SignUp from './signUp';


export default function App() {
  const [user, setUser] = useState({});

  return (
    <BrowserRouter>
      <Switch>

        <Route path='/' exact>
          <Login setUser={setUser} user={user} />
        </Route>
        
        <Route path='/signUp' exact>
          <SignUp />
        </Route>
      </Switch>
        
    
    </BrowserRouter>
    
  );
}


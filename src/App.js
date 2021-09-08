import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './login';


export default function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route path='/' exact>
          <Login />
        </Route>
        
      </Switch>
        
    
    </BrowserRouter>
    
  );
}


import { Switch } from 'react-router';
import {Route} from "react-router-dom";

import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import Profile from './Components/Profile/Profile'
import Moderator from './Components/ModeratorPage/Moderator'

function App() {
  return (
    <div className='App'>
      <Navbar/>

      <Switch>
        <Route exact path="/register">
            <Register/>
        </Route>

        <Route exact path="/login">
            <Login/>
        </Route>

        <Route exact path="/profile">
            <Profile/>
        </Route>

        <Route exact path="/moderator">
            <Moderator/>
        </Route>
        
      </Switch>

    </div>
  );
}

export default App;

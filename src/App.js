/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'

import { useDispatch } from "react-redux";

import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Session from './pages/Session';
import { getProfileFetch } from './_actions/userActions';

function App(props) {
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getProfileFetch());
    
  }, []);
  
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/session" component={Session}/>
      </Switch>
    </div>
  );
}

export default App;

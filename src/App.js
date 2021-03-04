import {Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Session from './pages/Session';

function App() {
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

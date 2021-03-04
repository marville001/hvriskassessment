import {Switch, Route} from 'react-router-dom'
import './App.css';
import index from './pages/Home/index';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={index}/>
          <Route exact path="/login" component={Login}/>
      </Switch>
    </div>
  );
}

export default App;

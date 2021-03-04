import {Switch, Route} from 'react-router-dom'
import NavBar from '../../components/Navbar';
import Home from './Home';

function index() {
  return (
    <div className="index">
        <NavBar/>
      <Switch>
          <Route path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default index;

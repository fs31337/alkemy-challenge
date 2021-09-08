import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Search from './components/Search/Search';
import Detail from './components/Detail/Detail';
import checkToken from './services/checkToken'
import NotFound from './components/NotFound/NotFound';
import { Switch,Route, Redirect } from 'react-router';

function App() {
  let loggedIn = checkToken();
  return (
    <div className="App">
    <Switch>
      <Route exact path="/">
        {!loggedIn ? <Redirect to="/login" /> : <Home/>}
      </Route>
      <Route exact path="/">
        {!loggedIn ? <Redirect to="/login" /> : <Search/>}
      </Route>
      <Route exact path="/">
        {!loggedIn ? <Redirect to="/login" /> : <Detail/>}
      </Route>
      <Route exact path="/login">
        {loggedIn ? <Redirect to="/" /> : <Login/>}
      </Route>
      <Route component={NotFound} />
    </Switch>
    </div>
  );
}

export default App;

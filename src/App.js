import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Search from './components/Search/Search';
import Detail from './components/Detail/Detail';
import NotFound from './components/NotFound/NotFound';
import authComponent from './services/authComponent';
import { Switch,Route, Redirect } from 'react-router';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route path="/" component={authComponent(Home,Login)} />
      <Route path="/" component={authComponent(Search,Login)} />
      <Route path="/login" component={Login} />
      <Route path="/detail/:id" component={authComponent(Detail,Login)} />
      <Route component={NotFound} />
    </Switch>
    </div>
  );
}

export default App;

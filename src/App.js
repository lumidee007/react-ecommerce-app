import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';


const HatPage = () => {
  return (
    <div>
      <h4>HAT PAGE</h4>
      <p>What will you like to buy on our page ?</p>
    </div>
  )
}

function App() {

  return (
    <div>
      <Switch>
        <Route  exact path="/" component={HomePage} />
        <Route  exact path="/shop/hats" component={HatPage} />
      </Switch>
    </div>
  );
}

export default App;

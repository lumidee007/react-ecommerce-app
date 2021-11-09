import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/Shop'; 


// const HatPage = () => {
//   return (
//     <div>
//       <h4>HAT PAGE</h4>
//       <p>What will you like to buy on our page ?</p>
//     </div>
//   )
// }

function App() {

  return (
    <div>
      <Switch>
        <Route  exact path="/" component={HomePage} />
        <Route  exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;

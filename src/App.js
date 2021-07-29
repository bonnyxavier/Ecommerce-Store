import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Login from './components/Login';
import SignUp from './components/SignUp';
import MensCategory from './components/MensCategory';
import WomensCategory from './components/WomensCategory';
import Wishlisted from './components/Wishlisted';

function App() {
  return (
    
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component = {Home}></Route>
          <Route path= "/product/:productId" exact component={ProductDetail}></Route>
          <Route path="/cart" exact component = {Cart}></Route>
          <Route path="/login" exact component = {Login}></Route>
          <Route path="/signup" exact component = {SignUp}></Route>
          <Route path="/categories/mens" exact component = {MensCategory}></Route>
          <Route path="/categories/womens" exact component = {WomensCategory}></Route>
          <Route path="/wishlist" exact component = {Wishlisted}></Route>
          <Route>404 Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import { getProducts } from "./redux/productSlice";

function App() {
  const products = useSelector((state)=>state.products.allProducts)
  console.log(products);
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getProducts())
  }, [dispatch])

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

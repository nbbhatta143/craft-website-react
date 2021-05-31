import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./component/header/Header.js";
import HomePage from "../src/component/homePage/HomePage";
import Product from "../src/component/product/Product";
import Cart from "../src/component/cart/Cart";
import Payments from "../src/component/payments/Payments";
import Login from "../src/component/auth/Login";
import SignUp from "../src/component/signup/SignUp";
import About from "../src/component/about/About";
import Page404 from "../src/component/page404/Page404";
import Footer from "../src/component/footer/Footer";
import ForgetPassword from "../src/component/auth/ForgetPassword";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/about" component={About} />
        <Route exact path="/payments" component={Payments} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/passwordReset" component={ForgetPassword} />
        <Route path="*" component={Page404} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

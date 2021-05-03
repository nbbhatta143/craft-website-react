import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <>
      <ul>
        <Link to="./about/About.js">About</Link>
        <Link to="./cart/Cart.js">Cart</Link>
        <Link to="./payments/Payments.js">Payment</Link>
        <Link to="./product/Product.js">Product</Link>
        <Link to="./user/Auth.js">Login</Link>
      </ul>
    </>
  );
}

export default Nav;

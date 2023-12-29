import React from "react";
import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { placeOrder } from "../actions/orderActions";

const CheckOut = ({ subTotal }) => {
  const dispatch = useDispatch();
  const tokenHandler = (token) => {
    console.log(token);
    dispatch(placeOrder(token, subTotal));
  };
  return (
    <div>
      <StripeCheckout
        amount={subTotal * 100}
        shippingAddress
        token={tokenHandler}
        currency="LKR"
        stripeKey="pk_test_51Jfc2aKsqvt4VygRGr7GHuYcMdvmThDyLmHMPz5W6l9EVVtUVfL0TcI5oEfvnIFEFUVazuHwxT6tz2VgzzqpcwtU00nxjVWf7p">
        <button className="btn">PAY NOW</button>
      </StripeCheckout>
    </div>
  );
};

export default CheckOut;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { placeOrder } from "../actions/orderActions";
import Loading from "../components/Loading";
import Success from "../components/Success";
import Error from "../components/Error";

const CheckOut = ({ subTotal, currentUser }) => {
  const orderstate = useSelector((state) => state.placeOrderReducer);
  const {loading,error,success}=orderstate
  const dispatch = useDispatch();
  const tokenHandler = (token) => {
    console.log(token);
    dispatch(placeOrder(token, subTotal, currentUser));
  };
  return (
    <div>
      {loading && <Loading />}
      {success && <Success success="Order Placed  Successfully" />}
      {error && <Error error="Something Wrong" />}
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

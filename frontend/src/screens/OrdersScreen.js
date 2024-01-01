import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../actions/orderActions";
import Loading from "../components/Loading";
import Error from "../components/Error";

const OrdersScreen = () => {
  const dispatch = useDispatch();
  const orderstate = useSelector((state) => state.getUserOrdersReducer);
  const { loading, error, orders } = orderstate;

  useEffect(() => {
    dispatch(getUserOrders());
  }, []);
  return (
    <div>
      <h1
        className="m-2 shadow p-3 mb-5 bg-body-tertiary rounded"
        style={{ textAlign: "center" }}>
        My Orders
      </h1>
      <div className="row justify-content-center" >
        {loading && <Loading />}
        {error && <Error error="Something Wrong" />}
        {orders &&
          orders.map((order) => {
            return (
              <div
                className="col-md-8 m-2 p-1"
                style={{ backgroundColor: " rgb(177, 223, 201)" }}>
                <div className="flex-container">
                  <div className="text-left w-100 m-1">
                    <h4>Items</h4>
                    <hr />
                    {order.orderItems.map((item) => {
                      return (
                        <div>
                          <h6>
                            {item.name} [{item.varient}]*{item.quantity}=
                            {item.price}
                          </h6>
                        </div>
                      );
                    })}
                  </div>
                  <div className="text-left w-100 m-1">
                    <h4>Address</h4>
                    <hr />
                    <h6>Street : {order.shippingAddress.street}</h6>
                    <h6>City : {order.shippingAddress.city}</h6>
                    <h6>Country : {order.shippingAddress.country}</h6>
                    <h6>Postal Code : {order.shippingAddress.pincode}</h6>
                  </div>
                  <div className="text-left w-100 m-1">
                    <h4>Order Information</h4>
                    <hr />
                    <h6>Order Amount : {order.orderAmount}</h6>
                    <h6>Date : {order.createdAt.substring(0, 10)}</h6>
                    <h6>Transaction ID : {order.transactionId}</h6>
                    <h6>Order ID : {order._id}</h6>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default OrdersScreen;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { addToCart, deleteFromCart } from "../actions/cardActions";
import { useDispatch, useSelector } from "react-redux";
import CheckOut from "../components/CheckOut";
import Layout from "../components/Layout";

const CartScreen = () => {
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;
  var subTotal = cartItems.reduce((x, item) => x + item.price, 0);
  const dispatch = useDispatch();

  return (
    <Layout title={"Shop Now"}>
      <div>
        <div className="row " style={{ justifyContent: "center" }}>
          <div className="col-md-6">
            <h2 style={{ fontSize: "30px", textAlign: "center" }}>My Cart</h2>
            {cartItems.map((item) => {
              return (
                <div className="flex-container">
                  <div className="text-left m-1 w-100">
                    <h3>
                      {item.name} [{item.varient}]
                    </h3>
                    <h4>
                      Price : {item.quantity}*{item.prices[0][item.varient]}=
                      {item.price}
                    </h4>
                    <h4>
                      Quantity
                      <FontAwesomeIcon
                        icon={faPlus}
                        className="faplus"
                        onClick={() => {
                          dispatch(
                            addToCart(item, item.quantity + 1, item.varient)
                          );
                        }}
                      />
                      <b>{item.quantity}</b>
                      <FontAwesomeIcon
                        icon={faMinus}
                        className="faminus"
                        onClick={() => {
                          dispatch(
                            addToCart(item, item.quantity - 1, item.varient)
                          );
                        }}
                      />
                    </h4>
                    <hr />
                  </div>
                  <div className="m-1 w-100">
                    <img
                      src={item.image}
                      alt="pizza"
                      style={{ height: "80px", width: "80px" }}
                    />
                  </div>
                  <div className="m-1 w-100">
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="fatrash"
                      onClick={() => dispatch(deleteFromCart(item))}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-md-4 " style={{ textAlign: "right" }}>
            <h2 style={{ fontWeight: "bold" }}>SubTotal = {subTotal}/ </h2>
            <CheckOut subTotal={subTotal} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartScreen;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";

const CartScreen = () => {
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;
  return (
    <div>
      <div className="row " style={{ justifyContent: "center" }}>
        <div className="col-md-6">
          <h2 style={{ fontSize: "30px", textAlign: "center" }}>My Cart</h2>
          {cartItems.map((item) => {
            return (
              <div className="flex-container">
                <div className="text-left">
                  <h3>
                    {item.name} [{item.varient}]
                  </h3>
                  <h4>
                    Price : {item.quantity}*{item.prices[0][item.varient]}=
                    {item.price}
                  </h4>
                  <h4>
                    Quantity <FontAwesomeIcon icon={faPlus} />
                    <b>{item.quantity}</b>
                    <FontAwesomeIcon icon={faMinus} />
                  </h4>
                </div>
                <div></div>
                <div></div>
              </div>
            );
          })}
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default CartScreen;

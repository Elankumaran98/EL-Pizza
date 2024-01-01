import axios from "axios";

export const placeOrder = (token, subTotal) => async (dispatch, getState) => {
  dispatch({
    type: "PLACE_ORDER_REQUEST",
  });
  const currentUser = getState().loginUserReducer.currentUser;
  const cartItems = getState().cartReducer.cartItems;
  try {
    const response = await axios.post("/api/orders/placeorder", {
      token,
      subTotal,
      currentUser: currentUser,
      cartItems,
    });
    dispatch({ type: "PLACE_ORDER_SUCCESS" });
    console.log(response);
  } catch (error) {
    dispatch({ type: "PLACE_ORDER_FAILED" });
    console.log(error);
  }
};

export const getUserOrders = () => async (dispatch, getState) => {
  dispatch({
    type: "GET_USER_ORDER_REQUEST",
  });
  const currentUser = getState().loginUserReducer.currentUser;
  try {
    const response = await axios.post("/api/orders/getuserorders", {
      userid: currentUser.user._id,
    });
    console.log(response);
    dispatch({
      type: "GET_USER_ORDER_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "GET_USER_ORDER_FAILED",
      payload: error,
    });
  }
};

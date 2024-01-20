import axios from "axios";

export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });
  try {
    const formData = new FormData();
    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("photo", user.photo); // Add the photo to the form data

    const response = await axios.post("/api/users/register", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
     console.log(response);
     dispatch({
       type: "USER_REGISTER_SUCCESS",
     });
  } catch (error) {
   dispatch({
     type: "USER_REGISTER_FAILED",
     payload: error,
   });
  }
};



export const loginUser = (user) => async (dispatch) => {
  dispatch({
    type: "USER_LOGIN_REQUEST",
  });
  try {
    const response = await axios.post("/api/users/login", user);
    console.log(response);
    dispatch({
      type: "USER_LOGIN_SUCCESS",
      payload: response.data,
    });
    localStorage.setItem("currentUser", JSON.stringify(response.data));
    window.location.replace('/')
  } catch (error) {
    dispatch({
      type: "USER_LOGIN_FAILED",
      payload: error,
    });
  }
};



export const logoutUser = () => dispatch => {
  localStorage.removeItem("currentUser");
  window.location.replace('/login');  
}




export const getAllUsers = () => async (dispatch) => {
  dispatch({
    type: "GET_USERS_REQUEST",
  });

  try {
    const response = await axios.get("/api/users/getallusers");
    console.log(response);
    dispatch({
      type: "GET_USERS_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "GET_USERS_FAILED",
      payload: error,
    });
  }
};

export const deleteUser = (userid) => async (dispatch) => {
  try {
    await axios.post("/api/users/deleteuser", { userid })
    alert("User deleted successfully")
    window.location.reload()
  } catch (error) {
    alert("Something went wrong")
    console.log(error)
  }
};


export const updateUserDetails = (userDetails) => async (dispatch) => {
  try {
    const response = await axios.put("/api/users/update", userDetails);
    dispatch({ type: "USER_UPDATE_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "USER_UPDATE_FAILED", payload: error });
  }
};


// ... other actions

export const getUserDetails = () => async (dispatch) => {
  try {
    dispatch({ type: "USER_GET_DETAILS_REQUEST" });
    const response = await axios.get("/api/users/details");
    dispatch({ type: "USER_GET_DETAILS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "USER_GET_DETAILS_FAILED", payload: error });
  }
};



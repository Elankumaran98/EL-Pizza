export const registerUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_REGISTER_REQUEST":
      return {
        loading: true,
      };
    case "USER_REGISTER_SUCCESS":
      return {
        loading: false,
        success: true,
        currentUser: action.payload,
      };
    case "USER_REGISTER_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const loginUserReducer = (
  state = {
    loading: false,
    success: false,
    error: null,
    currentUser: null, // Store logged-in user data
  },
  action
) => {
  switch (action.type) {
    case "USER_LOGIN_REQUEST":
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case "USER_LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
        error: null,
        currentUser: action.payload, // Update currentUser on success
      };
    case "USER_LOGIN_FAILED":
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

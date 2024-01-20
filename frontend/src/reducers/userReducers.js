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
    currentUser: null, 
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
        currentUser: action.payload, 
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


export const getAllUsersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "GET_USERS_REQUEST":
      return { loading: true, ...state };
    case "GET_USERS_SUCCESS":
      return {
        loading: false,
        users: action.payload,
      };
    case "GET_USERS_FAILED":
      return {
        error: action.payload,
      };

    default:
      return state;
  }
};


export const userDetailsReducer = (state = { loading: false, error: null, user: null }, action) => {
  switch (action.type) {
    case "USER_GET_DETAILS_REQUEST":
      return { ...state, loading: true, error: null };
    case "USER_GET_DETAILS_SUCCESS":
      return { ...state, loading: false, error: null, user: action.payload };
    case "USER_GET_DETAILS_FAILED":
      return { ...state, loading: false, error: action.payload, user: null };
    case "USER_UPDATE_SUCCESS":
      return { ...state, loading: false, error: null, user: action.payload };
    case "USER_UPDATE_FAILED":
      return { ...state, loading: false, error: action.payload, user: state.user };
    default:
      return state;
  }
};

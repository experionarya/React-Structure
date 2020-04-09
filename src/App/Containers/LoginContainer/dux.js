const initialState = {
  username: "",
  password: ""
};

// action types
export const LOGIN_FETCH_START = "@LoginContainer/LOGIN_FETCH_START";

// reducer functions

// reducer
export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_FETCH_START:
      return {
        ...state
      };
    default:
      return state;
  }
};

//selectors

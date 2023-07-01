let initialState = {
  logging: false,
  name: null,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case "login": {
      return {
        ...state,
        logging: true,
      };
    }
    default: {
      return state;
    }
  }
}

export default userReducer;

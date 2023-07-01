import { DECREMENT, INCREMENT, RESET } from "../action/action_type";

let initialState = {
  counter: 0,
};
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT: {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    case DECREMENT: {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    case RESET: {
      return {
        ...state,
        counter: action.payload.counterResetValue,
      };
    }
    default: {
      return state;
    }
  }
}

export default counterReducer;

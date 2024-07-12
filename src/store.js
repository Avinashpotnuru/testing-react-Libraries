import { createStore } from "redux";

const initialState = {
  name: "avinash",
  count: 0,
};


const accountReducer = (state = initialState, action) => {
    switch (action.type) {
      case "add":
        return {
          ...state,
          count: state.count + 1,
        };
      case "minus":
        return {
          ...state,
          count: state.count - 1,
        };
      default:
        return state;
    }
  };
  
export const store = createStore(accountReducer);

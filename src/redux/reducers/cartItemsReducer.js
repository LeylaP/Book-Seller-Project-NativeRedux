import {ADD_TO_CART, REMOVE_TO_CART} from '../actions/actionTypes';

const initialState = [];

const certItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {};
    case REMOVE_TO_CART: {
      return state;
    }
  }
  return state;
};
export default certItemReducer;

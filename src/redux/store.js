import {legacy_createStore} from 'redux';
import cartItemReducer from './reducers/cartItemsReducer';

const store = legacy_createStore(cartItemReducer);

export default store;

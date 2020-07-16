import {combineReducers , createStore} from 'redux';
import cartReducer from './cartReducers';
import categoryReducer from './categoriesReducer';
import products from './productsReducer';

let reducer = combineReducers({
 
  cart:cartReducer,
  category:categoryReducer,
  product:products,
})
export default createStore(reducer);
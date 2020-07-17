import {combineReducers , createStore} from 'redux';
import cartReducer from './cartReducers';
import categoryReducer from './categoriesReducer';
import products from './productsReducer';

let reducer = combineReducers({
 
  carts:cartReducer,
  categories:categoryReducer,
  product:products,
})
export default createStore(reducer);
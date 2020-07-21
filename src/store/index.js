import {combineReducers , createStore , applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import cartReducer from './cartReducers';
import categoryReducer from './categoriesReducer';
import productsReducer from './productsReducer';
import thunk from './middleware/thunk';

let reducer = combineReducers({
  carts:cartReducer,
  categories:categoryReducer,
  product:productsReducer,
  
})

const store = () => createStore(combineReducers(reducer), composeWithDevTools(applyMiddleware(thunk)));
export default store();


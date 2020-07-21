import axios from 'axios';



export const getCategories = () => async dispatch => {
  let results = await axios.get('https://appbook-henok.herokuapp.com/category')
  dispatch(addCategories(results.data))
  console.log('results', results)
}
const addCategories = payload => {
   return {
     type: 'CHANGE-CATEGORY',
     payload
   }
}
export const getProducts = () => async dispatch => {
  let results = await axios.get(' http://api-body-products.herokuapp.com/product');
  dispatch(addProducts(results.data));
}
const addProducts = payload => {
  return {
    type: 'GET_PRODUCTS',
    payload
  }
}
export const changeCategory = payload => {
  return {
    type: 'CHANGE_CATEGORY',
    payload
  }
}
export const addToCart = (product) => {
  return { 
    type: 'ADD_TO_CART', 
    payload: product 
  };
}
export const removeFromCart = (idx) => {
  return { 
    type: 'REMOVE_FROM_CART', 
    payload: idx
  };
}

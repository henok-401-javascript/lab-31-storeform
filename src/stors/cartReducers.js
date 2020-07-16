const initState = {
  cartItems :[],
  cart: 0,
}

const reducer = (state = initState,action) =>{

  let newState = {...state};

  switch(action.type){
    case 'ADD TO CART':
      newState.cart.push(action.payload);
      newState.cart = action.payload + 1;
      break;
      case 'CART LIST':
        newState.cart.push(action.payload);
        break;
        case 'REMOVE FROM CART':
          newState.cart--;
        newState.cart = newState.cartItems.filter((item) =>{
          return item.name === action.payload;
        })
          break;
      default:
        break;
  }

  return newState;
}

const add = (product) =>{
return {type:'ADD TO CART', payload:product}
}
const list = (cartList) =>{
  return {type:'CART LIST' , payload:cartList}
}

export {add , list};
export default reducer;
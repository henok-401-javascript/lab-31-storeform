import React  from 'react';


// const initState = {
//   category : [{name:'Electronics' , displayName: 'Electronics '},{name:'Food' , displayName: 'Foods'}],

//   currentCategory:'Food',
// }
let initState = [];

const reducer = (state = initState , action) =>{
let newState = {...state}

switch(action.type){
  case 'ADD CATEGORY':
  return [...newState , action.payload];
  case 'CHANGE-CATEGORY':
  newState.currentCategory = action.payload;
  break;
  default:
  break;

}

return newState;
}


export default reducer;
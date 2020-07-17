
const initState = {
  category : [{name:'Electronics' , displayName: 'Electronics '},{name:'Food' , displayName: 'Foods'}],

  currentCategory:'Food',
}

const reducer = (state = initState , action) =>{
let newState = {...state}

switch(action.type){
  case 'ADD  CATEGORY':
  newState.category.push(action.payload);
  break;
  case 'CHANGE-CATEGORY':
  newState.currentCategory = action.payload;
  break;
  default:
  break;

}

return newState;
}


export default reducer;
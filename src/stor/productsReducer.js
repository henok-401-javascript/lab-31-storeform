
const initState = {
  products : [{name:'Apple',description:'One apple a day',stoke:'30',price:'5',category:'Food',img:'./images/apple.jpg'},{name:'Pizza',description:'The definition of happiness',stoke:'50',price:'10',category:'Food',img:'./images/pizza.jpg'},{name:'Kitfo',description:'Ethiopian beef ',stoke:'30',price:'15',category:'Food',img:'./images/kitfo.jpg'} ,{name:'washing machine',description:'Do you want to stink forever',stoke:'67',price:'2000',category:'Electronics',img:'./images/washing.jpg'},{name:'MacAir',description:'Easy to use',stoke:'3',price:'1000',category:'Electronics',img:'./images/macAir.jpg'},{name:'Tv',description:'Connect with world',stoke:'66',price:'700',category:'Electronics',img:'./images/Tv.jpg'}],
}

const reducer = (state = initState, action) =>{

  let newState = {...state}
switch(action.type){
  case 'ADD PRODUCT':
    newState.products.push(action.payload);
    break;
    default:
      break;
}

  return newState;
}
export default reducer;
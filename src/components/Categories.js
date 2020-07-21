import React from 'react';
import {connect} from 'react-redux';
import { Button } from '@material-ui/core';
import Axios from 'axios';

const get = () => async dispatch =>{    
let result = await Axios.get('https://appbook-henok.herokuapp.com/category')
dispatch(dispatchType(result.data.name))
}


const dispatchType = (payload) =>{
return{
  type:'CHANGE-CATEGORY',
  payload:payload,
}
}
const dispatchTypeAdd = (payload) =>{
  return{
    type:'ADD CATEGORY',
    payload:payload,
  }
}

function Category(props){

  let selectedCategory = [];
 
  // for(let i = 0; i < props.category.length;i++){

selectedCategory.push(<Button key={i} variant="contained" color="secondary" onClick={
  dispatchType
  // props.dispatch({
  //   type:'CHANGE-CATEGORY',
  //   payload:props.category[i].name,
  // })
}>{props.category[i].displayName || props.category[i].name}</Button>)
  //  }
  return(
<div>
{selectedCategory}

</div>
  )


// const mapToStateProps= (state) =>{
//   return{
//     category:state.categories.category,
//   }
// }


export { get,dispatchType , dispatchTypeAdd}
export default connect(mapToStateProps) (Category);
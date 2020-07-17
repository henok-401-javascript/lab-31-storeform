import React from 'react';
import {connect} from 'react-redux';
import { Button } from '@material-ui/core';

function Category(props){

  let selectedCategory = [];
  
  for(let i = 0; i < props.category.length;i++){
selectedCategory.push(<Button key={i} variant="contained" color="secondary" onClick={() =>{
  props.dispatch({
    type:'CHANGE-CATEGORY',
    payload:props.category[i].name,
  })
}}>{props.category[i].displayName || props.category[i].name}</Button>)
  }
  return(
<div>
{selectedCategory}
</div>
  )

}

const mapToStateProps= (state) =>{
  return{
    category:state.categories.category,
  }
}



export default connect(mapToStateProps) (Category);
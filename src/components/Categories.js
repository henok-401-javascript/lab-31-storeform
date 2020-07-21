import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { Button } from '@material-ui/core';
import Axios from 'axios';



function Category(props){

  let selectedCategory = [];


  useEffect(() =>{
    getCategory();
  } , [getCategory])
 
  for(let i = 0; i < props.category.length;i++){

selectedCategory.push(<Button key={i} variant="contained" color="secondary" onClick={() =>{

}
}>{props.category[i].displayName || props.category[i].name}</Button>)
  //  }
  return(
<div>
{selectedCategory}

</div>
  )

  
}

const mapToStateProps= (state) =>{
  return{
    category:state.categories.categoryList,
  }

const mapDispatchToProps = (dispatch, getState) => ({
  getCategories: (data) => dispatch( actions.getCategories(data) ),
  changeCategory: (payload) => dispatch( actions.changeCategory(payload) ),
  // remove: (id) => dispatch( actions.remove(id) )
})


export default connect(mapToStateProps , mapDispatchToProps) (Category);
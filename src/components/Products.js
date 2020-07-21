import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { Button } from '@material-ui/core';
import * as actions from '../store/store-action';




function Product(props){
 
  const {getProducts} = props;
  let listCategory = [];

  useEffect(() =>{
  
    getProducts();

  } , [getProducts])

  for(let i = 0; i < props.product.length;i++){
    if(props.product[i].category === props.currentCategory){
      listCategory.push(
        <div key={i}>
          <img  src={props.product[i].img} alt=""/>
              <p>{props.product[i].name}</p>
        <Button variant="contained" color="primary"
        onClick={() =>{
        props.dispatch({
          type:'ADD TO CART',
          payload:props.product[i],
        })
        }}
        >
    ADD TO CART
        </Button>
        </div>
      )
    }
  }

return(
  <div>
{listCategory}
  </div>
)
}

const mapToStateProps = (state) =>{
  return{
    product:state.product.products,
    currentCategory:state.categories.currentCategory,
    cart:state.carts.cart,
  }
}
const mapDispatchToProps = (dispatch, getState) => ({
  getProducts: (data) => dispatch( actions.getProducts(data) ),
  addToCart: (data) => dispatch( actions.addToCart(data) ),
  // remove: (id) => dispatch( actions.remove(id) )
})




export default connect(mapToStateProps , mapDispatchToProps) (Product);
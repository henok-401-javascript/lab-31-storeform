import React from 'react';
import {connect} from 'react-redux';
import { Button } from '@material-ui/core';

function Product(props){
 
  let listCategory = [];

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
export default connect(mapToStateProps) (Product);
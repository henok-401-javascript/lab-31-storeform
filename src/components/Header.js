import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';

function Header(props){

  return(
    <div>
    <AppBar position="static"> 
    <h3>OUR STORE</h3>
  <Button  color="inherit" onClick={() =>{
    props.dispatch({
      type:'CART LIST',
      payload:props.cartItems.name,
    })
  }}>CART-{props.cart} </Button>
    </AppBar>
    </div>
  ) 
}

const mapToStateProps = (state) =>{
  return{
  
    cart:state.carts.cart,
    cartItems:state.carts.cartItems,
    
  }
}
export default connect(mapToStateProps) (Header);
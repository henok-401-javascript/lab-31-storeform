import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

function Header(){

  return(
    <div>
    <AppBar position="static"> 
    OUR STORE
        <Button color="inherit">CART(0)</Button>
    </AppBar>
    </div>
  ) 
}
export default Header;
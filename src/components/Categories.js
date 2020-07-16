import React from 'react';
import {connect} from 'react-redux';

function Category(props){
  console.log('do we have anything',props);
  return(
<div>

</div>
  )

}

const mapToStateProps= (state) =>{
  return{
    category:state.category,
  }
}



export default connect(mapToStateProps) (Category);
import React from 'react';
import Header from './components/Header';
import {Provider} from 'react-redux'
import store from './store';
import Category from './components/Categories';
import Product from './components/Products';
import './style/style.scss';
import { Container } from '@material-ui/core';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Container maxWidth="sm">
     <Header/>
     <Category/>
     <Product/>
    </Container>
    </div>
    </Provider>
  );
}

export default App;

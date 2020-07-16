import React from 'react';
import Header from './components/Header';
import {Provider} from 'react-redux'
import store from './stors';
import Category from './components/Categories';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
     <Header/>
     <Category/>
    </Provider>
    </div>
  );
}

export default App;

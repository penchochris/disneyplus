import React from 'react';
import './App.scss';
import Carousel from './components/Carousel/Carousel';
import Menu from './components/Menu/Menu';
import Brands from './components/Brands/Brands';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Carousel/>
      <Brands/>
    </div>
  );
}

export default App;

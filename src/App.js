import React from 'react';
import './App.scss';
import Carousel from './components/Carousel/Carousel';
import Menu from './components/Menu/Menu';
import Brands from './components/Brands/Brands';
import Slide from './components/Slide/Slide';
import Footer from './components/Footer/Footer';

import { slides } from './consts';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Carousel/>
      <Brands/>
      {
        slides.map((slide, i) => <Slide slide={slide} key={`slide-${i}`}/>)
      }
      <Footer/>
    </div>
  );
}

export default App;

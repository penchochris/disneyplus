import React, { Component } from 'react';
import { carouselImgs } from '../consts';
import styled from 'styled-components';
import Flickity from 'react-flickity-component';
import './flickity.scss';

const Title = styled.img`
  z-index: 10;
  left: 0%;
  max-height: 100%;
  max-width: 100%;
  position: absolute;
`;

const Background = styled.img`
  max-width: 100%;
  border-radius: 10px;
`;

const SliderElement = styled.div`
  position: relative;
  width: 90%;
`;

const flickityOptions = { 
  wrapAround: true,
  freeScroll: true,
  initialIndex: 1,
  autoPlay: 5000,
  pauseAutoPlayOnHover: false,
  draggable: false,
}

export default class Carousel extends Component {
  render() {
    return (
      <Flickity
        options={flickityOptions}
      >
        { carouselImgs.map((img, i) =>
          <SliderElement key={`element-${i}`}>
            <Background className='flickerty-background' src={img.img} alt=''/>
            <Title className='flickerty-title' src={img.title} alt=''/>
          </SliderElement>
        )}
      </Flickity>
    )
  }
}

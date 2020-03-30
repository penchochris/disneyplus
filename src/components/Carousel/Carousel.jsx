import React, { Component } from 'react';
import { carouselImgs } from '../../consts';
import styled from 'styled-components';
import Flickity from 'react-flickity-component';
import './flickity.scss';

const Container = styled.div`
  overflow: hidden;
`;

const Title = styled.img`
  position: absolute;
  z-index: 10;
  left: 0;
  max-width: 100%;
`;

const Background = styled.img`
  width: 100%;
  visibility: hidden;
`;

const SliderElement = styled.div`
  position: relative;
  overflow: hidden;
  width: 89%;
  border-radius: 10px;
  background: url(${props => props.src});
  background-size: cover;
  margin: 3% 0.9%;
  &:hover {
    border: 4px solid rgb(249, 249, 249);
  }
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
      <Container className='carousel-container'>
        <Flickity
          options={flickityOptions}
        >
          { carouselImgs.map((img, i) =>
            <SliderElement src={img.background} key={`element-${i}`}>
              <Background className='flickerty-background' src={img.background} alt=''/>
              <Title className='flickerty-title' src={img.title} alt=''/>
            </SliderElement>
          )}
        </Flickity>
      </Container>
    )
  }
}

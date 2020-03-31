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
  float: left;
`;

const SliderElement = styled.div`
  position: relative;
  width: 89%;
  border-radius: 10px;
  background-size: cover;
  margin: 3% 0.9%;
  padding: 0;
  &:hover {
    border: 4px solid rgb(249, 249, 249);
  }
`;

const flickityOptions = { 
  wrapAround: true,
  freeScroll: true,
  autoPlay: 5000,
  pauseAutoPlayOnHover: false,
  draggable: false,
  lazyLoad: 1,
}

export default class Carousel extends Component {
  render() {
    return (
      <Container className='carousel-container'>
        <Flickity
          options={flickityOptions}
        >
          { carouselImgs.map((img, i) =>
            <SliderElement>
              <Title data-flickity-lazyload={img.title} alt=''/>
              <Background data-flickity-lazyload={img.background} alt=''/>
            </SliderElement>
          )}
        </Flickity>
      </Container>
    )
  }
}

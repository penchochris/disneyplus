import React, { Component } from 'react';

import styled from 'styled-components';
import Flickity from 'react-flickity-component';
import LazyImage from '../LazyImage/LazyImage';

import './flickity.scss';

const PaddingDiv = styled.div`
  width: 5%;
`;

const Container = styled.div`
  overflow: hidden;
  height: 100%;
`;
  
const Title = styled.h4`
  margin: 10px;
  font-size: 1.5rem;
  padding-top: 20px;
  color: white;
  margin-left: 5%;
`;
  
const flickityOptions = { 
  draggable: false,
  groupCells: 5,
  pageDots: false,
  freeScroll: true,
  contain: true,
  indexPosition: 1,
}

export default class Slide extends Component {
  render() {
    return (
      <Container className='slide-container'>
        <Title>{this.props.slide.title}</Title>
        <Flickity options={flickityOptions}>
          <PaddingDiv/>
          { this.props.slide.imgs.map((img, i) =>
            <LazyImage key={`slide-element-${i}`} src={img} alt=''/>
          )}
          <PaddingDiv/>
        </Flickity>
      </Container>
    )
  }
}

import React, { Component } from 'react';

import styled from 'styled-components';
import Flickity from 'react-flickity-component';

import './flickity.scss';

const CustomFlickity = styled(Flickity)`
  padding-left: 5.5%;
  padding-right: 5.5%;
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
  
const SlideElement = styled.img`
  display: flex;
  justify-content: center;
  height: 10.1vw;
  width: 17.7%;
  margin: 0.73%;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px, rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;
  cursor: pointer;
  transition: opacity 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  &:hover {
    border: 4px solid rgb(249, 249, 249);
  }
`;
  
const flickityOptions = { 
  draggable: false,
  groupCells: 5,
  pageDots: false,
  freeScroll: true,
  contain: true,
}

export default class Slide extends Component {
  render() {
    return (
      <Container className='slide-container'>
        <Title>{this.props.slide.title}</Title>
        <CustomFlickity options={flickityOptions}>
          { this.props.slide.imgs.map((img, i) =>
            <SlideElement key={`slide-element-${i}`} src={img} alt=''/>
          )}
        </CustomFlickity>
      </Container>
    )
  }
}

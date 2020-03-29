import React, { Component } from 'react'
import styled from 'styled-components';

import { brandImgs } from '../../consts';

const BrandsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow: hidden;
  width: 100%;
`;

const Brand = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 10.1vw;
  width: 16.6%;
  margin: 0.5%;
  border-radius: 10px;
  background-image: linear-gradient(rgb(58, 60, 74), rgb(36, 38, 50));
  box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px, rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;
  cursor: pointer;
  border: 4px solid rgb(150, 158, 171, .3);
  transition: opacity 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  &:hover {
    background: url(${props => props.srcUrl});
    background-size: cover;
    border: 4px solid rgb(249, 249, 249);
  }
`;

const Title = styled.img`
  position: absolute;
  z-index: 10;
  width: 110%;
`;

export default class Brands extends Component {
  render() {
    return (
      <BrandsContainer>
        { 
        brandImgs.map((img, i) =>
          <Brand key={`brand-${i}`} srcUrl={img.background}>
            <Title src={img.title} alt=''/>
          </Brand>
        )}
      </BrandsContainer>
    )
  }
}

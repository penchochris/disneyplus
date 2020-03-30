import React, { Component } from 'react';
import styled from 'styled-components';
import { svgs, svgsUrl } from '../../consts';

const Container = styled.div`
  position: sticky;
  overflow: hidden;
  height: 62px;
  padding-top: 10px;
  z-index: 15;
  left: 0;
  top: 0;
  display: flex;
  align-content: center;
  color: rgb(249, 249, 249);
  background: black;
  background: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.03) 15%, rgba(0, 0, 0, 0.125) 30%, rgba(0, 0, 0, 0.25) 46%, rgba(0, 0, 0, 0.4) 61%, rgba(0, 0, 0, 0.553) 75%, rgba(0, 0, 0, 0.694) 88%, rgba(0, 0, 0, 0.8));
`;

const SvgContainers = styled.div`
  display: flex;
  width: 90%;
  padding-left: 5%;
`;

const SvgContainer = styled.div`
  display: flex;
  align-item: center;
  justify-item: center;

  height: 48px;
  padding-right: 40px;

  svg {
    width: 24px;
    height: 24px;
    padding-top: 12px;
    padding-right: 12px;
  }

  p {
    height: 24px;
    text-align: center;
  }

  path {
    fill: currentColor;
  }
`;

const LogoBig = styled.img`
  height: 48px;
  padding-left: 1%;
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  padding-right: 1%;
`;

export default class Menu extends Component {

  render() {
    return (
      <Container>
        <LogoBig src={svgsUrl.logoBig} alt=''/>
        <SvgContainers>
          { svgs.map(svg => (
            <SvgContainer>
              <svg alt="" viewBox='0 0 36 36'>
                <path d={svg.path}></path>
              </svg>
              <p>{svg.title}</p>
            </SvgContainer>
          ))}
        </SvgContainers>
        <UserImg src={svgsUrl.userImg} alt=''/>
      </Container>
    )
  }
}

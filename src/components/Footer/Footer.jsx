import React, { Component } from 'react'
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  background: #131313;
  height: 120px;
  margin-top: 30px;
  color: white;
`;
export default class Footer extends Component {
  render() {
    return (
      <FooterContainer>
          <div>Developed by Chris Garcia.</div>
      </FooterContainer>
    )
  }
}

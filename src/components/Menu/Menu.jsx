import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: white;
`;

export default class Menu extends Component {
  render() {
    return (
      <Container>
        <div>INICIO</div>
        <div>BUSQUEDA</div>
        <div>MI LISTA</div>
        <div>ORIGINALES</div>
        <div>PELICULAS</div>
        <div>SERIES</div>
      </Container>
    )
  }
}

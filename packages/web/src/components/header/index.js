import React from 'react';

import { Container, Title, Logo } from './styles';
import logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <Container>
      <Logo src={logo} alt="logo"/>
      <Title>Boss Timer</Title>
    </Container>
  );
}

export default Header;

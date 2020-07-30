import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';

import { Container } from './styles'

const Home = () => { 
  return (
    <Container>
      <Header />
      <h1>Hello</h1>
      <Footer />
    </Container>
  );
}

export default Home;

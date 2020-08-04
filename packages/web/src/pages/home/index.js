import React, { useState } from 'react'

import Header from '../../components/header'
import Footer from '../../components/footer'
import { Container } from '../../components/container'
import { Form } from '../../components/button'

const Home = () => {
  const [state, setState] = useState({
    isLoad: false,
  })

  return (
    <>
      <Container>
        <Header />
        <Form>
          <input type="text" />
          <button type="submit">
            {state.isLoad ? <i className="fa fa-spinner fa-pulse" /> : 'BUSCAR'}
          </button>
        </Form>
        <Footer />
      </Container>
    </>
  )
}

export default Home

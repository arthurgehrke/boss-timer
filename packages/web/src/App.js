import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import GlobalStyles from './styles/GlobalStyles'

import TableContext from './hooks/TableContext'

import Home from './pages/home'

const App = () => {
  return (
    <TableContext>
      <BrowserRouter>
        <Home />

        <GlobalStyles />
      </BrowserRouter>
    </TableContext>
  )
}

export default App

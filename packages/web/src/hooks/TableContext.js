import React, { createContext, useState } from 'react'

export const TableContext = createContext()

const TableContextProvider = props => {
  const [bosses, setBosses] = useState([])

  const addBosses = bosses => {
    setBosses(bosses)
  }

  return (
    <TableContext.Provider value={{ bosses, addBosses }}>
      {props.children}
    </TableContext.Provider>
  )
}

export default TableContextProvider

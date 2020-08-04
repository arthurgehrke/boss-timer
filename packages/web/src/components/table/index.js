import React, { useContext } from 'react'

import { TableContext } from '../../hooks/TableContext'

const Table = () => {
  const { bosses } = useContext(TableContext)

  return (
    <div>
      <ul classNane="list">
        {bosses.map(boss => {
          return <h1>{{ boss }}</h1>
        })}
      </ul>
    </div>
  )
}

export default Table

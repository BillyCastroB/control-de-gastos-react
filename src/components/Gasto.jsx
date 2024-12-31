import React from 'react'

export const Gasto = ({spent}) => {
  return (
    <li className='gastos'>
        <p>
            {spent.name}
            <span className='gasto'>${spent.quantitySpent}</span>
        </p>
    </li>
  )
}

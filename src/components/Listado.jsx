import React from 'react'
import { Gasto } from './Gasto'
export const Listado = ({spents}) => {
  return (
    <div className='gastos-realizados'>
        <h2>Listado</h2>
        {spents.map(spent=> (
            <Gasto
                key={spent.id}
                spent={spent}
            />
        ) )}
    </div>
  )
}

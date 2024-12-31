import React from 'react'
import { revisarPresupuesto } from '../helpers/helper'
export const ControlPresupuesto = ({budget, surplus}) => {
  return (
    <>
        <div className='alert alert-primary'>Presupuesto: {budget}</div>
        <div className={revisarPresupuesto(budget, surplus)}>Restante: {surplus}</div>
    </>
  )
}

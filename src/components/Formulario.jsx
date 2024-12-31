import React, { useState } from 'react'
import shortid from 'shortid';
import { Error } from './Error';

export const Formulario = ({ guardarGasto, setCrearGasto }) => {

  const [name, setName] = useState("");
  const [quantitySpent, setQuantitySpent] = useState(0)
  const [error, guardarError] = useState(false)
  const addSpend = (e)=>{
    e.preventDefault();
    if(name.trim() == "" || quantitySpent < 1 || isNaN( quantitySpent )){
      guardarError(true);
      return;
    }
    guardarError(false);

    const spent = {
      name,
      quantitySpent,
      id: shortid.generate()
    }
    guardarGasto(spent);
    setCrearGasto(true)
    setName("");
    setQuantitySpent(0);
  }

  return (
    <form
      onSubmit={addSpend}
    >
        <h2>Agrega tus Gastos aquí</h2>
        {error? <Error mensaje={"Todos los campos son obligatorios o cantidad no valida"}/> : null}
        <div>
            <label htmlFor="">Nombre Gasto</label>
            <input 
            type="text"
            className='u-full-width'
            placeholder='ejm. Transporte'
            value={name}
            onChange={e=>{setName(e.target.value)}}
            />
        </div>
        <div>
            <label htmlFor="">Cantidad Gasto</label>
            <input 
            type="number"
            className='u-full-width'
            placeholder='ejm. 400'
            value={quantitySpent}
            onChange={e=>{setQuantitySpent( e.target.value )}}
            />
        </div>
        <input type="submit"
            className='u-full-width button-primary'
            value="Agregar Gasto"/>
    </form>
  )
}

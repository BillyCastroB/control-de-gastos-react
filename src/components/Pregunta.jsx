import React, { useState } from 'react'
import { Error } from './Error';
export const Pregunta = ({setBudget, setShowQuestion, setSurplus}) => {

    const [quantity, setQuantity] = useState(0)
    const [error, setError] = useState(false)

    function defineQuantity(e){
        setQuantity(parseInt(e.target.value));
    }

    function senQuantity(e){
        e.preventDefault();
        if(quantity<=0 || isNaN(quantity)){
            setError(true);
            return;
        }
        setError(false)
        setBudget(quantity)
        setSurplus(quantity)
        setShowQuestion(false);
        }

  return (
    <>
        <h2>Coloca tu Presupuesto</h2>
            {error? <Error mensaje={"La cantidad no es valida"}/> : null} 
        <form
        onSubmit={senQuantity}
        >
            <input 
            type="number"
            className='u-full-width'
            placeholder='Coloca tu Presupuesto'
            onChange={(e)=>{defineQuantity(e)}}
            />
            <input 
            type="submit"
            className='button-primary u-full-width'
            value= "Definir Presupuesto" />
        </form>
    </>
  )
}

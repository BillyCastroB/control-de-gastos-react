import { Pregunta } from "./components/Pregunta"
import { Formulario } from "./components/Formulario"
import { Listado } from "./components/listado"
import { ControlPresupuesto } from "./components/ControlPresupuesto"
import { useEffect, useState } from "react"

function App() {

  const [budget, setBudget] = useState(0)
  const [surplus, setSurplus] = useState(0)
  const [showQuestion, setShowQuestion] = useState(true)
  const [spents, setSpents] = useState([])
  const [gasto, guardarGasto] = useState({})
  const [crearGasto, setCrearGasto] = useState(false)


  useEffect(()=>{
    if(crearGasto){
      setSpents([...spents, gasto])
      const presupuestoRestante = surplus - Number(gasto.quantitySpent);
      setSurplus(presupuestoRestante);
      setCrearGasto(false)
    }
  }, [gasto])

  return (
    <>
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {
            showQuestion? 
            (
              <Pregunta
                setBudget={setBudget}
                setSurplus={setSurplus}
                setShowQuestion={setShowQuestion}
              />
            )
            :
            (
          <div className="row">
            <div className="one-half column">
              <Formulario
                guardarGasto= {guardarGasto}
                setCrearGasto={setCrearGasto}
              />
            </div>
            <div className="one-half column">
              <Listado
                spents={spents}
              />

              <ControlPresupuesto
                budget={budget}
                surplus= {surplus}
              />
            </div>
          </div>
            )
          }
          
        </div>
      </header>
    </div>
    </>
  )
}

export default App

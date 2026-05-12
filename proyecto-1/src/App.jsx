import { useState , useEffect} from 'react'
import {Formulario} from './Formulario/Formulario.jsx'
import {AdministradorCitas} from './Citas/Citas.jsx'

function App() {
  const [citas, setCitas] = useState(JSON.parse(localStorage.getItem('citas')) ?? []);

  useEffect(() => {
      localStorage.setItem('citas', JSON.stringify(citas))
    }, [citas])

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario setCitas={setCitas} />
          </div>
          <div className="one-half column">
            <AdministradorCitas citas={citas} setCitas={setCitas} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
import { useState } from 'react'
import {Formulario} from './Formulario/Formulario.jsx'
import {AdministradorCitas} from './Citas/Citas.jsx'

function App() {
  // 1. Estado central: array de citas, vive en App
  const [citas, setCitas] = useState([]);

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            {/* 2. Le pasamos setCitas para que Formulario pueda agregar */}
            <Formulario setCitas={setCitas} />
          </div>
          <div className="one-half column">
            {/* 3. Le pasamos citas Y setCitas (para poder eliminar) */}
            <AdministradorCitas citas={citas} setCitas={setCitas} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
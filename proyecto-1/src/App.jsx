import { useState } from 'react'
import {Formulario} from './Formulario/Formulario.jsx'
import {AdministradorCitas} from './Citas/Citas.jsx'

function App() {

  return (
    <>
    <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div class="container">
        <div class="row">
          <div class="one-half column">
            <Formulario className="Formulario"></Formulario>
          </div>
          <div class="one-half column">
          <AdministradorCitas className="Citas"></AdministradorCitas>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

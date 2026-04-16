import {Cita} from '../Cita/Cita.jsx'

function AdministradorCitas({ citas, setCitas }) {

  return (
    <>
      <h2>Administra tus citas</h2>
      <ul>
        {citas.map(cita => (
         
          <Cita
            key={cita.id}
            cita={cita}
            setCitas={setCitas}
          />
        ))}
      </ul>
    </>
  )
}

export {AdministradorCitas}
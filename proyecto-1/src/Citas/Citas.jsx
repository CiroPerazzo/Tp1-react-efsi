import {Cita} from './Cita.jsx'

function AdministradorCitas(){
return(
<>
    <h2>Administra tus citas</h2>
    <ul>
        {Citas.map(cita => (
            <Cita></Cita>
        ))}
    </ul>
    
</>
)
}

export {AdministradorCitas}
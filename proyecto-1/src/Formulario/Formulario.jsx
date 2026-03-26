import './Formulario.css'

function Formulario(){
    return(
        <form method="POST">
            <p>Ingrese su nombre</p>
            <input type="text" id="nombre" name="nombre" placeholder="Nombre"/>
            <p>Ingrese su apellido</p>
            <input type="text" id="apellido" name="apellido" placeholder="Apellido"/>
            <p>Ingrese su e-mail</p>
            <input type="text" id="email" name="email" placeholder="E-Mail"/>
            <button type="submit">Subir</button>
        </form>
    )
}

export {Formulario}
import { useState } from 'react'

// Recibe setCitas como prop desde App
function Formulario({ setCitas }) {

  // Estado local para cada campo del form
  const [mascota, setMascota] = useState('');
  const [propietario, setPropietario] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintomas, setSintomas] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que recargue la página

    // Validación simple
    if (!mascota || !propietario || !fecha || !hora || !sintomas) {
      alert('Completá todos los campos');
      return;
    }

    // Creamos el objeto cita con un id único
    const nuevaCita = {
      id: Date.now(),
      mascota,
      propietario,
      fecha,
      hora,
      sintomas
    };

    // Agregamos la nueva cita al array (sin pisar las anteriores)
    setCitas(citasAnteriores => [...citasAnteriores, nuevaCita]);

    // Limpiamos el formulario
    setMascota('');
    setPropietario('');
    setFecha('');
    setHora('');
    setSintomas('');
  }

  return (
    <>
      <h2>Crear mi Cita</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          value={mascota}
          onChange={(e) => setMascota(e.target.value)}
        />

        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre dueño de la mascota"
          value={propietario}
          onChange={(e) => setPropietario(e.target.value)}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
        />

        <label>Sintomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          value={sintomas}
          onChange={(e) => setSintomas(e.target.value)}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </>
  );
}

export {Formulario}
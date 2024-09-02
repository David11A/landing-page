import { useState } from 'react';
import './Productos.css';

const proyectosData = [
  {
    id: 1,
    title: "Mantenimiento Preventivo",
    description: "Proyecto enfocado en el mantenimiento preventivo de motocicletas, asegurando un óptimo funcionamiento y alargando la vida útil del vehículo.",
    image: "/proyecto1.png"
  },
  {
    id: 2,
    title: "Reparación de Motor",
    description: "Especialistas en la reparación y ajuste de motores, garantizando un rendimiento mejorado y una experiencia de conducción más suave.",
    image: "/proyecto2.png"
  },
  {
    id: 3,
    title: "Pintura y Estética",
    description: "Proyecto de personalización de motocicletas con servicios de pintura y estética, creando diseños únicos y llamativos.",
    image: "/proyecto3.png"
  },
  {
    id: 4,
    title: "Accesorios y Equipamiento",
    description: "Instalación de accesorios y equipamiento para motocicletas, mejorando la funcionalidad y el estilo del vehículo.",
    image: "/proyecto4.png"
  }
];

function Proyectos() {
  const [selectedProyecto, setSelectedProyecto] = useState(proyectosData[0]);

  return (

    <div id='trabajos' className="proyectos">
      <div className="seccion-personalizada">
        <div className="contenedor-titulo">
          <div className="contenedor-flechas" style={{ marginBottom: "80px" }}>
            <div className="flecha-izquierda">&#187;</div>
            <div className="flecha-derecha">&#187;</div>
            <h2 className="titulo-principal">
              Nuestros trab<span className="texto-destacado">ajos</span>
            </h2>
          </div>
        </div>
        <div className="proyectos-grid">
          <div className="proyectos-main-image">
            <img src={selectedProyecto.image} alt={selectedProyecto.title} />
          </div>
          <div className="proyectos-info">
            <h2>{selectedProyecto.title}</h2>
            <p className="descripcion-personalizada">{selectedProyecto.description}</p>

          </div>
          <div className="proyectos-thumbnails">
            {proyectosData.map(proyecto => (
              <img
                key={proyecto.id}
                src={proyecto.image}
                alt={proyecto.title}
                className={`thumbnail ${selectedProyecto.id === proyecto.id ? 'active' : ''}`}
                onClick={() => setSelectedProyecto(proyecto)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proyectos;

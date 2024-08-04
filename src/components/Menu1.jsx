import { useState, useEffect } from 'react';
import { MenuOutlined, DownOutlined } from '@ant-design/icons';
import './Menu1.css';

const Menu1 = () => {
  const [visible, setVisible] = useState(false);
  const [mostrarEncabezado, setMostrarEncabezado] = useState(true);
  const [ultimoScrollY, setUltimoScrollY] = useState(0);

  const mostrarCajon = () => {
    setVisible(true);
  };

  const cerrarCajon = () => {
    setVisible(false);
  };

  const controlarEncabezado = () => {
    if (window.scrollY > ultimoScrollY) {
      // desplazamiento hacia abajo
      setMostrarEncabezado(false);
    } else {
      // desplazamiento hacia arriba
      setMostrarEncabezado(true);
    }
    setUltimoScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlarEncabezado);
    return () => {
      window.removeEventListener('scroll', controlarEncabezado);
    };
  }, [ultimoScrollY]);

  useEffect(() => {
    const manejarDesplazamiento = () => {
      if (visible) {
        cerrarCajon();
      }
    };

    if (visible) {
      window.addEventListener('scroll', manejarDesplazamiento);
    } else {
      window.removeEventListener('scroll', manejarDesplazamiento);
    }

    return () => {
      window.removeEventListener('scroll', manejarDesplazamiento);
    };
  }, [visible]);

  return (
    <>
      {/* Sección del encabezado */}
      <header className={`encabezado-personalizado ${mostrarEncabezado ? '' : 'encabezado-oculto'}`}>
        {/* Sección del logo */}
        <div className="logo">
          <img src="logo.png" alt="Logo" />
          <span className="texto-logo">TALLER DE MOTO DANY</span>
        </div>
        {/* Sección del menú */}
        <nav className="seccion-menu">
          <ul className="menu-escritorio">
            <li><a href="#inicio" onClick={cerrarCajon}>Inicio</a></li>
            <li><a href="#quienes-somos" onClick={cerrarCajon}>Quiénes Somos</a></li>
            <li><a href="#servicios" onClick={cerrarCajon}>Servicios</a></li>
            <li className="submenu">
              <a href="#proyectos">Proyectos</a>
              <ul className="elementos-submenu">
                <li><a href="#destacados" onClick={cerrarCajon}>Destacados</a></li>
                <li><a href="#accesorios" onClick={cerrarCajon}>Accesorios</a></li>
              </ul>
            </li>
            <li><a href="#contacto" onClick={cerrarCajon}>Contacto</a></li>
          </ul>
          <button className="boton-menu" onClick={mostrarCajon}>
            <MenuOutlined />
          </button>
        </nav>
        {/* Sección del cajón */}
        {visible && (
          <div className="cajon">
            <div className="cabecera-cajon">
              <button className="boton-cerrar" onClick={cerrarCajon}>
                ×
              </button>
            </div>
            <ul className="menu-cajon">
              <li>
                <a href="#inicio" onClick={cerrarCajon}>
                  Inicio
                </a>
              </li>
              <li className="submenu">
                <a href="#proyectos" onClick={cerrarCajon}>
                  Proyectos
                </a>
                <ul className="elementos-submenu">
                  <li>
                    <a href="#destacados" onClick={cerrarCajon}>
                      Destacados
                    </a>
                  </li>
                  <li>
                    <a href="#accesorios" onClick={cerrarCajon}>
                      Accesorios
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#quienes-somos" onClick={cerrarCajon}>
                  Quiénes Somos
                </a>
              </li>
              <li>
                <a href="#contacto" onClick={cerrarCajon}>
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Menu1;

import { useState, useEffect } from 'react';
import { MenuOutlined, DownOutlined } from '@ant-design/icons';
import './Menu1.css';

const Menu1 = () => {
  const [visible, setVisible] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const controlHeader = () => {
    if (window.scrollY > lastScrollY) {
      // scroll down
      setShowHeader(false);
    } else {
      // scroll up
      setShowHeader(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlHeader);
    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  }, [lastScrollY]);

  return (
    <>
      <header className={`custom-header ${showHeader ? '' : 'header-hidden'}`}>
        <div className="logo">
          <img src="logo.png" alt="Logo" />
          <span className="logo-text">TALLER DE MOTOS DANY</span>
        </div>
        <nav className="menu-section">
          <ul className="desktop-menu">
            <li>
              <a href="#inicio" onClick={onClose}>
                Inicio
              </a>
            </li>
            <li>
              <a href="#quienes-somos" onClick={onClose}>
                Quiénes Somos
              </a>
            </li>
            <li>
              <a href="#inicio" onClick={onClose}>
                Servicios
              </a>
            </li>
            <li className="submenu">
              <a href="#productos">
                Productos <DownOutlined />
              </a>
              <ul className="submenu-items">
                <li>
                  <a href="#destacados" onClick={onClose}>
                    Destacados
                  </a>
                </li>
                <li>
                  <a href="#accesorios" onClick={onClose}>
                    Accesorios
                  </a>
                </li>
                <li>
                  <a href="#productos" onClick={onClose}>
                    Productos
                  </a>
                </li>
              </ul>
            </li>
           
            <li>
              <a href="#contacto" onClick={onClose}>
                Contacto
              </a>
            </li>
          </ul>
          <button className="menu-button" onClick={showDrawer}>
            <MenuOutlined />
          </button>
        </nav>
        {visible && (
          <div className="drawer">
            <div className="drawer-header">
              <button className="close-button" onClick={onClose}>
                ×
              </button>
            </div>
            <ul className="drawer-menu">
              <li>
                <a href="#inicio" onClick={onClose}>
                  Inicio
                </a>
              </li>
              <li className="submenu">
                <a href="#productos" onClick={onClose}>
                  Productos
                </a>
                <ul className="submenu-items">
                  <li>
                    <a href="#destacados" onClick={onClose}>
                      Destacados
                    </a>
                  </li>
                  <li>
                    <a href="#accesorios" onClick={onClose}>
                      Accesorios
                    </a>
                  </li>
                  <li>
                    <a href="#productos" onClick={onClose}>
                      Productos
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#quienes-somos" onClick={onClose}>
                  Quiénes Somos
                </a>
              </li>
              <li>
                <a href="#contacto" onClick={onClose}>
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

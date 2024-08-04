import React, { useState } from 'react';
import { Row, Col, Typography } from 'antd';
import './QuienesSomos.css';

const { Title, Paragraph } = Typography;

const QuienesSomos = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = ['logo2.png', 'imgQ2.png', 'imgQ3.png', 'imgQ4.png', 'imgQ5.png'];

  const handleImageClick = (index) => {
    setCurrentImage(index);
  };

  const handleSlideClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="contenedor">
      <div className="marcas-carousel">
        <div className="marcas-track">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="marcas-slide">
              <img src="/marca1.png" alt="Marca 1" />/ 
              <img src="/marca2.png" alt="Marca 2" />/ 
              <img src="/marca3.png" alt="Marca 3" />/ 
              <img src="/marca4.png" alt="Marca 4" />/ 
              <img src="/marca5.png" alt="Marca 5" />/ 
            </div>
          ))}
        </div>
      </div>
      <div id="quienes-somos" className="seccion-personalizada">
        <Row align="middle" justify="center">
          <Col xs={24} md={12} className="columna-texto-personalizada">
            <div className="contenedor-texto-personalizado">
              <div className="contenedor-titulo">
                <div className="contenedor-flechas">
                  <div className="flecha-izquierda">&#187;</div>
                  <div className="flecha-derecha">&#187;</div>
                  <h2 className="titulo-principal">
                    ¿Quienes so<span className="texto-destacado">mos?</span>
                  </h2>
                </div>
              </div>

              <Paragraph className="descripcion-personalizada">
              Somos un taller dedicada a la reparación y mantenimiento de motocicletas. Con más de 5 años de experiencia, nuestro taller es un referente en la comunidad, no solo por la calidad de nuestros servicios, sino también por nuestra dedicación y pasión por las motocicletas. </Paragraph>
              <div className="contenedor-botones-personalizado">
                <button
                  className={`boton-personalizado ${currentSlide === 0 ? 'activo' : ''}`}
                  onClick={() => handleSlideClick(0)}
                >
                  Misión
                </button>
                <button
                  className={`boton-personalizado ${currentSlide === 1 ? 'activo' : ''}`}
                  onClick={() => handleSlideClick(1)}
                >
                  Visión
                </button>
                <button
                  className={`boton-personalizado ${currentSlide === 2 ? 'activo' : ''}`}
                  onClick={() => handleSlideClick(2)}
                >
                  Valores
                </button>
              </div>
              <div className="contenedor-tarjetas-personalizado">
                {currentSlide === 0 && (
                  <div className="tarjeta-personalizada">
                    <h2 level={5} className="titulo-tarjeta-personalizada">Misión</h2>
                    <Paragraph className="parrafo-tarjeta-personalizada">
                      Nuestra misión es garantizar la seguridad y el rendimiento óptimo de cada motocicleta, proporcionando un servicio excepcional y atención personalizada a nuestros clientes.
                    </Paragraph>
                  </div>
                )}
                {currentSlide === 1 && (
                  <div className="tarjeta-personalizada">
                    <h2 level={5} className="titulo-tarjeta-personalizada">Visión</h2>
                    <Paragraph className="parrafo-tarjeta-personalizada">
                    Ser el taller de motocicletas líder en la región, reconocido por la calidad de nuestros servicios, la innovación en nuestras soluciones y la fidelidad de nuestros clientes.
                    </Paragraph>
                  </div>
                )}
                {currentSlide === 2 && (
                  <div className="tarjeta-personalizada">
                    <h2 level={5} className="titulo-tarjeta-personalizada">Valores</h2>
                    <Paragraph className="parrafo-tarjeta-personalizada">
                    Compromiso, calidad, confianza e innovación refleja nuestra esencia y enfoque de ofrecer servicios de alta calidad mientras se mantiene una relación cercana con la comunidad.
                    </Paragraph>
                  </div>
                )}
              </div>
            </div>
          </Col>

          <Col xs={24} md={12} className="columna-imagen-personalizada">
            <img src={images[currentImage]} alt="About Us" className="imagen-personalizada" />
            
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default QuienesSomos;
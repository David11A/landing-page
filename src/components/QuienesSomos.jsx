import React, { useState } from 'react';
import { Row, Col, Typography } from 'antd';
import './QuienesSomos.css';

const { Title, Paragraph } = Typography;

const QuienesSomos = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = ['imgQ.png', 'imgQ2.png', 'imgQ3.png', 'imgQ4.png', 'imgQ5.png'];

  const handleImageClick = (index) => {
    setCurrentImage(index);
  };

  const handleSlideClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="quienes-somos" className="container">
      <div className="custom-section">
        <Row align="middle" justify="center">
          <Col xs={24} md={12} className="custom-text-col">
            <div className="custom-text-container">
            <div style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>

          <div style={{
            position: 'relative',    
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {/* Flecha izquierda */}
            <div style={{
              position: 'absolute',
              left: '0',
              color: '#ff6666', // Rojo claro
              fontSize: '24px',
              transform: 'translateY(-50%)',
              margin: '0 10px',
            }}>
              &#187;&#187; {/* Código HTML para doble flecha derecha */}
            </div>

            {/* Flecha derecha */}
            <div style={{
              position: 'absolute',
              right: '0',
              color: '#ff6666', // Rojo claro
              fontSize: '24px',
              transform: 'translateY(-50%) rotate(180deg)',
              margin: '0 10px',
            }}>
              &#187;&#187; {/* Código HTML para doble flecha derecha, rotada 180 grados */}
            </div>

            <h2 style={{
              fontSize: "48px",
              fontWeight: "700",
              fontFamily: "'Teko', sans-serif",
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: 'white',
              textAlign: 'center',
              margin: 0,
              padding: '10px 40px', // Aumentar el padding para darle espacio a las flechas
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            }}>
              Quienes so<span style={{ color: '#ff3333' }}>mos</span>
            </h2>
          </div>

        </div>

              <Paragraph style={{
                color: "#F4F4F4",
                fontFamily: "'Roboto', sans-serif",
                fontSize: "16px",
                lineHeight: "1.6",
              }} className="custom-description" >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, maxime! Quaerat architecto nesciunt distinctio laudantium perspiciatis libero quasi labore eligendi placeat at, velit, sint impedit. Illum explicabo excepturi provident molestiae!</Paragraph>
              <div className="custom-buttons-container">
                <button
                  className={`custom-button ${currentSlide === 0 ? 'active' : ''}`}
                  onClick={() => handleSlideClick(0)}
                >
                  Misión
                </button>
                <button
                  className={`custom-button ${currentSlide === 1 ? 'active' : ''}`}
                  onClick={() => handleSlideClick(1)}
                >
                  Visión
                </button>
                <button
                  className={`custom-button ${currentSlide === 2 ? 'active' : ''}`}
                  onClick={() => handleSlideClick(2)}
                >
                  Valores
                </button>
              </div>
              <div className="custom-cards-container">
                {currentSlide === 0 && (
                  <div className="custom-card">
                    <Title style={{
                      color: "white",
                      fontFamily: "'Teko', sans-serif",
                      fontSize: "32px",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                         marginBottom:"4px"

                    }} level={4} className="custom-card-title">Misión</Title>
      
                    <Paragraph className='Paragraph2' style={{
                      color: "#F4F4F4",
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "16px",
                      lineHeight: "1.6",margin:"0px",
                      marginBottom:"0px"
                    }}>
                      Nuestra misión es garantizar la seguridad y el rendimiento óptimo de cada motocicleta, proporcionando un servicio excepcional y atención personalizada a nuestros clientes.
                    </Paragraph>
                  </div>
                )}
                {currentSlide === 1 && (
                  <div className="custom-card">
                    <Title style={{
                      color: "white",
                      fontFamily: "'Teko', sans-serif",
                      fontSize: "32px",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                         marginBottom:"4px"

                    }} level={4} className="custom-card-title">Visión</Title>
                    <Paragraph style={{
                      color: "#F4F4F4",
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "16px",
                      lineHeight: "1.6",margin:"0px",
                      marginBottom:"0px"
                    }}>
                      Ser el taller de referencia en el mantenimiento y reparación de motocicletas, reconocido por nuestra excelencia y dedicación al servicio al cliente.
                    </Paragraph>
                  </div>
                )}
                {currentSlide === 2 && (
                  <div className="custom-card">
                    <Title style={{
                      color: "white",
                      fontFamily: "'Teko', sans-serif",
                      fontSize: "32px",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                         marginBottom:"4px"

                    }} level={4} className="custom-card-title">Valores</Title>
                    <Paragraph style={{
                      color: "#F4F4F4",
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "16px",
                      lineHeight: "1.6",margin:"0px",
                      marginBottom:"0px"
                    }}>
                      Nos guiamos por la integridad, la pasión por las motocicletas y el compromiso con la calidad y la satisfacción del cliente.
                    </Paragraph>
                  </div>
                )}
              </div>
            </div>
          </Col>

          <Col xs={24} md={12} className="custom-image-col">
            <img src={images[currentImage]} alt="About Us" className="custom-image" />
            <div className="thumbnail-container">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className={`thumbnail ${currentImage === index ? 'active' : ''}`}
                  onClick={() => handleImageClick(index)}
                />
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default QuienesSomos;

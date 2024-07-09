import React, { useState } from 'react';
import { Row, Col, Typography } from 'antd';
import './QuienesSomos.css';

const { Title, Paragraph } = Typography;

const QuienesSomos = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = ['imgQ.png', 'imgQ2.png', 'imgQ3.png', 'imgQ4.png'];

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
              <Title style={{ color: "white" }} level={1} className="title">¿Quiénes Somos?</Title>
              <Paragraph className="custom-description">
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </Paragraph>
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
                    <Title style={{ color: "white" }} level={4} className="custom-card-title">Misión</Title>
                    <Paragraph style={{ color: "#C0C1C3" }}>
                      Nuestra misión es garantizar la seguridad y el rendimiento óptimo de cada motocicleta, proporcionando un servicio excepcional y atención personalizada a nuestros clientes.
                    </Paragraph>
                  </div>
                )}
                {currentSlide === 1 && (
                  <div className="custom-card">
                    <Title style={{ color: "white" }} level={4} className="custom-card-title">Visión</Title>
                    <Paragraph style={{ color: "#C0C1C3" }}>
                      Ser el taller de referencia en el mantenimiento y reparación de motocicletas, reconocido por nuestra excelencia y dedicación al servicio al cliente.
                    </Paragraph>
                  </div>
                )}
                {currentSlide === 2 && (
                  <div className="custom-card">
                    <Title style={{ color: "white" }} level={4} className="custom-card-title">Valores</Title>
                    <Paragraph style={{ color: "#C0C1C3" }}>
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

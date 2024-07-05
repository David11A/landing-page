import React from 'react';
import { Row, Col, Typography, Button } from 'antd';

const { Title, Paragraph } = Typography;
import './QuienesSomos.css';

export default function QuienesSomos() {
  return (
    <>
       <div className="custom-section">
      <Row align="middle" justify="center">
        <Col xs={24} md={12} className="custom-image-col">
          <img src="imgQ.png" alt="About Us" className="custom-image" />
        </Col>
        <Col xs={24} md={12} className="custom-text-col">
          <div className="custom-text-container">
            <Title level={1} className="title">Quiénes Somos</Title>
            <Paragraph className="custom-description">
              En Taller Dani Motors, somos apasionados por las motocicletas y estamos dedicados a proporcionar servicios de mantenimiento y reparación de la más alta calidad. Nuestro objetivo es asegurar que cada moto que pasa por nuestras manos esté en perfectas condiciones, lista para la carretera.
            </Paragraph>
            <div className="custom-cards-container">
              <div className="custom-card">
                <Title level={4} className="custom-card-title">Misión</Title>
                <Paragraph>
                  Nuestra misión es garantizar la seguridad y el rendimiento óptimo de cada motocicleta, proporcionando un servicio excepcional y atención personalizada a nuestros clientes.
                </Paragraph>
              </div>
              <div className="custom-card">
                <Title level={4} className="custom-card-title">Visión</Title>
                <Paragraph>
                  Ser el taller de referencia en el mantenimiento y reparación de motocicletas, reconocido por nuestra excelencia y dedicación al servicio al cliente.
                </Paragraph>
              </div>
              <div className="custom-card">
                <Title level={4} className="custom-card-title">Valores</Title>
                <Paragraph>
                  Nos guiamos por la integridad, la pasión por las motocicletas y el compromiso con la calidad y la satisfacción del cliente.
                </Paragraph>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
    </>
  )
}

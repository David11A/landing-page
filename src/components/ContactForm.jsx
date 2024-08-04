import React from 'react';
import { Row, Col, Typography, Space } from 'antd';
import { PhoneOutlined, EnvironmentOutlined, ClockCircleOutlined, MailOutlined, GoogleOutlined, InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons';
import './ContactForm.css';

const { Title, Text } = Typography;

const ContactForm = () => {
  return (
    <div style={{marginTop:"60px", marginBottom:"60px"}}>
      <Row justify="center">
        {/* Sección de información de contacto */}
        <Col xs={22} md={10}>
          <Space direction="vertical" size="large" className="contact-info">
            <div className="contenedor-titulo">
              <div className="contenedor-flechas">
                <div className="flecha-izquierda">
                  &#187;
                </div>
                <div className="flecha-derecha">
                  &#187;
                </div>
                <h2 className="titulo-contacto">
                  Contác<span className="titulo-destacado">tanos</span>
                </h2>
              </div>
            </div>
            <Space  >
              <PhoneOutlined className="contact-icon" />
              <Text strong className="contact-label">Teléfono:</Text>
              <Text className="contact-text">(+504) 0000-0000</Text>
            </Space>
            <Space>
              <MailOutlined className="contact-icon" />
              <Text strong className="contact-label">Email:</Text>
              <Text className="contact-text">correo@gmail.com</Text>
            </Space>
            <Space align="start">
              <EnvironmentOutlined className="contact-icon" />
              <div>
                <Text strong className="contact-label">Dirección:</Text>
                <br />
                <Text className="contact-text">Centro Comercial Paseo, Tegucigalpa 12101, Honduras</Text>
              </div>
            </Space>
            <Space align="start">
              <ClockCircleOutlined className="contact-icon" />
              <div>
                <Text strong className="contact-label">Horario de atención:</Text>
                <br />
                <Text className="contact-text">Lunes a Viernes: 8:00 AM - 6:00 PM</Text>
                <br />
                <Text className="contact-text">Sábados: 9:00 AM - 2:00 PM</Text>
                <br />
                <p className="etiqueta-redes-sociales" >Redes sociales:  
            <GoogleOutlined style={{marginLeft:"20px"}} className="social-icon" />
            <InstagramOutlined className="social-icon" />
            <WhatsAppOutlined className="social-icon" />
          </p>
              </div>
            </Space>
          </Space>
        </Col>

        {/* Sección de redes sociales y mapa */}
        <Col xs={22} md={10}>
          <div className="contenedor-mapa" >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5529674308875!2d-87.2265163!3d14.0453955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6fac9f7e8f9b7d%3A0x12db78c5d25d3dd8!2sCentro%20Comercial%20Paseo%2C%20Tegucigalpa%2012101%2C%20Honduras!5e0!3m2!1sen!2sus!4v1685562012345!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactForm;

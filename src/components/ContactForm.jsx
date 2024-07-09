import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contact-section">
      <Row gutter={24}>
        <Col xs={24} md={12}>
          <Form layout="vertical" className="contact-form">
            <Form.Item label="Nombre" name="name" rules={[{ required: true, message: 'Por favor ingresa tu nombre' }]}>
              <Input placeholder="Tu nombre" />
            </Form.Item>
            <Form.Item  style={{color:"white"}} label="Correo" name="email" rules={[{ required: true, message: 'Por favor ingresa tu correo' }]}>
              <Input placeholder="Tu correo" />
            </Form.Item>
            <Form.Item label="Mensaje" name="message" rules={[{ required: true, message: 'Por favor ingresa tu mensaje' }]}>
              <Input.TextArea rows={4} placeholder="Tu mensaje" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="contact-submit-button">
                <strong>Enviar</strong>
              </Button>
            </Form.Item>
            <div className="social-icons">
              <FacebookOutlined className="social-icon" />
              <TwitterOutlined className="social-icon" />
              <InstagramOutlined className="social-icon" />
            </div>
          </Form>
        </Col>
        <Col xs={24} md={12}>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5529674308875!2d-87.2265163!3d14.0453955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6fac9f7e8f9b7d%3A0x12db78c5d25d3dd8!2sCentro%20Comercial%20Paseo%2C%20Tegucigalpa%2012101%2C%20Honduras!5e0!3m2!1sen!2sus!4v1685562012345!5m2!1sen!2sus"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactForm;

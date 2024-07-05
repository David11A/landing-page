import React, { useState, useEffect, useRef } from 'react';
import { Col, Row, Button, Modal, Image } from 'antd';
import { Content } from 'antd/es/layout/layout';
import './CardServicios.css';

const CardServicios = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentService, setCurrentService] = useState(null);
  const [largeImage, setLargeImage] = useState("");
  const slideRef = useRef(null);
  const totalSlides = 4; // Número total de slides

  const services = [
    {
      imagencard: "/imgMv2.png",
      title: "Mantenimiento",
      description: "Ofrecemos un servicio completo de mantenimiento para asegurar que tu moto esté en perfectas condiciones. Nuestros técnicos están capacitados para realizar diagnósticos precisos y mantenimientos preventivos.",
      images: ["/imgLarge1.png", "/imgSmall1_1.png", "/imgSmall1_2.png", "/imgSmall1_3.png"]
    },
    {
      imagencard: "/imgMv3.png",
      title: "Reparaciones y mejoras",
      description: "Realizamos todo tipo de reparaciones y mejoras en tu motocicleta. Desde arreglos mecánicos hasta mejoras estéticas, contamos con las herramientas y el conocimiento necesarios para transformar tu moto.",
      images: ["/imgLarge2.png", "/imgSmall2_1.png", "/imgSmall2_2.png", "/imgSmall2_3.png"]
    },
    {
      imagencard: "/imgMv4.png",
      title: "Venta de Repuestos",
      description: "Tenemos una amplia variedad de repuestos para todo tipo de motocicletas. Garantizamos la calidad y durabilidad de cada pieza, y te asesoramos para que encuentres exactamente lo que necesitas.",
      images: ["/imgLarge3.png", "/imgSmall3_1.png", "/imgSmall3_2.png", "/imgSmall3_3.png"]
    },
    {
      imagencard: "/imgMv5.png",
      title: "Instalación de equipos",
      description: "Instalamos una gran variedad de equipos y accesorios en tu motocicleta. Desde sistemas de audio hasta dispositivos de navegación, nuestro equipo asegura una instalación profesional y segura.",
      images: ["/moto2D.jpg", "/moto3D.jpg", "/moto2D.jpg", "/moto2D.jpg"]
    }
  ];

  const openModal = (service) => {
    setCurrentService(service);
    setLargeImage(service.images[0]);
    setModalVisible(true);
  };

  const CustomCard = ({ service }) => (
    <div className="custom-cardP">
      <div className="card-image-container">
        <img className="card-image" src={service.imagencard} alt="Main Image" style={{ borderRadius: "25px" }} />
        <div className="card-content">
          <h1 className="card-title">{service.title}</h1>
          <Button style={{ color: "black", marginTop: '10px', backgroundColor: "white" }} onClick={() => openModal(service)}>Leer Más</Button>
        </div>
      </div>
    </div>
  );

  const slides = services.map((service, index) => (
    <CustomCard key={index} service={service} />
  ));

  const handleScroll = (e) => {
    const newSlide = Math.round((e.target.scrollLeft / e.target.scrollWidth) * totalSlides);
    setCurrentSlide(newSlide);
  };

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (slideRef.current) {
        slideRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const handleImageClick = (src) => {
    setLargeImage(src);
  };

  return (
    <Content style={{ padding: '0 20px' }}>
      <div className="desktop-view2">
        <a href="#"><img src="/marca1.png" alt="Logo 1" /></a>
        <a href="#"><img src="/marca2.png" alt="Logo 2" /></a>
        <a href="#"><img src="/marca3.png" alt="Logo 3" /></a>
        <a href="#"><img src="/marca4.png" alt="Logo 4" /></a>
        <a href="#"><img src="/marca5.png" alt="Logo 5" /></a>
      </div>
      <h2 style={{ margin: "0px", padding: '0px', color: "white" }}> DANIEL /Servicios →</h2>
      <div className="desktop-view">
        <Row gutter={[16, 16]} justify="center">
          {services.map((service, index) => (
            <Col span={6} key={index}>
              <CustomCard service={service} />
            </Col>
          ))}
        </Row>
      </div>

      <div className="carousel-container mobile-view">
        <div className="carousel" ref={slideRef}>
          {slides.map((slide, index) => (
            <div className="carousel-item" key={index}>
              {slide}
            </div>
          ))}
        </div>
        <div className="scrollbar-container">
          <div className="scrollbar" style={{ width: `${(currentSlide + 1) * (100 / totalSlides)}%`, left: `${currentSlide * (100 / totalSlides)}%` }}></div>
        </div>
      </div>

      {currentService && (
        <Modal
          visible={modalVisible}
          onCancel={() => setModalVisible(false)}
          footer={null}
          bodyStyle={{ backgroundColor: 'gray' }}
          closeIcon={<span style={{ color: 'white', fontSize: '20px' }}>×</span>}
        >
          <div className="modal-content-servicios">
            <h2>{currentService.title}</h2>
            <p>{currentService.description}</p>
            <div className="image-gallery-servicios">
              <div className="large-image-container-servicios">
                <Image.PreviewGroup>
                  <Image src={largeImage} alt="Large" className="large-image-servicios" />
                </Image.PreviewGroup>
              </div>
              <div className="small-images-container-servicios">
                {currentService.images.slice(1).map((src, index) => (
                  <img
                    key={index}
                    className="small-image-servicios"
                    src={src}
                    alt={`Small ${index + 1}`}
                    onClick={() => handleImageClick(src)}
                  />
                ))}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </Content>
  );
};

export default CardServicios;

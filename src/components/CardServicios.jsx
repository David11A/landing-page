import React, { useState, useEffect, useRef } from 'react';
import { Col, Row, Image } from 'antd';
import { Content } from 'antd/es/layout/layout';
import './CardServicios.css';
import QuienesSomos from './QuienesSomos';

const CardServicios = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const totalSlides = 4; // Número total de slides

  const services = [
    {
      imagencard: "/imgMv2.png",
      title: "Soldaduras",
      description: "Nuestros técnicos están capacitados para realizar diagnósticos precisos y mantenimientos preventivos.",
      images: ["/imgLarge1.png", "/imgSmall1_1.png", "/imgSmall1_2.png", "/imgSmall1_3.png"]
    },
    {
      imagencard: "/imgMv3.png",
      title: "Restauraciones",
      description: "Realizamos todo tipo de reparaciones y mejoras en tu motocicleta. Desde arreglos mecánicos hasta mejoras estéticas, contamos con las herramientas y el conocimiento necesarios para transformar tu moto.",
      images: ["/imgLarge2.png", "/imgSmall2_1.png", "/imgSmall2_2.png", "/imgSmall2_3.png"]
    },
    {
      imagencard: "/imgMv4.png",
      title: "Enderezamiento",
      description: "Tenemos una amplia variedad de repuestos para todo tipo de motocicletas. Garantizamos la calidad y durabilidad de cada pieza, y te asesoramos para que encuentres exactamente lo que necesitas.",
      images: ["/imgLarge3.png", "/imgSmall3_1.png", "/imgSmall3_2.png", "/imgSmall3_3.png"]
    },
    {
      imagencard: "/imgMv5.png",
      title: "Gomeria",
      description: "Instalamos una gran variedad de equipos y accesorios en tu motocicleta. Desde sistemas de audio hasta dispositivos de navegación, nuestro equipo asegura una instalación profesional y segura.",
      images: ["/moto2D.jpg", "/moto3D.jpg", "/moto2D.jpg", "/moto2D.jpg"]
    }
  ];

  const CustomCard = ({ service }) => (
    <div className="custom-cardP">
      <div className="card-image-container">
        <img className="card-image" src={service.imagencard} alt="Main Image" style={{ borderRadius: "25px" }} />
        <div className="card-content">
          <h1 className="card-title">{service.title}</h1>
          <p className="card-description">{ }</p>
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

  return (
    <Content style={{ padding: '0 20px' }}>
      <div className="marcas-carousel">
        <div className="marcas-track track1">
          <img src="/marca1.png" alt="Marca 1" />
          <img src="/marca2.png" alt="Marca 2" />
          <img src="/marca3.png" alt="Marca 3" />
          <img src="/marca4.png" alt="Marca 4" />
          <img src="/marca5.png" alt="Marca 5" />
          <img src="/marca1.png" alt="Marca 1" />
          <img src="/marca2.png" alt="Marca 2" />
          <img src="/marca3.png" alt="Marca 3" />
          <img src="/marca4.png" alt="Marca 4" />
          <img src="/marca5.png" alt="Marca 5" />
        </div>
        <div className="marcas-track track2">
          <img src="/marca1.png" alt="Marca 1" />
          <img src="/marca2.png" alt="Marca 2" />
          <img src="/marca3.png" alt="Marca 3" />
          <img src="/marca4.png" alt="Marca 4" />
          <img src="/marca5.png" alt="Marca 5" />
          <img src="/marca1.png" alt="Marca 1" />
          <img src="/marca2.png" alt="Marca 2" />
          <img src="/marca3.png" alt="Marca 3" />
          <img src="/marca4.png" alt="Marca 4" />
          <img src="/marca5.png" alt="Marca 5" />
        </div>
      </div>


      <QuienesSomos />
      <div style={{
          position: 'relative',
          marginTop: "15px",
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
              servic<span style={{ color: '#ff3333' }}>ios</span>
            </h2>
          </div>

        </div>
      <div className="desktop-view">

        <Row gutter={[16, 16]} justify="center">
          {services.map((service, index) => (
            <Col span={6} key={index}>
              <CustomCard service={service} />
            </Col>
          ))}
        </Row>
      </div>

      <div style={{ margin: "0px", padding: '0px', color: "white", border: "0px" }} className="carousel-container mobile-view">
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
    </Content>
  );
};

export default CardServicios;

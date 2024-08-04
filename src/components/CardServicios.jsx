import React, { useState, useEffect, useRef } from 'react';
import { Col, Row } from 'antd';
import { Content } from 'antd/es/layout/layout';
import './CardServicios.css';
import { FaCoins, FaWrench } from 'react-icons/fa';
import Paragraph from 'antd/es/typography/Paragraph';

const CardServicios = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const totalSlides = 4;

  const services = [
    {
      imagencard: "/imgMv2.png",
      title: "Mantenimiento",
      description: "Ofrecemos servicios completos de mantenimiento preventivo para mantener tu motocicleta en óptimas condiciones. Desde cambios de aceite hasta ajustes de frenos, nos aseguramos de que tu moto esté siempre lista para rodar.",
      images: ["/imgLarge1.png", "/imgSmall1_1.png", "/imgSmall1_2.png", "/imgSmall1_3.png"],
      prices: ["Desde L.495"]
    },
    {
      imagencard: "/imgMv3.png",
      title: "Restauraciones",
      description: "Especialistas en devolverle la vida a motocicletas clásicas o dañadas. Nuestro equipo realiza restauraciones detalladas para que tu moto recupere su brillo original y funcione como nueva.",
      images: ["/imgLarge2.png", "/imgSmall2_1.png", "/imgSmall2_2.png", "/imgSmall2_3.png"],
      prices: ["Precio varia por modelo"]
    },
    {
      imagencard: "/imgMv4.png",
      title: "Diagnosticos",
      description: "Identificamos con precisión cualquier problema mecánico o eléctrico en tu motocicleta utilizando herramientas de diagnóstico avanzadas, garantizando una reparación eficiente y efectiva.",
      images: ["/imgLarge3.png", "/imgSmall3_1.png", "/imgSmall3_2.png", "/imgSmall3_3.png"],
      prices: ["Desde L.199"]
    },
    {
      imagencard: "/imgMv5.png",
      title: "Sistema Electrico",
      description: "Solucionamos problemas en el sistema eléctrico de tu moto, desde fallos en el encendido hasta problemas de iluminación, asegurando que cada componente funcione correctamente.",
      images: ["/moto2D.jpg", "/moto3D.jpg", "/moto2D.jpg", "/moto2D.jpg"],
      prices: ["Precio varia por falla"]
    }
  ];
  
  

  const CustomCard = ({ service }) => (
    <div className="custom-cardP">
      <div className="card-image-container">
        <img className="card-image" src={service.imagencard} alt="Main Image" />
        <h1 className="card-title">{service.title}</h1>
      </div>
      <div className="card-details">
        <div className="card-info">
          <p className="descripcion-personalizada">
           
            {service.description}
          </p>
          <div className="card-prices">
            {service.prices.map((price, index) => (
              <span key={index} className="price-tag">{price}</span>
            ))}
          </div>
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
    
    <Content className="seccion-personalizada">
      <div id='servicios' className="contenedor-titulo" style={{ marginBottom: "60px" }}>
        <div className="contenedor-flechas">
          <div className="flecha-izquierda">&#187;</div>
          <div className="flecha-derecha">&#187;</div>
          <h2 className="titulo-principal">
            Servic<span className="texto-destacado">ios</span>
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
    </Content>
  );
};

export default CardServicios;

import { Carousel } from 'antd';
import { InstagramOutlined, GoogleOutlined, WhatsAppOutlined } from '@ant-design/icons';
import './CarouselComponent.css';

const CarouselComponent = () => {
  return (
    <>
 
  <div className="pc-banner">
    <Carousel className="custom-carousel">
      <div>
        <img src="/banner.png" className="carousel-content" alt="PC Banner" />
        <div className="carousel-text">
          <h1 className="carousel-title">TALLER DE MOTOS DANY</h1>
          <p className="carousel-description">¡Confiarnos tu moto y dejarla en las mejores manos!</p>
          <div className="social-media-icons">
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                  <GoogleOutlined className="custom-icon" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <InstagramOutlined className="custom-icon" />
                </a>
                <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                  <WhatsAppOutlined className="custom-icon" />
                </a>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="mobile-banner">
        <Carousel className="custom-carousel">
          <div>
            <img src="/bannerMobil.png" className="carousel-content" alt="Mobile Banner" />
            <div className="carousel-text">
              <h1 className="carousel-title">TALLER DE MOTOS DANY</h1>
              <p className="carousel-description">Cuidamos de tu moto. ¡Descubre nuestros servicios!</p>
              <div className="social-media-icons">
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                  <GoogleOutlined className="custom-icon" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <InstagramOutlined className="custom-icon" />
                </a>
                <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                  <WhatsAppOutlined className="custom-icon" />
                </a>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
 
    </>
  );
};

export default CarouselComponent;

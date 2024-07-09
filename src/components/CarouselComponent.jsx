import { Carousel } from 'antd';
import { InstagramOutlined } from '@ant-design/icons';
import './CarouselComponent.css';

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <div className="pc-banner">
        <Carousel className="custom-carousel">
          <div>
            <img src="/banner3.png" className="carousel-content" alt="PC Banner" />
            <div className="carousel-text">
              <h1 className="carousel-title">TALLER DE MOTOS DANY</h1>
              <p className="carousel-description">¡Confiarnos tu moto y dejarla en las mejores manos!!</p>
              <div className="social-media-icons">
                <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                  <img src="/tiktok-icon.png" alt="TikTok" className="custom-icon" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <InstagramOutlined />
                </a>
              </div>
             
            </div>
          </div>
        </Carousel>
      </div>
      <div className="mobile-banner">
        <Carousel className="custom-carousel">
          <div>
            <img src="/banner4.png" className="carousel-content" alt="Mobile Banner" />
            <div className="carousel-text">
              <h1 className="carousel-title">DANIEL MOTORS</h1>
              <p className="carousel-description">Cuidamos de tu moto. ¡Descubre nuestros servicios!</p>
              <div className="social-media-icons">
                <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                  <img src="/tiktok-icon.png" alt="TikTok" className="custom-icon" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <InstagramOutlined />
                </a>
              </div>
             
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselComponent;

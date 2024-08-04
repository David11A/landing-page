import { Carousel } from 'antd';
import { InstagramOutlined, GoogleOutlined, WhatsAppOutlined } from '@ant-design/icons';
import './CarouselComponent.css';

const CarouselComponent = () => {
  return (
    <>
      {/* Sección del banner para PC */}
      <div className="pc-banner">
        <Carousel className="custom-carousel">
          <div>
            <img src="/banner.png" className="carousel-content" alt="PC Banner" />
            <div className="carousel-text">
              {/* Título principal */}
              <h1 className="carousel-title">TALLER DE MOTOS</h1>
              {/* Subtítulo */}
              <h2 className="carousel-subtitle">DANY</h2>
              {/* Descripción */}
              <p className="carousel-description">Mantenimiento | Restauraciones | Enderezamiento</p>
             

               {/* Sección de redes sociales */}
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

      {/* Sección del banner para móvil */}
      <div className="mobile-banner">
        <Carousel className="custom-carousel">
          <div>
            <img src="/bannerMobil.png" className="carousel-content" alt="Mobile Banner" />
            <div className="carousel-text">
              {/* Título principal */}
              <h1 className="carousel-title">TALLER DE MOTOS</h1>
              {/* Subtítulo */}
              <h2 className="carousel-subtitle">DANY</h2>
              {/* Descripción */}
              <p className="carousel-description">◎Mantenimiento ◎Restauraciones ◎Enderezamiento</p>
              {/* Sección de redes sociales */}
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

import { Carousel } from "antd";
import {
  InstagramOutlined,
  GoogleOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import "./CarouselComponent.css";

const CarouselComponent = () => {
  return (
    <>
      {/* Sección del banner para PC */}
      <div className="pc-banner">
        <section className="custom-carousel">
          <div id="inicio">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/taller-dany.appspot.com/o/banners%2Fbanner.png?alt=media&token=530dd1b9-ad3f-42d0-b0cc-4ea4f7974816"
              className="carousel-content"
              alt="PC Banner"
            />
            <div className="carousel-text">
              {/* Título principal */}
              <h1 className="carousel-title">TALLER DE MOTOS</h1>
              {/* Subtítulo */}
              <h2 className="carousel-subtitle">DANY</h2>
              {/* Descripción */}
              <p className="carousel-description">
                Mantenimiento | Restauraciones | Diagnosticos
              </p>

              {/* Sección de redes sociales */}
              <div className="social-media-icons">
                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GoogleOutlined className="custom-icon" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramOutlined className="custom-icon" />
                </a>
                <a
                  href="https://www.whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppOutlined className="custom-icon" />
                </a>
              </div>
              <div className="marcas-track">
                {[...Array(2)].map((_, index) => (
                  <div key={index} className="marcas-slide">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/taller-dany.appspot.com/o/marcas%2Fmarca1.png?alt=media&token=b41466e1-69fc-47be-bafe-599d82ab8213"
                      alt="Marca 1"
                    />
                    /
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/taller-dany.appspot.com/o/marcas%2Fmarca2.png?alt=media&token=28b5f6e8-acb4-4971-bbe6-eee1aa3bf41b"
                      alt="Marca 2"
                    />
                    /
                    <img src="/marca3.png" alt="Marca 3" />/
                    <img src="/marca4.png" alt="Marca 4" />/
                    <img src="/marca5.png" alt="Marca 5" />/
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Sección del banner para móvil */}
      <div className="mobile-banner">
        <Carousel className="custom-carousel">
          <div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/taller-dany.appspot.com/o/banners%2FbannerMobil.png?alt=media&token=08809d2f-53a2-4037-ab29-49e2f07b96d0"
              className="carousel-content"
              alt="Mobile Banner"
            />
            <div className="carousel-text">
              {/* Título principal */}
              <h1 className="carousel-title">TALLER DE MOTOS</h1>
              {/* Subtítulo */}
              <h2 className="carousel-subtitle">DANY</h2>
              {/* Descripción */}
              <p className="carousel-description">
                ◎Mantenimiento ◎Restauraciones ◎Enderezamiento
              </p>
              {/* Sección de redes sociales */}
              <div className="social-media-icons">
                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GoogleOutlined className="custom-icon" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramOutlined className="custom-icon" />
                </a>
                <a
                  href="https://www.whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppOutlined className="custom-icon" />
                </a>
              </div>
              <div className="marcas-track">
                {[...Array(2)].map((_, index) => (
                  <div key={index} className="marcas-slide">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/taller-dany.appspot.com/o/marcas%2Fmarca1.png?alt=media&token=b41466e1-69fc-47be-bafe-599d82ab8213"
                      alt="Marca 1"
                    />
                    /
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/taller-dany.appspot.com/o/marcas%2Fmarca2.png?alt=media&token=28b5f6e8-acb4-4971-bbe6-eee1aa3bf41b"
                      alt="Marca 2"
                    />
                    /
                    <img src="/marca3.png" alt="Marca 3" />/
                    <img src="/marca4.png" alt="Marca 4" />/
                    <img src="/marca5.png" alt="Marca 5" />/
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default CarouselComponent;

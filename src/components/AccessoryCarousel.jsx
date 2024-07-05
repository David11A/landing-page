import  { useState } from 'react';
import { Modal, InputNumber } from 'antd';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './AccessoryCarousel.css';

function AccessoryCarousel() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [quantity, setQuantity] = useState(1);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const images = [
    { src: '/ac.png', title: 'Guantes', description: 'Descripción del accesorio 1' },
    { src: '/accesorios2.png', title: 'Casco', description: 'Descripción del accesorio 2' },
    { src: '/accesorios3.png', title: 'Casco', description: 'Descripción del accesorio 3' },
    { src: '/accesorios4.png', title: 'chaqueta', description: 'Descripción del accesorio 4' },
    { src: '/accesorios5.png', title: 'Rodilleras', description: 'Descripción del accesorio 5' },
    { src: '/accesorios6.png', title: 'Focos', description: 'Descripción del accesorio 6' },
    { src: '/accesorios7.png', title: 'Base mobil', description: 'Descripción del accesorio 7' },
  ];

  const showModal = (image) => {
    setSelectedImage(image);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setQuantity(1);
  };

  return (
    <div className="outer-container">
      <div className="inner-container">
        <h1>DANIEL / Accesorios →</h1>
        <div className="desktop-carousel">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="slide-item">
                <div className="image-container">
                  <img src={image.src} alt={`Slide ${index}`} className="image" style={{ borderRadius: "25px" }} />
                  <div className="overlay">
                    <button className="ver-mas-button" onClick={() => showModal(image)}><h2>Ver más</h2></button>
                  </div>
                </div>
                <div className="image-title">{image.title}</div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="mobile-carousel">
          <div className="mobile-carousel-wrapper">
            {images.map((image, index) => (
              <div key={index} className="slide-item">
                <div className="image-container">
                  <img src={image.src} alt={`Slide ${index}`} className="image" style={{ borderRadius: "25px" }} />
                  <div className="overlay">
                    <button className="ver-mas-button" onClick={() => showModal(image)}><h2>Ver más</h2></button>
                  </div>
                </div>
                <div className="image-title">{image.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal
        title={selectedImage.title}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        className="accessory-modal"
        centered
      >
        <div className="modal-content">
          <div className="modal-gallery">
            <img src={selectedImage.src} alt={selectedImage.title} className="main-image" />
          </div>
          <div className="modal-info">
            <p>{selectedImage.description}</p>
            <div className="quantity-container">
              <h3>Cantidad:</h3>
              <InputNumber min={1} max={100} value={quantity} onChange={setQuantity} />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default AccessoryCarousel;

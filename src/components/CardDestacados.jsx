import  { useState } from 'react';
import { Row, Col, Button, Card, Space, List, Modal, InputNumber } from 'antd';
import './CardDestacados.css';

const { Meta } = Card;

const CardDestacados = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const cards = [
    {
      title: 'Filtro de Aire Deportivo',
      description: 'Filtro de aire de alto rendimiento para motocicletas.',
      price: 'L 700.00',
      specs: 'Especificaciones: Compatible con modelos universales.',
      image: '/destacado2.jpg',
    },
    {
      title: 'Kit de Frenos',
      description: 'Kit completo de frenos para motocicletas.',
      price: 'L 2100.00',
      specs: 'Especificaciones: Discos y pastillas de freno.',
      image: '/destacado3.jpg',
    },
  ];

  const showModal = (card) => {
    setSelectedCard(card);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedCard(null);
    setQuantity(1);
  };

  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  return (
    <div className="cards-wrapper" style={{ marginTop: '0px', paddingBottom: '0px' }}>
      <Row gutter={[16, 16]} justify="center">
        {/* Vista de escritorio */}
        <Col xs={24} md={12}>
          <Card
            className="large-card"
            style={{
              marginTop: '0px',
              borderRadius: '8px',
              overflow: 'hidden',
              position: 'relative',
              backgroundImage: 'url(/destacado1.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '368px',
              border: 'none',
            }}
          >
            <div className="large-card-content">
              <h2 style={{ color: 'white' }}>Producto del Mes</h2>
              <p style={{ color: 'white' }}>
                Aceite Motor Premium - Mantén tu motor en las mejores condiciones con nuestro aceite de alta calidad.
              </p>
              <p style={{ color: 'white', fontWeight: 'bold' }}>L 1200.00</p>
              <Button type="primary" style={{ marginTop: '10px', backgroundColor: "#cc3d58" }} onClick={() => showModal({
                title: 'Producto del Mes',
                description: 'Aceite Motor Premium - Mantén tu motor en las mejores condiciones con nuestro aceite de alta calidad.',
                price: 'L 1200.00',
                specs: 'Especificaciones: Aceite de alta calidad para motores.',
                image: '/destacado1.jpg',
              })}>
                Ver más
              </Button>
            </div>
          </Card>
        </Col>

        <Col xs={{ span: 0 }} md={{ span: 12 }}>
          <Space direction="vertical" style={{ marginBottom: '20px' }} size="middle">
          </Space>
          <List
            dataSource={cards}
            renderItem={(item) => (
              <List.Item style={{ backgroundColor: '#2b2e35', marginTop: '8px', borderRadius: '8px' }}>
                <List.Item.Meta
                  avatar={<img src={item.image} alt="item" style={{ width: '150px', height: '150px', borderRadius: '8px' }} />}
                  title={<a href="#" style={{ color: 'white' }}>{item.title}</a>}
                  description={
                    <div style={{ color: 'white' }}>
                      <p style={{ fontWeight: 'bold', marginTop: '10px' }}>{item.price}</p>
                      <p>{item.specs}</p>
                      <Button style={{ backgroundColor: "#ff4655" }} type="primary" onClick={() => showModal(item)}>Ver más</Button>
                    </div>
                  }
                />
              </List.Item>
            )}
          />
        </Col>

        {/* Vista móvil */}
        <Col xs={{ span: 24 }} md={{ span: 0 }}>
          <List
            dataSource={cards}
            renderItem={(item) => (
              <List.Item style={{ backgroundColor: '#2b2e35', marginTop: '8px', borderRadius: '8px' }}>
                <List.Item.Meta
                  avatar={<img src={item.image} alt="item" style={{ width: '150px', height: '150px', borderRadius: '8px' }} />}
                  title={<a href="#" style={{ color: 'white' }}>{item.title}</a>}
                  description={
                    <div style={{ color: 'white' }}>
                      <p style={{ fontWeight: 'bold', marginTop: '10px' }}>{item.price}</p>
                      <p>{item.specs}</p>
                      <Button style={{ backgroundColor: "#ff4655" }} type="primary" onClick={() => showModal(item)}>Ver más</Button>
                    </div>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>

      {selectedCard && (
        <Modal
          className="card-destacados-modal"
          visible={isModalVisible}
          title={selectedCard.title}
          onCancel={handleCancel}
          footer={null}
          centered
        >
          <div className="modal-content">
            <div className="modal-gallery">
              <img src={selectedCard.image} alt={selectedCard.title} className="main-image" />
              <div className="thumbnail-gallery">
                <img src={selectedCard.image} alt="thumbnail" className="thumbnail-image" onClick={() => {}} />
                <img src={selectedCard.image} alt="thumbnail" className="thumbnail-image" onClick={() => {}} />
                <img src={selectedCard.image} alt="thumbnail" className="thumbnail-image" onClick={() => {}} />
              </div>
            </div>
            <div className="modal-info">
              <p>{selectedCard.description}</p>
              <p>{selectedCard.specs}</p>
              <p className="modal-price">Precio: {selectedCard.price}</p>
           
              <div className="quantity-container">
               
                <InputNumber min={1} value={quantity} onChange={handleQuantityChange} />
                <Button onClick={() => handleQuantityChange(Math.max(1, quantity - 1))}>-</Button>
                <Button onClick={() => handleQuantityChange(quantity + 1)}>+</Button>
              </div>
              <p className="modal-total">Total: {`L ${(quantity * parseFloat(selectedCard.price.replace('L ', '').replace(',', ''))).toFixed(2)}`}</p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default CardDestacados;


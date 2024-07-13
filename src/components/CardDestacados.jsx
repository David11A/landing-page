import { useState } from 'react';
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
      image: '/destacado2.png',
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
    <>
      <div className='container-Destacado'>
        <div style={{
          position: 'relative',
          marginTop: "85px",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>

          <div style={{
            position: 'relative',
            marginTop: "111px",
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
              PRODUC<span style={{ color: '#ff3333' }}>TOS</span>
            </h2>
          </div>

        </div>

        <div style={{ marginTop: "50px" }}>
        <div style={{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginBottom: '20px',
  position: 'relative',
  width: '100%'
}}>
  <h2 style={{
    margin: "0px",
    paddingLeft: '20px',
    color: "white",
    border: "0px",
    fontSize: "28px",
    fontWeight: "700",
    fontFamily: "'Teko', sans-serif",
    textTransform: "uppercase",
    letterSpacing: "2px",
    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
  }}>
    Los mas vendi<span style={{ color: '#ff0000' }}>dos</span>
  </h2>
  <div style={{
    position: 'absolute',
    bottom: '-10px',
    left: '20px',
    width: '200px',
    height: '2px',
    background: `
      linear-gradient(to right, 
        red 0%, red 80%, 
        transparent 80%, transparent 90%,
        red 90%, red 100%)
    `,
  }}></div>
</div>
</div>
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
                  backgroundImage: 'url(/destacado1.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '368px',
                  border: 'none',
                }}
              >
                <div className="large-card-content">
                  <h2 style={{
                    color: "white",
                    fontFamily: "'Teko', sans-serif",
                    fontSize: "48px",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  }}>Producto del Mes</h2>
                  <p style={{
                    color: "#F4F4F4",
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: "16px",
                    lineHeight: "1.6",
                  }}>
                    Aceite Motor Premium - Mantén tu motor en las mejores condiciones con nuestro aceite de alta calidad.
                  </p>
                  <p style={{
                    color: "white",
                    fontFamily: "'Teko', sans-serif",
                    fontSize: "24px",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  }}>L 1200.00</p>
                  <Button 
                    type="primary" 
                    style={{
                      marginTop: '10px', 
                      backgroundColor: "#cc3d58",
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "16px",
                    }} 
                    onClick={() => showModal({
                      title: 'Producto del Mes',
                      description: 'Aceite Motor Premium - Mantén tu motor en las mejores condiciones con nuestro aceite de alta calidad.',
                      price: 'L 1200.00',
                      specs: 'Especificaciones: Aceite de alta calidad para motores.',
                      image: '/destacado1.jpg',
                    })}
                  >
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
                  <List.Item style={{ backgroundColor: '#2c2c2c', marginTop: '8px', borderRadius: '8px' }}>
                    <List.Item.Meta
                      avatar={<img src={item.image} alt="item" style={{ width: '150px', height: '150px', borderRadius: '8px' }} />}
                      title={<a href="#" style={{
                        color: "white",
                        fontFamily: "'Teko', sans-serif",
                        fontSize: "24px",
                        fontWeight: "700",
                        textTransform: "uppercase",
                        letterSpacing: "2px",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      }}>{item.title}</a>}
                      description={
                        <div>
                          <p style={{
                            color: "white",
                            fontFamily: "'Teko', sans-serif",
                            fontSize: "20px",
                            fontWeight: "700",
                            textTransform: "uppercase",
                            letterSpacing: "2px",
                            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                            marginTop: '10px'
                          }}>{item.price}</p>
                          <p style={{
                            color: "#F4F4F4",
                            fontFamily: "'Roboto', sans-serif",
                            fontSize: "16px",
                            lineHeight: "1.6",
                          }}>{item.specs}</p>
                          <Button 
                            style={{
                              backgroundColor: "#ff4655",
                              fontFamily: "'Roboto', sans-serif",
                              fontSize: "16px",
                            }} 
                            type="primary" 
                            onClick={() => showModal(item)}
                          >
                            Ver más
                          </Button>
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
                  <List.Item style={{ backgroundColor: '#2c2c2c', marginTop: '8px', borderRadius: '8px' }}>
                    <List.Item.Meta
                      avatar={<img src={item.image} alt="item" style={{ width: '150px', height: '150px', borderRadius: '8px' }} />}
                      title={<a href="#" style={{
                        color: "white",
                        fontFamily: "'Teko', sans-serif",
                        fontSize: "24px",
                        fontWeight: "700",
                        textTransform: "uppercase",
                        letterSpacing: "2px",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                      }}>{item.title}</a>}
                      description={
                        <div>
                          <p style={{
                            color: "white",
                            fontFamily: "'Teko', sans-serif",
                            fontSize: "20px",
                            fontWeight: "700",
                            textTransform: "uppercase",
                            letterSpacing: "2px",
                            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                            marginTop: '10px'
                          }}>{item.price}</p>
                          <p style={{
                            color: "#F4F4F4",
                            fontFamily: "'Roboto', sans-serif",
                            fontSize: "16px",
                            lineHeight: "1.6",
                          }}>{item.specs}</p>
                          <Button 
                            style={{
                              backgroundColor: "#ff4655",
                              fontFamily: "'Roboto', sans-serif",
                              fontSize: "16px",
                            }} 
                            type="primary" 
                            onClick={() => showModal(item)}
                          >
                            Ver más
                          </Button>
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
                    <img src={selectedCard.image} alt="thumbnail" className="thumbnail-image" onClick={() => { }} />
                    <img src={selectedCard.image} alt="thumbnail" className="thumbnail-image" onClick={() => { }} />
                    <img src={selectedCard.image} alt="thumbnail" className="thumbnail-image" onClick={() => { }} />
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
      </div>
    </>
  );
};

export default CardDestacados;


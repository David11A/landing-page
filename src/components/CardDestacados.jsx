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
      <div className="contenedor-titulo" style={{ marginBottom: "60px",paddingTop:"110px"}}>
        <div className="contenedor-flechas">
          <div className="flecha-izquierda">&#187;</div>
          <div className="flecha-derecha">&#187;</div>
          <h2 className="titulo-principal">
            Produ<span className="texto-destacado">ctos</span>
          </h2>
        </div>
      </div>

        
      </div>
    </>
  );
};

export default CardDestacados;


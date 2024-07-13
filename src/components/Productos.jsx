import React, { useState } from 'react';
import { Carousel, Button } from 'antd';
import { AppstoreOutlined, UnorderedListOutlined } from '@ant-design/icons';
import './Productos.css';
import CardDestacados from './CardDestacados';

function Productos() {
  const [viewMode, setViewMode] = useState('carousel');

  const products = [
    {
      id: 1,
      image: '../producto.png',
      title: 'Aceite para motor',
      author: 'Taller MotoCare',
      viewers: '1000 unidades disponibles',
      likes: '500 recomendaciones',
      tags: ['Lubricante', 'Mantenimiento'],
    },
    {
      id: 2,
      image: '../producto.png',
      title: 'Reemplazo de neumáticos',
      author: 'Taller MotoCare',
      viewers: '800 unidades disponibles',
      likes: '450 recomendaciones',
      tags: ['Reparación', 'Servicio'],
    },
    {
      id: 3,
      image: '../producto.png',
      title: 'Inspección de frenos',
      author: 'Taller MotoCare',
      viewers: '600 unidades disponibles',
      likes: '400 recomendaciones',
      tags: ['Inspección', 'Seguridad'],
    },
    {
      id: 4,
      image: '../producto.png',
      title: 'Ajuste del motor',
      author: 'Taller MotoCare',
      viewers: '500 unidades disponibles',
      likes: '350 recomendaciones',
      tags: ['Rendimiento', 'Ajuste'],
    },
    {
      id: 5,
      image: '../producto.png',
      title: 'Lubricación de cadena',
      author: 'Taller MotoCare',
      viewers: '700 unidades disponibles',
      likes: '300 recomendaciones',
      tags: ['Lubricante', 'Cadena'],
    },
  ];

  return (
    <div>
      {/* Versión de escritorio */}

      <div className="productos-container1 desktop" >

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
    Todos los prod<span style={{ color: '#ff0000' }}>uctos</span>
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
        <div className="productos-cards1">
          {products.map((product) => (
            <div className="card1" key={product.id}>
              <div className="card-image1">
                <img src={product.image} alt={product.title} />
                <div className="play-button1"></div>
              </div>
              <div className="card-content1">
                <h3>{product.title}</h3>
                <p>{product.author}</p>
                <p>{product.viewers}</p>
                <p>{product.likes}</p>
                <div className="tags1">
                  {product.tags.map((tag, index) => (
                    <span key={index} className="tag1">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Versión móvil */}
      <div className="productos-container1 mobile">
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
    paddingLeft: '0px',
    color: "white",
    border: "0px",
    fontSize: "28px",
    fontWeight: "700",
    fontFamily: "'Teko', sans-serif",
    textTransform: "uppercase",
    letterSpacing: "2px",
    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
  }}>
    Todos los prod<span style={{ color: '#ff0000' }}>uctos</span>
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
        <div className="view-buttons">
          <Button
            type="primary"
            icon={<AppstoreOutlined />}
            onClick={() => setViewMode('carousel')}
          />
          <Button
            type="primary"
            icon={<UnorderedListOutlined />}
            onClick={() => setViewMode('list')}
          />
        </div>
        {viewMode === 'carousel' ? (
          <Carousel className="productos-cards1">
            {products.map((product) => (
              <div className="card1" key={product.id}>
                <div className="card-image1">
                  <img src={product.image} alt={product.title} />
                  <div className="play-button1"></div>
                </div>
                <div className="card-content1">
                  <h3>{product.title}</h3>
                  <p>{product.author}</p>
                  <p>{product.viewers}</p>
                  <p>{product.likes}</p>
                  <div className="tags1">
                    {product.tags.map((tag, index) => (
                      <span key={index} className="tag1">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        ) : (
          <div className="productos-cards1">
            {products.map((product) => (
              <div className="card1" key={product.id}>
                <div className="card-image1">
                  <img src={product.image} alt={product.title} />
                  <div className="play-button1"></div>
                </div>
                <div className="card-content1">
                  <h3>{product.title}</h3>
                  <p>{product.author}</p>
                  <p>{product.viewers}</p>
                  <p>{product.likes}</p>
                  <div className="tags1">
                    {product.tags.map((tag, index) => (
                      <span key={index} className="tag1">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Productos;

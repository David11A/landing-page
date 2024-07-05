
import { Button } from 'antd';
import './Productos.css';

function Productos() {
  const products = [
    { title: 'Honda CBR 250R', description: 'moto', image: '/producto1.png' },
    { title: 'Yamaha GT', description: 'moto', image: '/producto1.png' },
    { title: 'Yamaha GT', description: 'moto', image: '/producto1.png' },
    { title: 'Yamaha GT', description: 'moto', image: '/producto1.png' },
    { title: 'Yamaha GT', description: 'moto', image: '/producto1.png' },
    { title: 'Yamaha GT', description: 'moto', image: '/producto1.png' },
    { title: 'Yamaha GT', description: 'moto', image: '/producto1.png' },
    { title: 'Yamaha GT', description: 'moto', image: '/producto1.png' },
    { title: 'Yamaha GT', description: 'moto', image: '/producto1.png' },
    { title: 'Yamaha GT', description: 'moto', image: '/producto1.png' },
    { title: 'Yamaha GT', description: 'moto', image: '/producto1.png' },
    { title: 'Yamaha GT', description: 'moto', image: '/producto1.png' }
  ];

  return (
    <div className="catalog-wrapper">
      <div className="catalog-container">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <div className="image-container">
              <img style={{borderRadius:"6px"}} src={product.image} alt={product.title} className="product-image" />
              <div className="overlay">
                <button className="ver-mas-button">Ver más</button>
              </div>
              <div className="product-info">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button className="view-all-button" type="primary">Ver todo el catálogo</Button>

      <div className="mobile-slider">
        <div className="slider-container">
          {products.map((product, index) => (
            <div key={index} className="slide-item">
              <div className="image-container">
                <img src={product.image} alt={product.title} className="product-image" />
                <div className="overlay">
                  <button className="ver-mas-button">Ver más</button>
                </div>
                <div className="product-info">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Productos;

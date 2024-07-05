import { useState } from 'react';
import {  Layout, Typography, Card, Row, Col } from 'antd';
import './Sider1.css';
import CarouselComponent from './CarouselComponent';
import CardServicios from './CardServicios';
import CardDestacados from './CardDestacados';
import AccessoryCarousel from './AccessoryCarousel';
import Productos from './Productos';

import { Tabs } from 'antd';
import Promocion1 from './Promocion1';
import ContactForm from './ContactForm';
import Menu1 from './Menu1';
import QuienesSomos from './QuienesSomos';

// Asegúrate de importar el componente Productos
const onChange = (key) => {
  console.log(key);
};

const items = [
  {
    key: '1',
    label: 'Motos',
    children: <Productos />, // Integramos el componente Productos como contenido del Tab 1
  },
  {
    key: '2',
    label: 'Llantas',
    children: 'Content of Tab Pane 2', // Contenido temporal para el Tab 2
  },
  {
    key: '3',
    label: 'Escapes',
    children: 'Content of Tab Pane 3', // Contenido temporal para el Tab 3
  },
];


const { Content } = Layout;
const { Text } = Typography;

const Sider1 = () => {
  const [collapsed, setCollapsed] = useState(false);



  const { Title, Paragraph } = Typography;

  return (
    <Layout>
      <Layout style={{ background: '#212429' }}>

        <CarouselComponent />
        <Content  style={{ color:"white" }}
           >
            
          <CardServicios />
          <div>
            <h2 style={{ paddingLeft: "13px", paddingTop: "14px", marginBottom: '-1px' }}>DANIEL / Destacados  →  </h2>
          </div>
          <div style={{ marginBottom: '0px', paddingBottom: '0px', border: "0px" }}>
              <CardDestacados /></div>
          <div style={{ padding: '0px', marginTop: "-51px", color: "white" }}>
            <AccessoryCarousel />
            <div>
              <h2 style={{  marginLeft:"10px" , paddingBottom: '0px' }}> DANIEL /Productos →</h2>
            </div>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            <Promocion1 />
          </div>

          <QuienesSomos />
         

        </Content>
        <div >
          <ContactForm />
          
        </div>
        
      </Layout>
    </Layout>
  );
};

export default Sider1;

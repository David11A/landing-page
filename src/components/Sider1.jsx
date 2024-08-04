import { useState } from 'react';
import { Layout, Typography, Card, Row, Col } from 'antd';
import { Tabs as AntTabs } from 'antd';
import './Sider1.css';
import CarouselComponent from './CarouselComponent';
import CardServicios from './CardServicios';
import CardDestacados from './CardDestacados';
import AccessoryCarousel from './AccessoryCarousel';
import Productos from './Productos';
import Promocion1 from './Promocion1';
import ContactForm from './ContactForm';
import Menu1 from './Menu1';
import QuienesSomos from './QuienesSomos';

const { Content } = Layout;
const { Text, Title, Paragraph } = Typography;

const PestanasPersonalizadas = ({ items, ...props }) => (
  <AntTabs 
    {...props}
    items={items}
    className="pestanas-personalizadas"
  />
);

const onChange = (key) => {
  console.log(key);
};

const items = [
  {
    key: '1',
    label: 'Todos',
    children: <Productos />,
  },
  {
    key: '2',
    label: 'Llantas',
    children: 'Contenido de la pestaña 2',
  },
  {
    key: '3',
    label: 'Escapes',
    children: 'Contenido de la pestaña 3',
  },
];

const Sider1 = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Layout className="diseno-fondo">
        <CarouselComponent />
        <Content className="contenido-principal">
        <QuienesSomos />
         <CardServicios /> 
       
          <div>

           

            <Productos />       
            <div className="contenedor-sin-margen">
            </div>      
          </div>
        </Content>
        <div>
          <ContactForm />
        </div>
      </Layout>
    </Layout>
  );
};

export default Sider1;
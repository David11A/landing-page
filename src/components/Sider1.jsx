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

const CustomTabs = ({ items, ...props }) => (
  <AntTabs 
    {...props}
    items={items}
    className="custom-tabs"
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
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Escapes',
    children: 'Content of Tab Pane 3',
  },
];

const Sider1 = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Layout style={{ background: '#212429' }}>
        <CarouselComponent />
        <Content style={{ color: "white" }} >
          <CardServicios />  
          <div>
            <CardDestacados />
            <CustomTabs  defaultActiveKey="1" items={items} onChange={onChange} />       
            <div style={{ marginBottom: '0px', paddingBottom: '0px', border: "0px" }}>
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
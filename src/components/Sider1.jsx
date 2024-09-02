import { Layout } from 'antd';
import './Sider1.css';
import CarouselComponent from './CarouselComponent';
import CardServicios from './CardServicios';
import Productos from './Productos';
import ContactForm from './ContactForm';
import QuienesSomos from './QuienesSomos';

const { Content } = Layout;
const Sider1 = () => {
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
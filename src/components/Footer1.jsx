import { Col, Layout, Row, Space, Typography } from 'antd';
import { createGlobalStyle } from 'styled-components';

const { Footer } = Layout;
const { Title, Text, Link } = Typography;

// Importar fuente personalizada
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
`;

export default function Footer1() {
  return (
    <div>
      <GlobalStyle />
      <Footer style={{ 
        backgroundColor: '#1f1f1f', 
        color: 'white', 
        padding: '40px 50px',
        fontFamily: "'Roboto', sans-serif"
      }}>
        <Row gutter={[16, 32]}>
          <Col xs={12} sm={12} md={6}>
            <Title level={4} style={{ color: 'white', fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}>Sobre Nosotros</Title>
            <Text style={{ color: 'rgba(255, 255, 255, 0.65)', fontFamily: "'Roboto', sans-serif", fontWeight: 300 }}>
              Somos un taller de motocicletas dedicado a ofrecer los mejores servicios de mantenimiento y reparación.
            </Text>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <Title level={4} style={{ color: 'white', fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}>Enlaces Rápidos</Title>
            <Space direction="vertical">
              <Link href="/servicios" style={{ color: 'rgba(255, 255, 255, 0.65)', fontFamily: "'Roboto', sans-serif", fontWeight: 300 }}>Servicios</Link>
              <Link href="/nosotros" style={{ color: 'rgba(255, 255, 255, 0.65)', fontFamily: "'Roboto', sans-serif", fontWeight: 300 }}>Quienes Somos</Link>
              <Link href="/contacto" style={{ color: 'rgba(255, 255, 255, 0.65)', fontFamily: "'Roboto', sans-serif", fontWeight: 300 }}>Contacto</Link>
            </Space>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <Title level={4} style={{ color: 'white', fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}>Contacto</Title>
            <Space direction="vertical">
              <Text style={{ color: 'rgba(255, 255, 255, 0.65)', fontFamily: "'Roboto', sans-serif", fontWeight: 300 }}>Teléfono: +504 0000 0000</Text>
              <Text style={{ color: 'rgba(255, 255, 255, 0.65)', fontFamily: "'Roboto', sans-serif", fontWeight: 300 }}>Email: correo@gmail.com</Text>
              <Text style={{ color: 'rgba(255, 255, 255, 0.65)', fontFamily: "'Roboto', sans-serif", fontWeight: 300 }}>Dirección: Calle Falsa 123, Ciudad, País</Text>
            </Space>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <Title level={4} style={{ color: 'white', fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}>Síguenos</Title>
            <Space direction="vertical">
              <Link href="https://www.instagram.com" style={{ color: 'rgba(255, 255, 255, 0.65)', fontFamily: "'Roboto', sans-serif", fontWeight: 300 }}>WhatsApp</Link>
              <Link href="https://www.twitter.com" style={{ color: 'rgba(255, 255, 255, 0.65)', fontFamily: "'Roboto', sans-serif", fontWeight: 300 }}>Instagram</Link>
              <Link href="https://www.youtube.com" style={{ color: 'rgba(255, 255, 255, 0.65)', fontFamily: "'Roboto', sans-serif", fontWeight: 300 }}>Google</Link>
            </Space>
          </Col>
        </Row>
        <Row justify="center" style={{ marginTop: '20px' }}>
          <Text style={{ color: 'rgba(255, 255, 255, 0.65)', fontFamily: "'Roboto', sans-serif", fontWeight: 300 }}>
            &copy; {new Date().getFullYear()} Taller de Motos Dany. Todos los derechos reservados.
          </Text>
        </Row>
      </Footer>
    </div>
  )
}
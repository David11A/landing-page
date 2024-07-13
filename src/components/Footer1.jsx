import { Col, Layout, Row, Space, Typography } from 'antd';
const { Footer } = Layout;
const { Title, Text, Link } = Typography;

export default function Footer1() {
  return (
    <div>
      <Footer style={{ backgroundColor: '#1f1f1f', color: 'white', padding: '40px 50px' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={6}>
            <Title level={4} style={{ color: 'white' }}>Sobre Nosotros</Title>
            <Text style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
              Somos un taller de motocicletas dedicado a ofrecer los mejores servicios de mantenimiento y reparación.
            </Text>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Title level={4} style={{ color: 'white' }}>Enlaces Rápidos</Title>
            <Space direction="vertical">
              <Link href="/servicios" style={{ color: 'rgba(255, 255, 255, 0.65)' }}>Servicios</Link>
              <Link href="/nosotros" style={{ color: 'rgba(255, 255, 255, 0.65)' }}>Quienes Somos</Link>
              <Link href="/contacto" style={{ color: 'rgba(255, 255, 255, 0.65)' }}>Contacto</Link>
            </Space>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Title level={4} style={{ color: 'white' }}>Contacto</Title>
            <Space direction="vertical">
              <Text style={{ color: 'rgba(255, 255, 255, 0.65)' }}>Teléfono: +504 0000 0000</Text>
              <Text style={{ color: 'rgba(255, 255, 255, 0.65)' }}>Email: correo@gmail.com</Text>
              <Text style={{ color: 'rgba(255, 255, 255, 0.65)' }}>Dirección: Calle Falsa 123, Ciudad, País</Text>
            </Space>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Title level={4} style={{ color: 'white' }}>Síguenos</Title>
            <Space direction="vertical">
              <Link href="https://www.instagram.com" style={{ color: 'rgba(255, 255, 255, 0.65)' }}>whatsapp</Link>
              <Link href="https://www.twitter.com" style={{ color: 'rgba(255, 255, 255, 0.65)' }}>Instagram</Link>
              <Link href="https://www.youtube.com" style={{ color: 'rgba(255, 255, 255, 0.65)' }}>Google</Link>
            </Space>
          </Col>
        </Row>
        <Row justify="center" style={{ marginTop: '20px' }}>
          <Text style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
            &copy; {new Date().getFullYear()} Taller de Motos Dany. Todos los derechos reservados.
          </Text>
        </Row>
      </Footer>
    </div>
  )
}

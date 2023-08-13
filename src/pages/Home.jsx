import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import foto from '../assets/foto.jpeg';
import Header from "../components/Header";
import '../styles/Header.css';

function Home() {
  return (
    <div>
      <Header/>
      <h1>Igor Watanabe</h1>
      <p>Desenvolvedor Web</p>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src={foto} roundedCircle />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
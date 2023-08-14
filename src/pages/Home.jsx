import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import foto from '../assets/foto2.jpeg';
import Header from "../components/Header";
import '../styles/Home.css';

function Home() {
  return (
    <div>
      <Header/>
      <h1>Igor Watanabe</h1>
      <p className='profissao'>Desenvolvedor Web</p>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image className='picture' src={foto} roundedCircle />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
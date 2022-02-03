import Loading from './Loading';
import Nav from './Nav';
import Header from './Header';
import Countries from './Countries';
import { Container, Row } from 'react-bootstrap';

const Home = () => {
  return (
    <Container fluid>
      <Nav />
      <Header />
      <Row>
        <Countries />
      </Row>
    </Container>
  );
};

export default Home;

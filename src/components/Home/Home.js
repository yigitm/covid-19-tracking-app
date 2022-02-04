import { Container, Row } from 'react-bootstrap';
import Loading from './Loading';
import Nav from './Nav';
import Header from './Header';
import Countries from './Countries';

const Home = () => (
  <Container fluid className="bg-red-bold">
    <Loading />
    <Nav />
    <Header />
    <Row>
      <Countries />
    </Row>
  </Container>
);

export default Home;

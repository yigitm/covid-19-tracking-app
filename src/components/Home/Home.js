import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import Loading from './Loading';
import Nav from './Nav';
import Header from './Header';
import Countries from './Countries';
import Message from './Message';
import { fetchData } from '../../redux/countries/countries';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData);
  }, []);
  return (
    <Container fluid className="bg-red-bold">
      <Loading />
      <Nav />
      <Header />
      <Row xs={2} md={3} lg={4}>
        <Message />
        <Countries />
      </Row>
    </Container>
  );
};

export default Home;

import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Loading from '../components/Home/Loading';
import Nav from '../components/Home/Nav';
import Header from '../components/Home/Header';
import Countries from '../components/Home/Countries';

describe('Test Home render', () => {
  test('Test Home', () => {
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

    expect(Home()).toMatchSnapshot();
  });
});

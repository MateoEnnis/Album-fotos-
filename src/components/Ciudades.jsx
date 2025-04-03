import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import paris from '../assets/paris.jpg';
import lyon from '../assets/lyon.jpg';
import dijon from '../assets/dijon.jpg';
import bonifacio from '../assets/bonifacio.jpg';

const Ciudades = () => {
  return (
    <section className="ciudades-section">
      <Container>
        <h3 className="text-center ciudades-titulo">Ciudades que visitamos ✈️</h3>
        <Row className="mt-4">
          <Col md={6} className="mb-4">
            <Card className="ciudad-card">
              <Card.Img variant="top" src={paris} className="ciudad-img" />
              <Card.Body>
                <Card.Title className="text-center">París</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-4">
            <Card className="ciudad-card">
              <Card.Img variant="top" src={lyon} className="ciudad-img" />
              <Card.Body>
                <Card.Title className="text-center">Lyon</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-4">
            <Card className="ciudad-card">
              <Card.Img variant="top" src={dijon} className="ciudad-img" />
              <Card.Body>
                <Card.Title className="text-center">Dijon</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-4">
            <Card className="ciudad-card">
              <Card.Img variant="top" src={bonifacio} className="ciudad-img" />
              <Card.Body>
                <Card.Title className="text-center">Bonifacio</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Ciudades;

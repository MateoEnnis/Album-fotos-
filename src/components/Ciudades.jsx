import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import paris from '../assets/paris.jpg';
import lyon from '../assets/lyon.jpg';
import dijon from '../assets/dijon.jpg';
import bonifacio from '../assets/bonifacio.jpg';

const Ciudades = () => {
  return (
    <section className="ciudades-section fade-in">
      <Container>
        <h3 className="text-center ciudades-titulo">Ciudades que visitamos ✈️</h3>
        <Row className="mt-4">
          {[{ nombre: "París", img: paris }, { nombre: "Lyon", img: lyon }, { nombre: "Dijon", img: dijon }, { nombre: "Bonifacio", img: bonifacio }]
            .map((ciudad, i) => (
              <Col md={6} className="mb-4" key={i}>
                <Card className="ciudad-card fade-in">
                  <Card.Img variant="top" src={ciudad.img} className="ciudad-img" />
                  <Card.Body>
                    <Card.Title className="text-center">{ciudad.nombre}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default Ciudades;

import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import destacada01 from '../assets/destacada01.jpg';
import destacada02 from '../assets/destacada02.jpg';
import destacada03 from '../assets/destacada03.jpg';

const GaleriaDestacada = () => {
  return (
    <section className="galeria-section fade-in">
      <Container>
        <h3 className="text-center galeria-titulo">Fotos destacadas del último viaje 📍</h3>
        <Row className="mt-4">
          {[destacada01, destacada02, destacada03].map((img, i) => (
            <Col md={4} className="mb-3" key={i}>
              <Image src={img} fluid className="galeria-img" />
            </Col>
          ))}
        </Row>

        <div className="text-center mt-4">
          <Button className="btn-ver-mas" href="/todas">
            Ver más viajes
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default GaleriaDestacada;

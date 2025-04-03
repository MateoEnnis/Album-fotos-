import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import fotoCandeMateo from '../assets/cande-mateo.jpg';

const Presentacion = () => {
  return (
    <section className="presentacion-section fade-in">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center">
            <Image
              src={fotoCandeMateo}
              roundedCircle
              alt="Cande y Mateo"
              className="presentacion-img"
            />
          </Col>
          <Col md={8}>
            <div className="presentacion-text">
              <h2>¡Hola! Somos Cande y Mateo ✨</h2>
              <p>
                Amantes de los viajes, los paisajes, los sabores del mundo y los recuerdos
                inolvidables. Este álbum es nuestro lugar especial para guardar cada experiencia vivida
                juntos 💛
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Presentacion;

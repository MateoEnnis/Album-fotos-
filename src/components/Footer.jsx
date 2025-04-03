import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container className="text-center">
        <p className="footer-text">© 2025 - Cande & Mateo | Con amor desde el mundo 🌍</p>
        <div className="footer-links">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> |{" "}
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a> |{" "}
          <a href="#contacto">Contacto</a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

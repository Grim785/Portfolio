import React from 'react';
import Header from './Header'; // import Header component
import Footer from './Footer'; // import Footer component
import { Container } from 'react-bootstrap';

const DefaultLayout = ({ children }) => (
  <>
    <Header />
    <Container className="px-2">{children}</Container>
    <Footer />
  </>
);

export default DefaultLayout;

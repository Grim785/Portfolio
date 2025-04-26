import Header from '../components/Header';
import Home from '../components/pages/Home';
import About from '../components/pages/About';
import Projects from '../components/pages/Projects';
import Contact from '../components/pages/Contact';
import Footer from '../components/Footer';

import Container from 'react-bootstrap/Container';
import {Routes, Route } from "react-router-dom";

function App() {
  return (

    <div className="App d-flex justify-content-center align-items-center flex-column">
      <Header/>
      <Container className='px-2'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
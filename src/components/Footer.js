import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { FaFacebook, FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
class Footer extends React.Component {
  render() {
    return (
        <>
            <footer className="w-100 p-2 bg-dark " >
              <div className="text-center text-light" style={{ fontSize: '0.8rem' }}>
                © 2025 Nguyễn Văn An | Built with React 
              </div>
              <div className="d-flex flex-wrap align-items-center justify-content-center" style={{ marginTop: '1rem' }}>
                <div className="mx-2"><FontAwesomeIcon icon={faPhone} /> 0123 456 789</div>
                <div className="mx-2"><FontAwesomeIcon icon={faEnvelope} /> nguyenvanvan7580@gmail.com</div>
              </div>
              <div className="d-flex align-items-center justify-content-center gap-3">
                <a href="https://www.facebook.com/Faizb785" target="_blank" rel="noopener noreferrer" className="text-light">
                  Facebook
                </a>
                <a href="https://linkedin.com/in/nguyenvanan" target="_blank" rel="noopener noreferrer" className="text-light">
                  LinkedIn
                </a>
                <a href="https://github.com/Grim785" target="_blank" rel="noopener noreferrer" className="text-light">
                  GitHub
                </a>
              </div>
            </footer>

        </>
    );
  }
}

export default Footer;

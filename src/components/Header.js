import React from "react";
import "./Header.scss";
import { Outlet, Link } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false, // mặc định đóng
    };
  }

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { isOpen } = this.state;

    return (
      <>
        <header className="Header top-0 position-fixed w-100 d-flex align-items-center justify-content-between py-2 px-3 shadow">
          <div className="logo">MyPortfolio</div>

          {/* Menu chính cho desktop */}
          <nav className="d-none d-md-flex">
            <ul className="d-flex align-items-center list-unstyled mb-0">
              <li className="px-3"><Link to="/">Home</Link></li>
              <li className="px-3"><Link to="/about">About</Link></li>
              <li className="px-3"><Link to="/projects">Projects</Link></li>
              <li className="px-3"><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>

          {/* Icon toggle cho mobile */}
          <div className="menu-icon d-md-none" onClick={this.toggleMenu}>
            <FiAlignJustify className="fs-1" />
          </div>
        </header>

        {/* Menu ẩn hiện cho mobile */}
        <nav className={`mobile-menu d-md-none ${isOpen ? "open" : ""}`}>
          <ul className="list-unstyled text-center p-0 m-0">
            <li className="py-2"><Link to="/" onClick={this.toggleMenu}>Home</Link></li>
            <li className="py-2"><Link to="/about" onClick={this.toggleMenu}>About</Link></li>
            <li className="py-2"><Link to="/projects" onClick={this.toggleMenu}>Projects</Link></li>
            <li className="py-2"><Link to="/contact" onClick={this.toggleMenu}>Contact</Link></li>
          </ul>
        </nav>

        <Outlet />
      </>
    );
  }
}

export default Header;

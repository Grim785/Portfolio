import React from "react";
import "./Home.scss";
import {Link} from "react-router-dom";

class Home extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      admin: false,
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      this.setState({ admin: true });
    }
  }

  render() {
    return (
        <article className="home row">
            <div className="col-12 d-flex flex-column align-items-center justify-content-center p-5">
                <h1 className="text-center mb-3">Welcome to My Portfolio</h1>
                <h2 className="text-center mb-3">Hi, I'm <span className="text-highlight">Nguyen Van An</span></h2>
                <h3 className="text-center mb-3">A Full-Stack Developer</h3>
                <p className="text-center mb-3">As an aspiring full-stack developer, I’m passionate about learning, building, and bringing ideas to life through web technologies.</p>
                <div className="d-flex justify-content-center">
                    <Link to="/projects" className="btn btn-primary m-2 p-2">View Projects</Link>
                    <Link to="/contact" className="btn btn-secondary m-2 p-2">Contact Me</Link>
                </div>
            </div>
        </article>
    );
  }
}

export default Home;
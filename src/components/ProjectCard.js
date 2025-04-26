import React from "react";
import "./ProjectCard.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

class ProjectCard extends React.Component {
  render() {
    const { projects } = this.props;
    return (
        <>
            {projects.map((project,index) => (
                <div key={index} className="col-lg-6 col-12 p-2">
                    <div className="ProjectCard rounded-3 card h-100">
                        <div className="p-2">
                            <img src={project.image} alt={project.title} className="img_projectcard img-fluid rounded-top" />
                        </div>
                        <div className="card-body  p-2 d-flex flex-column justify-content-between">
                            <h5 className="card-title">{project.title}</h5>
                            <p className="card-text mb-2">{project.description}</p>

                            <div>
                                <div className="mb-2">
                                    {project.stack.map((tech, index) => (
                                        <span key={index} className="badge bg-secondary p-2 m-1">{tech}</span>
                                    ))}
                                </div>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-auto p-2">View Project</a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
  }
}

export default ProjectCard;
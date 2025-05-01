import React from "react";
import "./ProjectCard.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import withRouter from "../helpers/withRouter";
import axios from "../helpers/axiosInstance";

class ProjectCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            admin: false,
            isLoading: true,
        };
    }

    componentDidMount() {
        const token = localStorage.getItem("token");
        if (token) {
            this.setState({ admin: true });
        }
        this.setState({isLoading:false})
    }

    DeleteProject = (id) => {
        axios
            .delete(`/projects/${id}`)
            .then((response) => {
                console.log("Project deleted successfully:", response.data);
                if (this.props.onProjectDeleted) {
                    this.props.onProjectDeleted(id);
                }
            })
            .catch((error) => {
                console.error("Error deleting project:", error);
            });
    };

    render() {
        const isLoading=this.state;
        const admin = localStorage.getItem("token") ? true : false;
        const { projects } = this.props;
        if (!isLoading) {
            return <div>No Project</div>;
        }

        return (
            <>
                {admin && (
                    <div className="col-lg-6 col-12 p-2" onClick={() => this.props.navigate("/projects/add")}>
                        <div className="ProjectCard rounded-3 card h-100 d-flex flex-column justify-content-center align-items-center fs-3 fw-bold text-grey">
                            Add New Project
                        </div>
                    </div>
                )}
                {projects.map((project, index) => (
                    <div key={index} className="col-lg-6 col-12 p-2">
                        <div className="ProjectCard rounded-3 card h-100">
                            <div className="p-2">
                                <img src={project.imageUrl} alt={project.title} className="img_projectcard img-fluid rounded-top" />
                            </div>
                            <div className="card-body p-2 d-flex flex-column justify-content-between">
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text mb-2">{project.description}</p>
                                <div>
                                    <div className="mb-2">
                                        {project.technologies.map((tech, index) => (
                                            <span key={index} className="badge bg-secondary p-2 m-1">{tech}</span>
                                        ))}
                                    </div>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-auto p-2">View Project</a>
                                    {admin && (
                                        <>
                                            <button onClick={() => this.props.navigate(`/projects/edit/${project._id}`)} className="btn btn-warning w-auto p-2 ms-2 text-light">Edit Project</button>
                                            <button onClick={() => this.DeleteProject(project._id)} className="btn btn-danger w-auto p-2 ms-2">Delete Project</button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </>
        );
    }
}

export default withRouter(ProjectCard);

import React from "react";
import axios from "../../helpers/axiosInstance";
import "./Projects.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCard from "../ProjectCard";


class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      loading: true,
    };
  }
  componentDidMount() {
    // Gọi API ban đầu
    this.fetchProjects();
  }
  
  fetchProjects = () => {
    axios
      .get("/projects")
      .then((response) => {
        this.setState({ projects: response.data , loading: false });
      })
      .catch((error) => {
        console.error("Có lỗi xảy ra khi lấy dữ liệu dự án:", error);
      });
  };
  

  handleProjectDeleted = (deletedId) => {
    this.setState((prevState) => ({
      projects: prevState.projects.filter((project) => project._id !== deletedId),
    }));
  };



  render() {
    const projects = this.state.projects;
    const loading = this.state.loading;
    return (
        <article className="Projects row">
          <div className="col-12">
            <div className="container py-5">
              <div className="row">
                  <>
                    <div className="col-12 text-center mb-4">
                      <h2 className="text-center">My Projects</h2>
                    </div>
                    <div className="col-12 d-flex flex-column align-items-center justify-content-center mb-4">
                      My projects showcase my skills and passion for web development. Each project is a step in my journey as a developer, and I’m excited to share them with you.
                    </div>
                  </>
                <ProjectCard projects={projects} onProjectDeleted={this.handleProjectDeleted} loading={loading}/>
              </div>
            </div>
          </div>
        </article>
    );
  }
}

export default Projects;
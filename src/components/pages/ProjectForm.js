import React from "react";
import axios from "axios";
import "./ProjectForm.scss";
import withRouter from "../../helpers/withRouter"; // để dùng navigate nếu cần (mình sẽ hướng dẫn ở dưới)

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      technologies: [],
      imageUrl: "",
      link: "",
    };
  }

  componentDidMount() {
    const { isEditMode, params  } = this.props;
    if (isEditMode && params.id) {
      axios.get(`http://localhost:5000/api/projects/${params.id}`)
        .then(response => {
          const { title, description, technologies, imageUrl, link } = response.data;
          console.log(response.data);
          this.setState({ title, description, technologies, imageUrl, link });
        })
        .catch(error => {
          console.error("Lỗi khi lấy project:", error);
        });
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của form (reload trang)
    const { title, description, technologies, imageUrl, link } = this.state;
    const { isEditMode, params,navigate } = this.props; // Lấy projectId từ props nếu có (trong trường hợp edit)
    const projectData = {title, description, technologies, imageUrl, link};
    if (isEditMode && params.id) {
      // Update
      axios.put(`http://localhost:5000/api/projects/${params.id}`, projectData)
        .then(() => {
          alert("Cập nhật thành công!");
          navigate ("/projects");
        })
        .catch(error => {
          console.error("Lỗi cập nhật:", error);
          alert("Cập nhật thất bại!");
        });
    } else {
      // Add mới
      axios.post(`http://localhost:5000/api/projects`, projectData)
        .then(() => {
          alert("Thêm mới thành công!");
          navigate ("/projects");
        })
        .catch(error => {
          console.error("Lỗi thêm mới:", error);
          alert("Thêm mới thất bại!");
        });
      }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const{isEditMode} = this.props;
    const { title, description, technologies, imageUrl, link } = this.state;

    return (
      <article className="ProjectForm row justify-content-center">
        <div className='col-sm-8 col-12 col-lg-4 p-3 project-form-container rounded-4'>
          <div className="project-info">
            <h3 className='text-center'>Add Project</h3>
            <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={title}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              name="description"
              value={description}
              onChange={this.handleChange}
              rows="5"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Technologies</label>
            <input
              type="text"
              className="form-control"
              name="technologies"
              value={technologies}
              onChange={this.handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Image URL</label>
            <input
              type="text"
              className="form-control"
              name="imageUrl"
              value={imageUrl}
              onChange={this.handleChange}
            />
            {imageUrl && (
              <img src={imageUrl} alt="Project" className="img-fluid mt-2" style={{ width: "200px" }} />
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Link</label>
            <input
              type="text"
              className="form-control"
              name="link"
              value={link}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary p-2">
            {isEditMode ? "Cập nhật" : "Thêm mới"}
          </button>
        </form>
          </div>
        </div>
      </article>
    )
  }
}

export default withRouter(ProjectForm);

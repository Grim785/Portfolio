import axios from "../../helpers/axiosInstance";
import React, { Component } from "react";
import withRouter from "../../helpers/withRouter";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { navigate } = this.props;
    const { username, password } = this.state;
    console.log("Đăng nhập với:", this.state);
  
    axios.post("http://localhost:5000/api/login",
      { username, password }, // body
      {
        headers: {
          'Content-Type': 'application/json' // ép kiểu gửi JSON
        }
      }
    )
      .then(async (response) => {
        alert("Đăng nhập thành công!");
        await localStorage.setItem('token', response.data.token);
        navigate("/");
      })
      .catch((error) => {
        console.error("Lỗi đăng nhập:", error);
        alert("Đăng nhập thất bại!");
      });
  };
  

  render() {

    return (
        <article className='row Contact justify-content-center align-items-center'>
        <div className='col-sm-8 col-12 col-lg-4 p-3 contact-form-container rounded-4'>
          <div className="contact-info">
            <h3 className='text-center'>Login</h3>
            <form  className="contact-form" onSubmit={this.handleSubmit}>
              <div className="mb-3">
                <label className="form-label mb-1">Username</label>
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange} className="form-control bg-transparent input-contact border-0 p-1" required />
              </div>
              <div className="mb-3">
                <label className="form-label mb-1">Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control bg-transparent input-contact border-0 p-1" required />
              </div>
              <div className='d-flex justify-content-center'>
                <button type="submit" className="btn btn-primary rounded-4 p-2">Login</button>
              </div>
            </form>
          </div>
        </div>
      </article>
    );
  }
}


export default withRouter(Login);

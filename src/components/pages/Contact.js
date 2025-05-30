import React, { Component } from 'react';
import './Contact.scss';
import axios from '../../helpers/axiosInstance';



class Contact extends Component {

  handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };
  
    try {
      await axios.post('/contact', data); // URL API back-end xử lý gửi mail
      alert('Gửi thành công!');
    } catch (error) {
      console.error('Lỗi khi gửi email:', error);
      alert('Gửi thất bại!');
    }
  }
  

  render() {
    return (
      <article className='row Contact justify-content-center align-items-center'>
        <div className='col-sm-8 col-12 col-lg-4 p-3 contact-form-container rounded-4'>
          <div className="contact-info">
            <h3 className='text-center'>Contact Info</h3>
            <form className="contact-form" onSubmit={this.handleSubmit}>
              <div className="mb-3">
                <label className="form-label mb-1">Fullname</label>
                <input type="text" name="name" className="form-control bg-transparent input-contact border-0 p-1" required />
              </div>
              <div className="mb-3">
                <label className="form-label mb-1">Email</label>
                <input type="email" name="email" className="form-control bg-transparent input-contact border-0 p-1" required />
              </div>
              <div className="mb-3">
                <label className="form-label mb-1">Title</label>
                <input type="text" name="subject" className="form-control bg-transparent input-contact border-0 p-1" required />
              </div>
              <div className="mb-3">
                <label className="form-label mb-1">Message</label>
                <textarea name="message" rows="5" className="form-control bg-transparent input-contact border-0 p-1" required></textarea>
              </div>
              <div className='d-flex justify-content-center'>
                <button type="submit" className="btn btn-primary rounded-circle  p-3">Gửi</button>
              </div>
            </form>
          </div>
        </div>
      </article>
    );
  }
}

export default Contact;

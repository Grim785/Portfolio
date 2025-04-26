import React, { Component } from 'react';
import './Contact.scss';



class Contact extends Component {
  render() {
    return (
      <article className='row Contact justify-content-center align-items-center'>
        <div className='col-sm-8 col-12 col-lg-4 p-3 contact-form-container rounded-4'>
          <div className="contact-info">
            <h3 className='text-center'>Contact Info</h3>
            <form  className="contact-form">
              <div className="mb-3">
                <label className="form-label mb-1">Họ và tên</label>
                <input type="text" name="name" className="form-control bg-transparent input-contact border-0 p-1" required />
              </div>
              <div className="mb-3">
                <label className="form-label mb-1">Email</label>
                <input type="email" name="email" className="form-control bg-transparent input-contact border-0 p-1" required />
              </div>
              <div className="mb-3">
                <label className="form-label mb-1">Chủ đề</label>
                <input type="text" name="subject" className="form-control bg-transparent input-contact border-0 p-1" required />
              </div>
              <div className="mb-3">
                <label className="form-label mb-1">Tin nhắn</label>
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

import React from 'react'
import avatar from '../assets/avatar.png';  // Make sure the image paths are correct
import omer from '../assets/omer.jpg';
const SideComponent = () => {
  return (
    <>
      <div className="sidebar">
          <div className="avatar">
            <img src={omer} alt="Avatar" />
          </div>
          <div className="name">
            <h1>Abdul Omer Farooq</h1>
          </div>
          <div className="role">
            <button>AI Engineer</button>
          </div>
          <div className="contact-section">
            <div className="contact-item">
              <i className='bx bxl-gmail'></i>
              <span>omerfarooq1817@gma...</span>
            </div>
            <div className="contact-item">
              <i className='bx bx-current-location'></i>
              <span>Hyderabad, India</span>
            </div>
            <div className="contact-item">
              <i className='bx bxs-mobile'></i>
              <span>+91 6303355201</span>
            </div>
            <div className="contact-item">
              <i className='bx bxs-calendar'></i>
              <span>6 January 2003</span>
            </div>
          </div>
          <div className="icons-row">
            <a href='https://github.com/omer2626'>
            <i className='bx bxl-github'></i>
            </a>
            <a href='https://www.linkedin.com/in/omerfarooq26/'> 
            <i className='bx bxl-linkedin'></i>
            </a>
            <i class='bx bxl-facebook'></i>
            <i className='bx bxl-instagram'></i>
          </div>
        </div>
    </>
  )
}

export default SideComponent

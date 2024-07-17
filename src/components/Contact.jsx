// import React from 'react'
// import './Contact.css'
// import React, { useState } from 'react';
// import './Contact.css';
// const Contact = () => {
//     return (
//         <>
//         {/* <div className="heading" id="aboutmehead">
//                 <h1 className="underline"> Resume </h1>
//             </div>
//             <div className='heading1'>
//               <h1> Contact Form</h1>
//             </div> */}


//         </>
//     );
// };

import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobileNumber: '',
        emailSubject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        // You can add form submission logic here
    };

    return (
        <>
            <div className="heading">
                <h1 className="underline"> Contact </h1>
            </div>
            <div className='heading1'>
                <h1> Contact Form</h1>
            </div>
            <section className="contact" id="contact">

                <form onSubmit={handleSubmit}>
                    <div className="input-box">
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {/* <div className="input-box">
                    <input 
                        type="tel" 
                        name="mobileNumber" 
                        placeholder="Mobile Number" 
                        value={formData.mobileNumber} 
                        onChange={handleChange} 
                        required 
                    />
                    <input 
                        type="text" 
                        name="emailSubject" 
                        placeholder="Email Subject" 
                        value={formData.emailSubject} 
                        onChange={handleChange} 
                        required 
                    /> */}
                    {/* </div> */}
                    <textarea
                        name="message"
                        cols="30"
                        rows="10"
                        placeholder="Your message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <input type="submit" value="Send message" className="btn" />
                </form>
            </section>
            <div className="headings">
                <h1>Location </h1>
            </div>
            <div className="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30440.14080502567!2d78.36309014999999!3d17.4727074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93a6e50a76a3%3A0x6432f03f1b3063b7!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1590000000000!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

        </>
    );
};

export default Contact

import React, { useState } from 'react';
import './ContactForm.css'; // Import your CSS file
import small from "./Assets/small-g.png"

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        projectNarration: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Form submitted successfully!');
    };

    return (
        <section id="contact" >
            <div className='touch'>
                <h1>Get In Touch</h1>
            </div>
            <div  className='overall'>
                  <div className="contact" >
                     <h2>Describe Your Project</h2>
                     <p>Please fill out the form below to tell us about your project. We will get back to you as soon as possible!</p>
                     <form id="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                           <label htmlFor="name"></label>
                           <input
                             type="text"
                             id="name"
                              name="name"
                              placeholder="Enter your name"
                             value={formData.name}
                             onChange={handleChange}
                             required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone"></label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              placeholder="Enter your phone number"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                            />
                        </div>
                        <div className="form-group">
                          <label htmlFor="email"/>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-group">
                           <label htmlFor="project-narration"/>
                           <textarea
                            id="project-narration"
                            name="projectNarration"
                            rows="4"
                            placeholder="Describe your project"
                            value={formData.projectNarration}
                            onChange={handleChange}
                            required
                           ></textarea>
                        </div>
                        <button type="submit">Submit</button>
                     </form>
                  </div> 
                  <div className='girl'>
                     <img className='nature' src={small} alt='natural'/>
                  </div>
            </div>
        </section>
    );
};

export default ContactForm;

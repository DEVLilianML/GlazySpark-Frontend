import React, { useState } from 'react';
import './ContactForm.css'; // Import your CSS file
import small from "./Assets/small-g.webp"

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        try {
            // Send the form data to the backend API
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Form submitted successfully!');
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    projectNarration: '',
                });
            } else {
                const errorData = await response.json();
                alert(`Error submitting form: ${errorData.message}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error submitting form. Please try again.');
        }
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
                              placeholder="phone number (e.g, +234 8012345678)"
                              value={formData.phone}
                              onChange={handleChange}
                              pattern="^\+?[0-9]{7,15}$" 
                              inputMode="numeric"
                               title="Enter a valid phone number with country code (e.g., +2348012345678)"
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
                     <img className='nature' src={small} alt='natural' loading="lazy"/>
                  </div>
            </div>
        </section>
    );
};

export default ContactForm;

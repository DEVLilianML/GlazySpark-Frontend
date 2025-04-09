import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'; // Assuming you will add custom CSS for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
               <div className="company-info">
                    <h3>About GlazySpark Creations</h3>
                    <p>
                      GlazySpark Creations is a creative digital agency based in Lagos, Nigeria. 
                      We help businesses grow by creating exceptional digital experiences.
                    </p>
                </div>
                <div className="footer-services">
                    <h3>Our Services</h3>
                    <ul>
                        <li>Web Development</li>
                        <li>Animation</li>
                        <li>UI/UX Design</li>
                        <li>Social media Management</li>
                    </ul>
                </div>

                <div  id="connect">
                    <div className='contact-section'>
                       <h2>Connect with us</h2>
                    </div >
                    <div className="contact-info">
                        <p><strong>Address:</strong> Suite 27, Alausa Shopping Mall,<span className="address"> Ikeja,  Lagos, Nigeria.</span></p>
                        <p><strong>Email:</strong> <a href="mailto:contact@glazyspark.com">glazyspark@yahoo.com</a></p>
                        <p><strong>Phone:</strong> <a href="tel:+2347051841261">+2347051841261</a></p>
                    </div>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/profile.php?id=61569559054251&mibextid=ZbWKwL" aria-label="Facebook">
                          <FontAwesomeIcon icon={faFacebookF} />
                         </a>
                         <a href="https://www.instagram.com/glazyspark?igsh=MWt4OW9qbjZxZHh0aQ==" aria-label="Instagram">
                           <FontAwesomeIcon icon={faInstagram} />
                         </a>
                         <a href="https://wa.me/+2347051841261" aria-label="WhatsApp">
                           <FontAwesomeIcon icon={faWhatsapp} />
                         </a>
                         <a href="https://www.linkedin.com/company/glazyspark-creations/" aria-label="LinkedIn">
                           <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </div>
                </div>
              
            </div>

            {/* Copyright Section */}
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} GlazySpark Creations. All Rights Reserved.</p>
            </div>
        </footer>



    );
};

export default Footer;

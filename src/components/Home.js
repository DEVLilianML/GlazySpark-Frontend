import React, { Suspense, lazy } from 'react';
import "./Home.css";
import staff from './Assets/staff.webp';
import Lottie from 'lottie-react';
import building from './Assets/building.png';
import animationData from './Assets/animationz.json';
import boyn from './Assets/boyn.webp'



// Lazy load the Lottie animation component
const LottieAnimation = lazy(() => import('lottie-react'));

const Home = () => {
    return (
        <>
          <div className='overall_container'>
            <header className="header" >
                <div  >
                    <img className='logo' src='logo-now.webp' alt='GlazySpark logo' loading="lazy" />
                </div>
                <div className='container' id="home">
                    <ul>
                        <li><a href="#homeSection">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#connect">Contact</a></li>
                    </ul>
                    <button><a href="#contact">Start a Project </a></button> 
                </div>
            </header>

            <section id="homeSection">
                <div className="glazy-spark">
                    <div className="headerz"  id="about">
                      < h1>Website Design and Animation Services that Spark Business</h1>  
                    </div>
                    <div className='first-container' >
                       <div className="image-container">
                        <img  className='staff' src={staff} alt='glazyspark staff' loading="lazy" />
                       </div >
                       <div  className="content">
                         <h2>About GlazySpark Creations</h2>
                         <p>At GlazySpark Creations, your trusted partner for innovative digital growth and inspired creative solutions. We specialize in crafting custom websites, engaging animations, and powerful social media strategies that elevate brands and drive results.</p>
                         <p> We don’t just design; we work closely with each client to understand their vision and bring it to life across digital platforms. Our commitment to creativity, quality, and collaboration ensures that every project not only meets but exceeds expectations. We create customized strategies that spark growth and make your brand stand out! </p>
                       </div>
                   </div>
                </div>
            </section>

            <section  id="services">
                <div>
                    <div className='animate_service'>
                       <div className='services'>
                         <h2>Our Services</h2>
                       </div>
                       {/* Use Suspense to lazy load the Lottie animation */}
                       <div className="lottie-container">
                            <Suspense fallback={<div>Loading animation...</div>}>
                                <LottieAnimation animationData={animationData} loop={true} autoplay={true} style={{ height: 300, width: 300 }} />
                            </Suspense>
                        </div>
                    </div>
                    <div className="background-container">
                       <div className='web'>
                         <h2>Web Design and Development</h2>
                         <p>We design unique websites that reflect your brand, with seamless backend solutions .</p>
                       </div>  
                         
                       <div className='animation_container' >
                         <div>
                           <img className='boyn' src={boyn} alt='GlazySpark-animation' loading="lazy"/>
                         </div>
                          <div  className='animate'>
                             <h2>Animation</h2>
                             <p>Bringing your ideas to life with explainer videos, animated logos, and compelling advert animations that captivate and engage your audience.</p>
                          </div>
                       </div> 
                       <div className='social'>
                         <h2>Social Media Management</h2>
                         <p>We create and manage strategic content to grow your audience and boost your brand's online presence.</p>
                       </div> 
                    </div>

                </div>
            </section>
          </div>
        </>
    );
};

export default Home;

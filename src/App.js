import React from 'react';
import Home from './components/Home';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

import './App.css';

const App = () => {
    return (
        <div className="App">
            <Home />
            <ContactForm /> 
            <Footer/>
           </div>        
              
    );
};

export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import BlogPage from "./components/Blog/BlogPage";
import BlogSection from "./components/Blog/BlogSection";
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog/:slug" element={<BlogPage />} />
                </Routes>
                <ContactForm />
                <Footer />
            </div>
        </Router>
    );
};

export default App;

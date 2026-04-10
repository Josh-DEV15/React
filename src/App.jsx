import React from 'react';
import './App.css';
import About from './components/About.jsx';
import Footer from './components/footer.jsx';
import Contacts from './components/Contacts.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Home from './components/Home.jsx';
import WhatsappFloat from './components/WhatsappFloat.jsx';
import HireMeFloat from './components/HireMeFloat.jsx';
import Navbar from './components/Navbar.jsx';
import Services from './components/Services.jsx';
import TestimonialSection from './components/TestimonialSection.jsx';
function App() {
    return (
        <div className="App">
            <h1>Welcome to my portfolio</h1>
            <Navbar />
            <Home />
            <WhatsappFloat />
            <About />
            <Projects />
            <Services />
            <Skills />
            <TestimonialSection />
            <Contacts />
            <Footer />
            <HireMeFloat />
        </div>
    );
}
export default App;
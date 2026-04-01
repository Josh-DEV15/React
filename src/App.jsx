import React from 'react';
import './App.css';
import About from './components/About.jsx';
import Footer from './components/footer.jsx';
import Contacts from './components/Contacts.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Home from './components/Home.jsx';
function App(){
    return(
        <div className="App">
            <h1>Welcome to my portfolio</h1>
            <Home />
            <About />
            <Projects />
            <Skills />
            <Contacts />
            <Footer />
        </div>
    );
}
export default App;
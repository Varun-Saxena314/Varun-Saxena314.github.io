import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import About from './about';
import Projects from './project';
import Contact from './contact';
import TheButton from './theButton';
import Footer from "./Footer";
import Name from './HomePage';

const App = () => {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route  path="/about" element={<About />} />
        <Route  path="/projects" element={<Projects />} />
        <Route  path="/contact" element={<Contact />} />
        <Route  path="/theButton" element={<TheButton />} />
        <Route  path="/HomePage" element={<Name />} />
        <Route path="/" element={<HomePageDisplay />} />
      </Routes>
    </Router>
    </>
  );
}

const HomePageDisplay = () => (
  <Name />
);

export default App;
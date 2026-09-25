import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Teachers from './pages/Teachers';
import Students from './pages/Students';
import Facilities from './pages/Facilities';
import Activities from './pages/Activities';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import { useLanguage } from './context/LanguageContext';

function App() {
  const { language } = useLanguage();

  useEffect(() => {
    document.body.className = `lang-${language}`;
  }, [language]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about-school" element={<About />} />
        <Route path="teachers" element={<Teachers />} />
        <Route path="students" element={<Students />} />
        <Route path="facilities" element={<Facilities />} />
        <Route path="activities" element={<Activities />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;

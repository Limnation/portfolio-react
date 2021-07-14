import React from 'react';
import Header from './components/Header';
import Aboutme from './components/Aboutme';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Bottomnav from './components/Bottomnav';
import Footer from './components/Footer';


export default function App() {
  return (
    <div>
      <Header />
      <Aboutme />
      <Skills />
      <Portfolio />
      <Contact />
      <Bottomnav />
      <Footer />
    </div>
  );
}

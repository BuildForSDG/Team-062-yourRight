import React from 'react';
import Header from './components/header/Header';
import Content from './components/contentSection/Content';
import About from './components/about/About';
import { BrowserRouter } from 'react-router-dom';
import SideNav from './components/header/sideMenu/SideMenu';
import ServicesAbout from './components/aboutServices/Services';
import Partners from './components/partnership/Partners';
import Footer from './components/footer/Footer';
import ContactInfo from './components/contactInfo/ContactInfo';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
library.add(faCoffee);

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper"></div>
      <div className="app">
        <Header />
        <SideNav />
        <Content />
        <ServicesAbout />
        <About />
        <Partners />
        <ContactInfo />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

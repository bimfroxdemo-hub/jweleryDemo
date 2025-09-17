import React from 'react';
import Navbar from './Navbar/Navbar';
import Banner from './Banner/Banner';
import Collection from './Collection/Collection';
import Visit from './Visit/Visit';
import Review from './Customer Stories/Review';
import About from './About/About';
import Whychoose from './Why Choose/Whychoose';

export default function App() {
  return (
    <div className="scroll-smooth">
      {/* Navbar fixed */}
      <Navbar />

      {/* Sections with ID for scroll */}
      <section id="home" className="pt-20"><Banner /></section>
      <section id="about" className="pt-20"><About /></section>
      <section id="collection" className="pt-20"><Collection /></section>
      <section id="whychoose" className="pt-20"><Whychoose /></section>
      <section id="review" className="pt-20"><Review /></section>
      <section id="visit" className="pt-20"><Visit /></section>
    </div>
  );
}

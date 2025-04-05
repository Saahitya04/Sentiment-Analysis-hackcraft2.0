import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Contact from './Contact';
import ProductsPage from './ProductsPage'; 
import Laptop from './products/Laptop';
import Phone from './products/Phone';
import Headphones from './products/Headphones';
import Watch from './products/Watch';


const Home = () => (
  <>
    <section id="home" className="min-h-screen bg-gradient-to-b from-red-100 to-white px-6 md:px-20 py-20 flex flex-col justify-center items-center text-gray-800">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-snug">
          💬 Understand Emotions at Scale with <span className="text-red-500">Sentiment Analysis</span>
        </h1>

        <p className="text-lg mb-10">
          Unlock the power of words with intelligent sentiment analysis. Our model helps you detect whether user input is positive, negative, or neutral — giving you deeper insights into how your audience truly feels.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-red-600 italic">Why Sentiment Analysis?</h2>

        <ul className="space-y-6 text-left">
          <li className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
            <p className="font-bold text-lg">📊 Make Data-Driven Decisions</p>
           <p className="text-sm text-gray-700 mt-1">Analyze real-time feedback to improve products, services, and customer satisfaction.</p>
          </li>
          <li className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
            <p className="font-bold text-lg">⚡ Automate Text Understanding</p>
            <p className="text-sm text-gray-700 mt-1">Save time by instantly processing large volumes of reviews, messages, or social content.</p>
          </li>
          <li className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
            <p className="font-bold text-lg">🔍 Track Brand Sentiment</p>
            <p className="text-sm text-gray-700 mt-1">Monitor public perception and stay ahead of trends and issues.</p>
          </li>
        </ul>

        <p className="mt-10 text-lg">
          Whether you're building a review analyzer, social media dashboard, or customer support tool — our sentiment analysis makes your app smarter, more responsive, and insight-driven.
        </p>
      </div>
    </section>

    <section id="about" className="min-h-screen bg-gradient-to-b from-green-100 to-white px-6 md:px-20 py-20 flex flex-col justify-center items-center text-gray-800">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-snug">
          🧠 About <span className="text-green-600">Sentiment Analysis</span>
        </h1>

        <p className="text-lg mb-10">
          Sentiment Analysis is the process of using Natural Language Processing (NLP) to identify and extract emotions from text. Whether it's tweets, reviews, or feedback, this powerful tool helps understand the tone behind the words — positive, negative, or neutral.
        </p>

        <h2 className="text-2xl font-semibold text-green-600 italic mb-6">
          It enables businesses, researchers, and developers to:
        </h2>

        <ul className="space-y-4 text-left text-lg mb-10">
          <li className="flex items-start gap-2">
            <span className="text-xl">📥</span>
            <span className="font-semibold">Monitor public opinion in real time</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-xl">🗣️</span>
            <span>Understand customer emotions and trends</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-xl">📈</span>
            <span>Drive smarter, data-backed decisions</span>
          </li>
        </ul>

        <p className="text-lg">
          With AI-powered models, you can convert raw text into actionable insights — quickly and at scale.
        </p>
      </div>
    </section>

    <Contact /> 
  </>
);

const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return null;
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToHashElement />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/Laptop" element={<Laptop />} />
        <Route path="/products/Phone" element={<Phone />} />
        <Route path="/products/Headphones" element={<Headphones />} />
        <Route path="/products/Watch" element={<Watch />} />
      </Routes>
    </Router>
  );
};

export default App;

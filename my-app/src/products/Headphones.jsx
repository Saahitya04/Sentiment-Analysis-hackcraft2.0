// import React from 'react';

// const Headphone = () => {
//   return (
//     <div className="pt-20 p-10 bg-slate-100 min-h-screen">
//       <h1 className="text-4xl font-bold mb-4">Headphone</h1>
//       <p className="text-lg">This is the Headphone page with full details about our latest Headphones.</p>
//     </div>
//   );
// };

// export default Headphone;

import React, { useEffect, useState } from 'react';
import headphonesImage from '../assets/headphones.jpg';

const headphones = () => {
  const [headphonesInfo, setheadphonesInfo] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [sentiment, setSentiment] = useState('');

  // Example: Fetch data from your backend (dummy route here)
  useEffect(() => {
    fetch('http://localhost:5000/api/headphones-data') // Backend should return JSON list
      .then(res => res.json())
      .then(data => setheadphonesInfo(data))
      .catch(err => console.log('Error fetching headphones info:', err));
  }, []);

  // Submit input to backend for sentiment analysis
  const handleAnalyze = () => {
    fetch('http://localhost:5000/api/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: userInput }),
    })
      .then(res => res.json())
      .then(data => setSentiment(data.sentiment))
      .catch(err => console.log('Analysis error:', err));
  };

  return (
    <div className="min-h-screen bg-slate-100 p-10 pt-30">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Image Left */}
        <div className="md:w-1/2">
          <img src={headphonesImage} alt="headphones" className="w-full rounded-xl shadow-lg" />
        </div>

        {/* Info Right */}
        <div className="md:w-1/2 space-y-4">
        <h1 className="text-4xl font-bold mb-2">Aurora Pulse RGB Wireless Headphones</h1>
          <ul className="list-disc pl-6 text-lg">
            <li><strong>Audio:</strong> Hi-Res stereo sound with deep bass</li>
            <li><strong>Lighting:</strong> Customizable RGB earcup glow</li>
            <li><strong>Connectivity:</strong> Bluetooth 5.2 + AUX Dual Mode</li>
            <li><strong>Battery:</strong> Up to 30 hours playtime, USB-C Fast Charging</li>
            <li><strong>Comfort:</strong> Soft memory foam ear cushions & adjustable headband</li>
          </ul>
          <ul className="list-disc pl-6 text-lg">
            {headphonesInfo.slice(0, 5).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          {/* Input for Sentiment */}
          <div className="mt-6">
            <input
              type="text"
              placeholder="Type something to analyze sentiment"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300"
            />
            <button
              onClick={handleAnalyze}
              className="mt-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Analyze
            </button>

            {sentiment && (
              <p className="mt-4 text-xl font-semibold">
                Sentiment: <span className="capitalize">{sentiment}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default headphones;
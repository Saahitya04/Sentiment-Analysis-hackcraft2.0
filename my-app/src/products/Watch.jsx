// import React from 'react';

// const Watch = () => {
//   return (
//     <div className="pt-20 p-10 bg-slate-100 min-h-screen">
//       <h1 className="text-4xl font-bold mb-4">Watch</h1>
//       <p className="text-lg">This is the Watch page with full details about our latest Watchs.</p>
//     </div>
//   );
// };

// export default Watch;

import React, { useEffect, useState } from 'react';
import watchImage from '../assets/watch.jpg';

const watch = () => {
  const [watchInfo, setwatchInfo] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [sentiment, setSentiment] = useState('');

  // Example: Fetch data from your backend (dummy route here)
  useEffect(() => {
    fetch('http://localhost:5000/api/watch-data') // Backend should return JSON list
      .then(res => res.json())
      .then(data => setwatchInfo(data))
      .catch(err => console.log('Error fetching watch info:', err));
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
          <img src={watchImage} alt="watch" className="w-full rounded-xl shadow-lg" />
        </div>

        {/* Info Right */}
        <div className="md:w-1/2 space-y-4">
        <h1 className="text-4xl font-bold mb-2">Smart Fitness Watch – Series 7</h1>
          <ul className="list-disc pl-6 text-lg">
            <li><strong>Display:</strong> 1.75" HD Full Touch Screen</li>
            <li><strong>Health:</strong> Heart Rate & SpO2 Monitor, Sleep Tracker</li>
            <li><strong>Fitness:</strong> Multiple Sports Modes, Step Counter</li>
            <li><strong>Smart Features:</strong> Call/SMS Alerts, Weather, Music Control</li>
            <li><strong>Battery:</strong> Up to 5 Days Use, Magnetic Charger</li>
          </ul>
          <ul className="list-disc pl-6 text-lg">
            {watchInfo.slice(0, 5).map((item, index) => (
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

export default watch;

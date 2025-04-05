// import React from 'react';

// const Phone = () => {
//   return (
//     <div className="pt-20 p-10 bg-slate-100 min-h-screen">
//       <h1 className="text-4xl font-bold mb-4">Phone</h1>
//       <p className="text-lg">This is the Phone page with full details about our latest Phones.</p>
//     </div>
//   );
// };

// export default Phone;

// import React from 'react';
// import phoneImage from '../assets/phone.jpg';


// const phone = () => {
//   return (
//     <div className="pt-20 p-10 bg-slate-100 min-h-screen">
//       <h1 className="text-4xl font-bold mb-4">phone</h1>
//       <img src={phoneImage} alt="phone" className="w-[100px] h-auto" />
//       <p className="text-lg">This is the phone page with full details about our latest phones.</p>
//     </div>
//   );
// };

// export default phone;
import React, { useEffect, useState } from 'react';
import phoneImage from '../assets/phone.jpg';

const phone = () => {
  const [phoneInfo, setphoneInfo] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [sentiment, setSentiment] = useState('');

  // Example: Fetch data from your backend (dummy route here)
  useEffect(() => {
    fetch('http://localhost:5000/api/phone-data') // Backend should return JSON list
      .then(res => res.json())
      .then(data => setphoneInfo(data))
      .catch(err => console.log('Error fetching phone info:', err));
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
          <img src={phoneImage} alt="phone" className="w-full rounded-xl shadow-lg" />
        </div>

        {/* Info Right */}
        <div className="md:w-1/2 space-y-4">
        <h1 className="text-4xl font-bold mb-2">Samsung Galaxy S24 Ultra</h1>
          <ul className="list-disc pl-6 text-lg">
            <li><strong>Brand:</strong> Samsung Galaxy S Series</li>
            <li><strong>Display:</strong> 6.8" Quad HD+ AMOLED, 120Hz refresh rate</li>
            <li><strong>Camera:</strong> 200MP Quad Camera with laser autofocus</li>
            <li><strong>Processor:</strong> Snapdragon 8 Gen 3</li>
            <li><strong>Special Feature:</strong> Built-in S Pen & AI-enhanced capabilities</li>
          </ul>
          <ul className="list-disc pl-6 text-lg">
            {phoneInfo.slice(0, 5).map((item, index) => (
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

export default phone;

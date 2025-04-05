// import React from 'react';
// import laptopImage from '../assets/laptop.jpg';


// const Laptop = () => {
//   return (
//     <div className="pt-20 p-10 bg-slate-100 min-h-screen">
//       <h1 className="text-4xl font-bold mb-4">Laptop</h1>
//       <img src={laptopImage} alt="Laptop" className="w-[100px] h-auto" />
//       <p className="text-lg">This is the Laptop page with full details about our latest laptops.</p>
//     </div>
//   );
// };

// export default Laptop;
import React, { useEffect, useState } from 'react';
import laptopImage from '../assets/laptop.jpg';

const Laptop = () => {
  const [laptopInfo, setLaptopInfo] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [sentiment, setSentiment] = useState('');

  // Example: Fetch data from your backend (dummy route here)
  useEffect(() => {
    fetch('http://localhost:5000/api/laptop-data') // Backend should return JSON list
      .then(res => res.json())
      .then(data => setLaptopInfo(data))
      .catch(err => console.log('Error fetching laptop info:', err));
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
          <img src={laptopImage} alt="Laptop" className="w-full rounded-xl shadow-lg" />
        </div>

        {/* Info Right */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold mb-2">Acer Aspire 8920G – 18.4" Full HD </h1>
          <ul className="list-disc pl-6 text-lg">
            <li><strong>Brand:</strong> Acer Nitro Series</li>
            <li><strong>Display:</strong> 15.6" Full HD IPS with vivid color accuracy</li>
            <li><strong>Graphics:</strong> NVIDIA GeForce GTX – perfect for high-speed gaming</li>
            <li><strong>Processor:</strong> Intel Core i7 – multitask like a pro</li>
            <li><strong>Special Feature:</strong> 3D visual rendering — experience content like it's jumping out of the screen</li>
          </ul>
          <ul className="list-disc pl-6 text-lg">
            {laptopInfo.slice(0, 5).map((item, index) => (
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

export default Laptop;

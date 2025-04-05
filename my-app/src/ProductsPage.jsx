// import React from 'react';
// import { Link } from 'react-router-dom';

// const ProductsPage = () => {
//   return (
//     <div className="pt-20 p-10 bg-yellow-100 min-h-screen">
//       <h1 className="text-4xl font-bold mb-6">Our Products</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <Link to="/products/laptop" className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
//           <h2 className="text-2xl font-semibold">Laptop</h2>
//         </Link>
//         <Link to="/products/phone" className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
//           <h2 className="text-2xl font-semibold">Phone</h2>
//         </Link>
//         <Link to="/products/watch" className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
//           <h2 className="text-2xl font-semibold">Watch</h2>
//         </Link>
//         <Link to="/products/headphones" className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
//           <h2 className="text-2xl font-semibold">Headphones</h2>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;

import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { name: "Laptop", link: "/products/laptop", emoji: "💻", bg: "bg-blue-100" },
  { name: "Phone", link: "/products/phone", emoji: "📱", bg: "bg-green-100" },
  { name: "Watch", link: "/products/watch", emoji: "⌚", bg: "bg-pink-100" },
  { name: "Headphones", link: "/products/headphones", emoji: "🎧", bg: "bg-purple-100" },
];

const ProductsPage = () => {
  return (
    <div className="pt-24 px-6 bg-gradient-to-r from-yellow-100 via-orange-100 to-yellow-100 min-h-screen">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-800 drop-shadow">
        🔍 Explore Our Smart Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <Link
            to={product.link}
            key={index}
            className={`${product.bg} hover:scale-105 transition-all duration-300 rounded-3xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl`}
          >
            <div className="text-6xl mb-4">{product.emoji}</div>
            <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
            <p className="text-sm text-gray-600 mt-2">Click to discover more</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;

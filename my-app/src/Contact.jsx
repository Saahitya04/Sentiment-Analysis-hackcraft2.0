import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent! Name: ${formData.name}, Email: ${formData.email}`);
    // You can also send this data to a backend or service like Formspree
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="pt-20 px-6 py-12 min-h-screen bg-blue-100" id="contact">
      <h2 className="text-4xl font-bold mb-6 text-center">Contact Us</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md space-y-4"
      >
        <div>
          <label className="block font-semibold">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-2 border rounded"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block font-semibold">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-2 border rounded"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block font-semibold">Message</label>
          <textarea
            name="message"
            rows="4"
            required
            className="w-full p-2 border rounded"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="bg-[#024950] text-white px-4 py-2 rounded hover:bg-[#03696f]"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;

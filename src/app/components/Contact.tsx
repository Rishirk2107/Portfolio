'use client';

import { useState } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="text-center p-4">
      <h2 className="text-4xl font-bold text-teal-500 mb-4">Contact Me</h2>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="block w-full p-2 mb-4 border border-gray-300 rounded text-lg"
      />
      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="block w-full p-2 mb-4 border border-gray-300 rounded text-lg"
      />
      <button className="bg-teal-500 text-white font-bold py-2 px-4 text-lg rounded">
        Send Message
      </button>
    </div>
  );
}

export default Contact;

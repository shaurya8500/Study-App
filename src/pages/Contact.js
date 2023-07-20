// src/components/Contact.js

import React from 'react';

const Contact = ({isLoggedIn}) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-400 to-pink-500">
      <div className="text-white text-center mb-8">
        <h1 className="text-5xl font-bold">Contact Us</h1>
        <p className="text-xl">Have any questions or need assistance? Reach out to us!</p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 w-2/3">
        <h2 className="text-3xl font-bold mb-4">Email</h2>
        <p className="text-lg">
          If you have any inquiries, feel free to email us at{' '}
          <a href="mailto:shaurya8500@gmail.com" className="text-blue-500 underline">
            shaurya8500@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Contact;

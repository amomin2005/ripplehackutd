import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ChatbotWidget from '../components/ChatbotWidget';

const FinancialServices = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
          Financial Services
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Investment Planning Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold mb-4 text-blue-600">Investment Planning</h2>
            <p className="text-gray-600 mb-4">
              Get personalized investment strategies tailored to your goals and risk tolerance.
            </p>
            <Link
              to="/sample/investment"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Learn More
            </Link>
          </div>

          {/* Retirement Planning Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold mb-4 text-blue-600">Retirement Planning</h2>
            <p className="text-gray-600 mb-4">
              Plan for a secure retirement with our comprehensive retirement planning services.
            </p>
            <Link
              to="/sample/retirement"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Learn More
            </Link>
          </div>

          {/* Tax Planning Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold mb-4 text-blue-600">Tax Planning</h2>
            <p className="text-gray-600 mb-4">
              Optimize your tax strategy with expert guidance and planning services.
            </p>
            <Link
              to="/sample/tax"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <ChatbotWidget />
    </div>
  );
};

export default FinancialServices;